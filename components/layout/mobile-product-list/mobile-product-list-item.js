import Link from 'next/link';

import classes from '/styles/mobile-product-list-item.module.css';
import IconArrowRight from '../../ui/icons/icon-arrow-right';

const MobileProductListItem = (props) => {
  const { category, showSideSublistHandler } = props;

  return (
    <li className={classes.MobileProductListItem} onClick={showSideSublistHandler}>
      <Link href='#'>
        <a className={classes.MobileProductListItemLink} title={`Vezi produsele din ${category.title}`} data-id={category.id}>
          {category.title}
          <IconArrowRight />
        </a>
      </Link>
    </li>
  );
};

export default MobileProductListItem;
