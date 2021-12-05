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
				<span className={styles.header__logo}>Chris Blog</span>
				<span className={styles.header__text}>Never settle.</span>
			</Col>
			<Col xs={0} sm={0} md={14} lg={8} xl={6}>
				<Menu mode='horizontal'>
					<Menu.Item key='home'>
						<HomeOutlined />
						<span className={styles['menu-item__text']}>HOME</span>
					</Menu.Item>
					<Menu.Item key='video'>
						<YoutubeOutlined />
						<span className={styles['menu-item__text']}>VIDEO</span>
					</Menu.Item>
					<Menu.Item key='life'>
						<SmileOutlined />
						<span className={styles['menu-item__text']}>LIFE</span>
					</Menu.Item>
				</Menu>
			</Col>
		</Row>
	</div>
);

export default Header;
