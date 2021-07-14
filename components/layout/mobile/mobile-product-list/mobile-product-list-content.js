import { Fragment } from 'react';
import { getAllCategories } from '../../../../data/dummy-categories';

import classes from '/styles/mobile-product-list-content.module.css';
import MobileProductListItem from './mobile-product-list-item';

const MobileProductListContent = () => {
  const categories = getAllCategories();

  return (
    <Fragment>
      <ul className={classes.MobileProductListContent}>
        {categories.map((category) => (
          <MobileProductListItem key={category.id} category={category} />
        ))}
      </ul>
    </Fragment>
  );
}; 

export default MobileProductListContent;
