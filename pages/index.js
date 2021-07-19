import { Fragment } from 'react';
import { getSales, getTopCategories, getBenefits } from '../helpers/api-util';

import Home from '../components/home-page/home-page';

const HomePage = (props) => {
  const { sales, topCategories, benefits } = props;
  if (!sales) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <Home sales={sales} topCategories={topCategories} benefits={benefits} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const sales = await getSales();
  const topCategories = await getTopCategories();
  const benefits = await getBenefits();

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
      // benefits: benefits.benefits, // if working with fetch()
      benefits: benefits, // if working with fs
    },
    revalidate: 43200,
  };
}

export default HomePage;
