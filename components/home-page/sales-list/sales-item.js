import Link from 'next/link';
import Image from 'next/image';

import classes from '/styles/sales-item.module.css';

const SalesListItem = (props) => {
  const { sale } = props;

  return (
    <li className={classes.SalesListItem}>
      <Link href='#'>
        <a title={`Vezi produsele reduse din ${sale.title}`}>
          <div className={classes.SalesListContent}>
            <Image src={sale.imageUrl} alt={`Vezi produsele reduse din ${sale.title}`} width={390} height={293} />
            <h2>{sale.title}</h2>
            <hr />
          </div>
        </a>
      </Link>
    </li>
  );
};

export default SalesListItem;
