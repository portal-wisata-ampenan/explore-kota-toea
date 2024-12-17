import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "./Components/Button";
import Hero from "./Components/Hero";
import Navbar from "./Components/Logos";
import HomeSlider from './Components/HomeSlider';
import Background from "./Assets/Photoshop/bg-2.png";
import Pattern from "./Assets/Decors/pattern.png";
import './Utils/Styles.css';

const App = () => {
  return (
    <div className='w-screen h-screen px-4 overflow-hidden relative sm:px-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      {/* Background */}
      <div className="block sm:hidden">
        <img src={Background} alt="background" className="full-bg"/>
        <img src={Pattern} alt="background" className="pattern"/>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* NAVBAR */}
        <div className="mb-8">
          <Navbar />
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
      </div>
    </div>
  );
};

export default App;
