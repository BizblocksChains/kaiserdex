import React from 'react';
import styles from './ChooseView.scss';
import classNames from 'classnames/bind';
import ThLargeIcon from 'react-icons/lib/fa/th-large';
import ThListIcon from 'react-icons/lib/fa/th-list';

const cx = classNames.bind(styles);

const ChooseView = ({large, onToggle}) => {
  return (
    <div className={cx('choose-view')} onClick={onToggle}>
      {large ? <ThListIcon/> : <ThLargeIcon/>}
    </div>
  );
};

export default ChooseView;