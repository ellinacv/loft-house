import React from 'react';

import s from './Apartments.module.scss';

import img01 from '../../img/aparts/01.jpg';
import img02 from '../../img/aparts/02.jpg';
import img03 from '../../img/aparts/03.jpg';
import img04 from '../../img/aparts/04.jpg';

const aparts = [
  {
    id: 1,
    title: 'Penthouse "Loft Olympus"',
    image: img01,
  },
  {
    id: 2,
    title: 'Apartment "Nice Loft"',
    image: img02,
  },
  {
    id: 3,
    title: 'Apartment "Loft Studio"',
    image: img03,
  },
  {
    id: 4,
    title: 'Loft apartment "Prestige"',
    image: img04,
  },
];

export const Apartments = () => {
  return (
    <section className={s.wrap}>
      <div className="container">
        <h2 className={`${s.title} title-2`}>Our apartments</h2>
        <div className={s.cards}>
          {aparts.map((a) => (
            <a href="/!" className={s.cardItem} key={a.id}>
              <img className={s.cardItem__img} src={a.image} alt="Apartment" />
              <h3 className={s.cardItem__title}>{a.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
