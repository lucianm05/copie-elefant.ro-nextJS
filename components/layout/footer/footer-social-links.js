import Link from 'next/link';

import classes from '/styles/footer-social-links.module.css';
import IconFacebook from '../../ui/icons/icon-facebook';
import IconInstagram from '../../ui/icons/icon-instagram';

const FooterSocialLinks = () => {
  return (
    <section aria-label='Aici poți găsi rețelele de socializare unde poți interacționa cu noi' className={classes.FooterSocialLinks}>
      <Link href='#'>
        <a className={classes.FooterSocialLink} aria-label='Vizitează pagina noastră de Facebook' title='Vizitează pagina noastră de Facebook'>
          <IconFacebook />
        </a>
      </Link>
      <Link href='#'>
        <a className={classes.FooterSocialLink} aria-label='Vizitează profilul nostru de Instragram' title='Vizitează profilul nostru de Instragram'>
          <IconInstagram />
        </a>
      </Link>
    </section>
  );
};

export default FooterSocialLinks;
