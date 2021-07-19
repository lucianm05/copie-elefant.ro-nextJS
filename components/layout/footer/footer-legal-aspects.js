import Link from 'next/link';

import classes from '/styles/footer-legal-aspects.module.css';

const FooterLegalAspects = () => {
  return (
    <section aria-label='Aici poți găsi informații cu privire la diferite aspecte legale' className={classes.FooterLegalAspects}>
      <div>
        <p>Copyright @ 2021 Elefant Online S.A.</p>
      </div>
      <div className={classes.FooterLegalAspectsLinks}>
        <Link href='#'>
          <a target='_blank' rel='noreferrer noopener'>
            ANPC
          </a>
        </Link>
        <Link href='#'>
          <a target='_blank' rel='noreferrer noopener'>
            ANSPDCP: Comunicate GDPR
          </a>
        </Link>
        <Link href='#'>
          <a target='_blank' rel='noreferrer noopener'>
            Soluționare litigii
          </a>
        </Link>
      </div>
    </section>
  );
};

export default FooterLegalAspects;
