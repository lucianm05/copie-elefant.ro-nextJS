import Link from 'next/link';

import classes from '/styles/benefits-carousel-inner-center.module.css';
import IconGps from '../../ui/icons/icon-gps';
import { Fragment } from 'react';

const BenefitsCarouselInnerCenter = (props) => {
  const { benefits, style } = props;

  return (
    <Fragment>
      {benefits.map((benefit) => (
        <div key={benefit._id} className={classes.BenefitsCarouselInnerCenter} style={style}>
          <IconGps />
          <h2>{benefit.title}</h2>
          <h3>{benefit.subtitle}</h3>
          <Link href='#'>
            <a>{benefit.buttonText}</a>
          </Link>
        </div>
      ))}
    </Fragment>
  );
};

export default BenefitsCarouselInnerCenter;
