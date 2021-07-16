import classes from '/styles/home-page.module.css';
import Hero from './hero/hero';
import SalesList from './product-list/sales-list';

const HomePage = (props) => {
  const { sales } = props;

  return (
    <section className={classes.HomePage}>
      <Hero />
      <SalesList sales={sales} />
    </section>
  );
};

export default HomePage;
