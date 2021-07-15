import { useContext } from 'react';

import classes from '/styles/sublist-content.module.css';
import SublistItem from './sublist-item';
import Context from '../../../../../store/context';

const SublistContent = () => {
  const context = useContext(Context);
  const sidebarSublistContent = context.sidebarSublistContent;
  const subcategories = sidebarSublistContent.subcategories;

  return (
    <ul className={classes.SublistContent}>
      {subcategories.map((subcategory) => (
        <SublistItem key={subcategory} subcategory={subcategory} />
      ))}
    </ul>
  );
};

export default SublistContent;