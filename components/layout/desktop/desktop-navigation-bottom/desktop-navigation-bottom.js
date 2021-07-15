import classes from '/styles/desktop-navigation-bottom.module.css';
import DesktopNavigationBottomList from './desktop-navigation-bottom-list';

const DesktopNavigationBottom = () => {
  return <div className={classes.DesktopNavigationBottom}>
    <DesktopNavigationBottomList />
  </div>;
};

export default DesktopNavigationBottom;
