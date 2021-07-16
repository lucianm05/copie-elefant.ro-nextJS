import { useEffect, useState } from 'react';

import classes from '/styles/main-navigation.module.css';

import MobileNavigation from './mobile/mobile-navigation';
import MobileSearch from './mobile/mobile-search';
import MobileProductList from './mobile/mobile-product-list/mobile-product-list';
import Sublist from './mobile/mobile-product-list/sublist/sublist';
import DesktopNavigation from './desktop/desktop-navigation';

const MainNavigation = () => {
  const [navigationVisible, setNavigationVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setNavigationVisible(!(scrollY > 130));
  };

  return (
    <header className={classes.Header}>
      <MobileNavigation />
      <MobileSearch navigationVisible={navigationVisible} />
      <MobileProductList />
      <Sublist />
      <DesktopNavigation navigationVisible={navigationVisible} />
    </header>
  );
};

export default MainNavigation;
