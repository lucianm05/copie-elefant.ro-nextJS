import Link from 'next/link';

import classes from '/styles/navigation-sidelist.module.css';
import NavigationSidelistItem from './navigation-sidelist-item';
import IconCancel from '../ui/icons/icon-cancel';
import IconProfilePicture from '../ui/icons/icon-profile-picture';
import IconArrowRight from '../ui/icons/icon-arrow-right';
import IconDiamond from '../ui/icons/icon-diamond';
import IconGps from '../ui/icons/icon-gps';

const MobileSidelist = (props) => {
  const { showSidelist, setShowSidelist } = props;

  const setShowSidelistHandler = () => {
    setShowSidelist((prevState) => !prevState);
  };

  const categories = [
    {
      title: 'Carte',
      subcategories: ['Cărțile lunii iulie', 'Cartea bate filmul', 'Târg de carte pentru copii', 'Târgul  cărților de dezvoltare personală'],
    },
    {
      title: 'Carte străină',
      subcategories: ['Foreign books'],
    },
    {
      title: 'Jucării, Copii & Bebe',
      subcategories: ['Jucării', 'Categorii', 'LEGO', 'Branduri populare', 'Articole bebe', 'Categorii', 'Scutece', 'Branduri populare'],
    },
    {
      title: 'Parfumuri',
      subcategories: ['Parfumuri pentru femei', 'Top branduri femei', 'Premium brands femei', 'Parfumuri Unisex', 'Parfumuri pentru bărbați', 'Top branduri bărbați', 'Premium brands bărbați'],
    },
  ];

  return (
    <nav className={classes.MobileSidelistNav + ' ' + (showSidelist ? classes.Active : '')}>
      <div className={classes.MobileSidelistContainer}>
        <div className={classes.MobileSidelistTitle}>
          <p>Categorii produse</p>
          <button onClick={setShowSidelistHandler} type='button' aria-label='Închide lista de produse.'>
            <IconCancel />
          </button>
        </div>
        <ul className={classes.MobileSidelist}>
          {categories.map((category) => (
            <NavigationSidelistItem key={category.title} category={category} />
          ))}
        </ul>
        <div className={classes.MobileSidelistSpecials}>
          <Link href='#'>
            <a title='Verifică beneficiile contului elefant premium.' aria-label='Verifică beneficiile contului elefant premium.'>
              <div>
                <IconDiamond />
                <p>Elefant Premium</p>
              </div>
              <div>
                <IconArrowRight />
              </div>
            </a>
          </Link>
          <Link href='#'>
            <a title='Verifică punctele de livrare.' aria-label='Verifică punctele de livrare.'>
              <div>
                <IconGps />
                <p>Puncte Livrare</p>
              </div>
              <div>
                <IconArrowRight />
              </div>
            </a>
          </Link>
        </div>
        <Link href='#'>
          <a className={classes.MobileSidelistMyAccountContainer} title='Înregistrează sau autentifică un utilizator' aria-label='Înregistrează sau autentifică un utilizator'>
            <div className={classes.MobileSidelistMyAccount}>
              <div>
                <IconProfilePicture />
                <p>Contul meu</p>
              </div>
              <IconArrowRight />
            </div>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default MobileSidelist;
