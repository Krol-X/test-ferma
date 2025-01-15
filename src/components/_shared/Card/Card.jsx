import style from './Card.module.css';

export const Card = ({children, column}) => {
  const cardClass = `${style.card}${column? '-column': ''}`

  return (
    <div className={cardClass}>
      {children}
    </div>
  );
};
