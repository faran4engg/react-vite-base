import "./picture.css"

const Picture = ({imgSrc}) => {
  return (
    <div className='picture'>
        <img
      src={imgSrc}
    />
    </div>
  )
}

export default Picture