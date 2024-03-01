import { AiOutlineLike } from "react-icons/ai";
const ImageCard = ({
  imageItem: {
    alt_description,
    likes,
    urls: { small },
    user: {
      name,
      social: { portfolio_url },
    },
  },
}) => {
  return (
    <div>
      <img src={small} alt={alt_description} width="360" />
      <div>
        <p>
          Author: <a href={portfolio_url}>{name}</a>
        </p>
        <p>
          <AiOutlineLike /> Likes: {likes}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
