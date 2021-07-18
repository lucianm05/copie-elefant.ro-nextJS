import { useState } from 'react';

import classes from '/styles/benefits.module.css';
import IconArrowLeft from '../../ui/icons/icon-arrow-left';
import IconArrowRight from '../../ui/icons/icon-arrow-right';
import BenefitsCarouselInnerCenter from './benefits-carousel-inner-center';

const Benefits = (props) => {
  const { benefits } = props;
  const [positionX, setPositionX] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const setCurrentSlideHandler = (event) => {
    const target = event.target;

    if (target.dataset.carouselrole) {
      const targetRole = target.dataset.carouselrole;
      const maxValue = benefits.length - 1;

      if (targetRole === 'decrement') {
        positionX === 0 ? setPositionX(-100 * maxValue) : setPositionX(positionX + 100);
        currentSlide === 0 ? setCurrentSlide(maxValue) : setCurrentSlide(() => currentSlide - 1);
      } else if (targetRole === 'increment') {
        positionX === -100 * maxValue ? setPositionX(0) : setPositionX(positionX - 100);
        currentSlide === maxValue ? setCurrentSlide(0) : setCurrentSlide(() => currentSlide + 1);
      } else {
        for (let i = 0; i <= maxValue; i++) {
          if (+targetRole === i) {
            setPositionX(-100 * +targetRole);
            setCurrentSlide(+targetRole);
          }
        }
      }
    }
  };

  const carouselInnerStyle = { transform: `translateX(${positionX}%)` };

  return (
    <section aria-label='Vezi beneficiile de care poți dispune' className={classes.Benefits}>
      <div className={classes.BenefitsCarousel}>
        <div className={classes.BenefitsCarouselInner}>
          <div className={classes.BenefitsCarouselInnerLeft} tabIndex='0' aria-label='Apasă pentru a afișa diapozitivul anterior' data-carouselrole='decrement' onClick={setCurrentSlideHandler}>
            <IconArrowLeft />
          </div>
          <BenefitsCarouselInnerCenter benefits={benefits} style={carouselInnerStyle} />
          <div className={classes.BenefitsCarouselInnerRight} tabIndex='0' aria-label='Apasă pentru a afișa diapozitivul următor' data-carouselrole='increment' onClick={setCurrentSlideHandler}>
            <IconArrowRight />
          </div>
          <div className={classes.BenefitsCarouselControls}>
            {benefits.map((benefit, index) => (
              <button
                key={benefit._id}
                type='button'
                aria-label={`Apasă pentru a naviga la detaliile despre beneficiul ${benefit.title}`}
                title={`Apasă pentru a naviga la detaliile despre beneficiul ${benefit.title}`}
                data-carouselrole={`${index}`}
                onClick={setCurrentSlideHandler}
                style={{ backgroundColor: currentSlide === index ? '#333' : '#eee' }}>
                <span className='ScreenReadersOnly' aria-label={`Apasă pentru a naviga la detaliile despre beneficiul ${benefit.title}`}>{`Apasă pentru a naviga la detaliile despre beneficiul ${benefit.title}`}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
