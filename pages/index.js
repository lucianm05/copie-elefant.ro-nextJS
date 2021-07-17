import { Fragment } from 'react';
import { getSales, getTopCategories } from '../helpers/api-util';

import Home from '../components/home-page/home-page';

const HomePage = (props) => {
  const { sales, topCategories } = props;

  if (!sales) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <Home sales={sales} topCategories={topCategories} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const sales = await getSales();
  const topCategories = await getTopCategories();

  if (!sales || !topCategories) {
    return {
      props: {
        sales: [],
      },
    };
  }

  return {
    props: {
      // sales: sales.sales, // if working with fetch()
      sales: sales, // if working with fs
      // topCategories: topCategories.topCategories, // if working with fetch()
      topCategories: topCategories, // if working with fs
    },
    revalidate: 43200,
  };
}

export default HomePage;
