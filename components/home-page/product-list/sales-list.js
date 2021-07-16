import classes from '/styles/sales-list.module.css';
import SalesListItem from './sales-item';

const SalesList = (props) => {
  const { sales } = props;

  return (
    <ul className={classes.SalesList}>
      {sales.map((sale) => (
        <SalesListItem key={sale._id} sale={sale} />
      ))}
    </ul>
  );
};

export default SalesList;
