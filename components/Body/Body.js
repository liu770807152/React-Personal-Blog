import React, { useState } from 'react';
import { Col, Row, List } from 'antd';
import {
	CalendarOutlined,
	FolderOpenOutlined,
	FireOutlined,
} from '@ant-design/icons';
import styles from './body.module.css';

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
		<Row className={styles.comm__main} type='flex' justify='center'>
			<Col
				className={styles.comm__left}
				xs={24}
				sm={24}
				md={16}
				lg={18}
				xl={14}
			>
				<List
					header={<>Latest Blog</>}
					itemLayout='vertical'
					dataSource={myList}
					renderItem={(item) => (
						<List.Item>
							<div className={styles.list__title}>{item.title}</div>
							<div className={styles.list__icon}>
								<span>
									<CalendarOutlined />
									1970-1-1
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
							<div className={styles.list_context}>{item.context}</div>
						</List.Item>
					)}
				/>
			</Col>
			<Col className={styles.comm__right} xs={0} sm={0} md={7} lg={5} xl={4}>
				RIGHT
			</Col>
		</Row>
	);
};

export default Body;
