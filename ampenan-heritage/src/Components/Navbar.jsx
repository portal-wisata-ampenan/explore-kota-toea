import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Arrow from '../Assets/Icons/arrow-left.svg';
import Face from '../Assets/Icons/face.svg';
import Menu from '../Assets/Icons/menu.svg';

const Navbar = ({ onRatingClick }) => {
  return (
    <>
      <div className='flex flex-wrap justify-between pt-12 pb-4'>
        <div className='flex flex-row gap-4 md:gap-4 lg:gap-8'>
          <Link to={'/home'}><img src={Arrow} alt="back" className='h-6 w-auto sm:h-6 md:h-10 lg:h-16' /></Link>
        </div>
        <div className='flex flex-row gap-4 md:gap-4 lg:gap-8'>
          <img src={Face} alt="feedback" className='h-6 w-auto sm:h-6 md:h-10 lg:h-16 cursor-pointer' onClick={onRatingClick} />
          <Link to={'/menu'}><img src={Menu} alt="menu" className='h-6 w-auto sm:h-6 md:h-10 lg:h-16' /></Link>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  onRatingClick: PropTypes.func.isRequired,
};

export default Navbar;
