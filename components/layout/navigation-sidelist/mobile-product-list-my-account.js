import Link from 'next/link';

import classes from '/styles/mobile-product-list-my-account.module.css';
import IconProfilePicture from '../../ui/icons/icon-profile-picture';
import IconArrowRight from '../../ui/icons/icon-arrow-right';

const MobileProductListMyAccount = () => {
  return (
    <Link href='#'>
      <a className={classes.MobileProductListMyAccountContainer} title='Înregistrează sau autentifică un utilizator' aria-label='Înregistrează sau autentifică un utilizator'>
        <div className={classes.MobileProductListMyAccount}>
          <div>
            <IconProfilePicture />
            <p>Contul meu</p>
          </div>
          <IconArrowRight />
        </div>
      </a>
    </Link>
  );
};

export default MobileProductListMyAccount;
