import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './ad.module.scss';

const Ad: React.FC = () => (
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
        priority={true}
      />
    </div>
  </div>
);

export default Ad;
