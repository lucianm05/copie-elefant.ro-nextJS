import classes from '/styles/mobile-product-list-title.module.css';
import IconCancel from '../../ui/icons/icon-cancel';

const MobileProductListTitle = (props) => {
  const { setShowSidelistHandler } = props;

  return (
    <div className={classes.MobileProductListTitle}>
      <p>Categorii produse</p>
      <button onClick={setShowSidelistHandler} type='button' aria-label='Închide lista de produse.'>
        <IconCancel />
      </button>
    </div>
  );
};

export default MobileProductListTitle;
