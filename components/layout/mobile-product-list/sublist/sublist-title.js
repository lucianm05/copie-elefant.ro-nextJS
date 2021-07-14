import classes from '/styles/sublist-title.module.css';
import IconArrowRight from '../../../ui/icons/icon-arrow-right';

const SublistTitle = (props) => {
  const { category, setShowSideSublist } = props;

  const setShowSideSublistHandler = () => {
    setShowSideSublist((prevState) => !prevState);
  };

  return (
    <div className={classes.SublistTitle}>
      <button type='button' aria-label='Închide lista de produse.' onClick={setShowSideSublistHandler}>
        <IconArrowRight />
      </button>
      <p>{category.title}</p>
    </div>
  );
};

export default SublistTitle;
