import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "./Components/Button";
import Hero from "./Components/Hero";
import Logos from "./Components/Logos";
import HomeSlider from './Components/HomeSlider';
import BackgroundP from "./Assets/Photoshop/bg-2.png";
import PatternP from "./Assets/Decors/pattern.png";
import BackgroundL from "./Assets/Photoshop/bg-ls.png";
import PatternL from "./Assets/Decors/pattern-ls.png";
import './Utils/Styles.css';

const App = () => {
  return (
    <div className='w-screen h-screen px-4 overflow-hidden relative sm:px-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      {/* Background */}
      <div className="block sm:hidden">
        <img src={BackgroundP} alt="background" className="full-bg"/>
        <img src={PatternP} alt="background" className="pattern"/>
      </div>
      <div className="hidden sm:block">
        <img src={BackgroundL} alt="background" className="bg-ls"/>
        <img src={PatternL} alt="background" className="pattern-2"/>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* NAVBAR */}
        <div className="mb-8">
          <Logos />
        </div>
        
        {/* TITLE */}
        <div className="mb-8">
          <Hero />
        </div>
        
        {/* BUTTON */}
        <div className="mb-8">
          <Button 
            link={'/menu'}
            label={'MULAI'}
          />
        </div>
        
        {/* SLIDER */}
        <div className="mb-8 hidden sm:block">
          <HomeSlider />
        </div>

        {/* GOOGLE MAPS IFRAME
        <div className="mb-8">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4933.2072476359945!2d116.06979093195768!3d-8.570716999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc125f243f507%3A0xd07d271c4dd15b6e!2sKota%20Tua%20Ampenan!5e1!3m2!1sen!2sid!4v1734590292911!5m2!1sen!2sid" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div> */}
      </div>
    </div>
  );
};

export default App;
