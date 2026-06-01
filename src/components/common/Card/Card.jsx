import styles from './Card.module.css';

function Card(props) {
  return (
    <div className={ props.size === "single" 
      ? styles.singleCard 
      : styles.gridCard 
    }>
      {props.children}
    </div>
  );
}

export default Card;