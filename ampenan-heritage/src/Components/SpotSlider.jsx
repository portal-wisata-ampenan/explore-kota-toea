import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const SpotSlider = ({ title, images }) => {
  return (
    <div className="flex flex-wrap justify-between w-[calc(100vw/2.5)] sm:w-[calc(100vw/4)] md:w-[calc(100vw/3.8)] lg:w-[calc(100vw/3.8)] xl:w-[calc(100vw/3.8)]">
      <h2 className="w-full text-center text-h4 text-gray-200 font-bold mb-4">{title}</h2> {/* Title */}
      <Slider {...settings} className="w-full max-w-lg">
        {images.map((image, index) => (
          <div key={index} className="w-full px-2">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full rounded-2xl shadow-md" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

SpotSlider.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SpotSlider;
