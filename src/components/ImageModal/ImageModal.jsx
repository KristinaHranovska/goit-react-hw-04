import Modal from "react-modal";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { format } from "date-fns";

const formatDate = (dateString) => {
  return format(new Date(dateString), "MMMM dd yyyy");
};

const ImageModal = ({ isOpen, onCloseModal, image }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onCloseModal}>
      {image && (
        <div>
          <button onClick={onCloseModal}>
            <RiCloseLine />
          </button>
          <div>
            <img src={image.urls.regular} alt={image.alt_description} />
            <div>
              <p>Description: {image.description}</p>
              <br />
              <p>Tags:</p>
              <ul>
                {image.tags.map((tag, index) => (
                  <li key={index}>&#35;{tag.title}</li>
                ))}
              </ul>
              <p>
                <AiOutlineLike /> Likes: {image.likes}
              </p>
              <br />
              <p>
                Author:{" "}
                <a href={image.user.social.portfolio_url}>{image.user.name}</a>
              </p>
              <br />
              <p>Created on: {formatDate(image.created_at)}</p>
              <br />
              {image.user.location && <p>Location: {image.user.location}</p>}
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
