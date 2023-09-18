import React, { useState } from 'react';
import { Logo } from '../Logo/Logo';

import s from './Header.module.scss';

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className={s.wrap}>
      <div className="container">
        <div className={`${s.row} ${showNav ? s.active : ''}`}>
          <a href="/#" className={s.logo}>
            <Logo width="133" height="50" />
          </a>
          <nav className={s.nav}>
            <a className="nav__link" href="/#">
              About
            </a>
            <a className="nav__link" href="/#">
              District
            </a>
            <a className="nav__link" href="/#">
              Catalog
            </a>
            <a className="nav__link" href="/#">
              Credit
            </a>
            <a className="nav__link" href="/#">
              Contacts
            </a>
          </nav>
          <button
            className={`${s.nav__btn} ${s.menu} ${showNav ? s.active : ''}`}
            onClick={() => setShowNav((s) => !s)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
