import React from 'react';
import { Col, Row, List, Breadcrumb } from 'antd';
import Link from 'next/link';
import Author from '../Author/Author';
import Ad from '../Ad/Ad';
import DynamicIcon from '../DynamicIcon/DynamicIcon';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import styles from './listBody.module.scss';
import useSWR from 'swr';
import { IArticleList, IArticleBase } from '../../interfaces/article';

export interface ListBodyProps {
  data?: IArticleList;
}

const Body: React.FC<ListBodyProps> = () => {
  // tslint:disable-next-line: typedef
  const { data, error } = useSWR('/api/articleList');
  const icons = [
    ['Calendar', 'px-1'],
    ['Folder', 'px-1'],
    ['Fire', 'px-1']
  ];
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false, // allow error tolerance
    sanitize: false, // don't remove anything
    tables: true, // support Github table
    breaks: false, // support Github line breaks
    smartLists: true, // optimize list output
    highlight: (code) => {
      return hljs.highlightAuto(code).value;
    }
  });

  if (error) { return <h1>An error has occurred.</h1>; }
  if (!data) { return <h1>Loading...</h1>; }
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
            renderItem={(item: IArticleBase) => (
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
                <div className="icon-list">
                  {icons.map((icon, index) => (
                    <span className="icon-list__icon" key={index}>
                      <DynamicIcon type={icon[0]} style={icon[1]} />
                      <span>
                        {index === 0
                          ? item.time
                          : index === 1
                          ? item.catalogName
                          : item.viewCount}
                      </span>
                    </span>
                  ))}
                </div>
                <div className={styles.list__context} 
                  dangerouslySetInnerHTML={{__html: marked.parse(item.introduction)}}/>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm__right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Ad />
        </Col>
      </Row>
    </>
  );
};

export default Body;
