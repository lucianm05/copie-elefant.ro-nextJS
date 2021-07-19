import { Fragment } from 'react';

import classes from '/styles/top-categories-list.module.css';
import TopCategoriesItem from './top-categories-item';

const TopCategoriesList = (props) => {
  const { topCategories } = props;

  return (
    <section aria-label='Lista cu produsele cele mai căutate pe site-ul elefant.ro'>
      <div className={classes.TopCategoriesTitle}>
        <h1>Top categorii</h1>
        <hr />
      </div>
      <ul className={classes.TopCategoriesList}>
        {topCategories.map((topCategory) => (
          <TopCategoriesItem key={topCategory._id} topCategory={topCategory} />
        ))}
      </ul>
    </section>
  );
};

export default TopCategoriesList;
