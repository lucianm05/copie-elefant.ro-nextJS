import { Fragment } from 'react';

import MainNavigation from './main-navigation';
import Footer from './footer/footer';
import DeveloperContact from './developer-contact/developer-contact';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
      <DeveloperContact />
    </Fragment>
  );
};

export default Layout;
