import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import { FlexBox, NavItem } from 'components';

const cx = classNames.bind(styles);

const HeaderNav = ({logged}) => {
  return (
    <FlexBox row
      className={cx('header-nav')}>
      <NavItem to="http://dex.bizblocks.io">
        홈
      </NavItem>
      <NavItem to="/trade">
        모의거래
      </NavItem>
      {logged && <NavItem to="/wallet">
        내 자산
      </NavItem> }
      <NavItem to="/ranking">
        랭킹
      </NavItem>
    </FlexBox>
  );
};

export default HeaderNav;