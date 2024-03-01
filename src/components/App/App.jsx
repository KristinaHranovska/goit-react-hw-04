import SearchBar from "../SearchBar/SearchBar";
import { getImagesUnplash } from "../../images-api";
import { useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleSearch = async (searchQuery) => {
    try {
      setImages([]);
      setPage(1);
      setSearch(searchQuery);
      const dataImg = await getImagesUnplash(searchQuery, 1);
      setImages(dataImg.results);
    } catch {
      console.log("Error");
    } finally {
      console.log("Hello");
    }
  };

  const handleLoadMore = async () => {
    try {
      const nextPage = page + 1;
      const dataImages = await getImagesUnplash(search, nextPage);
      setImages((prevImages) => {
        return [...prevImages, ...dataImages.results];
      });
      setPage(nextPage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery imageList={images} />
      <LoadMoreBtn onClick={handleLoadMore} />
      <ErrorMessage />
      <ImageModal />
      <Loader />
    </>
  );
}

export default App;
