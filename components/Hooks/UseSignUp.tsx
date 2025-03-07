import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface AuthData {
    username: string,
    email: string,
    password: string,
    role: string,
    phone_number: string,
    location: string,
    profile_picture: string
}

export const useSignUp = () => {
  const signInMutation = useMutation({
    mutationFn: async (data: AuthData) =>
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/signup`, data),
  });

  return {
    signUp: signInMutation.mutate,
    isLoading: signInMutation.isPending,
    data: signInMutation.data?.data,
    error: signInMutation.error,
    reset: signInMutation.reset,
  };
}; 