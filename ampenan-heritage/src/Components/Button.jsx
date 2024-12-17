import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ link, label }) => {
  return (
    <div className="flex flex-row justify-center">
      <Link to={link}>
        <button className="text-h6 text-cp hover:text-y800 px-4 py-2 bg-primary hover:bg-y200 rounded-xl ring-2 ring-y100 hover:ring-yellow-200">
          {label}
        </button>
      </Link>
    </div>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
