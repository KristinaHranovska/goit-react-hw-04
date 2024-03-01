import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ imageList, openModal }) => {
  const imageClick = (event) => {
    const imgItem = event.target.closest("li");
    if (imgItem) {
      const imgID = imgItem.dataset.id;
      const clickedImageItem = imageList.find((image) => image.id === imgID);
      if (clickedImageItem) {
        openModal(clickedImageItem);
      }
    }
  };
  return (
    <>
      {imageList.length > 0 && (
        <ul onClick={imageClick}>
          {imageList.map((img) => (
            <li key={img.id} data-id={img.id}>
              <ImageCard imageItem={img} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ImageGallery;
