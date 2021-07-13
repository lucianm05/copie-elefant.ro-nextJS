import Link from 'next/link';
import { Fragment } from 'react';

import classes from '/styles/navigation-sidelist-item.module.css';
import IconArrowRight from '../ui/icons/icon-arrow-right';

const NavigationSidelistItem = (props) => {
  const { category } = props;

  return (
    <Fragment>
      <li className={classes.NavigationSidelistItem}>
        <Link href='#'>
          <a className={classes.NavigationSidelistItemLink}>
            {category.title}
            <IconArrowRight />
          </a>
        </Link>
      </li>
      <li className={classes.NavigationSidelistItem}>
        <Link href='#'>
          <a className={classes.NavigationSidelistItemLink}>
            {category.title}
            <IconArrowRight />
          </a>
        </Link>
      </li>
      <li className={classes.NavigationSidelistItem}>
        <Link href='#'>
          <a className={classes.NavigationSidelistItemLink}>
            {category.title}
            <IconArrowRight />
          </a>
        </Link>
      </li>
    </Fragment>
  );
};

export default NavigationSidelistItem;
