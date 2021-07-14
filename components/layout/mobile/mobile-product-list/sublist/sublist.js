import { useContext } from 'react';

import classes from '/styles/sublist.module.css';
import SublistTitle from './sublist-title';
import SublistContent from './sublist-content';
import SublistFooter from './sublist-footer';
import Context from '../../../../../store/context';

const Sublist = () => {
  const context = useContext(Context);
  const showSidebarSublist = context.showSidebarSublist;

  return (
    <nav className={classes.SublistNav + ' ' + (showSidebarSublist ? classes.SublistNavActive : '')}>
      <div className={classes.SublistContainer}>
        <SublistTitle />
        <SublistContent />
        <SublistFooter />
      </div>
    </nav>
  );
};

export default Sublist;
