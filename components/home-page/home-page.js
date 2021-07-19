import classes from '/styles/home-page.module.css';
import Hero from './hero/hero';
import SalesList from './sales-list/sales-list';
import TopCategoriesList from './top-categories/top-categories-list';
import Benefits from './benefits/benefits';

const HomePage = (props) => {
  const { sales, topCategories, benefits } = props;

  return (
    <section className={classes.HomePage} aria-label='Pagina principală elefant.ro'>
      <Hero />
      <SalesList sales={sales} />
      <TopCategoriesList topCategories={topCategories} />
      <Benefits benefits={benefits} />
    </section>
  );
};

export default HomePage;
