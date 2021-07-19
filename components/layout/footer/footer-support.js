import Link from 'next/link';

import classes from '/styles/footer-support.module.css';
import IconEmail from '../../ui/icons/icon-email';
import IconQuestionMark from '../../ui/icons/icon-question-mark';

const FooterSupport = () => {
  return (
    <section aria-label='Aici poți găsi detaliile necesare în caz că întâmpini probleme' className={classes.FooterSupport}>
      <h2>Suport</h2>
      <div>
        <Link href='#'>
          <a className={classes.FooterLink} aria-label='Contactează echipa noastră pentru eventuale întrebări' title='Contactează echipa noastră pentru eventuale întrebări'>
            <IconEmail />
            <p>Contactează-ne</p>
          </a>
        </Link>
        <Link href='#'>
          <a className={classes.FooterLink} aria-label='Vezi întrebările frecvente adresate de clienți' title='Vezi întrebările frecvente adresate de clienți'>
            <IconQuestionMark />
            <p>Întrebări frecvente</p>
          </a>
        </Link>
      </div>
      <p>Info consumator: 021.9551</p>
    </section>
  );
};

export default FooterSupport;
