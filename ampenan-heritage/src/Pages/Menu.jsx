import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from "../Components/Button";
import Navbar from "../Components/Logos";
import Background from "../Assets/Photoshop/bg-1.png";
import Pattern from "../Assets/Decors/pattern.png";
import '../Utils/Styles.css';

const Menu = () => {
  return (
    <div className='w-screen h-screen px-4 overflow-hidden relative sm:px-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      {/* Background */}
      <div className="block sm:hidden">
        <img src={Background} alt="background" className="full-bg"/>
        <img src={Pattern} alt="background" className="pattern"/>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen">
        {/* NAVBAR */}
        <div className="mb-8">
          <Navbar />
        </div>
        
        {/* BUTTON */}
        <div className="flex flex-col justify-center mb-8 gap-6 py-16">
          <Button 
            link={'/menu'}
            label={'KISAH MENARIK KOTA TOEA'}
          />
          <Button 
            link={'/menu'}
            label={'REKOMENDASI SPOT FOTO'}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;