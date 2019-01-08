import React from 'react';
import styles from './TradeBox.scss';
import classNames from 'classnames/bind';
import { Card, HorizontalLabelInput, Button, TextButton } from 'components';
import { limitDigit } from 'lib/utils';


const cx = classNames.bind(styles);

const TradeBox = ({
  title, 
  hasAmount, 
  currencyType, 
  price, 
  amount,
  sell,
  onChange,
  onRefreshPrice,
  onCreateOrder,
  disabled,
  logged
}) => {

  const actionText = sell ? '매도' : '매수';
  const secondaryCurrency = currencyType === 'BTC' ? 'USD' : 'BTC';
  
  const onCalculate100 = () => {
    onChange({
      target: {
        name: 'amount',
        value: sell ? 
        hasAmount * 1.0
        : 
        parseFloat(hasAmount * 1.0) / parseFloat(price) / 1.0015
      }
    });
  }

  const onCalculate50 = () => {
    onChange({
      target: {
        name: 'amount',
        value: sell ? 
        hasAmount * 0.50
        : 
        parseFloat(hasAmount * 0.50) / parseFloat(price) / 1.0015
      }
    });
  }

  const onCalculate25 = () => {
    onChange({
      target: {
        name: 'amount',
        value: sell ? 
        hasAmount * 0.25
        : 
        parseFloat(hasAmount * 0.25) / parseFloat(price) / 1.0015
      }
    });
  }

  const onCalculate10 = () => {
    onChange({
      target: {
        name: 'amount',
        value: sell ? 
        hasAmount * 0.10
        : 
        parseFloat(hasAmount * 0.10) / parseFloat(price) / 1.0015
      }
    });
  }

  const onCalculate0 = () => {
    onChange({
      target: {
        name: 'amount',
        value: 0
      }
    });
  }

  const inputSetting = {
    type: 'number',
    min: '0',
    inputMode: 'numeric',
  };

  return (
    <Card className={cx('trade-box')}>
      <div className={cx('head')}>
        <div className={cx('title')}>{currencyType} {actionText}</div>
        <div className={cx('has-amount')}><span className={cx('desc')}>보유량:</span> {limitDigit(hasAmount, 8)} <span className={cx('currency')}>{ sell ? currencyType : secondaryCurrency }</span></div>
      </div>
      <div className={cx('content')}>
        <div className={cx('text-buttons')}>
          <div className={cx('text-button')} onClick={() => onRefreshPrice(sell ? 'sell' : 'buy')}>시장가 가져오기</div>
        </div>
        <HorizontalLabelInput 
          {...inputSetting} 
          label={actionText + '가격'}
          currency={secondaryCurrency} 
          value={price} 
          onChange={onChange}
          name="price"
        />
        <HorizontalLabelInput 
          {...inputSetting} 
          label={actionText + '량'} 
          currency={currencyType} 
          value={amount} 
          onChange={onChange}
          name="amount"
        />
        <div className={cx('calc-buttons')}>
          {/* <div className={cx('calc-button')} onClick={onCalculate}>최고 {actionText}량 계산</div> */}
          <div className={cx('calc-button')} onClick={onCalculate0}>초기화</div>
          <div className={cx('calc-button')} onClick={onCalculate10}>10%</div>
          <div className={cx('calc-button')} onClick={onCalculate25}>25%</div>
          <div className={cx('calc-button')} onClick={onCalculate50}>50%</div>
          <div className={cx('calc-button')} onClick={onCalculate100}>100%</div>
        </div>
      </div>
      <div className={cx('user-area')}>
        {!logged && <div className={cx('dark-layer')}>
          로그인 후 이용하실 수 있습니다.
        </div>}
        <div className={cx('content', 'bright')}>
          <div className={cx('text')}>총 {actionText} 가격</div>
          <div className={cx('total')}>
            <div>
            {
              limitDigit(
                sell ? 
                parseFloat(price) * parseFloat(amount) * 0.9985 
                : 
                parseFloat(price) * parseFloat(amount) * 1.0015
              )
            }
            <span className={cx('base')}>{secondaryCurrency}</span>
            </div>
            <div className={cx('fee')}>
              <b>수수료</b> <span className={cx('value')}>{limitDigit(parseFloat(price) * parseFloat(amount) * 0.0015)} {currencyType === 'BTC' ? 'USD' : 'BTC'}</span>
            </div>
          </div>
        </div>
        <div className={cx('content', 'bright', 'bottom')}>
          <Button flat color="teal" flex onClick={onCreateOrder} disabled={disabled}>{actionText}</Button>
        </div>
      </div>
    </Card>
  );
};

TradeBox.defaultProps = {
  title: '타이틀',
  hasAmount: 100,
  base: 'BTC',
  currencyType: 'ETH',
  price: 100,
  amount: 100
}

export default TradeBox;