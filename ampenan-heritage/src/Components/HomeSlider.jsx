import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Htr1 from './../Assets/Past/htr1.jpg';
import Htr2 from './../Assets/Past/htr2.jpg';
import Htr4 from './../Assets/Past/htr4.jpg';
import Htr5 from './../Assets/Past/htr5.jpg';
import Htr6 from './../Assets/Past/htr6.jpg';
import Htr7 from './../Assets/Past/htr7.jpg';
import Htr8 from './../Assets/Past/htr8.jpg';
import Htr9 from './../Assets/Past/htr9.jpg';
import Htr10 from './../Assets/Past/htr10.jpg';
import Htr11 from './../Assets/Past/htr11.jpg';
import Htr12 from './../Assets/Past/htr12.jpg';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};

const HomeSlider = () => {
  const images = [
    Htr1, Htr2, Htr4, Htr5, Htr6, Htr7, Htr8, Htr9, Htr10, Htr11, Htr12,
  ];

  return (
    <div className="flex justify-center items-center h-full w-full">
      <Slider {...settings} className="w-full max-w-lg">
        {images.map((image, index) => (
          <div key={index} className="px-2"> {/* Add horizontal padding for gap */}
            <img src={image} alt={`Slide ${index + 1}`} className='w-full rounded-2xl' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
