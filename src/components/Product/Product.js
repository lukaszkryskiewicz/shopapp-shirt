import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';


const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const changeSize = size => setCurrentSize(size);
  const changeColor = color => setCurrentColor(color);
  const getPrice = useMemo(() => {
    const currentIndex = props.sizes.findIndex((size) => size.name === currentSize)
    return (props.basePrice + props.sizes[currentIndex].additionalPrice)
  }, [currentSize, props.basePrice, props.sizes])


  return (
    <article className={styles.product}>
      <ProductImage key={props.id} title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductOptions key={props.id} id={props.id} sizesObj={props.sizes} actionSize={changeSize} currentSize={currentSize} colorsArr={props.colors} actionColor={changeColor} currentColor={currentColor} getPrice={getPrice} title={props.title} />
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