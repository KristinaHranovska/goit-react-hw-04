import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ imageList }) => {
  return (
    <ul>
      {imageList.map((img) => (
        <li key={img.id}>
          <ImageCard imageItem={img} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
