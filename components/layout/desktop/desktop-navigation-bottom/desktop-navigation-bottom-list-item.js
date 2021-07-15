import Link from 'next/link';
import { Fragment } from 'react';

import classes from '/styles/desktop-navigation-bottom-list-item.module.css';

const DesktopNavigationBottomListItem = (props) => {
  const { category } = props;

  return (
    <Fragment>
      <li className={classes.DesktopNavigationBottomListItem} data-categoryid={category.id}>
        <Link href='#'>
          <a data-categoryid={category.id}>{category.title}</a>
        </Link>
      </li>
    </Fragment>
  );
};

export default DesktopNavigationBottomListItem;
