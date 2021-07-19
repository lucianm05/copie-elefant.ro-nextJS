import { useContext } from 'react';

import classes from '/styles/desktop-navigation-bottom-sublist.module.css';
import DesktopNavigationBottomSublistItem from './desktop-navigation-bottom-sublist-item';
import Context from '../../../../../store/context';

const DesktopNavigationBottomSublist = (props) => {
  const { subcategories, navigationVisible } = props;
  const context = useContext(Context);
  const showDesktopSublist = context.showDesktopSublist;
  const setShowDesktopSublist = context.setShowDesktopSublist;

  const setShowDesktopSublistHandler = () => {
    setShowDesktopSublist(false);
  }

  return (
    <ul onMouseLeave={setShowDesktopSublistHandler} className={classes.DesktopNavigationBottomSublist + ' ' + (showDesktopSublist ? classes.DesktopNavigationBottomSublistActive : '') + ' ' + (!navigationVisible ? classes.DesktopNavigationBottomSublistFixed : '')}>
      {subcategories.map((subcategory) => (
        <DesktopNavigationBottomSublistItem key={subcategory} subcategory={subcategory} />
      ))}
    </ul>
  );
};

export default DesktopNavigationBottomSublist;
