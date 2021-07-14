import Link from 'next/link'

import classes from '/styles/sublist-item.module.css';
import IconArrowRight from '../../../ui/icons/icon-arrow-right';

const SublistItem = (props) => {
  const {subcategory} = props;

  return (
    <li className={classes.SublistItem}>
      <Link href='#'>
        <a className={classes.SublistItemLink} title={`Vezi toate produsele din ${subcategory}`}>
          {subcategory}
          <IconArrowRight />
        </a>
      </Link>
    </li>
  );
};

export default SublistItem;