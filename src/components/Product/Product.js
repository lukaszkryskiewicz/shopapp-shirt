import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Product = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const changeSize = size => setCurrentSize(size);
  const changeColor = color => setCurrentColor(color);
  const getPrice = () => {
    const currentIndex = props.sizes.findIndex((size) => size.name === currentSize)
    return (props.basePrice + props.sizes[currentIndex].additionalPrice)
  }


  const summary = () => {
    console.log(`
        Summary
        =============
        Name: ${props.title}
        Price: ${getPrice()}
        Size: ${currentSize}
        Color: ${currentColor}
        `);
  }


  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={size.name}><button onClick={() => changeSize(size.name)} type="button" className={clsx(size.name === currentSize && styles.active)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li key={color}><button type="button" onClick={() => changeColor(color)} className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} /></li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span onClick={() => summary()} className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div >
    </article >
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    additionalPrice: PropTypes.number.isRequired,
  })),

};

export default Product;