import React from 'react';
import styles from './TradeHistory.scss';
import classNames from 'classnames/bind';
import { Card, TradeHistoryTable } from 'components';

const cx = classNames.bind(styles);

const TradeHistory = ({historyData, privateOrders, onCancelOrder, onScroll, hasNext, onSync}) => {
  return (
    <div className={cx('trade-history')}>
      <div className={cx('column')}>
        <Card noPadding>
          <TradeHistoryTable 
            data={privateOrders} 
            personal 
            onCancelOrder={onCancelOrder} 
            onScroll={onScroll} 
            hasNext={hasNext} 
            showTooltip 
            onSync={onSync}/>
          <TradeHistoryTable 
          data={historyData} 
          onSync={onSync} />
        </Card>
      </div>
      {/* <div className={cx('column')}>
        <Card noPadding>
          <TradeHistoryTable 
          data={privateOrders} 
          personal 
          onCancelOrder={onCancelOrder} 
          onScroll={onScroll} 
          hasNext={hasNext} 
          showTooltip 
          onSync={onSync}/>
        </Card>
      </div> */}
    </div>
  );
};

export default TradeHistory;