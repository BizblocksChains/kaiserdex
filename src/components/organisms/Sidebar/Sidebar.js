import React from 'react';
import styles from './Sidebar.scss';
import classNames from 'classnames/bind';
import { SidebarWrapper, Button } from 'components';
import { Link } from 'react-router-dom';
import validator from 'validator';

const cx = classNames.bind(styles);

const MenuItem = ({ to, children, onClick}) => {
  return (
    validator.isURL(to) ?
    <a onClick={onClick} className={cx('menu-item')} href={to}>{children}</a>
    :
    <Link onClick={onClick} className={cx('menu-item')} to={to}>{children}</Link>
  )
}

const Sidebar = ({
  visible,
  user,
  onLoginClick,
  onClose,
  onLogout
}) => (
  <SidebarWrapper visible={visible}>
    <div className={cx('upper-block')}>
      {
        user ? [
          <div className={cx('message')} key={0}>
            <b>{user.get('displayName')}</b>님,<br/> 안녕하세요!
          </div>,
          <Button key={1} className={cx('sign-button')} invert onClick={onLogout}>로그아웃</Button>
        ]
        : [
          <div className={cx('message')} key={0}>
            모의 거래를 지금 시작해보세요!
          </div>,
          <Button className={cx('sign-button')} invert onClick={onLoginClick} key={1}>
            로그인 / 회원가입
          </Button>
        ]
      }
    </div>
    <div className={cx('menu')}>
      <MenuItem to="http://dex.bizblocks.io" onClick={onClose}>
        홈
      </MenuItem>
      <MenuItem to="/trade" onClick={onClose}>모의거래</MenuItem>
      { user && <MenuItem to="/wallet" onClick={onClose}>내 자산</MenuItem>}
      <MenuItem to="/ranking" onClick={onClose}>랭킹</MenuItem>
    </div>
  </SidebarWrapper>
);

export default Sidebar;