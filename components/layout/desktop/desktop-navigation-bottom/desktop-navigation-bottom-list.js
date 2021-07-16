import { Fragment, useContext } from 'react';
import { getAllCategories } from '../../../../data/dummy-categories';

import classes from '/styles/desktop-navigation-bottom-list.module.css';
import DesktopNavigationBottomListItem from './desktop-navigation-bottom-list-item';
import DesktopNavigationBottomSublist from './sublist/desktop-navigation-bottom-sublist';
import Context from '../../../../store/context';

const DesktopNavigationBottomList = (props) => {
  const { navigationVisible } = props;

  const categories = getAllCategories();
  const context = useContext(Context);
  const desktopSublistContent = context.desktopSublistContent;
  const setDesktopSublistContent = context.setDesktopSublistContent;

  return (
    <Fragment>
      <ul onMouseOver={setDesktopSublistContent} className={classes.DesktopNavigationBottomList + ' ' + (!navigationVisible ? classes.DesktopNavigationBottomListFixed : '')} data-identifier='dnvl'>
        {categories.map((category) => (
          <DesktopNavigationBottomListItem key={category.id} category={category} />
        ))}
      </ul>
      <DesktopNavigationBottomSublist navigationVisible={navigationVisible} subcategories={desktopSublistContent} />
    </Fragment>
  );
};

export default DesktopNavigationBottomList;
