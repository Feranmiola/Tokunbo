'use client';

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
import google from '@/assets/icons/google.svg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const schema = z.object({
  password: z.string().min(1, 'Password is required'),
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Invalid email address'),
});

const BuyerForm = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-[836px] w-full">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
                    placeholder="Password"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
            Sign in
          </Button>
        </div>
        <p className="text-center">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
};
export default BuyerForm;
