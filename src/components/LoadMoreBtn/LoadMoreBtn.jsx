const LoadMoreBtn = ({ onClick, isVisible }) => {
  return <>{isVisible() && <button onClick={onClick}>Load More</button>}</>;
};

export default LoadMoreBtn;
