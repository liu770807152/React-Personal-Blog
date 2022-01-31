import React, { useState } from 'react';
import footerData from '../../utils/footerData';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const [active, setActive] = useState(null);

  return (
    <footer className={styles.footer}>
      <div className={styles['footer__logo-container']}>
        <div className={styles['footer__logo-container--left']}>
          <a href="/">
            <img className={styles.logo} src="/logo_transparent.png" alt="logo"></img>
          </a>
        </div>
        <div className={styles['footer__logo-container--right']}>
          <div>
            <span>Developed by Chris</span>
          </div>
          <div>
            <span>Copyright © 2022</span>
          </div>
        </div>
      </div>
      <div className={styles['footer__icon-container']}>
        <div className={styles['footer__icon-container--inner']}>
          <div className={styles['footer__icon-container--list']}>
            {footerData.map((item) => (
              <div
                className={styles['footer__icon-container--item']}
                onMouseEnter={() => setActive(item.id)}
                onMouseLeave={() => setActive(null)}
                key={item.id}
                style={{
                  backgroundColor: `${active === item.id ? item.bgColor : ''}`,
                }}
              >
                <i
                  className={styles['footer__icon-container--icon']}
                  style={{
                    backgroundImage: `url(${item.icon})`,
                  }}
                />
                <div className={styles['footer__icon-container--item-desc']}>
                  <div className={styles['footer__icon-container--item-hide-desc']}></div>
                  <div
                    className={styles['footer__icon-container--item-desc-inner']}
                    style={item.bgColor === '#fff' ? { color: '#333' } : null}
                  >
                    <p className={styles['footer__icon-container--name']}>{item.name}</p>
                    <p className={styles['footer__icon-container--describe']}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles['footer__text-container']}>
        <p>Actively seeking a full-time position of software engineer</p>
        <p>Contact me</p>
        <p>icons</p>
      </div>
    </footer>
  );
};

export default Footer;
