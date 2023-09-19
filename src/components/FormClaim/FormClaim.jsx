import React from 'react';

import s from './FormClaim.module.scss';
import '../../styles/_form.scss';

export const FormClaim = () => {
  return (
    <section className={s.wrap} id="form">
      <div className="container">
        <h2 className={`${s.title} title-2`}>Would you like to see it?</h2>
        <div className={s.content}>
          <p className={s.text}>
            LoftHouse residential complex is a business class project located in
            the city center. The complex offers its residents apartments with
            the area from 40 to 170 sq. m. There will be three sections in the
            building, which will house 56 apartments in total.
          </p>
          <div className={`form ${s.formClaim}`}>
            <input type="text" className="form__input" placeholder="Name" />
            <input type="text" className="form__input" placeholder="Number" />
            <p className="privacy">
              *We don`t share your data with anyone. And we don`t save your
              number in the database.
            </p>
            <button type="submit" className="form__btn">
              View area
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
