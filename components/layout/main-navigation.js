import { useEffect, useState } from 'react';

import classes from '/styles/main-navigation.module.css';

import Navigation from './navigation';
import MobileSearch from './mobile-search';
import MobileProductList from './mobile-product-list/mobile-product-list';
import Sublist from './mobile-product-list/sublist/sublist';

const MainNavigation = () => {
  const [navigationVisible, setNavigationVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setNavigationVisible(!(scrollY > 120));
  };

  return (
    <header className={classes.Header}>
      <Navigation />
      <MobileSearch navigationVisible={navigationVisible} />
      <MobileProductList />
      <Sublist />
    </header>
  );
};

export default MainNavigation;
