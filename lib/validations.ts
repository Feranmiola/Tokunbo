import { z } from 'zod';

export const buyerSchema = z
  .object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z
      .string()
      .min(1, 'Email address is required')
      .email('Invalid email address'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
    agree: z.boolean().default(false),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
  .refine(data => data.agree, {
    message: 'Please agree to terms and conditions',
    path: ['agree'],
  });

export const sellerSchema = z
  .object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z
      .string()
      .min(1, 'Email address is required')
      .email('Invalid email address'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
    agree: z.boolean().default(false),
    nin: z
      .string()
      .min(1, 'NIN is required')
      .min(11, 'NIN must be 11 digits')
      .max(11, 'NIN must be 11 digits'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
  .refine(data => data.agree, {
    message: 'Please agree to terms and conditions',
    path: ['agree'],
  });
