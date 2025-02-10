'use client';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import React from 'react';

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

const schema = z.object({
  shippingAddress: z.string().min(1, 'Shipping address is required'),
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\d{11}$/, 'Invalid phone number'),
});

const ContactInformation = (props: { setStep: (step: number) => void }) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      shippingAddress: '',
      phoneNumber: '',
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4">
      <div
        onClick={() => props.setStep(1)}
        className="flex cursor-pointer flex-row items-center space-x-2 w-full max-w-[400px]"
      >
        <ChevronDown className="h-4 w-4 rotate-90" color="#FE5722" />
        <p className="text-base font-bold text-[#FE5722]">Back</p>
      </div>
      <div className="w-full max-w-[400px] rounded bg-[#FAFAFA] pb-6 pt-1">
        <div className="flex flex-col gap-4">
          <p className="border-b border-[#CAC4D0] pb-3 pt-1 text-center text-xl font-medium text-[#000000]">
            Set up your contact information
          </p>
          <div className="flex w-full flex-col space-y-6 px-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-[836px]"
              >
                <div className="flex flex-col space-y-3">
                  <FormField
                    control={form.control}
                    name="shippingAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Shipping Address
                          <span className="text-destructive">*</span>
                        </FormLabel>

                        <FormControl>
                          <Input
                            placeholder="Shipping Address"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone Number
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Phone Number"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>

            <div className="flex flex-col items-center space-y-2 w-full">
              <Button
                //   onClick={handleCancel}

                className="border-muted-100 text-muted-100 h-12  w-full  items-center justify-center rounded-lg border bg-white text-base font-bold hover:border-primary-500 hover:bg-primary-500 hover:text-white"
              >
                Skip
              </Button>
              <Button
                onClick={() => props.setStep(4)}
                //   disabled={!isUploaded}
                className="h-12 flex-1 items-center justify-center w-full rounded-lg bg-primary-500 text-base font-bold text-white hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
