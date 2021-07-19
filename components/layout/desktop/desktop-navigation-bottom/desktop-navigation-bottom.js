import classes from '/styles/desktop-navigation-bottom.module.css';
import DesktopNavigationBottomList from './desktop-navigation-bottom-list';

const DesktopNavigationBottom = (props) => {
  const { navigationVisible } = props;

  return (
    <div className={classes.DesktopNavigationBottom}>
      <DesktopNavigationBottomList navigationVisible={navigationVisible} />
    </div>
  );
};

export default DesktopNavigationBottom;
