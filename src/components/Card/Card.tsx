import { Picture } from "../../components";
import "./card.css";

const Card = ({ title, text, imgSrc, imgPosition }: any) => {
  return (
    <div className={`card card-with-image-${imgPosition}`}>
      <div className="card-image">
        <Picture imgSrc={imgSrc} />
      </div>

      <div className="card-content">
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>       
      </div>
    </div>
  );
};

export default Card;
