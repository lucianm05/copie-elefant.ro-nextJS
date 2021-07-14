import { useContext } from 'react';

import classes from '/styles/mobile-product-list-title.module.css';
import IconCancel from '../../ui/icons/icon-cancel';
import Context from '../../../store/context';

const MobileProductListTitle = () => {
  const context = useContext(Context);
  const setShowSidebar = context.setShowSidebar;

  return (
    <div className={classes.MobileProductListTitle}>
      <p>Categorii produse</p>
      <button onClick={setShowSidebar} type='button' aria-label='Închide lista de produse.'>
        <IconCancel />
      </button>
    </div>
  );
};

export default MobileProductListTitle;
