'use client';

import PaypalIconSmall from '@/assets/icons/PaypalIconSmall';
import BankTransferImage from '@/assets/images/BankTransferImage';
import CreditCardImage from '@/assets/images/CreditCardImage';
import PaymentMethodImage from '@/assets/images/PaymentMethodImage';
import { Separator } from '@/components/ui/separator';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const PaymentInformation = (props: { setStep: (step: number) => void }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>('');
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-[836px] flex-col space-y-5">
        <div
          onClick={() => props.setStep(3)}
          className="flex w-full max-w-[400px] cursor-pointer flex-row items-center space-x-2"
        >
          <ChevronDown className="h-4 w-4 rotate-90" color="#676767" />
          <p className="text-base font-bold text-black-light">Back</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-10 rounded bg-[#FAFAFA] pb-6 pt-1">
          <div className="flex w-full flex-col gap-4">
            <p className="w-full border-b border-[#CAC4D0] border-b-primary pb-3 pt-1 text-center text-xl font-medium text-[#000000]">
              Set up your payment information
            </p>
          </div>
          <div className="flex w-full max-w-[724px] flex-col items-center justify-center gap-7">
            <div className="flex w-full flex-row items-center justify-between space-x-10 rounded-lg border border-dashed border-black-light px-5 py-5">
              <div className="h-[99px] w-[121px] rounded-lg">
                <PaymentMethodImage />
              </div>
              <p className="flex flex-wrap text-sm text-black-light">
                Choose from a variety of payment options and securely store your
                details. You can add, edit, or remove your payment methods
                anytime in your profile settings.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4">
              <p className="text-sm text-black-dark">Choose Payment Option</p>
              <div className="flex w-full flex-col space-y-2">
                <div
                  className={`flex cursor-pointer flex-row items-center space-x-3 rounded-lg px-3 py-1 shadow-sm ${selectedPaymentMethod === 'Paypal' ? 'bg-[#BABABA33]' : 'bg-white'}`}
                  onClick={() => setSelectedPaymentMethod('Paypal')}
                >
                  <PaypalIconSmall />
                  <p className="text-[18px] font-medium text-black-dark">
                    Paypal
                  </p>
                </div>

                <div
                  className={`flex cursor-pointer flex-row items-center space-x-3 rounded-lg px-3 py-1 shadow-sm ${selectedPaymentMethod === 'Credit/Debit Cards' ? 'bg-[#BABABA33]' : 'bg-white'}`}
                  onClick={() => setSelectedPaymentMethod('Credit/Debit Cards')}
                >
                  <CreditCardImage />
                  <p className="text-[18px] font-medium text-black-dark">
                    Credit/Debit Cards (Visa, Mastercard, etc.)
                  </p>
                </div>

                <div
                  className={`flex cursor-pointer flex-row items-center space-x-3 rounded-lg px-3 py-1 shadow-sm ${selectedPaymentMethod === 'Bank Transfer' ? 'bg-[#BABABA33]' : 'bg-white'}`}
                  onClick={() => setSelectedPaymentMethod('Bank Transfer')}
                >
                  <BankTransferImage />
                  <p className="text-[18px] font-medium text-black-dark">
                    Bank Transfer
                  </p>
                </div>
              </div>

              {selectedPaymentMethod === '' && (
                <div
                  onClick={() => props.setStep(5)}
                  className="flex flex-row items-center justify-center space-x-3 rounded-lg border border-black-dark px-3 py-2"
                >
                  <p className="text-[18px] font-medium text-black-dark">
                    Skip
                  </p>
                </div>
              )}

              {selectedPaymentMethod === 'Paypal' && (
                <div className='flex flex-col w-full space-y-5 pt-5'>
                  <Separator className='w-full bg-[#F5F5F5] h-[1px]'/>

                  <div className='flex flex-col w-full space-y-3'>
                    <p className='text-xl font-medium text-black'>Paypal</p>

                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
