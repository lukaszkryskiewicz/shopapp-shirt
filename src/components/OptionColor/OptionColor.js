import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = props => {
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <ul className={styles.choices}>
      {props.colorsArr.map(color => <li key={color}><button type="button" onClick={() => props.actionColor(color)} className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)} /></li>)}
    </ul>

  )
}

export default OptionColor;