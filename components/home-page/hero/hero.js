import Image from 'next/image';
import Link from 'next/link';

import classes from '/styles/hero.module.css';

const Hero = () => {
  return (
    <section className={classes.Hero}>
      <Link href='#'>
        <a title='La elefant este timpul pentru Summer Black Friday. Apasă pentru a vedea promoțiile.'>
          <div className={classes.HeroImageMobile}>
            <Image src='/images/hero-mobile.webp' width={850} height={708} alt='La elefant este timpul pentru Summer Black Friday. Apasă pentru a vedea promoțiile.' layout='responsive' priority={true} />
          </div>
          <div className={classes.HeroImageDesktop}>
            <Image src='/images/hero-desktop.webp' width={1200} height={500} alt='La elefant este timpul pentru Summer Black Friday. Apasă pentru a vedea promoțiile.' />
          </div>
        </a>
      </Link>
    </section>
  );
};

export default Hero;
