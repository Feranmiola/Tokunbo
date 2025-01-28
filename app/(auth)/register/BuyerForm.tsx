'use client';

import { buyerSchema } from '@/lib/validations';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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

type Schema = z.infer<typeof buyerSchema>;

const BuyerForm = () => {
  const form = useForm<Schema>({
    resolver: zodResolver(buyerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Password<span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input
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
            <Button size="lg" className='hover:bg-primary-800'>Sign up</Button>
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
export default BuyerForm;
