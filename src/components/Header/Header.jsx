import React, { useState } from 'react';
import { Logo } from '../Logo/Logo';

import s from './Header.module.scss';

const nav = [
  { title: 'About', href: '#about' },
  { title: 'District', href: '#district' },
  { title: 'Catalog', href: '#apartments' },
  { title: 'Credit', href: '#form' },
  { title: 'Contacts', href: '#contacts' },
];

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className={s.wrap}>
      <div className="container">
        <div className={`${s.row} ${showNav ? s.active : ''}`}>
          <a href="/#" className={s.logo} onClick={() => setShowNav(false)}>
            <Logo width="133" height="50" />
          </a>
          <nav className={s.nav}>
            {nav.map((l) => (
              <a
                className="nav__link"
                href={l.href}
                onClick={() => setShowNav(false)}
              >
                {l.title}
              </a>
            ))}
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
