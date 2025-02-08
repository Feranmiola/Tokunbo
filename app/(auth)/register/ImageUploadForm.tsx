import { ChevronDown } from 'lucide-react';
import React from 'react';

const ImageUploadForm = (props: { setStep: (step: number) => void }) => {
  return (
    <div className="flex h-[717px] w-[726px] items-center justify-center rounded-xl bg-[#FAFAFA]">
      <div className="flex w-[526px] flex-col space-y-5">
        <div
          onClick={() => props.setStep(1)}
          className="flex cursor-pointer flex-row items-center space-x-2"
        >
          <ChevronDown className="h-4 w-4 rotate-90" color="#FE5722" />
          <p className="text-base font-bold text-[#FE5722]">Back</p>
        </div>

        <div className='w-full h-[469px] bg-white rounded-xl flex items-center justify-between py-10 flex-col'>
            <div className='flex flex-col space-y-2 items-center' >
                <p className='text-2xl text-[#1D1B20] font-medium'>Upload your picture</p>
                <p className='text-sm text-[#000000]'>Files should be JPEG, PNG, or JPG.</p>



            </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadForm;
