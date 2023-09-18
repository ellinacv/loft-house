import React from 'react';
import { Logo } from '../Logo/Logo';

import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.wrap}>
      <div className="container">
        <div className={s.content}>
          <div className={s.logo}>
            <Logo width="133" height="50" />
          </div>
          <nav className={s.nav}>
            <div className={s.nav__col}>
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
            </div>
            <div className={s.nav__col}>
              <a className="nav__link" href="/#">
                Check-in and moving
              </a>
              <a className="nav__link" href="/#">
                Services
              </a>
              <a className="nav__link" href="/#">
                Ecological sustainability
              </a>
              <a className="nav__link" href="/#">
                Investment possibilities
              </a>
              <a className="nav__link" href="/#">
                Loyalty program
              </a>
            </div>
          </nav>
          <div className={s.contacts}>
            <ul className={`${s.contacts__list} ${s.nav__col}`}>
              <li>Unnamed Road, Mayer, AZ 86333</li>
              <li>Tel: + 1 (602) 7209495</li>
              <li>Sales department: 10 a.m. to 8 p.m.</li>
              <li>E-mail: sales@lofthouse.com</li>
            </ul>
            <div className={s.contacts__socials}>
              <a href="/!">VK</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
