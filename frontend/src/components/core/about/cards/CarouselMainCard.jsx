import { FaStar } from 'react-icons/fa';
import pattern from '../../../../assets/pattern.svg';

function CarouselMainCard({ data }) {
  return (
    <div className='bg-gradient-to-b from-[#e6f7f7] to-[#ffffff] shadow-lg border border-black rounded-[6px]  flex justify-center items-start w-[237px] h-[350px] sm:w-[450px] sm:h-[300px] font-albert leading-[100%] '>
      {/* Content Wrapper*/}
      <div className='z-10 flex flex-col justify-start w-[380px] h-auto sm:gap-6 gap-[12.77px] translate-y-5 translate-x-3.5 sm:translate-x-0 leading-[100%]'>
        {/* Star and Title */}
        <div className='flex flex-col sm:flex-row-reverse sm:justify-between sm:items-center sm:gap-2 gap-[5px] mb-2 sm:mb-4'>
          <FaStar className='w-[20px] h-[20px] text-black' />
          <h2 className='text-[20px] sm:text-[31px] font-semibold text-black text-left'>
            {data.title}
          </h2>
        </div>

        {/* Content */}
        <div className='w-[221.24px] h-[140px] sm:w-[390px] sm:h-[92px] text-[22px] sm:text-[20px] font-normal text-black leading-[100%] text-left '>
          {data.content}
        </div>
      </div>

      {/* Background pattern */}
      <div className=''>
        <img
          src={pattern}
          alt='pattern'
          className='absolute bottom-0 sm:left-0 left-19 w-[237px] sm:w-[450px] object-cover h-[100px] sm:h-[130px] z-0 '
        />
      </div>
    </div>
  );
}

export default CarouselMainCard;
