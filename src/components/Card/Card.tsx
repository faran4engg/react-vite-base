import { Picture } from "../../components";
import "./card.css";

const Card = ({ title, text, imgSrc, position }: any) => {
  return (
    <div className="card">
      {position === "top" ? <Picture imgSrc={imgSrc} /> : <></>}

      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>

      {position === "bottom" ? <Picture imgSrc={imgSrc} /> : <></>}
    </div>
  );
};

export default Card;
