import React from 'react';
import { Affix, Col, Row, Breadcrumb } from 'antd';
import NextLink from 'next/link';
import classNames from 'classnames';
import { marked } from 'marked';
import hljs from 'highlight.js';
import Tocify from '../../utils/tocify';
import Author from '../Author/Author';
import Ad from '../Ad/Ad';
import DynamicIcon from '../DynamicIcon/DynamicIcon';
import 'highlight.js/styles/monokai-sublime.css';
import styles from './detailBody.module.scss';
import useSWR from 'swr';
import { IArticleBase } from '../../interfaces/article';

export interface DetailBodyProps {
  id: number,
  data: IArticleBase
}

const DetailBody: React.FC<DetailBodyProps> = ({ id }) => {
  const { data, error } = useSWR(`/api/article/${id}`);
  const tocify = new Tocify();
  const renderer = new marked.Renderer();
  const icons = [
    ['CalendarOutlined', 'px-1', data.time],
    ['FolderOpenOutlined', 'px-1', data.catalogName],
    ['FireOutlined', 'px-1', data.viewCount]
  ];

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor__fix"><h${level}>${text}</h${level}></a>\n`;
  };

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

  if (error) return <h1>An error has occurred.</h1>;
  if (!data) return <h1>Loading...</h1>;
  return (
    <Row className="comm__main" type="flex" justify="center">
      <Col className="comm__left" xs={24} sm={24} md={16} lg={18} xl={14}>
        <div>
          <div className={styles.bread__container}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <NextLink href="/">Home</NextLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NextLink href={`/article`}>{'Article List'}</NextLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className={styles.detail__wrapper}>
            <h1 className={styles.detail__title}>{data.title}</h1>
            <div className="icon-list flex justify-center">
              {icons.map((icon) => (
                <span className="icon-list__icon">
                  <DynamicIcon type={icon[0]} style={icon[1]} />
                  <span>{icon[2]}</span>
                </span>
              ))}
            </div>
            <div
              className={styles.detail__content}
              dangerouslySetInnerHTML={{
                __html: marked.parse(data.content) // transform to HTML
              }}
            ></div>
          </div>
        </div>
      </Col>
      <Col className="comm__right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author />
        <Ad />
        <Affix offsetTop={5}>
          <div
            className={classNames({
              [styles.detail__nav]: true,
              comm__box: true
            })}
          >
            <div className={styles.nav__title}>Catalog</div>
            <div className="toc-list">{tocify && tocify.render()}</div>
          </div>
        </Affix>
      </Col>
    </Row>
  );
};

export default DetailBody;
