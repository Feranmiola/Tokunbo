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
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { InfoIcon } from 'lucide-react';

type Schema = z.infer<typeof sellerSchema>;

const SellerForm = () => {
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
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Full Name<span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Full Name"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email Address<span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="nin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <p>
                    NIN<span className="text-destructive">*</span>
                  </p>
                  <NINDialog />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter nin"
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Password<span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    isPassword={true}
                    type="password"
                    placeholder="********"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Confirm Password<span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    isPassword={true}
                    type="password"
                    placeholder="********"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="agree"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="leading-normal">
                  By signing up, you confirm that you have read and agreed to
                  our{' '}
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
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-transparent"
              size="lg"
            >
              <Image src={google} alt="google" height={24} width={24} />
              Continue with Google
            </Button>
            <Button size="lg" className="hover:bg-primary-800">
              Sign up
            </Button>
          </div>
        </div>
        <p className="text-center">
          Already have an account?{' '}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </p>
      </form>
    </Form>
  );
};

const NINDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <InfoIcon />
        </Button>
      </DialogTrigger>
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
          <DialogClose asChild>
            <Button className="mx-auto inline-block hover:bg-primary-800">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SellerForm;
