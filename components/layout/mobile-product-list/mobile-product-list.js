import classes from '/styles/mobile-product-list.module.css';
import MobileProductListTitle from './mobile-product-list-title';
import MobileProductListSpecials from './mobile-product-list-specials';
import MobileProductListContent from './mobile-product-list-content';
import MobileProductListMyAccount from './mobile-product-list-my-account';

const MobileProductList = (props) => {
  const { showSidelist, setShowSidelist } = props;

  const setShowSidelistHandler = () => {
    setShowSidelist((prevState) => !prevState);
  };

  return (
    <nav className={classes.MobileProductListNav + ' ' + (showSidelist ? classes.Active : '')}>
      <div className={classes.MobileProductListContainer}>
        <MobileProductListTitle setShowSidelistHandler={setShowSidelistHandler} />
        <MobileProductListContent />
        <MobileProductListSpecials />
        <MobileProductListMyAccount />
      </div>
    </nav>
  );
};

export default MobileProductList;
