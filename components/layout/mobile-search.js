import classes from '/styles/mobile-search.module.css';
import IconSearch from '../ui/icons/icon-search';

const MobileSearch = (props) => {
  const { navigationVisible } = props;

  return (
    <div className={classes.MobileSearch + ' ' + (!navigationVisible ? classes.MobileSearchAbove : '')}>
      <form action='#' method='#' className={classes.MobileSearchForm}>
        <fieldset className={classes.MobileSearchFieldset}>
          <legend className={'ScreenReadersOnly'}>Caută pe site-ul elefant.ro:</legend>
          <label className={classes.MobileSearchLabel}>
            <span className={'ScreenReadersOnly'}>Introdu produsul căutat:</span>
            <input className={classes.MobileSearchInput} placeholder='Caută produsul dorit' type='search' id='mobileSearch' name='mobileSearch' />
            <button className={classes.MobileSearchButton} type='button' aria-label='Buton pentru căutare produs.'>
              <IconSearch />
            </button>
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default MobileSearch;
