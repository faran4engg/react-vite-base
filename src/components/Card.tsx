import "./card.css";

const Card = ({ title, text }) => {
  return (
    <div className="card">
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
    </div>
  );
};

export default Card;
