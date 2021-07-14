import { Fragment, useState } from 'react';
import { getAllCategories, getSelectedCategory } from '../../../data/dummy-categories';

import classes from '/styles/mobile-product-list-content.module.css';
import MobileProductListItem from './mobile-product-list-item';
import Sublist from './sublist/sublist';

const MobileProductListContent = () => {
  const [showSideSublist, setShowSideSublist] = useState(false);
  const [sublistCategory, setSublistCategory] = useState({ id: '', title: '', subcategories: [] });

  const categories = getAllCategories();

  const showSideSublistHandler = (event) => {
    const targetId = event.target.dataset.id;
    const selectedCategory = getSelectedCategory(targetId);
    setSublistCategory(selectedCategory);
    setShowSideSublist((prevState) => !prevState);
  };

  return (
    <Fragment>
      <ul className={classes.MobileProductListContent}>
        {categories.map((category) => (
          <MobileProductListItem key={category.id} category={category} showSideSublistHandler={showSideSublistHandler} />
        ))}
      </ul>
      <Sublist showSideSublist={showSideSublist} setShowSideSublist={setShowSideSublist} category={sublistCategory} />
    </Fragment>
  );
}; 

export default MobileProductListContent;
