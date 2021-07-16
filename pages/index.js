import HomePage from '../components/home-page/home-page';

const Index = (props) => {
  const { sales } = props;

  let content;

  if(!sales) {
    content = <p>Loading...</p>
  }

  content = <HomePage sales={sales} />

  return (
    <section>
      {content}
    </section>
  );
};

export async function getStaticProps() {
  const result = await fetch('http://localhost:3000/api/homepage/sales');
  const sales = await result.json();

  return {
    props: {
      sales: sales.sales,
    },
  };
}

export default Index;
