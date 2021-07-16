import { getSales } from '../helpers/api-util';

import Home from '../components/home-page/home-page';

const HomePage = (props) => {
  const { sales } = props;

  if (!sales) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <Home sales={sales} />
    </section>
  );
};

export async function getStaticProps() {
  const sales = await getSales();

  if (!sales) {
    return {
      props: {
        sales: [],
      },
    };
  }

  return {
    props: {
      sales: sales,
    },
    revalidate: 43200,
  };
}

export default HomePage;
