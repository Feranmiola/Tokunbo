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
import { ClipLoader } from 'react-spinners';
const schema = z.object({
  password: z.string().min(1, 'Password is required'),
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Invalid email address'),
});

const BuyerForm = (props: {setEmail: (email: string) => void, setPassword: (password: string) => void, handleSubmit: () => void, isLoading: boolean}) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    props.setEmail(values.email)
    props.setPassword(values.password)
    props.handleSubmit()
  };

  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-[836px] w-full">
        <div className="flex flex-col gap-6">
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
        <div className="flex flex-col gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
            size="lg"
          >
            <Image src={google} alt="google" height={24} width={24} />
            Continue with Google
          </Button>
          <Button type='submit' size="lg" className="hover:bg-primary-800">
            {props.isLoading ? <ClipLoader color='#000' size={20} /> : 'Sign in'}
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
