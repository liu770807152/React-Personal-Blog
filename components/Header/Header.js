import React from 'react';
import { Row, Col, Menu } from 'antd';
import {
	HomeOutlined,
	YoutubeOutlined,
	SmileOutlined,
} from '@ant-design/icons';
import styles from './header.module.css';

const Header = () => (
	<div className={styles.header}>
		<Row type='flex' justify='center'>
			<Col xs={24} sm={24} md={10} lg={16} xl={12}>
				<div className={styles.header__title}>
					<span className={styles.header__logo}>Chris Blog</span>
					<span className={styles.header__text}>Never settle.</span>
				</div>
			</Col>
			<Col xs={0} sm={0} md={14} lg={8} xl={6}>
				<Menu mode='horizontal' className={styles.menu}>
					<Menu.Item key='home'>
						<HomeOutlined style={{ fontSize: '1.2rem' }} />
						<span className={styles['menu-item__text']}>HOME</span>
					</Menu.Item>
					<Menu.Item key='video'>
						<YoutubeOutlined style={{ fontSize: '1.2rem' }} />
						<span className={styles['menu-item__text']}>VIDEO</span>
					</Menu.Item>
					<Menu.Item key='life'>
						<SmileOutlined style={{ fontSize: '1.2rem' }} />
						<span className={styles['menu-item__text']}>LIFE</span>
					</Menu.Item>
				</Menu>
			</Col>
		</Row>
	</div>
);

export default Header;
