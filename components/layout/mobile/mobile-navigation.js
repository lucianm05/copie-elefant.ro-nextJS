import Link from 'next/link';
import { useContext } from 'react';

import classes from '/styles/mobile-navigation.module.css';
import LogoMobile from '../../ui/logo/logo-mobile';
import LogoDesktop from '../../ui/logo/logo-desktop';
import IconHeart from '../../ui/icons/icon-heart';
import IconShoppingCart from '../../ui/icons/icon-shopping-cart';
import IconMobileMenu from '../../ui/icons/icon-mobile-menu';
import Context from '../../../store/context';

const MobileNavigation = () => {
  const context = useContext(Context);
  const setShowSidebar = context.setShowSidebar;

  return (
    <nav className={classes.Navigation}>
      <div className={classes.NavigationContainer}>
        <div className={classes.NavigationContainerChild1}>
          <button onClick={setShowSidebar} type='button' aria-label='Afișează lista de produse.' title='Afișează lista de produse.'>
            <IconMobileMenu />
          </button>
          <div className={classes.NavigationLogo}>
            <Link href='/'>
              <a title='Mergi pe pagina principală.' aria-label='Mergi pe pagina principală.'>
                <LogoMobile />
                <LogoDesktop />
              </a>
            </Link>
          </div>
        </div>
        <div className={classes.NavigationContainerChild2}>
          <Link href='#'>
            <a title='Înregistrează sau autentifică un utilizator.' aria-label='Înregistrează sau autentifică un utilizator.'>
              <IconHeart />
            </a>
          </Link>
          <Link href='#'>
            <a title='Vezi coșul tău de cumpărături.' aria-label='Vezi coșul tău de cumpărături.'>
              <IconShoppingCart />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
