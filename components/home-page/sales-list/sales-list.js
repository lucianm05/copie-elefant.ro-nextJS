import classes from '/styles/sales-list.module.css';
import SalesListItem from './sales-item';

const SalesList = (props) => {
  const { sales } = props;

  return (
    <section aria-label='Lista cu produsele cu preț redus în momentul de față'>
      <ul className={classes.SalesList}>
        {sales.map((sale) => (
          <SalesListItem key={sale._id} sale={sale} />
        ))}
      </ul>
    </section>
  );
};

export default SalesList;
