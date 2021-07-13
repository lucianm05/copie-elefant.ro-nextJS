import Link from 'next/link';

import classes from '/styles/mobile-product-list.module.css';
import MobileProductListItem from './mobile-product-list-item';
import MobileProductListTitle from './mobile-product-list-title';
import MobileProductListSpecials from './mobile-product-list-specials';
import MobileProductListMyAccount from './mobile-product-list-my-account';

const MobileProductList = (props) => {
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
    <nav className={classes.MobileProductListNav + ' ' + (showSidelist ? classes.Active : '')}>
      <div className={classes.MobileProductListContainer}>
        <MobileProductListTitle setShowSidelistHandler={setShowSidelistHandler} />
        <ul className={classes.MobileProductList}>
          {categories.map((category) => (
            <MobileProductListItem key={category.title} category={category} />
          ))}
        </ul>
        <MobileProductListSpecials />
        <MobileProductListMyAccount />
      </div>
    </nav>
  );
};

export default MobileProductList;
