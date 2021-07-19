import Link from 'next/link';
import Image from 'next/image';

import classes from '/styles/top-categories-item.module.css';

const TopCategoriesItem = (props) => {
  const { topCategory } = props;

  return (
    <li className={classes.TopCategoriesItem}>
      <Link href='#'>
        <a title={`Vezi toate produsele din categoria ${topCategory.title}`}>
          <div className={classes.TopCategoriesItemContent}>
            <Image src={topCategory.imageUrl} alt={`Vezi toate produsele din categoria ${topCategory.title}`} width={162} height={162} quality={100} />
            <h2>{topCategory.title}</h2>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default TopCategoriesItem;
