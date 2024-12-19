import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackgroundP from "../Assets/Photoshop/bg-2.png";
import PatternP from "../Assets/Decors/pattern.png";
import BackgroundL from "../Assets/Photoshop/bg-ls.png";
import PatternL from "../Assets/Decors/pattern-ls.png";
import '../Utils/Styles.css';
import Navbar from '../Components/Navbar';
import RatingPopup from '../Components/RatingPopup';
import SpotSlider from '../Components/SpotSlider';
import SpotA1 from '../Assets/Sliders/Spot1/SpotA1.jpg';
import SpotA2 from '../Assets/Sliders/Spot1/SpotA2.jpg';
import SpotB1 from '../Assets/Sliders/Spot2/SpotB1.jpg';
import SpotB2 from '../Assets/Sliders/Spot2/SpotB2.jpg';
import SpotC1 from '../Assets/Sliders/Spot3/SpotC1.jpg';
import SpotC2 from '../Assets/Sliders/Spot3/SpotC2.jpg';
import SpotD1 from '../Assets/Sliders/Spot4/SpotD1.jpg';
import SpotD2 from '../Assets/Sliders/Spot4/SpotD2.jpg';
import SpotE1 from '../Assets/Sliders/Spot5/SpotE1.jpg';
import SpotE2 from '../Assets/Sliders/Spot5/SpotE2.jpg';
import SpotF1 from '../Assets/Sliders/Spot6/SpotF1.jpg';
import SpotF2 from '../Assets/Sliders/Spot6/SpotF2.jpg';
import Map from '../Components/Map';

const sliderData = [
  { title: "Spot 1", images: [SpotA1, SpotA2] },
  { title: "Spot 2", images: [SpotB1, SpotB2] },
  { title: "Spot 3", images: [SpotC1, SpotC2] },
  { title: "Spot 4", images: [SpotD1, SpotD2] },
  { title: "Spot 5", images: [SpotE1, SpotE2] },
  { title: "Spot 6", images: [SpotF1, SpotF2] },
];

const Spots = () => {
  const [showRatingPopup, setShowRatingPopup] = useState(false);

  const handleRatingClick = () => {
    console.log('Rating button clicked');
    setShowRatingPopup(true);
  };

  const handleClosePopup = () => {
    setShowRatingPopup(false);
  };

  return (
    <div className='w-screen min-h-screen px-4 overflow-hidden relative sm:px-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      {/* Background */}
      <div className="block sm:hidden">
        <img src={BackgroundP} alt="background" className="full-bg" />
        <img src={PatternP} alt="background" className="pattern" />
      </div>
      <div className="hidden sm:block">
        <img src={BackgroundL} alt="background" className="bg-sp" />
        <img src={PatternL} alt="background" className="pattern-3" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* NAVBAR */}
        <div className="block mb-8 sm:hidden">
          <Navbar onRatingClick={handleRatingClick} />
        </div>

        {/* DESKTOP MENU */}
        <div className='hidden sm:block'>
          <ul className='flex flex-wrap justify-end items-center pt-12 pb-4 gap-8 mb-8'>
            <li className='text-title text-h6 hover:text-primary'><Link to={'/home'}>Beranda</Link></li>
            <li 
              className='text-title text-h6 hover:text-primary cursor-pointer'
              onClick={handleRatingClick}
            >
              Beri Penilaian
            </li>
            <li className='text-title text-h6 hover:text-primary'><Link to={'/menu'}>Kembali</Link></li>
          </ul>
        </div>

        {/* CONTENT */}
        <div>
          <h1 className='text-center text-h3 font-bold text-y950 mb-4'>REKOMENDASI SPOT FOTO</h1>
        </div>
        <div className="flex flex-wrap gap-4">
          {sliderData.map((slider, index) => (
            <SpotSlider key={index} title={slider.title} images={slider.images} />
          ))}
        </div>

        <Map />

        {/* RATING POPUP */}
        <RatingPopup show={showRatingPopup} onClose={handleClosePopup} />
      </div>
    </div>
  );
};

export default Spots;
