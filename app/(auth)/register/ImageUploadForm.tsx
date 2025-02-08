import ImageUploadIcon from '@/assets/icons/ImageUploadIcon';
import { Button } from '@/components/ui/button';
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

        <div className="flex h-[469px] w-full flex-col items-center justify-between rounded-xl bg-white px-5 py-10">
          <div className="flex w-full flex-col items-center space-y-2">
            <p className="text-2xl font-medium text-[#1D1B20]">
              Upload your picture
            </p>
            <p className="text-sm text-[#000000]">
              Files should be JPEG, PNG, or JPG.
            </p>
          </div>

          <div className="flex h-[259px] w-full flex-col items-center justify-center space-y-2 rounded-xl border-4 border-dashed border-[#CFCFCF] p-5">
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
  );
};

export default ImageUploadForm;
