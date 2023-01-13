import styles from './ProductOptions.module.scss';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';

const ProductOptions = props => {

  const summary = () => {
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
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize key={props.id} sizesObj={props.sizesObj} actionSize={props.actionSize} currentSize={props.currentSize} />
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor key={props.id} colorsArr={props.colorsArr} actionColor={props.actionColor} currentColor={props.currentColor} />
      </div>
      <Button className={styles.button}>
        <span onClick={() => summary()} className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
}

export default ProductOptions;