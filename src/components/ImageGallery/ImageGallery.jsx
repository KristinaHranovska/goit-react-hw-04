import ImageCard from "../ImageCard/ImageCard";
// import { nanoid } from "nanoid";

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
