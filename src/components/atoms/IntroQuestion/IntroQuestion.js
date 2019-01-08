import React from 'react';
import styles from './IntroQuestion.scss';
import classNames from 'classnames/bind';
// import kaiserLogo from 'static/images/img_kaiser.png';
import tab1 from 'static/images/img_tab1.png';
import tab2 from 'static/images/img_tab2.png';
import tab3 from 'static/images/img_tab3.png';

const cx = classNames.bind(styles);

const IntroQuestion = ({onClick}) => (
  <div className={cx('question')}>
{/*
    <div className={cx('popup-notice')}>

      <div className={cx('popup-inner')}>

        <p className={cx('title')}>
          카이져 Dex 모의 투자 필독 사항
        </p>
        <p className={cx('text')}>
          <br />
          안녕하세요 하이브리드 탈중앙화 거래소 카이져 덱스 입니다.<br />
          <br />
          1.	모의 투자에 사용되는 BTC는 실제 BTC가 아닌 테스트 BTC 입니다.<br />
          2.	Beta 버전이므로 기존 거래소에서 사용하시던 대부분의 기능(입출금 포함)은 아직 사용 하실 수 없습니다.<br />
          3.	Beta 버전 회원가입은 모의 투자를 위한 계정 생일뿐 실제 계정(상용 버전 Dex) 생성이 아닙니다.<br />
          4.	모의 투자 상금은 초기 지급 되는 자본금은 2 BTC(테스트 BTC) 입니다.<br />
          5.	초기 2 BTC를 기준으로 가장 높은 수익율을 올린 분들께는 상금으로 KISC를 드립니다. 상금 지급 대상의 최소 거래 횟수는 50회 입니다. 자세한 내용은 안내문을 참고하세요.<br />
         // 6.	피추천인이 모의 투자에 참여 할 시(최소 1회 거래) 100KISC를 받을 수 있습니다.<br /> 
          6.	최종 모의 투자 마감일은 1월 28일 입니다.<br />
          7.	오류 및 버그를 찾아 스크린샷을 포함한 상세한 설명을 보내주세요. 중요도 및 내용에 따라 보상으로 10~1000 KISC를 드립니다.<br />
          8.  매일 00시 ~ 01시는 시스템 업데이트 및 서버점검 시간입니다. 이 시간에는 모든 거래가 불가능합니다.<br/>
        </p>

        <button id="intro-question-popup" className={cx('button')}>확인 완료</button>

      </div>

    </div>
*/}
    <div className={cx('titleWrap')}>
      {/* <h1>
        도전! 가상화폐 모의거래!<br/>
        <b>300 리플</b> 쏜다!
      </h1>
      <p>
        실제 거래소의 실시간 데이터에 기반하여 
        <br/>모의 거래를 해보세요!
        <br/><br/>매달 수익률 랭킹 1위에게 상금이 지급됩니다.
      </p> */}
      {/* <img src={kaiserLogo} alt="kaiser logo" /> 
      <p className={cx('title')}>DECENTRALIZED EXCHANGE</p>
      <p className={cx('text')}>
        Fast and Secure transaction matching<br />
        based on Aiser block-chain technology<br />
        &amp; Kaiser hardware security system
      </p>

      <div className={cx('button')} onClick={onClick}>
        Get Started
      </div>
      */}
      <div className={cx('top')}>
        <h2 className={cx('title')}>KAISER DEX</h2>
        <p className={cx('subText')}>The Best DEX for Users</p>
        <a href="/trade" className={cx('requestBtn')}>모의거래 하기</a>
      </div>
      <div className={cx('bottom')}>
        <div className={cx('tab')}>
          <div className={cx('left')}>
            <img src={tab1} alt="icon" />
          </div>
          <div className={cx('right')}>
            <p className={cx('title')}>Why</p>
            <p className={cx('text')}>
              Kaiser DEX는<br />
              거래 시스템을 제공하는 것 뿐만 아니라, 결제, 마켓, 기부 등 실제 서비스를 제공한다.
            </p>
          </div>
        </div>
        <div className={cx('tab')}>
          <div className={cx('left')}>
            <img src={tab2} alt="icon" />
          </div>
          <div className={cx('right')}>
            <p className={cx('title')}>The Faster</p>
            <p className={cx('text')}>
              Kaiser DEX는<br />
              하이브리드 아이져체인을 활용하여 빠른 거래 속도를 보장하는데, 아이져 체인은 기존 퍼블릭 체인의 문제점을 해결하기 위해 프라이빗 체인과 융합되어 디자인된 체인이다.
            </p>
          </div>
        </div>

        <div className={cx('tab')}>
          <div className={cx('left')}>
            <img src={tab3} alt="icon" />
          </div>
          <div className={cx('right')}>
            <p className={cx('title')}>The Safer</p>
            <p className={cx('text')}>
              Kaiser DEX는<br />
              해킹의 위험으로부터 안전하다. 하드웨어와 하드웨어 지갑간의 거래를 지원하는 P2P거래소이다. 하드웨어 월렛 기반의 플랫폼으로서 해킹의 위험에서 완벽히 탈피한 글로벌 최초의 하드웨어 기반 거래소이다.
            </p>
          </div>
        </div>

      </div>
    </div> 

  </div>

);

export default IntroQuestion;