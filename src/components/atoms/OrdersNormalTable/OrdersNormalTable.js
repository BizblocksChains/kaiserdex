import React, { Component } from 'react';
import styles from './OrdersNormalTable.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Row = ({price, volume, flicker, orderType}) => {

  const digits = volume && (10 - Math.floor(Math.log10(volume)));

  return (
    <div className={ orderType == 'buy' ? cx('row-buy', { flicker }) : cx('row-sell', { flicker }) }>
      <div className={cx('value')}>
      {orderType == 'buy' ? volume && volume.toFixed(digits >= 10 ? 10 : digits) : ''}
      </div>
      <div className={cx('value')}>{price}</div>
      <div className={cx('value')}>
      {orderType == 'sell' ? volume && volume.toFixed(digits >= 10 ? 10 : digits) : ''}
      </div>
    </div>
  )
}

class AnimatedRow extends Component {
  timeoutId = null

  state = {
    flicker: true
  }

  componentWillUnmount() {
    if(this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
  
  flicker = () => {
    this.setState({
      flicker: true
    });
    this.timeoutId = setTimeout(() => {
      this.timeoutId = null;
      this.setState({
        flicker: false
      });
    }, 500)
  }
  

  componentDidMount() {
    this.flicker();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.volume !== this.props.volume) {
      this.flicker();
    }
  }
  
  
  render() {
    const { flicker } = this.state;
    return <Row {...this.props} flicker={flicker} />
  }
}



const OrdersNormalTable = ({orderType, type, currency, data}) => {

  const rows = data && data.map(
    order => {
      const [price, volume] = order.toJS();
      return <AnimatedRow key={price} price={price} volume={volume} orderType={orderType} />
    }
  );

  const emptyRows = new Array(10).fill(0).map(
    (_, i) => <Row key={i}/>
  )

  return (
    <div className={cx('orders-table')}>
      {/* <div className={cx('title')}>
        {type}주문
      </div> */}
      <div className={cx('table-head')}>
        <div className={cx('col-desc')}>
          {type}량 ({currency})
        </div>
        <div className={cx('col-desc')}>
          가격 ({currency === 'BTC' ? 'USD' : 'BTC'})
        </div>
        <div className={cx('col-desc')}>
          {type}량 ({currency})
        </div>
      </div>
      {(!data || data.isEmpty()) ? emptyRows : rows}
    </div>
  );
};

export default OrdersNormalTable;