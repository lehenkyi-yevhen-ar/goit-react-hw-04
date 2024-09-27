import { useEffect, useState } from "react"
import SearchBar from "./components/SearchBar/SearchBar"
import { fetchImages } from "./services/api"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import Loader from "./components/Loader/Loader"
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn"
import ImageModal from "./components/ImageModal/ImageModal"

const App = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] =
    useState(false)
  const [isError, setIsError] = useState(false)
  const [query, setQuery] = useState("")
  const [page, setPage] = useState("1")
  const [totalImages, setTotalImages] =
    useState(0)
  const [hasSearched, setHasSearched] =
    useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] =
    useState(null)

  useEffect(() => {
    if (!query) {
      return
    }
    const getData = async () => {
      try {
        setIsError(false)
        setIsLoading(true)
        const data = await fetchImages(
          query,
          page
        )
        console.log(data)

        setImages((prev) => [
          ...prev,
          ...data.results,
        ])
        setTotalImages(data.total)
      } catch (error) {
        setIsError(true)
        console.error(error)
      } finally {
        setIsLoading(false)
        setHasSearched(true)
      }
    }
    getData()
  }, [query, page])

  const handleSetQuery = (searchValue) => {
    setQuery(searchValue)
    setImages([])
    setPage(1)
  }

  const openModal = (image) => {
    document.body.style.overflow = "hidden"
    setSelectedImage(image)
    setIsOpen(true)
  }

  const closeModal = () => {
    document.body.style.overflow = "unset"
    setIsOpen(false)
    setSelectedImage(null)
  }

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      <ImageGallery
        images={images}
        totalImages={totalImages}
        hasSearched={hasSearched}
        openModal={openModal}
      />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length !== 0 && (
        <LoadMoreBtn setPage={setPage} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        image={selectedImage}
      />
    </>
  )
}

export default App
