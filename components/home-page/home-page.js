import classes from '/styles/home-page.module.css';
import Hero from './hero/hero';
import SalesList from './product-list/sales-list';
import TopCategoriesList from './top-categories/top-categories-list';

const HomePage = (props) => {
  const { sales, topCategories } = props;

  return (
    <section className={classes.HomePage} aria-label='Pagina principală elefant.ro'>
      <Hero />
      <SalesList sales={sales} />
      <TopCategoriesList topCategories={topCategories} />
    </section>
  );
};

export default HomePage;
