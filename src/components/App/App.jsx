import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
    <>
      <SearchBar />
      <ErrorMessage />
      <Loader />
      <ImageGallery />
      <ImageModal />
      <LoadMoreBtn />
    </>
  );
}

export default App;
