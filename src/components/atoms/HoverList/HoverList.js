import React from 'react';
import styles from './HoverList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HoverList = ({className, ...rest}) => {
  return (
    <div className={cx('hover-list', className)} {...rest}>
      
    </div>
  );
};

export default HoverList;