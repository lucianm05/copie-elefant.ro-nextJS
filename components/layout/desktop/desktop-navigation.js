import Link from 'next/link';

import classes from '/styles/desktop-navigation.module.css';
import LogoDesktop from '../../ui/logo/logo-desktop';
import IconSearch from '../../ui/icons/icon-search';
import IconHead from '../../ui/icons/icon-head';
import IconHeart from '../../ui/icons/icon-heart';
import IconShoppingCart from '../../ui/icons/icon-shopping-cart';

const DesktopNavigation = () => {
  return (
    <nav className={classes.DesktopNavigation}>
      <div className={classes.DesktopNavigationTop}>
        <div className={classes.DesktopNavigationLogo}>
          <LogoDesktop />
        </div>
        <form action='#' method='#' className={classes.DesktopNavigationSearchForm}>
          <fieldset className={classes.DesktopNavigationSearchFieldset}>
            <legend className={'ScreenReadersOnly'}>Caută pe site-ul elefant.ro:</legend>
            <label className={classes.DesktopNavigationSearchLabel}>
              <span className={'ScreenReadersOnly'}>Introdu produsul căutat:</span>
              <input className={classes.DesktopNavigationSearchInput} placeholder='Caută produsul dorit' type='search' id='desktopSearch' name='desktopSearch' />
              <button className={classes.DesktopNavigationSearchButton} type='button' aria-label='Buton pentru căutare produs.'>
                <IconSearch />
              </button>
            </label>
          </fieldset>
        </form>
        <div className={classes.DesktopNavigationUserLinks}>
          <Link href='#'>
            <a className={classes.DesktopNavigationUserLinksItem} title='Înregistrează sau autentifică un utilizator'>
              <IconHead />
              <span>Cont</span>
            </a>
          </Link>
          <Link href='#'>
            <a className={classes.DesktopNavigationUserLinksItem} title='Vezi produsele tale favorite'>
              <IconHeart />
              <span>Favorite</span>
            </a>
          </Link>
          <Link href='#'>
            <a className={classes.DesktopNavigationUserLinksItem} title='Vezi produsele din coșul tău'>
              <IconShoppingCart />
              <span>Coș</span>
            </a>
          </Link>
        </div>
      </div>
      <div className={classes.DesktopNavigationBottom}></div>
    </nav>
  );
};

export default DesktopNavigation;
