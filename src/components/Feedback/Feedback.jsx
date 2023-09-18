import React from 'react';

import s from './Feedback.module.scss';

export const Feedback = () => {
  return (
    <section className={s.wrap}>
      <div className="container">
        <h2 className={`${s.title} title-2`}>Do you have any questions?</h2>
        <div className={`form ${s.form}`}>
          <p className={`privacy ${s.descr}`}>
            *We don`t share your data with anyone. And we don`t save your number
            in the database.
          </p>
          <input type="text" className="form__input" placeholder="Name" />
          <input type="text" className="form__input" placeholder="Namber" />
          <button type="submit" className="form__btn">
            View area
          </button>
        </div>
      </div>
    </section>
  );
};
