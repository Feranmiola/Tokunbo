import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface AuthData {
    email: string,
    password: string,
}

export const useSignIn = () => {
  const signInMutation = useMutation({
    mutationFn: async (data: AuthData) => {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/auth/signin`, data);
      console.log('Sign in response:', response.data);
      return response;
    },
  });

  return {
    signIn: signInMutation.mutate,
    isLoading: signInMutation.isPending,
    data: signInMutation.data?.data,
    error: signInMutation.error,
    reset: signInMutation.reset,
  };
}; 