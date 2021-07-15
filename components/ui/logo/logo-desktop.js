import Image from 'next/image';

import classes from '/styles/logo.module.css';

const LogoDesktop = () => {

  return <div className={classes.Logo + ' ' + classes.DesktopOnly}>
    <Image src='/images/elefant-logo.png' alt='Imagine cu logo-ul elefant.' title='Imagine cu logo-ul elefant.' width={416} height={82} quality={100} />
  </div>
}

export default LogoDesktop;