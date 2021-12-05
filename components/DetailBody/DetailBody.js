import React from 'react';
import { Affix, Col, Row, Breadcrumb } from 'antd';
import {
	CalendarOutlined,
	FolderOpenOutlined,
	FireOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import MarkNavbar from 'markdown-navbar';
import Author from '../Author/Author';
import Ad from '../Ad/Ad';
import 'markdown-navbar/dist/navbar.css';
import styles from './detailBody.module.css';

const markdown =
	'# p01:Hello World\n' +
	'[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
	'> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
	'**这是加粗的文字**\n\n' +
	'*这是倾斜的文字*`\n\n' +
	'***这是斜体加粗的文字***\n\n' +
	'~~这是加删除线的文字~~ \n\n' +
	'`console.log(111)` \n\n' +
	'# p02:Hello World\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n' +
	'***\n\n\n' +
	'# p03:Vue3.0\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n' +
	'# p04:Hello World\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n' +
	'#5 p05:Hello World\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n' +
	'# p06:Vue3.0\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n' +
	'# p07:Vue3.0\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n' +
	'``` var a=11; ```\n' +
	'# p08:Hello World\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n' +
	'``` var a=11; ```\n' +
	'# p09:Hello World\n' +
	'> aaaaaaaaa\n' +
	'>> bbbbbbbbb\n' +
	'>>> cccccccccc\n\n' +
	'``` var a=11; ```\n';

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
					<h1 className={styles.detail__title}>React Tutorial</h1>
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
					<div className={styles.detail__content}>
						<ReactMarkdown escapeHtml={false}>{markdown}</ReactMarkdown>
					</div>
				</div>
			</div>
		</Col>
		<Col className='comm__right' xs={0} sm={0} md={7} lg={5} xl={4}>
			<Author />
			<Ad />
			<Affix offsetTop={5}>
				<div
					className={classNames({
						[styles.detail__nav]: true,
						comm__box: true,
					})}
				>
					<div className={styles.nav__title}>Catalog</div>
					<MarkNavbar
						className={styles.article__menu}
						source={markdown}
						headingTopOffset={0}
						ordered={false}
					/>
				</div>
			</Affix>
		</Col>
	</Row>
);

export default DetailBody;
