import './index.css'

const AddThambnailImage = props => {
  const {itemDetails, onClickThambnail, isActive} = props
  const {
    thumbnailUrl,
    thumbnailAltText,
    imageUrl,
    imageAltText,
    id,
  } = itemDetails
  const activeThumbnail = isActive === id ? 'removeOpacity' : ''

  const onClickImage = () => {
    onClickThambnail(imageUrl, imageAltText, id)
  }
  return (
    <li>
      <button className="thumnailbtn" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`image ${activeThumbnail}`}
        />
      </button>
    </li>
  )
}
export default AddThambnailImage
