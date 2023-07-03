import "./picture.css";

const Picture = ({ imgSrc }: any) => {
  return (
    <div className="picture">
      <img src={imgSrc} width={"100%"} height={"100%"} />
    </div>
  );
};

export default Picture;
