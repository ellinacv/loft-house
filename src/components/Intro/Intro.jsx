import React from 'react';
import s from './Intro.module.scss';

import mouse from '../../img/intro/mouse.svg';
import map from '../../img/intro/map.svg';
import phone from '../../img/intro/phone.svg';

export const Intro = () => {
  return (
    <section className={s.wrap} id="about">
      <h1 className={s.title}>Residential complex in the historical center</h1>
      <a href="#apartments" className={s.link}>
        <img src={mouse} alt="Mouse" />
      </a>
      <div className={s.contacts}>
        <div className={s.item}>
          <img src={map} alt="Location" />
          <a href="#section-map">Unnamed Road, Mayer, AZ 86333</a>
        </div>
        <div className={s.item}>
          <img src={phone} alt="Phone" />
          <a href="tel:+16027209495">+ 1 (602) 7209495</a>
        </div>
      </div>
    </section>
  );
};
