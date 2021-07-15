import Link from 'next/link';

import classes from '/styles/sublist-footer.module.css';
import IconArrowRight from '../../../../ui/icons/icon-arrow-right';

const SublistFooter = () => {
  return (
    <Link href='#'>
      <a className={classes.SublistFooterContainer} title='Vezi toate produsele disponibile.' aria-label='Vezi toate produsele disponibile.'>
        <div className={classes.SublistFooter}>
          <p>Vezi toate produsele </p>
          <IconArrowRight />
        </div>
      </a>
    </Link>
  );
};

export default SublistFooter;
