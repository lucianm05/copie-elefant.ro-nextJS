import { Fragment, useState } from 'react';
import { getAllCategories, getSelectedCategory } from '../../../data/dummy-categories';

import classes from '/styles/mobile-product-list-content.module.css';
import MobileProductListItem from './mobile-product-list-item';
import Sublist from './sublist/sublist';

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
