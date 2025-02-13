import PaypalIconSmall from '@/assets/icons/PaypalIconSmall';
import PaymentMethodImage from '@/assets/images/PaymentMethodImage';
import { ChevronDown } from 'lucide-react';
import React from 'react';

const PaymentInformation = (props: { setStep: (step: number) => void }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-[836px] flex-col space-y-5">
        <div
          onClick={() => props.setStep(3)}
          className="flex w-full max-w-[400px] cursor-pointer flex-row items-center space-x-2"
        >
          <ChevronDown className="h-4 w-4 rotate-90" color="#676767" />
          <p className="text-black-light text-base font-bold">Back</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center space-y-10 rounded bg-[#FAFAFA] pb-6 pt-1">
          <div className="flex w-full flex-col gap-4">
            <p className="w-full border-b border-[#CAC4D0] border-b-primary pb-3 pt-1 text-center text-xl font-medium text-[#000000]">
              Set up your payment information
            </p>
          </div>
          <div className="flex w-full max-w-[724px] flex-col items-center justify-center gap-7">
            <div className="border-black-light flex w-full flex-row items-center justify-between space-x-10 rounded-lg border border-dashed px-5 py-5">
              <div className="h-[99px] w-[121px] rounded-lg">
                <PaymentMethodImage />
              </div>
              <p className="text-black-light flex flex-wrap text-sm">
                Choose from a variety of payment options and securely store your
                details. You can add, edit, or remove your payment methods
                anytime in your profile settings.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4">
              <p className="text-black-dark text-sm">Choose Payment Option</p>
              <div className="flex w-full flex-col space-y-2">
                <div className="flex flex-row items-center space-x-3 rounded-lg bg-white px-3 py-1">
                  <PaypalIconSmall />
                  <p className="text-black-dark text-[18px] font-medium">
                    Paypal
                  </p>
                </div>

                <div className="flex flex-row items-center space-x-3 rounded-lg bg-white px-3 py-1">
                  <PaypalIconSmall />
                  <p className="text-black-dark text-[18px] font-medium">
                    Paypal
                  </p>
                </div>

                <div className="flex flex-row items-center space-x-3 rounded-lg bg-white px-3 py-1">
                  <PaypalIconSmall />
                  <p className="text-black-dark text-[18px] font-medium">
                    Paypal
                  </p>
                </div>
              </div>

              <div
                onClick={() => props.setStep(5)}
                className="border-black-dark flex flex-row items-center justify-center space-x-3 rounded-lg border px-3 py-2"
              >
                <p className="text-black-dark text-[18px] font-medium">Skip</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
