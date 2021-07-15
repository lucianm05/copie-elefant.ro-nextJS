import { Fragment, useContext } from 'react';
import { getAllCategories } from '../../../../data/dummy-categories';

import classes from '/styles/desktop-navigation-bottom-list.module.css';
import DesktopNavigationBottomListItem from './desktop-navigation-bottom-list-item';
import DesktopNavigationBottomSublist from './sublist/desktop-navigation-bottom-sublist';
import Context from '../../../../store/context';

const DesktopNavigationBottomList = () => {
  const categories = getAllCategories();
  const context = useContext(Context);
  const desktopSublistContent = context.desktopSublistContent;
  const setDesktopSublistContent = context.setDesktopSublistContent;

  return (
    <Fragment>
      <ul onMouseOver={setDesktopSublistContent} className={classes.DesktopNavigationBottomList} data-identifier='dnvl'>
        {categories.map((category) => (
          <DesktopNavigationBottomListItem key={category.id} category={category} />
        ))}
      </ul>
      <DesktopNavigationBottomSublist subcategories={desktopSublistContent} />
    </Fragment>
  );
};

export default DesktopNavigationBottomList;
