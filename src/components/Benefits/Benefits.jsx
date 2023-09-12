import React from 'react';
import s from './Benefits.module.scss';

import bench from '../../img/benefits/01.svg';
import building from '../../img/benefits/02.svg';
import fontain from '../../img/benefits/03.svg';
import bicycle from '../../img/benefits/04.svg';

export const Benefits = () => {
  return (
    <section className={s.wrap}>
      <div className="container">
        <h2 className="visually-hidden">Benefits of the residential complex</h2>
        <div className={s.row}>
          <div className={s.item}>
            <img className={s.item__img} src={bench} alt="Bench" />
            <p className={s.item__title}>Nearby historical parks and squares</p>
          </div>
          <div className={s.item}>
            <img className={s.item__img} src={building} alt="Building" />
            <p className={s.item__title}>Completely arranged</p>
          </div>
          <div className={s.item}>
            <img className={s.item__img} src={fontain} alt="Fontain" />
            <p className={s.item__title}>10 fountains on the territory</p>
          </div>
          <div className={s.item}>
            <img className={s.item__img} src={bicycle} alt="Bicycle" />
            <p className={s.item__title}>6 km bicycle lanes</p>
          </div>
        </div>
      </div>
    </section>
  );
};
