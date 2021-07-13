import Image from 'next/image';

import classes from '/styles/logo.module.css';

const LogoMobile = () => {
  return (
    <div className={classes.Logo}>
      <Image src='/images/elefant-logo-mobile.svg' alt='Imagine cu logo-ul elefant.' title='Imagine cu logo-ul elefant.' width={140} height={29} quality={100} />
    </div>
  );
};

export default LogoMobile;
