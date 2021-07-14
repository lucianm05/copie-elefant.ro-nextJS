import { useEffect, useState } from 'react';

import classes from '/styles/main-navigation.module.css';

import Navigation from './navigation';
import MobileSearch from './mobile-search';
import MobileProductList from './mobile-product-list/mobile-product-list';

const MainNavigation = () => {
  const [navigationVisible, setNavigationVisible] = useState(true);
  const [showSidelist, setShowSidelist] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setNavigationVisible(!(scrollY > 120));
  };

  return (
    <header className={classes.Header}>
      <Navigation showSidelist={showSidelist} setShowSidelist={setShowSidelist} />
      <MobileSearch navigationVisible={navigationVisible} />
      <MobileProductList showSidelist={showSidelist} setShowSidelist={setShowSidelist} />
    </header>
  );
};

export default MainNavigation;
