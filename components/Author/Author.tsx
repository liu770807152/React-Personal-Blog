import React from 'react';
import { Avatar, Divider } from 'antd';
import classNames from 'classnames';
import styles from './author.module.scss';

const Author: React.FC = () => (
  <div
    className={classNames({
      [styles.author__container]: true,
      comm__box: true
    })}
  >
    <div>
      <Avatar size={100} src="/me.png" />
    </div>
    <div className={styles.author__introduction}>
      <span>A self-motivated front end developer with strong passion.</span>
      <Divider>Social Account</Divider>
      <Avatar size={28} src="/github.svg" className={styles.account__icon} />
      <Avatar size={28} src="/linkedin.svg" className={styles.account__icon} />
    </div>
  </div>
);

export default Author;
