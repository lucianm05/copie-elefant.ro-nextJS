import classes from '/styles/sublist.module.css';
import SublistTitle from './sublist-title';
import SublistContent from './sublist-content';
import SublistFooter from './sublist-footer';

const Sublist = (props) => {
  const { category, showSideSublist, setShowSideSublist } = props;
  const subcategories = category.subcategories;

  return (
    <nav className={classes.SublistNav + ' ' + (showSideSublist ? classes.Active : '')}>
      <div className={classes.SublistContainer}>
        <SublistTitle category={category} setShowSideSublist={setShowSideSublist} />
        <SublistContent subcategories={subcategories} />
        <SublistFooter />
      </div>
    </nav>
  );
};

export default Sublist;
