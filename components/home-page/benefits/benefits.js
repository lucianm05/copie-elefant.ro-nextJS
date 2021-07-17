import { useState } from 'react';

import classes from '/styles/benefits.module.css';
import IconArrowLeft from '../../ui/icons/icon-arrow-left';
import IconArrowRight from '../../ui/icons/icon-arrow-right';
import BenefitsCarouselInnerCenter from './benefits-carousel-inner-center';

const Benefits = (props) => {
  const { benefits } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const setCurrentSlideHandler = (event) => {
    const target = event.target;
    const targetRole = target.dataset.carouselrole;

    if (targetRole) {
      const maxValue = benefits.length - 1;

      switch (targetRole) {
        case 'decrement':
          {
            if (currentSlide === 0) {
              setCurrentSlide(maxValue);
            } else if (1 <= currentSlide <= maxValue) {
              setCurrentSlide(() => currentSlide - 1);
            }
          }
          break;
        case 'increment':
          {
            if (currentSlide < maxValue) {
              setCurrentSlide(() => currentSlide + 1);
            } else if (currentSlide === maxValue) {
              setCurrentSlide(0);
            }
          }
          break;
      }
    }
  };

  return (
    <section aria-label='Vezi beneficiile de care poți dispune' className={classes.Benefits}>
      <div className={classes.BenefitsCarousel}>
        <div className={classes.BenefitsCarouselInner}>
          <div className={classes.BenefitsCarouselInnerLeft} tabIndex='0' aria-label='Apasă pentru a afișa diapozitivul anterior' data-carouselrole='decrement' onClick={setCurrentSlideHandler}>
            <IconArrowLeft />
          </div>
          <BenefitsCarouselInnerCenter benefits={benefits} currentSlide={currentSlide} />
          <div className={classes.BenefitsCarouselInnerRight} tabIndex='0' aria-label='Apasă pentru a afișa diapozitivul următor' data-carouselrole='increment' onClick={setCurrentSlideHandler}>
            <IconArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
