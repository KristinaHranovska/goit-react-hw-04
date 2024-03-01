import { getImagesUnplash } from "../../images-api";
import { useEffect, useState } from "react";
import Modal from "react-modal";

import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import LoaderMore from "../Loader/LoaderMore";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleSearch = async (searchQuery) => {
    try {
      setLoading(true);
      setImages([]);
      setPage(1);
      setSearch(searchQuery);
      const dataImg = await getImagesUnplash(searchQuery, 1);
      setTotalPages(dataImg.total_pages);
      setImages(dataImg.results);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      const dataImages = await getImagesUnplash(search, nextPage);
      setImages((prevImages) => {
        return [...prevImages, ...dataImages.results];
      });
      setPage(nextPage);
    } catch (error) {
      setError(true);
    } finally {
      setLoadingMore(false);
    }
  };

  const isVisible = () => {
    return totalPages !== 0 && totalPages !== page;
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery imageList={images} openModal={openModal} />
      <LoadMoreBtn onClick={handleLoadMore} isVisible={isVisible} />
      {loadingMore && <LoaderMore />}

      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage}
        onCloseModal={closeModal}
      />
    </>
  );
}

export default App;
