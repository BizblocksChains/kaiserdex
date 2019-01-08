import React from 'react';
import { PageTemplate, PolyBackground, BgColor, CoinMain, Card } from 'components';
import { HeaderContainer, CoinMainContainer, SocketSubscriber, MsgboxContainer } from 'containers';
import styles from './HomePage.scss';
import classNames from 'classnames/bind';
import IntroQuestionContainer from 'containers/IntroQuestionContainer';
import MoreIcon from 'react-icons/lib/md/more-vert';
import { Link } from 'react-router-dom';
import TrophyIcon from 'react-icons/lib/fa/trophy';
import GithubIcon from 'react-icons/lib/go/mark-github';
import EmailIcon from 'react-icons/lib/md/email';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);


const HomePage = () => {
  return (
    <PageTemplate header={<HeaderContainer solid/>}> 
      <Helmet>
        <title>kaiser-dex - 가상화폐 모의 거래소</title>
        <meta name="keywords" content="가상화폐, 암호화폐, 모의, 거래, 거래소, 비트코인, 이더리움, BTC, ETH"/>
        <meta name="description" content="가상화폐 / 암호화폐 모의 거래소 kaiser-dex, 
        과연 당신은 가상화폐 시장에서 수익을 낼 수 있을까요? 모의거래를 통해 알아보세요."/>
      </Helmet>
      
      <SocketSubscriber channel="TICKER"/>
      
      <PolyBackground home>
        <IntroQuestionContainer/>
      </PolyBackground>

      <BgColor color="#f6f6f6"/>

      {/* 거래소에서 더 보기 */}

      <div className={cx('block', 'responsive')}>
        <h2>Bitcoin Market List</h2>
        <CoinMainContainer/>
        <div className={cx('more')}>
          <Link className={cx('more-button')} to="/trade">
            더 보기            
          </Link>
        </div>
      </div>

      <div className={cx('third')}>

        {/* <div className={cx('responsive', 'grid')}>
          <Link to="/ranking" className={cx('column')}>
            <TrophyIcon/>
            <div className={cx('description')}>
              <h3>랭킹 시스템</h3>
              <p>수익률을 다른 사람들과 경쟁해보세요. <br/>그리고, 다른사람들의 거래 전략을 확인해보세요!</p>
            </div>
          </Link>
          <a className={cx('column')} href="https://github.com/bizblocks/kaiser-dex" target="_blank" rel="noopener noreferrer">
          <div className={cx('column')}>
            <GithubIcon/>
            <div className={cx('description')}>
              <h3>오픈소스</h3>
              <p>오픈소스 프로젝트 기반으로 만들어졌습니다. <br/>Pull Request는 언제나 환영입니다.</p>
            </div>
          </div>
          </a>
        </div>
        <div className={cx('my-message', 'responsive')}>
          <div>
          상금은 페이지 내의 광고비를 통해 충당됩니다.<br/>
          여러분들이 이 서비스를 더 자주 사용해주시면, 상금이 더 높아집니다.
          </div>
        </div> */}

      </div>
      
      <div className={cx('footer')}>
        {/* <div className={cx('email')}>
          <EmailIcon/> support@bizblocks.io
        </div>
        <div className={cx('copyright')}>
          Copyright © 2018 bizblocks.io
        </div>
        <div className={cx('copyright')}>
        <Link to="/terms">개인정보취급방침</Link>
        </div> */}

          {/* <!-- 사이트맵 --> */}

          {/* <ul class="sitemap">

              <li class="hasSub"><a href="#none">회사소개</a>
                  <a href="https://bizblocks.io/introduce">회사소개</a>
                  <a href="https://bizblocks.io/history">연혁</a>
                  <a href="https://bizblocks.io/location">위치</a>
              </li>

              <li><a href="https://bizblocks.io/project">사업소개</a></li>
              <li><a href="https://bizblocks.io/partner">Business</a></li>
              <li><a href="https://bizblocks.io/buy">Buy</a></li>
              <li><a href="http://media.bizblocks.io/" target="_blank">PR</a></li>
              <li><a href="/bbs">공지사항</a></li>
              <li><a href="https://bizblocks.io/support">고객센터</a></li>

          </ul> */}

          {/* <!-- 하단 정보 --> */}

          <div className={cx('footer-bottom')}>

            <p className={cx('address')}>
            ADDRESS : Focustown Building 6F, Daehak-ro 86, Yuseong-gu, Daejeon, Republic of Korea<br/>
            BUSINESS REGISTRATION NO. : 658-87-01060 TEL : +82-42-825-1370 FAX : +82-42-825-1570
            </p>

            <p className={cx('copyright')}>
            Copyright ⓒ 2018 Bizblocks All Rights reserved
            </p>

          </div>

      </div>
    </PageTemplate>
  );
};

export default HomePage;