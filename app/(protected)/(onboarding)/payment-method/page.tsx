'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from 'lucide-react';
import card from '@/assets/images/card.png';
import payMethod from '@/assets/images/pay-method.png';
import paypal from '@/assets/images/paypal.png';
import phone from '@/assets/images/phone.png';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import CardForm from './card-form';
import BankForm from './bank-form';
import PaypalForm from './paypal-form';

type PaymentOption = 'paypal' | 'card' | 'bank' | undefined;

export default function Page() {
  const [selectedOption, setSelectedOption] = useState<PaymentOption>();

  return (
    <main className="space-y-8 py-12">
      <div className="mx-auto w-[95%] max-w-2xl space-y-4 py-12">
        <Button variant="ghost" className="text-destructive">
          <ChevronLeftIcon /> Back
        </Button>
        <div className="w-full rounded bg-secondary/40">
          <header className="border-b border-b-gray-200 py-4">
            <h2 className="text-center text-2xl font-medium">
              Set Up your Payment Method
            </h2>
          </header>
          <div className="space-y-8 p-8">
            <div className="flex items-center gap-4 rounded border-2 border-dashed border-gray-300 bg-white p-4">
              <div className="aspect-[1.32] w-32">
                <Image
                  src={payMethod}
                  alt="pay-method"
                  height={100}
                  width={100}
                  className="w-full object-contain"
                />
              </div>
              <div className="flex-1">
                Choose from a variety of payment options and securely store your
                details. You can add, edit, or remove your payment methods
                anytime in your profile settings.
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Choose Payment Options</h3>
              <div className="space-y-3">
                <Button
                  className={cn(
                    'flex w-full items-center justify-start gap-4 bg-white px-1 py-2 text-black-d shadow hover:bg-gray-100',
                    selectedOption === 'paypal' && 'bg-gray-100',
                  )}
                  size="lg"
                  onClick={() => setSelectedOption('paypal')}
                >
                  <Image
                    src={paypal}
                    alt="paypal"
                    height={100}
                    width={100}
                    className="h-10 w-10 object-contain"
                  />
                  <span>Paypal</span>
                </Button>
                <Button
                  className={cn(
                    'flex w-full items-center justify-start gap-4 bg-white px-1 py-2 text-black-d shadow hover:bg-gray-100',
                    selectedOption === 'card' && 'bg-gray-100',
                  )}
                  size="lg"
                  onClick={() => setSelectedOption('card')}
                >
                  <Image
                    src={card}
                    alt="card"
                    height={100}
                    width={100}
                    className="h-10 w-10 object-contain"
                  />
                  <span>Credit/Debit Cards (Visa, Mastercard, etc.)</span>
                </Button>
                <Button
                  className={cn(
                    'flex w-full items-center justify-start gap-4 bg-white px-1 py-2 text-black-d shadow hover:bg-gray-100',
                    selectedOption === 'bank' && 'bg-gray-100',
                  )}
                  size="lg"
                  onClick={() => setSelectedOption('bank')}
                >
                  <Image
                    src={phone}
                    alt="bank"
                    height={100}
                    width={100}
                    className="h-10 w-10 object-contain"
                  />
                  <span>Bank Transfer</span>
                </Button>
              </div>
              {selectedOption === 'card' && <CardForm />}
              {selectedOption === 'bank' && <BankForm />}
              {selectedOption === 'paypal' && <PaypalForm />}
            </div>
            {!selectedOption && (
              <Button className="w-full" variant="outline" size="lg">
                Skip
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
