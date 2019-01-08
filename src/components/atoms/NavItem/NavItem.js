import React from 'react';
import styles from './NavItem.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
// import isExternal from 'is-url-external';
import validator from 'validator';

const cx = classNames.bind(styles);

const NavItem = ({children, to}) => {
  if(to) {
    return (
      validator.isURL(to) ?
      <a className={cx('nav-item')} activeStyle={{ opacity: 1, fontWeight: '700', color: 'orange'}} href={to}>{children}</a>
      :
      <NavLink className={cx('nav-item')} activeStyle={{ opacity: 1, fontWeight: '700', color: 'orange'}} to={to}>{children}</NavLink>
    )
  }
  return (
    <div className={cx('nav-item')}>
      {children}
    </div>
  );
};

export default NavItem;