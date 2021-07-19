import Link from 'next/link';

import classes from '/styles/footer-helpful-links.module.css';
import IconArrowRight from '../../ui/icons/icon-arrow-right';

const FooterHelpfulLinks = () => {
  const footerHelpfulLinks = ['Despre Elefant.ro', 'Blog', 'Suport și Contact', 'Măsuri de prevenție', 'Program de recomandări', 'Termeni și condiții', 'Politica de confidențialitate', 'Politica cookies', 'Regulamente', 'Marketplace'];

  return (
    <section aria-label='Aici poți găsi mai multe link-uri utile' className={classes.FooterHelpfulLinks}>
      {footerHelpfulLinks.map((link) => (
        <Link key={link} href='#'>
          <a className={classes.FooterLink} aria-label={`Vezi detalii în legătură cu ${link}`} title={`Vezi detalii în legătură cu ${link}`}>
            <p>{link}</p>
            <IconArrowRight />
          </a>
        </Link>
      ))}
    </section>
  );
};

export default FooterHelpfulLinks;
