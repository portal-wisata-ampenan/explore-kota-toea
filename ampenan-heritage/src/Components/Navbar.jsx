import { Link } from 'react-router-dom';
import Arrow from '../Assets/Icons/arrow-left.svg';
import Face from '../Assets/Icons/face.svg';
import Menu from '../Assets/Icons/Menu.svg';

const Navbar = () => {
  return (
    <>
      <div className='flex flex-wrap justify-between pt-12 pb-4'>
        <div className='flex flex-row gap-4 md:gap-4 lg:gap-8'>
          <Link to={'/home'}><img src={Arrow} alt="back" className='h-6 w-auto sm:h-6 md:h-10 lg:h-16' /></Link>
        </div>
        <div className='flex flex-row gap-4 md:gap-4 lg:gap-8'>
          <Link to={'/home'}><img src={Face} alt="feedback" className='h-6 w-auto sm:h-6 md:h-10 lg:h-16' /></Link>
          <Link to={'/menu'}><img src={Menu} alt="menu" className='h-6 w-auto sm:h-6 md:h-10 lg:h-16' /></Link>
        </div>
      </div>
    </> 
  );
};

export default Navbar;