import React from 'react';
import styles from './TradeSection.scss';
import classNames from 'classnames/bind';
import { TradeBox } from 'components';
import { Tabs, TabLink, TabContent } from "react-tabs-redux";


const cx = classNames.bind(styles);

const TradeSection = ({
  currencyType,
  buy,
  sell,
  logged,
  onChangeInput,
  onRefreshPrice,
  onCreateOrder,
  wallet,
  disableButton
}) => {

  const onChangeFor = (type) => (e) => {
    const { name, value } = e.target;
    onChangeInput(type, name, value);
  }

  const base = currencyType === 'BTC' ? 'USD' : 'BTC';
  const currencyPair = currencyType === 'BTC' ? 'USDT_BTC' : `BTC_${currencyType}`;

  const has = {
    from: wallet.get(base) || 0,
    to: wallet.get(currencyType) || 0
  };

  return (
    <div className={cx('trade-section')}>   
        
      <Tabs
        name="tabs"
        className={cx('tabs')}
        // handleSelect={this.props.changeSelectedTab}
        // selectedTab={this.props.tabs1}
      >

        <div className={cx('tab-links')}>
          <TabLink className={cx('tab-link')} to="tab-buy">매수</TabLink>
          <TabLink className={cx('tab-link')} to="tab-sell">매도</TabLink>
        </div>

        <div className={cx('content')}>

          <TabContent className={cx('tab-content')} for="tab-buy">
            <TradeBox currencyType={currencyType}
              {...buy.toJS()} 
              onChange={onChangeFor('buy')} 
              hasAmount={has.from} 
              onRefreshPrice={onRefreshPrice}
              onCreateOrder={() => {
                onCreateOrder({
                  currencyPair,
                  ...buy.toJS(),
                  sell: false
                });
              }}
              disabled={disableButton.get('buy')}
              logged={logged}
            /> 
          </TabContent>
          
          <TabContent className={cx('tab-content')} for="tab-sell">
            <TradeBox 
              currencyType={currencyType} 
              sell 
              {...sell.toJS()} 
              onChange={onChangeFor('sell')} 
              hasAmount={has.to} 
              onRefreshPrice={onRefreshPrice}
              onCreateOrder={() => {
                onCreateOrder({
                  currencyPair,
                  ...sell.toJS(),
                  sell: true
                });
              }}
              disabled={disableButton.get('sell')}
              logged={logged}
            />
          </TabContent>

        </div>

      </Tabs> 

    </div>
  );
};

export default TradeSection;