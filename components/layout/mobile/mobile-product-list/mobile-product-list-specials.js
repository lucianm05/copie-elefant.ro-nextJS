import Link from 'next/link';

import classes from '/styles/mobile-product-list-specials.module.css';
import IconArrowRight from '../../../ui/icons/icon-arrow-right';
import IconDiamond from '../../../ui/icons/icon-diamond';
import IconGps from '../../../ui/icons/icon-gps';

const MobileProductListSpecials = () => {
  return (
    <div className={classes.MobileProductListSpecials}>
      <Link href='#'>
        <a title='Verifică beneficiile contului elefant premium.' aria-label='Verifică beneficiile contului elefant premium.'>
          <div>
            <IconDiamond />
            <p>Elefant Premium</p>
          </div>
          <div>
            <IconArrowRight />
          </div>
        </a>
      </Link>
      <Link href='#'>
        <a title='Verifică punctele de livrare.' aria-label='Verifică punctele de livrare.'>
          <div>
            <IconGps />
            <p>Puncte Livrare</p>
          </div>
          <div>
            <IconArrowRight />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default MobileProductListSpecials;
