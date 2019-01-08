import React from 'react';
import styles from './TradeIndexOptions.scss';
import classNames from 'classnames/bind';
import PinIcon from 'react-icons/lib/ti/pin';

import { Selector, SortReverser, ChooseView, Option, Button } from 'components';

const marketsOptions = [
  {
    name: 'bitcoin',
    text: 'BTC'
  },
];

const sorterOptions = [
  {
    name: 'alphabet',
    text: '알파벳순'
  },
  {
    name: 'percentage',
    text: '변화율순'
  },
  {
    name: 'price',
    text: '가치순'
  },
  {
    name: 'volume',
    text: '볼륨순'
  }
]

const cx = classNames.bind(styles);

const TradeIndexOptions = ({
  selectCoin,
  sortBy,
  asc,
  large,
  showPinned,
  onToggleAsc,
  onToggleLarge,
  onSelectCoin,
  onSelectSort,
  onAutoPin,
  onToggleShowPinned
}) => {
  return (
    <div className={cx('options')}>
      <div className={cx('left')}>
      <div className={cx('selectorMarket')}></div>
        <div className={cx('show-pinned')}>
          <Option onClick={onToggleShowPinned} active={showPinned}>
            핀만 보기
          </Option>
        </div>
        <div className={cx('auto-pin')}>
        <Button flat onClick={onAutoPin} theme="outline">보유 화폐 자동핀</Button>
        </div>
      </div>
      <div className={cx('right')}>
        <div className={cx('selector')}><Selector onSelect={onSelectSort} value={sortBy} options={sorterOptions}/></div>
        <div className={cx('reverser')}><SortReverser asc={asc} onToggle={onToggleAsc}/></div>
        <div className={cx('choose')}><ChooseView large={large} onToggle={onToggleLarge}/></div>
      </div>
    </div>
  );
};

export default TradeIndexOptions;