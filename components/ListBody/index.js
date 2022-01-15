import React from 'react';
import { Col, Row, List, Breadcrumb } from 'antd';
import {
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import Author from '../Author';
import Ad from '../Ad';
import Footer from '../Footer';
import styles from './listBody.module.scss';
import useSWR from 'swr';

const Body = () => {
  const { data, error } = useSWR('/api/articleList');

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';
  return (
    <>
      <Row className="comm__main" type="flex" justify="center">
        <Col className="comm__left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className={styles.bread__container}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href={{ pathname: '/' }}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{'Article List'}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            header={<div className={styles.list__title}>Blog List</div>}
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <div className={styles.list__title}>
                  <Link
                    href={{
                      pathname: '/article/[id]',
                      query: { id: item.id }
                    }}
                  >
                    {item.title}
                  </Link>
                </div>
                <div className={styles.list__icon}>
                  <span>
                    <CalendarOutlined />
                    {item.time}
                  </span>
                  <span>
                    <FolderOpenOutlined />
                    {item.catalogName}
                  </span>
                  <span>
                    <FireOutlined />
                    {item.viewCount}
                  </span>
                </div>
                <div className={styles.list__context}>{item.introduction}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm__right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ad />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Body;
