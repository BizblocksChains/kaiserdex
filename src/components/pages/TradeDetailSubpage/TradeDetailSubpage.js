import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import styles from './TradeDetailSubpage.scss';
import classNames from 'classnames/bind';
import { TradeChartContainer, OrderBookContainer, TradeSectionContainer, TradeHistoryContainer } from 'containers';
import { Helmet } from 'react-helmet';
import { ResponsiveAd } from 'components';

const cx = classNames.bind(styles);

class TradeDetailSubpage extends Component { 
  scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  }
  componentDidMount() {
    this.scrollToTop();
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.currencyKey !== this.props.match.params.currencyKey) {
      this.scrollToTop();
    }
  }
  
  
  render() {
    const { currencyKey } = this.props.match.params;

    return (
      <div>
        <div>
          <Helmet>
            <title>{`[${currencyKey}] 거래소 :: kaiser-dex`}</title>
            <meta name="description" content={`${currencyKey} 시세 확인 및 거래하기`}/>
          </Helmet>
        </div>

        {/* <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
        data-grid={{x: 0, y: 0, w: 0, h: 0, minW: 0, maxW: 0, static: true}}
        style={gridColorClass}
        <div key="preview" 
        data-grid={{x: 0, y: 0, w: 12, h: 18, minW: 12, maxW: 18}}
        >
          
        </div>
        <div key="chart"
        data-grid={{x: 0, y: 18, w: 12, h: 9, minW: 12, maxW: 9}}
        >
          
        </div>

        </GridLayout> */}
        <div className={cx('trade-detail-subpage')}>
          <TradeChartContainer currencyKey={currencyKey}/>
          <div className={cx('section')}>
            <OrderBookContainer/> 
            <div className={cx('section-trade')}>
              <TradeSectionContainer currencyKey={currencyKey}/>
              <TradeHistoryContainer/>
            </div>
          </div>   
          <div className="ad-area">
            <ResponsiveAd/>
          </div>
        </div>
        
      </div>
    );
  }
}


export default TradeDetailSubpage;