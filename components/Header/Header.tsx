import Router from 'next/router';
import React, { useState, useEffect } from 'react'
import { Row, Col, Menu, Drawer, Spin, Input, Avatar, Badge, message, Dropdown, Tooltip, Popover } from 'antd';
import DynamicIcon from '@components/DynamicIcon/DynamicIcon';
import fetcher from '@utils/fetcher';
import { throttle, loadScript, loadStyles, removeStyles } from '@utils/utils'
import headerData from '@utils/headerData';
import localStorage from 'store';
import moment from 'moment'
import styles from './header.module.scss';

const { Search } = Input;
// TODO: generate CSS style from Dark Reader
const darkStylePath = '';

interface locationObj {
  lat: number | null,
  log: number | null
}

const Header: React.FC = (props) => {
  const [theme, setTheme] = useState(0);
  const [location, setLocation] = useState<locationObj>({
    lat: null,
    log: null
  });

  const handleNavClick = (key: string) => {
    Router.push('/list/[type]', `/list/${key}`)
  }

  const handleSearchEnter = (val: string) => {
    Router.push('/search/[...search]', `/search/article/${val}`)
  }

  // const logout = () => {
  //   props.userInfoChange(null);
  //   localStorage.setItem("userInfo", null);
  //   message.success('退出成功！')
  //   Router.replace('/')
  // }

  // useEffect(() => {
  //   if (~~localStorage.get('themeType')) {
  //     setTheme(~~localStorage.get('themeType'))
  //   } else {
  //     setTheme(1)
  //   }
  //   // 判断localStorage是否有用户信息 有 存入redux
  //   if (localStorage.get('userInfo') && localStorage.get('userInfo').token) {
  //     // 存入react-redux
  //     localStorage.userInfoChange(localStorage.get('userInfo'))
  //   }
  // });

  useEffect(() => {
    switch (theme) {
      case 1:
        const darkScheme = matchMedia('(prefers-color-scheme: dark)');
        if (darkScheme.matches) {
          loadStyles(darkStylePath)
        } else {
          removeStyles(darkStylePath)
        }
        break;
      case 2:
        removeStyles(darkStylePath)
        break;
      case 3:
        loadStyles(darkStylePath)
        break;
    }
  }, [theme]);

  const weatherContent = () => {
    if (location.lat && location.log)
      return (
        <div id="weather-content">
          <div className="info1">
            <div className="left">
              <div className="temp">
                {/* {temp} */}
                <span style={{ fontSize: 16, fontWeight: 300, color: '#999' }}>℃</span>
              </div>
              <div className="address">
                {/* {city} */}
                <div className="temp-text">
                  {/* {tempMin} */}
                  <span style={{ fontSize: 12, fontWeight: 300, color: '#999', marginTop: 2 }}>℃</span>
                  <span style={{ margin: '0 5px' }}>-</span>
                  {/* {tempMax} */}
                  <span style={{ fontSize: 12, fontWeight: 300, color: '#999', marginTop: 2 }}>℃</span>
                </div>

              </div>
              {/* <p className="trend">{summary}</p> */}
            </div>
            <div className="right">
              <img src={`icon`} />
            </div>
          </div>

          <div className="info2">
            <div className="option">
              <div className="item">
                <p className="tit">日出日落</p>
                <p className="con">
                  {/* {moment(sunrise).format('HH:mm')} - */}
                  {/* {moment(sunset).format('HH:mm')} */}
                </p>
              </div>
              <div className="item">
                <p className="tit">湿度</p>
                {/* <p className="con">{humidity}%</p> */}
              </div>
            </div>
            <div className="option">
              <div className="item">
                <p className="tit">风速</p>
                {/* <p className="con">{windDir} {weatherInfo.now.windScale}级</p> */}
              </div>
              <div className="item">
                <p className="tit">气压</p>
                {/* <p className="con">{pressure}hpa</p> */}
              </div>
            </div>
          </div>
          <iframe width="400" height="150" src={`https://embed.windy.com/embed2.html?lat=${location.lat}&lon=${location.log}&detailLat=34.069&detailLon=-118.323&width=380&height=200&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`} frameBorder="0"></iframe>
        </div >
      )
    else
      return <Spin tip="Getting location..." />
  };

  return (
    <div className={styles.header}>
      <Row justify="space-between">
        <Col xs={21} sm={21} md={22} lg={6} xl={6} className="flex justify-center md:justify-end">
          <div className={styles.header__title}>
            <span className={styles.header__logo}>Chris Blog</span>
            <span className={styles.header__text}>Never settle.</span>
          </div>
        </Col>
        <Col xs={3} sm={3} md={2} lg={4} xl={4}/>
        <Col xs={0} sm={0} md={0} lg={14} xl={14} className="flex justify-center">
          <Menu mode="horizontal" className={styles.menu} onClick={handleClick}>
            {headerData.map((item) => (
              <Menu.Item key={item.id}>
                <div className="flex items-center">
                  <DynamicIcon type={item.name} fontSize={'1.5rem'} />
                  <span className={styles['menu-item__text']}>{item.name}</span>
                </div>
              </Menu.Item>
            ))}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
