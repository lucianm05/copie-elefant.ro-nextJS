import { useContext } from 'react';

import classes from '/styles/sublist-title.module.css';
import IconArrowRight from '../../../ui/icons/icon-arrow-right';
import Context from '../../../../store/context';

const SublistTitle = () => {
  const context = useContext(Context);
  const setShowSidebarSublist = context.setShowSidebarSublist;
  const sidebarSublistContent = context.sidebarSublistContent;

  return (
    <div className={classes.SublistTitle}>
      <button type='button' aria-label='Închide lista de produse.' onClick={setShowSidebarSublist}>
        <IconArrowRight />
      </button>
      <p>{sidebarSublistContent.title}</p>
    </div>
  );
};

export default SublistTitle;
