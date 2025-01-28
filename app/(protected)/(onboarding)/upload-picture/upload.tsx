'use client';

import upload from '@/assets/images/upload.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';

const UploadPicture = () => {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    onDrop: acceptedFiles => {
      const file = acceptedFiles[0];
      console.log(file);
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex aspect-[1.65] w-full flex-col items-center justify-center gap-4 rounded border-4 border-dashed border-secondary"
    >
      <input {...getInputProps()} />
      <div className="flex w-32 items-center justify-center">
        <Image
          src={upload}
          alt="upload"
          height={100}
          width={128}
          className="w-full object-contain"
        />
      </div>
      <div className="space-y-2 text-center text-xs">
        <div className="space-y-1">
          <p>Max File Size 5MB</p>
          <p>Drag and Drop your File or</p>
        </div>
        <Button className="hover:bg-primary-800">Browse Files</Button>
      </div>
    </div>
  );
};
export default UploadPicture;
