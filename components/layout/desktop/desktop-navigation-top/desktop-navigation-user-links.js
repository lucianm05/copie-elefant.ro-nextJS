import Link from 'next/link';

import classes from '/styles/desktop-navigation-user-links.module.css';
import IconHead from '../../../ui/icons/icon-head';
import IconHeart from '../../../ui/icons/icon-heart';
import IconShoppingCart from '../../../ui/icons/icon-shopping-cart';

const DesktopNavigationUserLinks = () => {
  return (
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
  );
};

export default DesktopNavigationUserLinks;
