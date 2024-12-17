import Ppl from '../Assets/Logos/ppl.png';
import Unram from '../Assets/Logos/unram.png';
import Dispar from '../Assets/Logos/dispar.png';
import Lhss from '../Assets/Logos/lhss.png';

const Logos = () => {
  return (
    <>
      <div className='flex flex-wrap justify-between pt-12 pb-4'>
        <div className='flex flex-row gap-4 md:gap-4 lg:gap-8'>
          <img src={Ppl} alt="PPL" className='w-8 md:w-16 lg:w-24' />
          <img src={Unram} alt="Unram" className='w-8 md:w-16 lg:w-24' />
        </div>
        <div className='flex flex-row gap-4 md:gap-4 lg:gap-8'>
          <img src={Dispar} alt="Dispar" className='w-8 md:w-16 lg:w-24' />
          <img src={Lhss} alt="LHSS" className='w-8 md:w-16 lg:w-24' />
        </div>
      </div>
    </>
  );
};

export default Logos;
