import Link from 'next/link';
import { useEffect, useState } from 'react';

import classes from '/styles/main-navigation.module.css';
import LogoMobile from './logo-mobile';
import LogoDesktop from './logo-desktop';
import IconHeart from '../icons/icon-heart';
import IconShoppingCart from '../icons/icon-shopping-cart';
import IconMobileMenu from '../icons/icon-mobile-menu';
import IconSearch from '../icons/icon-search';
import IconHead from '../icons/icon-head';

const MainNavigation = () => {
  const [navigationVisible, setNavigationVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setNavigationVisible(!(scrollY > 60));
  };

  return (
    <header className={classes.Header}>
      <nav className={classes.Navigation + ' ' + (navigationVisible ? '' : classes.NavigationHidden)}>
        <div className={classes.NavigationContainer}>
          <div className={classes.NavigationContainerChild1}>
            <div>
              <IconMobileMenu />
            </div>
            <div className={classes.NavigationLogo}>
              <Link href='/'>
                <a>
                  <LogoMobile />
                  <LogoDesktop />
                </a>
              </Link>
            </div>
          </div>
          <div className={classes.NavigationContainerChild2}>
            <IconHeart />
            <IconShoppingCart />
          </div>
        </div>
      </nav>
      <div className={classes.MobileSearch + ' ' + (!navigationVisible ? classes.MobileSearchAbove : '')}>
        <form action='#' method='#' className={classes.MobileSearchForm}>
          <fieldset className={classes.MobileSearchFieldset}>
            <legend className={'ScreenReadersOnly'}>Caută pe site-ul elefant.ro:</legend>
            <label className={classes.MobileSearchLabel}>
              <span className={'ScreenReadersOnly'}>Introdu produsul căutat:</span>
              <input className={classes.MobileSearchInput} placeholder='Caută produsul dorit' type='search' id='mobileSearch' name='mobileSearch' />
              <button className={classes.MobileSearchButton}>
                <IconSearch />
              </button>
            </label>
          </fieldset>
        </form>
      </div>
    </header>
  );
};

export default MainNavigation;
