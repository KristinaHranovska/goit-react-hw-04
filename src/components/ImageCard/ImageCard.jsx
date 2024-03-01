const ImageCard = ({
  imageItem: {
    alt_description,
    urls: { small, regular },
  },
}) => {
  return (
    <div>
      <img src={small} alt={alt_description} width="360" />
    </div>
  );
};

export default ImageCard;
