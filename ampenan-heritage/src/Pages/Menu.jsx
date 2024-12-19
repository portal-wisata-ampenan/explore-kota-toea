import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import Background from "../Assets/Photoshop/bg-1.png";
import Pattern from "../Assets/Decors/pattern.png";
import BackgroundL from "../Assets/Photoshop/bg-ls.png";
import PatternL from "../Assets/Decors/pattern-ls.png";
import RatingPopup from "../Components/RatingPopup";
import '../Utils/Styles.css';

const Menu = () => {
  const [showRatingPopup, setShowRatingPopup] = useState(false);

  const handleRatingClick = () => {
    setShowRatingPopup(true);
  };

  const handleClosePopup = () => {
    setShowRatingPopup(false);
  };

  return (
    <div className='w-screen h-screen px-4 overflow-hidden relative sm:px-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      {/* Background */}
      <div className="block sm:hidden">
        <img src={Background} alt="background" className="full-bg" />
        <img src={Pattern} alt="background" className="pattern" />
      </div>
      <div className="hidden sm:block">
        <img src={BackgroundL} alt="background" className="bg-ls" />
        <img src={PatternL} alt="background" className="pattern-2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen">
        {/* NAVBAR */}
        <div className="block mb-8 sm:hidden">
          <Navbar onRatingClick={handleRatingClick} />
        </div>

        {/* DESKTOP MENU */}
        <div className='hidden sm:block'>
          <ul className='flex flex-wrap justify-end items-center pt-12 pb-4 gap-8 mb-8'>
            <li className='text-title text-h6 hover:text-primary'><Link to={'/'}>Beranda</Link></li>
            <li 
              className='text-title text-h6 hover:text-primary cursor-pointer'
              onClick={handleRatingClick}
            >
              Beri Penilaian
            </li>
            <li className='text-title text-h6 hover:text-primary'><Link to={'/menu'}>Kembali</Link></li>
          </ul>
        </div>
        
        {/* BUTTON */}
        <div className="flex flex-col justify-center mb-8 gap-6 py-16">
          <Button 
            link={'/history'}
            label={'KISAH MENARIK KOTA TOEA'}
          />
          <Button 
            link={'/photo-spots'}
            label={'REKOMENDASI SPOT FOTO'}
          />
        </div>
        
        {/* RATING POPUP */}
        <RatingPopup show={showRatingPopup} onClose={handleClosePopup} />
      </div>
    </div>
  );
};

export default Menu;
