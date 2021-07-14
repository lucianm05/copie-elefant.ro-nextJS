import { useContext } from 'react';

import classes from '/styles/mobile-product-list.module.css';
import MobileProductListTitle from './mobile-product-list-title';
import MobileProductListSpecials from './mobile-product-list-specials';
import MobileProductListContent from './mobile-product-list-content';
import MobileProductListMyAccount from './mobile-product-list-my-account';
import Context from '../../../store/context';

const MobileProductList = (props) => {
  const context = useContext(Context);
  const showSidebar = context.showSidebar;
  const setShowSidebar = context.setShowSidebar;
  
  return (
    <nav className={classes.MobileProductListNav + ' ' + (showSidebar ? classes.Active : '')}>
      <div className={classes.MobileProductListContainer}>
        <MobileProductListTitle setShowSidebarHandler={setShowSidebar} />
        <MobileProductListContent />
        <MobileProductListSpecials />
        <MobileProductListMyAccount />
      </div>
    </nav>
  );
};

export default MobileProductList;
