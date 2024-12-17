import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import HomeSlider from '../Components/HomeSlider';
import BackgroundP from "../Assets/Photoshop/bg-2.png";
import PatternP from "../Assets/Decors/pattern.png";
import BackgroundL from "../Assets/Photoshop/bg-ls.png"
import PatternL from "../Assets/Decors/pattern-ls.png"
import '../Utils/Styles.css';
import Navbar from '../Components/Navbar';

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
        <div className="mb-8 block sm:hidden">
          <Navbar />
        </div>

        {/* DESKTOP MENU */}
        <div className='hidden sm:block'>
          <ul className='flex flex-wrap justify-end items-center pt-12 pb-4 gap-8 mb-8'>
            <li className='text-title text-h6 hover:text-primary'><Link to={'/home'}>Beranda</Link></li>
            <li className='text-title text-h6 hover:text-primary'><Link to={''}>Beri Penilaian</Link></li>
            <li className='text-title text-h6 hover:text-primary'><Link to={'/menu'}>Opsi</Link></li>
          </ul>
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
