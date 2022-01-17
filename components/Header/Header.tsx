import React from 'react';
import Router from 'next/router';
import { Row, Col, Menu } from 'antd';
import DynamicIcon from '../DynamicIcon/DynamicIcon';
import styles from './header.module.scss';
import useSWR from 'swr';
import { ICatalogList, ICatalogBase } from '../../interfaces/catalog';

export interface HeaderProps {
  data: ICatalogList;
}

const Header: React.FC<HeaderProps> = () => {
  const { data, error } = useSWR('/api/catalogList');

  const handleClick = (e) => {
    if (e.key === '1') {
      Router.push({
        pathname: '/'
      });
    } else if (e.key === '2') {
      Router.push({
        pathname: '/article'
      });
    } else {
      Router.push({
        pathname: '/contact'
      });
    }
  };

  if (error) return <h1>An error has occurred.</h1>;
  if (!data) return <h1>Loading...</h1>;
  return (
    <div className={styles.header}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={16} xl={12}>
          <div className={styles.header__title}>
            <span className={styles.header__logo}>Chris Blog</span>
            <span className={styles.header__text}>Never settle.</span>
          </div>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" className={styles.menu} onClick={handleClick}>
            {data.map((item: ICatalogBase) => (
              <Menu.Item key={item.id}>
                <div className="flex items-center">
                  <DynamicIcon type={item.icon} style="text-lg" />
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
