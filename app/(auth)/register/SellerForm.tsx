'use client';

import { sellerSchema } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import google from '@/assets/icons/google.svg';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { InfoIcon } from 'lucide-react';
import { useState } from 'react';


type Schema = z.infer<typeof sellerSchema>;

const SellerForm = (props: {setStep: (step: number) => void}) => {
  const [isNINDialogOpen, setIsNINDialogOpen] = useState(false);
  const form = useForm<Schema>({
    resolver: zodResolver(sellerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      nin: '',
      agree: false,
    },
  });

  const onSubmit = (values: Schema) => {
    props.setStep(2)
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-5">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Full Name<span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Email Address<span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Email Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nin"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="flex items-center gap-1">
                  NIN<span className="text-destructive">*</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0"
                    onClick={() => setIsNINDialogOpen(true)}
                    type="button"
                  >
                    <InfoIcon className="h-4 w-4" />
                  </Button>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter nin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Password<span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    isPassword={true}
                    type="password"
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Confirm Password<span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    isPassword={true}
                    type="password"
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel className="leading-normal text-sm">
                By signing up, you confirm that you have read and agreed to our{' '}
                <Link href="#" className="font-semibold">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="font-semibold">
                  Privacy Policy
                </Link>
                .
              </FormLabel>
            </FormItem>
          )}
        />

        <div className="flex flex-col space-y-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent w-full"
            size="lg"
          >
            <Image src={google} alt="google" height={24} width={24} />
            Continue with Google
          </Button>
          <Button size="lg" className="hover:bg-primary-800 w-full">
            Sign up
          </Button>
        </div>

        <p className="text-center text-sm">
          Already have an account?{' '}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </p>
      </form>

      <Dialog open={isNINDialogOpen} onOpenChange={setIsNINDialogOpen}>
        <DialogContent className="max-w-[500px]">
          <DialogTitle className="text-center text-lg">
            Why We Require Your NIN
          </DialogTitle>
          <section className="space-y-4 text-sm text-surface-varaint">
            <p>
              At Tokunbo, trust and security are our top priorities. We ask for
              your National Identification Number (NIN) during sign-up to:
            </p>
            <ul className="list-decimal space-y-2 pl-2">
              <li>
                <strong>Enhance Security:</strong> Verify your identity to ensure
                all sellers on our platform are authentic and reliable.
              </li>
              <li>
                <strong>Build Trust:</strong> Create a safer marketplace for
                buyers and sellers by reducing fraudulent activities.
              </li>
              <li>
                <strong>Compliance with Regulations:</strong> Adhere to legal
                requirements for online transactions and identity verification.
              </li>
            </ul>
            <p>
              Rest assured, your NIN will be stored securely and used solely for
              verification purposes, in line with our Privacy Policy
            </p>
            <p>
              We appreciate your understanding and cooperation in making Tokunbo a
              trusted community.
            </p>
          </section>
          <DialogFooter className="flex items-center justify-center">
            <Button 
              className="mx-auto inline-block hover:bg-primary-800"
              onClick={() => setIsNINDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Form>
  );
};

export default SellerForm;
