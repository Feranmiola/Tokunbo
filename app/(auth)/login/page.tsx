/* eslint-disable */
'use client'
import Container from '@/components/shared/container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BuyerForm from './buyer-form';
import SellerForm from './seller-form';
import { useSignIn } from '@/components/Hooks/UseSignIn';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner'
import { useAuth } from '@/app/Context/AuthContext';
export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const {signIn, isLoading} = useSignIn()
  const {setUsername, setEmail: setAuthEmail, setUserId, setRole, setProfilePicture, setAccessToken, setRefreshToken, setIsAuthenticated} = useAuth();

  const handleSubmit = () =>{
    signIn(
      {
        email,
        password,
      },
      {
        onSuccess: (response: any) => {
          setUsername(response.data.user.username)
          setAuthEmail(response.data.user.email)
          setUserId(response.data.user.user_id)
          setRole(response.data.user.role)
          setProfilePicture(response.data.user.profile_picture)
          setAccessToken(response.data.accessToken)
          setRefreshToken(response.data.refreshToken)
          setIsAuthenticated(true)
          toast.success('Signed in successfully')
          router.push('/')
          console.log("Response:", response);
        },
        onError: (error: any) => {
          toast.error(error?.message || 'Failed to sign in')
          console.log("Error:", error);
          },
      }
    );
  }
  return (
    <main className="space-y-8 py-12 flex items-center flex-col">
      <Container className="space-y-2 text-center max-w-[400px] w-full">
        <h2 className="text-4xl">Sign In</h2>
        <p className="max-w-[600px] mx-auto text-[18px] text-center">
          Are you a buyer or a seller? Kindly provide accurate details to ensure
          a smooth and secure experience on Tokunbo.
        </p>

      </Container>
      <div className="w-full flex items-center justify-center max-w-[400px] rounded bg-[#FAFAFA] pb-6 pt-1 max-md:max-w-[95%]">
        <Tabs defaultValue="buyer" className="w-full bg-[#FAFAFA] space-y-6">
          <TabsList className="grid w-full grid-cols-2 border-b border-[#CAC4D0]">
            <TabsTrigger
              value="buyer"

              className="rounded-none shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary bg-transparent data-[state=active]:shadow-none"
            >
              Buyer
            </TabsTrigger>
            <TabsTrigger
              value="seller"
              className="rounded-none shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary bg-transparent data-[state=active]:shadow-none"
            >
              Seller
            </TabsTrigger>
          </TabsList>
          <TabsContent className='px-6' value="buyer">
            <BuyerForm setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit}  isLoading={isLoading}/>
          </TabsContent>
          <TabsContent className='px-6' value="seller">

            <SellerForm setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit}  isLoading={isLoading}/>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
