'use client';

import PaypalIconSmall from '@/assets/icons/PaypalIconSmall';
import BankTransferImage from '@/assets/images/BankTransferImage';
import CreditCardImage from '@/assets/images/CreditCardImage';
import PaymentMethodImage from '@/assets/images/PaymentMethodImage';
import { Separator } from '@/components/ui/separator';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { preventClickout } from '@/components/Hooks/usePreventClickout';
import { ClipLoader } from 'react-spinners';

const paypalSchema = z.object({
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Invalid email address'),
});

const creditCardSchema = z.object({
  cardHolderName: z.string().min(1, 'Card holder name is required'),
  cardNumber: z.string().min(1, 'Card number is required'),
  expiryDate: z.string().min(1, 'Expiry date is required'),
  cvv: z.string().min(1, 'CVV is required'),
});

const bankTransferSchema = z.object({
  bankName: z.string().min(1, 'Bank name is required'),
  accountNumber: z.string().min(1, 'Account number is required'),
  accountHolderName: z.string().min(1, 'Account holder name is required'),
});

const PaymentInformation = (props: { setStep: (step: number) => void, handleSubmit: () => void, isLoading: boolean }) => {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>('');
    const [isSelectedPaymentDialogOpen, setIsSelectedPaymentDialogOpen] = useState(false)

  const paypalForm = useForm<z.infer<typeof paypalSchema>>({
    resolver: zodResolver(paypalSchema),
    defaultValues: {
      email: '',
    },
  });

  const creditCardForm = useForm<z.infer<typeof creditCardSchema>>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      cardHolderName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  });

  const bankTransferForm = useForm<z.infer<typeof bankTransferSchema>>({
    resolver: zodResolver(bankTransferSchema),
    defaultValues: {
      bankName: '',
      accountNumber: '',
      accountHolderName: '',
    },
  });

  const onSubmit = (values: z.infer<typeof paypalSchema>) => {
    console.log(values);
    setIsSelectedPaymentDialogOpen(true)
    props.handleSubmit()
  };
  const onCreditCardSubmit = (values: z.infer<typeof creditCardSchema>) => {
    console.log(values);
    setIsSelectedPaymentDialogOpen(true)
    props.handleSubmit()
  };
  const onBankTransferSubmit = (values: z.infer<typeof bankTransferSchema>) => {
    console.log(values);
    setIsSelectedPaymentDialogOpen(true)
    props.handleSubmit()
  };


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

              <Dialog open={isSelectedPaymentDialogOpen} onOpenChange={preventClickout}>
                <DialogContent className="flex w-full max-w-[452px] flex-col items-center justify-evenly px-5">
                  <div className="h-[99px] w-[121px] rounded-lg">
                    <PaymentMethodImage />
                  </div>
                  <p className="text-center text-xl font-medium text-[#000000]">
                    Your payment option has been successfully saved!
                  </p>
                  <Button
                    onClick={() => router.push('/')}
                    className="rounded-lg bg-primary-500 px-3 py-2 text-base font-bold text-white hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue
                  </Button>
                </DialogContent>
              </Dialog>

              {selectedPaymentMethod === '' && (
                <div
                  onClick={() => props.handleSubmit()}
                  className="flex flex-row items-center justify-center space-x-3 rounded-lg border border-black-dark px-3 py-2"
                >
                  <p className="text-[18px] font-medium text-black-dark">
                    {props.isLoading ? <ClipLoader color='#000' size={20} /> : 'Skip'}
                  </p>
                </div>
              )}

              {selectedPaymentMethod === 'Paypal' && (
                <div className="flex w-full flex-col space-y-5 pt-5">
                  <Separator className="h-[1px] w-full bg-[#F5F5F5]" />

                  <div className="flex w-full flex-col space-y-3">
                    <p className="text-xl font-medium text-black">Paypal</p>
                    <Form {...paypalForm}>
                      <form
                        onSubmit={paypalForm.handleSubmit(onSubmit)}
                        className="flex flex-col space-y-5"
                      >
                        <FormField
                          control={paypalForm.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Email Address
                                <span className="text-destructive">*</span>
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Email Address"
                                  className="h-[68px] w-full max-w-[334px] text-base font-medium"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex w-full flex-row items-center justify-between space-x-5">
                          <div
                            onClick={() => props.handleSubmit()}
                            className="flex h-[72px] w-1/2 flex-1 cursor-pointer flex-row items-center justify-center space-x-3 rounded-lg border border-black-dark px-3"
                          >
                            <p className="text-[18px] font-medium text-black-dark">
                              {props.isLoading ? <ClipLoader color='#000' size={20} /> : 'Skip'}
                            </p>
                          </div>

                          <Button
                            type="submit"
                            className="flex h-[72px] w-1/2 flex-1 flex-row items-center justify-center space-x-3 rounded-lg bg-primary-500 px-3 hover:bg-primary-800"
                          >
                            <p className="text-[18px] font-medium text-white">
                              {props.isLoading ? <ClipLoader color='#000' size={20} /> : 'Save'}
                            </p>
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              )}
              {selectedPaymentMethod === 'Credit/Debit Cards' && (
                <div className="flex w-full flex-col space-y-5 pt-5">
                  <Separator className="h-[1px] w-full bg-[#F5F5F5]" />
                  <div className="flex w-full flex-col space-y-3">
                    <p className="text-xl font-medium text-black">
                      Credit/Debit Cards
                    </p>
                    <Form {...creditCardForm}>
                      <form
                        onSubmit={creditCardForm.handleSubmit(
                          onCreditCardSubmit,
                        )}
                        className="flex w-full flex-col space-y-5"
                      >
                        <div className="flex w-full flex-col gap-6">
                          <div className="flex w-full flex-row space-x-5">
                            <FormField
                              control={creditCardForm.control}
                              name="cardHolderName"
                              render={({ field }) => (
                                <FormItem className="w-full">
                                  <FormLabel>
                                    Card Holder Name
                                    <span className="text-destructive">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Card Holder Name"
                                      className="h-[68px] w-full text-base font-medium"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={creditCardForm.control}
                              name="cardNumber"
                              render={({ field }) => (
                                <FormItem className="w-full">
                                  <FormLabel>
                                    Card Number
                                    <span className="text-destructive">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Card Number"
                                      className="h-[68px] w-full text-base font-medium"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <div className="flex w-full flex-row space-x-5">
                          <FormField
                            control={creditCardForm.control}
                            name="expiryDate"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormLabel>
                                  Expiry Date
                                  <span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Expiry Date"
                                    className="h-[68px] w-full text-base font-medium"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={creditCardForm.control}
                            name="cvv"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormLabel>
                                  CVV
                                  <span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="CVV"
                                    className="h-[68px] w-full text-base font-medium"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex w-full flex-row items-center justify-between space-x-5">
                          <div
                            onClick={() => props.handleSubmit()}
                            className="flex h-[72px] w-1/2 flex-1 cursor-pointer flex-row items-center justify-center space-x-3 rounded-lg border border-black-dark px-3"
                          >
                            <p className="text-[18px] font-medium text-black-dark">
                              {props.isLoading ? <ClipLoader color='#000' size={20} /> : 'Skip'}
                            </p>
                          </div>

                          <Button
                            type="submit"
                            className="flex h-[72px] w-1/2 flex-1 flex-row items-center justify-center space-x-3 rounded-lg bg-primary-500 px-3 hover:bg-primary-800"
                          >
                            <p className="text-[18px] font-medium text-white">
                              {props.isLoading ? <ClipLoader color='#000' size={20} /> : 'Save'}
                            </p>
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              )}

              {selectedPaymentMethod === 'Bank Transfer' && (
                <div className="flex w-full flex-col space-y-5 pt-5">
                  <Separator className="h-[1px] w-full bg-[#F5F5F5]" />
                  <div className="flex w-full flex-col space-y-3">
                    <p className="text-xl font-medium text-black">
                      Bank Transfer
                    </p>
                    <Form {...bankTransferForm}>
                      <form
                        onSubmit={bankTransferForm.handleSubmit(
                          onBankTransferSubmit,
                        )}
                        className="flex w-full flex-col space-y-5"
                      >
                        <div className="flex w-full flex-row space-x-5">
                          <FormField
                            control={bankTransferForm.control}
                            name="bankName"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormLabel>
                                  Bank Name
                                  <span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Bank Name"
                                    className="h-[68px] w-full text-base font-medium"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={bankTransferForm.control}
                            name="accountHolderName"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormLabel>
                                  Holder Name
                                  <span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Holder Name"
                                    className="h-[68px] w-full text-base font-medium"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex w-full flex-row space-x-5">
                          <FormField
                            control={bankTransferForm.control}
                            name="accountNumber"
                            render={({ field }) => (
                              <FormItem className="w-full">
                                <FormLabel>
                                  Account Number
                                  <span className="text-destructive">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Account Number"
                                    className="h-[68px] w-full text-base font-medium"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="w-full opacity-0"></div>
                        </div>

                        <div className="flex w-full flex-row items-center justify-between space-x-5">
                          <div
                            onClick={() => props.handleSubmit()}
                            className="flex h-[72px] w-1/2 flex-1 cursor-pointer flex-row items-center justify-center space-x-3 rounded-lg border border-black-dark px-3"
                          >
                            <p className="text-[18px] font-medium text-black-dark">
                              {props.isLoading ? 'Saving...' : 'Skip'}
                            </p>
                          </div>

                          <Button
                            type="submit"
                            className="flex h-[72px] w-1/2 flex-1 flex-row items-center justify-center space-x-3 rounded-lg bg-primary-500 px-3 hover:bg-primary-800"
                          >
                            <p className="text-[18px] font-medium text-white">
                              {props.isLoading ? 'Saving...' : 'Save'}
                            </p>
                          </Button>
                        </div>
                      </form>
                    </Form>
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
