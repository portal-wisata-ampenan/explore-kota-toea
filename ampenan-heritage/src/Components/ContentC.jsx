import PropTypes from "prop-types";

const ContentC = ({ image, title }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt="content image"
          className="w-[80vw] rounded-md shadow-md md:w-[25vw]"
        />
        <h1 className="text-h6 text-y950 text-center text-wrap font-bold">{title}</h1>
      </div>
    </>
  );
};

ContentC.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContentC;
