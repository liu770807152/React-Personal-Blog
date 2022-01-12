import React, { PureComponent } from 'react';
import Router from 'next/router';
import { Row, Col, Menu } from 'antd';
import {
  HomeOutlined,
  ProfileOutlined,
  SmileOutlined
} from '@ant-design/icons';
import styles from './header.module.scss';
import { getCatalogList } from '../../services/menu';

export default class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { catalogList: [] };
  }

  componentDidMount() {
    (async () => {
      const {
        data: { result }
      } = await getCatalogList();
      this.setState({
        catalogList: result
      });
    })();
  }

  handleClick = (e) => {
    if (e.key === '1') {
      Router.push({
        pathname: '/'
      });
    } else if (e.key === '2') {
      Router.push({
        pathname: '/article',
        query: { catalog: 'article' }
      });
    } else if (e.key === '3') {
      Router.push({
        pathname: '/video',
        query: { catalog: 'video' }
      });
    } else {
      Router.push({
        pathname: '/life'
      });
    }
  };

  render() {
    const { catalogList } = this.state;
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
            <Menu
              mode="horizontal"
              className={styles.menu}
              onClick={this.handleClick}
            >
              {catalogList.map((item) => (
                <Menu.Item key={item.id}>
                  {item.icon === 'HomeOutlined' ? (
                    <HomeOutlined style={{ fontSize: '1.2rem' }} />
                  ) : item.icon === 'ProfileOutlined' ? (
                    <ProfileOutlined style={{ fontSize: '1.2rem' }} />
                  ) : (
                    <SmileOutlined style={{ fontSize: '1.2rem' }} />
                  )}
                  <span className={styles['menu-item__text']}>{item.name}</span>
                </Menu.Item>
              ))}
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}
