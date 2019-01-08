import React, { Component } from 'react';
import styles from './BitcoinInfoList.scss';
import classNames from 'classnames/bind';
import { HoverList } from 'components';
import PinIcon from 'react-icons/lib/ti/pin';
import { getCurrency } from 'lib/utils';
import scuize from 'lib/hoc/scuize';
import { withRouter } from 'react-router'
import { scrollTo } from 'lib/utils';


const cx = classNames.bind(styles);

class BitcoinInfoList extends Component {

  state = {
    highlight: false,
    greater: true
  }

  timeoutId = null;

  handleOpenCurrency = () => {
    const { history, currencyKey } = this.props;
    history.push(`/trade/BTC`);
    scrollTo(0);
  }

  componentWillUnmount() {
    if(this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.info !== nextProps.info
  }

  highlight = (greater) => {
    this.setState({
      highlight: true,
      greater
    });

    this.timeoutId = setTimeout(() => {
      this.setState({
        highlight: false
      });
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.last !== this.props.last) {
      this.highlight(this.props.last > prevProps.last);
    }
  }  

  render() {
    const {
      currencyKey="ETH", 
      last=4.7e-7, 
      volume="125543", 
      percentage="0.01", 
      currencyName="Ethereum", 
      onTogglePin, 
      pinned,
      krwRate
    } = this.props;
    const { highlight, greater } = this.state;
    const { handleOpenCurrency } = this;

    if(!currencyName) return null;
    if(currencyKey === 'BTC') return null;
    
      const parsedPercentage = Math.round(parseFloat(percentage) * 10000) / 100;
      const value = last.toFixed(2);

      return (
        <div className={cx('wrapper')}>
          <HoverList className={cx('bitcoin-info-list', highlight && (greater ? 'green' : 'red'))} 
          onClick={handleOpenCurrency}>
            <div className={cx('left-items')}>
              <span className={cx('bitcoin')}> 1 BTC </span>
              <span className={cx('percentage', { positive: parsedPercentage > 0, netural: parsedPercentage === 0 })}>({parsedPercentage}%)</span>
            </div>
            <div className={cx('right-items')}>
              <span className={cx('usd')}> ${parseFloat(value).toLocaleString()} </span>
              <span className={cx('krw')}> ({krwRate ? '₩' + (Math.round(value*krwRate)).toLocaleString() : '계산중..'}) </span>
              <span className={cx('name')}>bitcoin</span>
            </div>
          </HoverList>
        </div>
      );

  }
}

export default withRouter(BitcoinInfoList);