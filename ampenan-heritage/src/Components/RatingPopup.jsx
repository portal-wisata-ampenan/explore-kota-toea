import PropTypes from 'prop-types';
import Sad from '../Assets/Icons/face-frown-regular.svg';
import Regular from '../Assets/Icons/face-smile-regular.svg';
import Laugh from '../Assets/Icons/face-laugh-squint-regular.svg';

const RatingPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="flex flex-col bg-y50 rounded-lg p-4 z-10 w-96">
        <h3 className="text-primary text-h5 font-bold mb-4 text-center">Beri Penilaian</h3>
        <div className="flex justify-around mb-4">
          <div className="flex flex-col items-center cursor-pointer">
            <img src={Sad} alt="Kurang Puas" className="h-12 w-12" />
            <span>Kurang Puas</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img src={Regular} alt="Puas" className="h-12 w-12" />
            <span>Puas</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <img src={Laugh} alt="Sangat Puas" className="h-12 w-12" />
            <span>Sangat Puas</span>
          </div>
        </div>
        <button onClick={onClose} className="text-p mt-4 px-4 py-2 bg-primary text-white rounded-lg self-center">
          Tutup
        </button>
      </div>
    </div>
  );
};

RatingPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RatingPopup;
