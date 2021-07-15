import classes from '/styles/desktop-navigation-top.module.css';
import LogoDesktop from '../../../ui/logo/logo-desktop';
import DesktopNavigationSearchForm from './desktop-navigation-search-form';
import DesktopNavigationUserLinks from './desktop-navigation-user-links';

const DesktopNavigationTop = () => {
  return (
    <div className={classes.DesktopNavigationTop}>
      <div className={classes.DesktopNavigationLogo}>
        <LogoDesktop />
      </div>
      <DesktopNavigationSearchForm />
      <DesktopNavigationUserLinks />
    </div>
  );
};

export default DesktopNavigationTop;
