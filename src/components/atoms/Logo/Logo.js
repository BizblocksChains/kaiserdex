import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import kaiserLogo from 'static/images/logo.png';

const cx = classNames.bind(styles);

const Logo = () => {
  return (
    <Link to="/" className={cx('logo')}>
      {/* kaiser-dex */}
      <img src={kaiserLogo} alt="kaiser logo" /> 
    </Link>
  );
};

export default Logo;