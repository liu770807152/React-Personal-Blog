import React from 'react';
import { Avatar, Divider } from 'antd';
import styles from './author.module.css';

const Author = () => {
	return (
		<div className={styles.author__container}>
			<div>
				<Avatar size={100} src='/me.png' />
			</div>
			<div className={styles.author__introduction}>
				<span>A self-motivated front end developer with strong passion.</span>
				<Divider>Social Account</Divider>
				<Avatar size={28} src='/github.svg' className={styles.account__icon} />
				<Avatar
					size={28}
					src='/linkedin.svg'
					className={styles.account__icon}
				/>
			</div>
		</div>
	);
};

export default Author;
