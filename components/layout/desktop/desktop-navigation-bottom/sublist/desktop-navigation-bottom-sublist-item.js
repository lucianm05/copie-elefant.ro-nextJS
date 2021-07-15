import Link from 'next/link';

import classes from '/styles/desktop-navigation-bottom-sublist-item.module.css';

const DesktopNavigationBottomSublistItem = (props) => {
  const { subcategory } = props;

  return (
    <li className={classes.DesktopNavigationBottomSublistItem}>
      <Link href='#'>
        <a>{subcategory}</a>
      </Link>
    </li>
  );
};

export default DesktopNavigationBottomSublistItem;
