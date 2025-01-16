import style from './Card.module.css';

export const Card = ({children, column, gap}) => {
  const cardClass = style.card + (column? ` ${style.column}`: '')
  const cardStyle = {
    gap: gap || '1rem'
  };

  return (
    <div className={cardClass} style={cardStyle}>
      {children}
    </div>
  );
};
