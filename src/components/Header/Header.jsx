import React from 'react';
import { Logo } from '../Logo/Logo';

import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.wrap}>
      <div className="container">
        <div className={s.row}>
          <a href="/#" className={s.logo}>
            <Logo width="133" height="50" />
          </a>
          <nav className={s.nav}>
            <a className={s.link} href="/#">
              About
            </a>
            <a className={s.link} href="/#">
              District
            </a>
            <a className={s.link} href="/#">
              Catalog
            </a>
            <a className={s.link} href="/#">
              Credit
            </a>
            <a className={s.link} href="/#">
              Contacts
            </a>
          </nav>
          <div className={s.nav_btn}>Btn</div>
        </div>
      </div>
    </header>
  );
};
