import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './ad.module.scss';

const Ad = () => (
  <div
    className={classNames({ [styles.ad__container]: true, comm__box: true })}
  >
    <div className={styles.ad__wrapper}>
      <Image
        src="/Saito-Asuka.jpg"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
        alt="Asuka"
      />
    </div>
  </div>
);

export default Ad;
