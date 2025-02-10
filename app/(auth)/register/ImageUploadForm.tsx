import ImageUploadIcon from '@/assets/icons/ImageUploadIcon';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import React from 'react';

const ImageUploadForm = (props: { setStep: (step: number) => void }) => {
  return (
    <div className="flex min-h-[50vh] w-full md:h-[717px] md:w-[726px] items-center justify-center rounded-xl bg-[#FAFAFA] p-4">
      <div className="flex w-full max-w-[526px] flex-col space-y-5">
        <div
          onClick={() => props.setStep(1)}
          className="flex cursor-pointer flex-row items-center space-x-2"
        >
          <ChevronDown className="h-4 w-4 rotate-90" color="#FE5722" />
          <p className="text-base font-bold text-[#FE5722]">Back</p>
        </div>

        <div className='p-5 rounded-xl bg-[#F1F1F1] border-4 border-white'>
        <div className="flex h-auto min-h-[400px] md:h-[469px] w-full flex-col items-center justify-between rounded-xl bg-white px-4 md:px-5 py-8 md:py-10">
          <div className="flex w-full flex-col items-center space-y-2">
            <p className="text-xl md:text-2xl font-medium text-[#1D1B20] text-center">
              Upload your picture
            </p>
            <p className="text-sm text-[#000000] text-center">
              Files should be JPEG, PNG, or JPG.
            </p>
          </div>

          <div className="flex h-auto min-h-[200px] md:h-[259px] w-full flex-col items-center justify-center space-y-2 rounded-xl border-4 border-dashed border-[#CFCFCF] p-4 md:p-5">
            <ImageUploadIcon />
            <p className="text-sm text-[#000000] text-center">
              Max File Size 5mb <br /> Drag and Drop your file or
            </p>

            <Button className="px-3 py-2 text-sm font-medium border border-transparent hover:border-primary-500 hover:bg-white hover:text-primary-500 text-white bg-primary-500">
              Browse Files
            </Button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadForm;
