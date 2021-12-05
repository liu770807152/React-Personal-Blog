import React from 'react';
import { Col, Row, Breadcrumb } from 'antd';
import {
	CalendarOutlined,
	FolderOpenOutlined,
	FireOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import classNames from 'classnames';
import Author from '../Author/Author';
import Ad from '../Ad/Ad';
import styles from './detailBody.module.css';

const DetailBody = () => (
	<Row className='comm__main' type='flex' justify='center'>
		<Col className='comm__left' xs={24} sm={24} md={16} lg={18} xl={14}>
			<div>
				<div className={styles.bread__container}>
					<Breadcrumb>
						<Breadcrumb.Item>
							<Link href='/'>Home</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>
							<Link href='/list'>Video Tutorial</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>Current</Breadcrumb.Item>
					</Breadcrumb>
				</div>
				<div className={styles.detail__wrapper}>
					<div className={styles.detail__title}>React Tutorial</div>
					<div
						className={classNames({
							[styles.list__icon]: true,
							[styles.center]: true,
						})}
					>
						<span>
							<CalendarOutlined />
							1970-01-01
						</span>
						<span>
							<FolderOpenOutlined />
							Video Tutorial
						</span>
						<span>
							<FireOutlined />
							999
						</span>
					</div>
					<div className={styles.detail__content}>To be continued.</div>
				</div>
			</div>
		</Col>
		<Col className='comm__right' xs={0} sm={0} md={7} lg={5} xl={4}>
			<Author />
			<Ad />
		</Col>
	</Row>
);

export default DetailBody;
