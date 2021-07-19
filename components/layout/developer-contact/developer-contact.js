import Link from 'next/link';

import classes from '/styles/developer-contact.module.css';
import IconGithub from '../../ui/icons/icon-github';
import IconLinkedin from '../../ui/icons/icon-linkedin';
import IconEmail from '../../ui/icons/icon-email';

const FooterDeveloperContact = () => {
  return (
    <section aria-label='Aici se pot găsi detalii despre dezolvatorul acestui website.' className={classes.DeveloperContact}>
      <p>Website realizat de Manea Lucian George în scop demonstrativ.</p>
      <p>Design original preluat de pe elefant.ro. Imagini preluate de pe site-ul https://www.elefant.ro.</p>
      <p>Date contact dezvoltator:</p>
      <div className={classes.DeveloperContactLinks}>
        <Link href='https://github.com/lucianm05/'>
          <a rel='noreferrer noopener' target='_blank' aria-label='https://github.com/lucianm05/' title='https://github.com/lucianm05/'>
            <IconGithub />
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/lucian-george-manea-2587a0202/'>
          <a rel='noreferrer noopener' target='_blank' aria-label='https://www.linkedin.com/in/lucian-george-manea-2587a0202/' title='https://www.linkedin.com/in/lucian-george-manea-2587a0202/'>
            <IconLinkedin />
          </a>
        </Link>
        <Link href='mailto:lucianmg05@gmail.com'>
          <a rel='noreferrer noopener' target='_blank' aria-label='lucianmg05@gmail.com' title='lucianmg05@gmail.com'>
            <IconEmail />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default FooterDeveloperContact;
