import SearchBar from "../SearchBar/SearchBar";
import { getImagesUnplash } from "../../images-api";
import { useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoaderMore from "../Loader/LoaderMore";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

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
    return totalPages !== 1 && totalPages !== page;
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery imageList={images} />
      <LoadMoreBtn onClick={handleLoadMore} isVisible={isVisible} />
      {loadingMore && <LoaderMore />}

      <ImageModal />
    </>
  );
}

export default App;
