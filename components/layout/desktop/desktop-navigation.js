import classes from '/styles/desktop-navigation.module.css';
import DesktopNavigationTop from './desktop-navigation-top/desktop-navigation-top';
import DesktopNavigationBottom from './desktop-navigation-bottom/desktop-navigation-bottom';

const DesktopNavigation = () => {
  return (
    <nav className={classes.DesktopNavigation}>
      <DesktopNavigationTop />
      <DesktopNavigationBottom />
    </nav>
  );
};

export default DesktopNavigation;
