import { ThreeDots } from "react-loader-spinner";

const LoaderMore = () => {
  return (
    <>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};

export default LoaderMore;