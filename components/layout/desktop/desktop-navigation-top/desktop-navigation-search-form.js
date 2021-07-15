import classes from '/styles/desktop-navigation-search-form.module.css';
import IconSearch from '../../../ui/icons/icon-search';

const DesktopNavigationSearchForm = () => {
  return (
    <form action='#' method='#' className={classes.DesktopNavigationSearchForm}>
      <fieldset className={classes.DesktopNavigationSearchFieldset}>
        <legend className={'ScreenReadersOnly'}>Caută pe site-ul elefant.ro:</legend>
        <label className={classes.DesktopNavigationSearchLabel}>
          <span className={'ScreenReadersOnly'}>Introdu produsul căutat:</span>
          <input className={classes.DesktopNavigationSearchInput} placeholder='Caută produsul dorit' type='search' id='desktopSearch' name='desktopSearch' />
          <button className={classes.DesktopNavigationSearchButton} type='button' aria-label='Buton pentru căutare produs.'>
            <IconSearch />
          </button>
        </label>
      </fieldset>
    </form>
  );
};

export default DesktopNavigationSearchForm;