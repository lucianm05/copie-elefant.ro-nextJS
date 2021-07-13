import Link from 'next/link';
import { Fragment } from 'react';

import classes from '/styles/mobile-product-list-item.module.css';
import IconArrowRight from '../../ui/icons/icon-arrow-right';

const MobileProductListItem = (props) => {
  const { category } = props;

  return (
    <Fragment>
      <li className={classes.MobileProductListItem}>
        <Link href='#'>
          <a className={classes.MobileProductListItemLink}>
            {category.title}
            <IconArrowRight />
          </a>
        </Link>
      </li>
      <li className={classes.MobileProductListItem}>
        <Link href='#'>
          <a className={classes.MobileProductListItemLink}>
            {category.title}
            <IconArrowRight />
          </a>
        </Link>
      </li>
      <li className={classes.MobileProductListItem}>
        <Link href='#'>
          <a className={classes.MobileProductListItemLink}>
            {category.title}
            <IconArrowRight />
          </a>
        </Link>
      </li>
    </Fragment>
  );
};

export default MobileProductListItem;
