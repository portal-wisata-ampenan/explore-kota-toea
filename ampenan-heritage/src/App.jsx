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
import Footer from './Components/Footer';

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

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
