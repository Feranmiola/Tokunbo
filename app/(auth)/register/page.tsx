'use client'
import Container from '@/components/shared/container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BuyerForm from './BuyerForm';
import SellerForm from './SellerForm';
import { useState } from 'react';
import ImageUploadForm from './ImageUploadForm';

export default function Page() {
  const [step, setStep] = useState<number>(1)
  return (
    <div className='flex w-full items-center justify-center py-12 px-2'>
      {step === 1 && (
        <div className="flex flex-col items-center space-y-8">
        <Container className="max-w-[400px] space-y-2 text-center">
          <h2 className="text-4xl">Register</h2>
          <p className='text-center'>
  
            Are you a buyer or a seller? Kindly provide accurate details to ensure
            a smooth and secure experience on Tokunbo.
          </p>
        </Container>
  
        <div className="w-full max-w-[400px] rounded bg-[#FAFAFA] pb-6 pt-1">
          <Tabs defaultValue="buyer" className="w-full space-y-6">
            <TabsList className="grid w-full grid-cols-2 border-b border-[#CAC4D0]">
              <TabsTrigger
                value="buyer"
                className="rounded-none shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:shadow-none"
              >
                Buyer
              </TabsTrigger>
              <TabsTrigger
                value="seller"
                className="rounded-none shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:shadow-none"
              >
                Seller
              </TabsTrigger>
            </TabsList>
            <TabsContent className='px-6' value="buyer">
              <BuyerForm setStep ={setStep} />
            </TabsContent>
            <TabsContent className='px-6' value="seller">
              <SellerForm setStep ={setStep} />

            </TabsContent>
          </Tabs>
        </div>
      </div>
      )}

      {step === 2 && (
        <ImageUploadForm setStep ={setStep} />
      )}

    </div>
  );

}
