import React, { useState } from 'react';
import { Col, Row, List, Breadcrumb } from 'antd';
import {
	CalendarOutlined,
	FolderOpenOutlined,
	FireOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import Author from '../Author/Author';
import Ad from '../Ad/Ad';
import Footer from '../Footer/Footer';
import styles from './listBody.module.css';

const Body = () => {
	const [myList, setMylist] = useState([
		{
			title: 'title1',
			context:
				'contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext',
		},
		{
			title: 'title2',
			context:
				'contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext',
		},
		{
			title: 'title3',
			context:
				'contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext',
		},
		{
			title: 'title4',
			context:
				'contextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontextcontext',
		},
	]);

	return (
		<>
			<Row className='comm__main' type='flex' justify='center'>
				<Col className='comm__left' xs={24} sm={24} md={16} lg={18} xl={14}>
					<div className={styles.bread__container}>
						<Breadcrumb>
							<Breadcrumb.Item>
								<Link href='/'>Home</Link>
							</Breadcrumb.Item>
							<Breadcrumb.Item>Video Tutorial</Breadcrumb.Item>
						</Breadcrumb>
					</div>
					<List
						header={<div className={styles.list__title}>Latest Blog</div>}
						itemLayout='vertical'
						dataSource={myList}
						renderItem={(item) => (
							<List.Item>
								<div className={styles.list__title}>{item.title}</div>
								<div className={styles.list__icon}>
									<span>
										<CalendarOutlined />
										1970-01-01
									</span>
									<span>
										<FolderOpenOutlined />
										Video
									</span>
									<span>
										<FireOutlined />
										1564
									</span>
								</div>
								<div className={styles.list__context}>{item.context}</div>
							</List.Item>
						)}
					/>
				</Col>
				<Col className='comm__right' xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					<Ad />
				</Col>
			</Row>
			<Footer />
		</>
	);
};

export default Body;
