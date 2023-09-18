import React from 'react';

import s from './Map.module.scss';

export const Map = () => {
  return (
    <section className={s.wrap}>
      <div className="container">
        <h2 className={`${s.title} title-2`}>District on the map</h2>
        <div className={s.map__container}></div>
      </div>
    </section>
  );
};
