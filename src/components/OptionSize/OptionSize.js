import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = props => {

  return (
    <ul className={styles.choices}>
      {props.sizesObj.map(size => <li key={size.name}><button onClick={() => props.actionSize(size.name)} type="button" className={clsx(size.name === (props.currentSize) && styles.active)}>{size.name}</button></li>)}
    </ul>

  )
}

export default OptionSize;