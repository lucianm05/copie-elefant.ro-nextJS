import classes from '/styles/sublist-content.module.css';
import SublistItem from './sublist-item';


const SublistContent = (props) => {
  const { subcategories } = props;

  return (
    <ul className={classes.SublistContent}>
      {subcategories.map((subcategory) => (
        <SublistItem key={subcategory} subcategory={subcategory} />
      ))}
    </ul>
  );
};

export default SublistContent;