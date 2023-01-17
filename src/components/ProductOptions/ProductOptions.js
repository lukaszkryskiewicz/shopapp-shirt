import styles from './ProductOptions.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const ProductOptions = props => {

  const summary = (e) => {
    e.preventDefault();
    console.log(`
        Summary
        =============
        Name: ${props.title}
        Price: ${props.getPrice}
        Size: ${props.currentSize}
        Color: ${props.currentColor}
        `);
  }

  return (
    <form onSubmit={(summary)}>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize key={props.id} sizesObj={props.sizesObj} actionSize={props.actionSize} currentSize={props.currentSize} />
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor key={props.id} colorsArr={props.colorsArr} actionColor={props.actionColor} currentColor={props.currentColor} />
      </div>
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

ProductOptions.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  colorsArr: PropTypes.array.isRequired,
  sizesObj: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  actionSize: PropTypes.func.isRequired,
  actionColor: PropTypes.func.isRequired,
  getPrice: PropTypes.number.isRequired,
};

export default ProductOptions;