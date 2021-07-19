import Link from 'next/link';

import classes from '/styles/footer.module.css';
import FooterSupport from './footer-support';
import FooterSocialLinks from './footer-social-links';
import FooterHelpfulLinks from './footer-helpful-links';
import FooterLegalAspects from './footer-legal-aspects';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <FooterSupport />
      <FooterSocialLinks />
      <FooterHelpfulLinks />
      <FooterLegalAspects />
    </footer>
  );
};

export default Footer;
