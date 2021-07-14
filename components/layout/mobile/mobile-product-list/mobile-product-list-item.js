import Link from 'next/link';
import { useContext } from 'react';

import classes from '/styles/mobile-product-list-item.module.css';
import IconArrowRight from '../../../ui/icons/icon-arrow-right';
import Context from '../../../../store/context';

const MobileProductListItem = (props) => {
  const { category } = props;
  const context = useContext(Context);
  const setShowSidebarSublist = context.setShowSidebarSublist;
  const setSidebarSublistContent = context.setSidebarSublistContent;

  const setSidebarHandler = (event) => {
    setShowSidebarSublist();
    setSidebarSublistContent(event);
  }

  return (
    <li className={classes.MobileProductListItem} onClick={setSidebarHandler}>
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
