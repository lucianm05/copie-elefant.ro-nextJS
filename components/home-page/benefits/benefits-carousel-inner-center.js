import Link from 'next/link';

import classes from '/styles/benefits-carousel-inner-center.module.css';
import IconGps from '../../ui/icons/icon-gps';

const BenefitsCarouselInnerCenter = (props) => {
  const { benefits, currentSlide } = props;

  return (
    <div className={classes.BenefitsCarouselInnerCenter}>
      <IconGps />
      <h2>{benefits[currentSlide].title}</h2>
      <h3>{benefits[currentSlide].subtitle}</h3>
      <Link href='#'>
        <a>{benefits[currentSlide].buttonText}</a>
      </Link>
    </div>
  );
};

export default BenefitsCarouselInnerCenter;
