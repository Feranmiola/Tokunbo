/* eslint-disable */
'use client';
import CloseIcon from '@/assets/icons/CloseIcon';
import ImageIconMini from '@/assets/icons/ImageIconMini';
import ImagePlaceholder from '@/assets/icons/ImagePlaceholder';
import ImageUploadIcon from '@/assets/icons/ImageUploadIcon';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const ImageUploadForm = (props: { setStep: (step: number) => void }) => {
  const [image, setImage] = useState<File | null>(null);
  return (
    <div className="flex min-h-screen w-full items-center justify-center rounded-xl bg-[#FAFAFA] p-4 sm:min-h-[50vh]">
      <div className="flex w-full max-w-[526px] flex-col space-y-5">
        <div
          onClick={() => props.setStep(1)}
          className="flex cursor-pointer flex-row items-center space-x-2"
        >
          <ChevronDown className="h-4 w-4 rotate-90" color="#FE5722" />
          <p className="text-base font-bold text-[#FE5722]">Back</p>
        </div>

        <div className="rounded-xl border-4 border-white bg-[#F1F1F1] p-3 sm:p-5">
          <div className="flex w-full flex-col items-center justify-between space-y-6 rounded-xl bg-white p-4 sm:p-6 md:p-8">
            <div className="flex w-full flex-col items-center space-y-2">
              <p className="text-center text-xl font-medium text-[#1D1B20] md:text-2xl">
                Upload your picture
              </p>
              <p className="text-center text-sm text-[#000000]">
                Files should be JPEG, PNG, or JPG.
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center space-y-4 rounded-xl border-4 border-dashed border-[#CFCFCF] p-4 sm:p-6 md:p-8">
              {image ? (
                <div className="flex w-full flex-col items-center space-y-4">
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="h-auto max-w-full rounded-lg object-cover"
                  />
                  <p className="text-center text-sm text-[#000000]">
                    {image.name}
                  </p>
                </div>
              ) : (
                <>
                  <ImageUploadIcon />
                  <p className="text-center text-sm text-[#000000]">
                    Max File Size 5mb <br /> Drag and Drop your file or
                  </p>
                  <Button className="border border-transparent bg-primary-500 px-3 py-2 text-sm font-medium text-white hover:border-primary-500 hover:bg-white hover:text-primary-500">
                    Browse Files
                  </Button>
                </>
              )}
            </div>

            {image && (
              <div className="flex w-full flex-col space-y-3">
                <div className="flex w-full flex-row items-center justify-between rounded-xl border-4 border-white bg-[#F1F1F1] p-3 sm:p-4">
                  <div className="flex w-full flex-row space-x-1 pr-2">
                    <ImageIconMini />
                    <div className="flex w-full max-w-[396px] flex-col">
                      <div className="flex w-full flex-row items-center justify-between">
                        <p className="text-sm">Uploading Image</p>
                        <p className="text-sm">5MB</p>
                      </div>
                      <Progress value={50} className="w-full" />
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <CloseIcon />
                  </div>
                </div>

                <div className="flex w-full flex-col gap-2 sm:flex-row">
                  <Button className="border-muted-100 text-muted-100 h-12 flex-1 items-center justify-center rounded-lg border bg-white text-base font-bold hover:border-primary-500 hover:bg-primary-500 hover:text-white">
                    Cancel
                  </Button>
                  <Button className="h-12 flex-1 items-center justify-center rounded-lg bg-primary-500 text-base font-bold text-white hover:bg-primary-600">
                    Upload
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadForm;
