import React from 'react';
import { Map } from '../Map/Map';

import s from './Location.module.scss';

export const Location = () => {
  return (
    <section className={s.wrap}>
      <div className="container">
        <h2 className={`${s.title} title-2`}>District on the map</h2>
        <div className={s.map__container}>
          <Map />
        </div>
      </div>
    </section>
  );
};
