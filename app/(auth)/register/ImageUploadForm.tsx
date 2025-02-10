/* eslint-disable */
'use client';
import CloseIcon from '@/assets/icons/CloseIcon';
import ImageIconMini from '@/assets/icons/ImageIconMini';
import ImagePlaceholder from '@/assets/icons/ImagePlaceholder';
import ImageUploadIcon from '@/assets/icons/ImageUploadIcon';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronDown } from 'lucide-react';
import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Dialog, DialogContent } from '@/components/ui/dialog';


// Define max file size (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

// Define the schema
const imageUploadSchema = z.object({
  image: z
    .custom<File>()
    .refine((file) => file !== null, 'Image is required')
    .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max file size is 5MB')
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg, and .png formats are supported'
    ),
});

type ImageUploadFormValues = z.infer<typeof imageUploadSchema>;

const ImageUploadForm = (props: { setStep: (step: number) => void }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<ImageUploadFormValues>({
    resolver: zodResolver(imageUploadSchema),
    defaultValues: {
      image: undefined,
    },
  });

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles?.[0]) {
      const file = acceptedFiles[0];
      try {
        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);
        
        form.setValue('image', file, {
          shouldValidate: true,
        });
        
        setIsUploading(true);
        
        const progressInterval = setInterval(() => {
          setUploadProgress((prevProgress) => {
            const nextProgress = prevProgress + 10;
            if (nextProgress >= 100) {
              clearInterval(progressInterval);
              setIsUploading(false);
              setIsUploaded(true);
              return 100;
            }
            return nextProgress;
          });
        }, 1000);

      } catch (error) {
        console.error('Error handling file:', error);
      }
    }
  }, [form]);

  const handleSave = () => {
    if (isUploaded) {
      props.setStep(3);
    }
  };

  const handleCancel = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    form.reset();
    setUploadProgress(0);
    setIsUploading(false);
    setIsUploaded(false);
  };

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ACCEPTED_IMAGE_TYPES,
    },
    maxSize: MAX_FILE_SIZE,
    multiple: false,
  });

  const image = form.watch('image');

  return (
    <div className="flex w-full min-h-[50vh] items-center justify-center rounded-xl bg-[#FAFAFA] p-4">
      <div className="flex w-full max-w-[526px] flex-col space-y-5">
        <div
          onClick={() => props.setStep(1)}
          className="flex cursor-pointer flex-row items-center space-x-2"
        >
          <ChevronDown className="h-4 w-4 rotate-90" color="#FE5722" />
          <p className="text-base font-bold text-[#FE5722]">Back</p>
        </div>

        <div className="rounded-xl border-4 border-white bg-[#F1F1F1] p-3 sm:p-5">
          <div className="flex w-full flex-col items-center justify-between rounded-xl bg-white p-4 sm:p-6 md:p-8 space-y-6">
            <div className="flex w-full flex-col items-center space-y-2">
              <p className="text-center text-xl font-medium text-[#1D1B20] md:text-2xl">
                Upload your picture
              </p>
              <p className="text-center text-sm text-[#000000]">
                Files should be JPEG, PNG, or JPG.
              </p>
            </div>

            <div 
              {...getRootProps()} 
              className={`flex w-full flex-col items-center justify-center space-y-4 rounded-xl border-4 border-dashed border-[#CFCFCF] p-4 sm:p-6 md:p-8 ${
                isDragActive ? 'border-primary-500 bg-primary-50' : ''
              }`}
            >
              <input {...getInputProps()} />
              {image && previewUrl ? (
                <div className="flex flex-col items-center space-y-4 w-full">
                  <img 
                    src={previewUrl}
                    alt="Preview" 
                    className="max-w-full h-auto rounded-lg object-cover"
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
                  <div className="flex flex-row w-full space-x-1 pr-2">
                    <ImageIconMini />
                    <div className="flex w-full max-w-[396px] flex-col">
                      <div className="flex w-full flex-row items-center justify-between">
                        <p className="text-sm">Uploading Image</p>
                        <p className="text-sm">{uploadProgress}%</p>
                      </div>
                      <Progress value={uploadProgress} className="w-full" />
                    </div>
                  </div>
                  <div className="cursor-pointer" onClick={handleCancel}>
                    <CloseIcon />
                  </div>
                </div>
              </div>

            )}

            {image && !isUploading && (
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <Button 
                  onClick={handleCancel}
                  className="flex-1 h-12 items-center justify-center text-base font-bold hover:border-primary-500 hover:bg-primary-500 hover:text-white border border-muted-100 bg-white text-muted-100 rounded-lg"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={()=> setIsDialogOpen(true)}
                  disabled={!isUploaded}
                  className="flex-1 h-12 items-center justify-center bg-primary-500 text-white rounded-lg text-base font-bold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Save
                </Button>
              </div>
            )}

            {form.formState.errors.image && (
              <p className="text-sm text-red-500">
                {form.formState.errors.image.message}
              </p>
            )}

          </div>
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='max-w-[452px] w-full flex flex-col items-center justify-evenly px-5'>
          {previewUrl && (
            <div className='w-[154px] h-[154px]'>
              <img 
                src={previewUrl} 
                alt="Uploaded" 
                className='w-full h-full object-cover rounded-lg' 
              />
            </div>
          )}
          <p className='text-center text-xl font-medium text-[#000000]'>Your picture has been successfully saved!</p>
          <Button onClick={handleSave} className='bg-primary-500 text-white rounded-lg text-base font-bold hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2'>
            Continue
          </Button>
        </DialogContent>
      </Dialog>
    </div>

  );
};

export default ImageUploadForm;
