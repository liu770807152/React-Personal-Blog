import React from 'react';
import { Col, Row } from 'antd';
import styles from './body.module.css';

const Body = () => (
	<Row className={styles.comm__main} type='flex' justify='center'>
		<Col className={styles.comm__left} xs={24} sm={24} md={16} lg={18} xl={14}>
			LEFT
		</Col>
		<Col className={styles.comm__right} xs={0} sm={0} md={7} lg={5} xl={4}>
			RIGHT
		</Col>
	</Row>
);

export default Body;
