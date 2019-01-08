import React from 'react';
import styles from './OrderBook.scss';
import classNames from 'classnames/bind';
import { Card, OrdersNormalTable, Label } from 'components';

const cx = classNames.bind(styles);

const OrderBook = ({currencyType, orderBook}) => {
  return (
    <div className={cx('order-book')}>

      <div className={cx('column')}>
        <div className={cx('head')}>
          <div className={cx('title')}>일반호가</div>
        </div>
        <Card>
          <OrdersNormalTable
            orderType="sell"
            type="매도" 
            currency={currencyType}
            data={orderBook.get('sell')}/>

          <OrdersNormalTable
            orderType="buy" 
            type="매수" 
            currency={currencyType}
            data={orderBook.get('buy')}/>
        </Card>
      </div>

      {/* <div className={cx('column')}>
        <Card>
          
        </Card>
      </div> */}
      
    </div>
  );
};

export default OrderBook;