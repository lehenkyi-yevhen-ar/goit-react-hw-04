import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

const ImageGallery = ({
  images,
  totalImages,
  hasSearched,
  openModal,
}) => {
  return (
    <div>
      {totalImages === 0 && hasSearched && (
        <h2 className={s.warning}>
          Nothing found
        </h2>
      )}
      <ul className={s.list}>
        {images.map((image) => (
          <li key={image.id} className={s.item}>
            <ImageCard
              image={image}
              onClick={() => openModal(image)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageGallery
