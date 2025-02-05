import Container from '@/components/shared/container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BuyerForm from './BuyerForm';
import SellerForm from './SellerForm';

export default function Page() {
  return (
    <main className="space-y-8 py-12">
      <Container className="space-y-2 text-center w-full flex items-center justify-center flex-col">
        <h2 className="text-4xl">Register</h2>
        <p className='max-w-[836px] text-center'>
          Are you a buyer or a seller? Kindly provide accurate details to ensure
          a smooth and secure experience on Tokunbo.
        </p>
      </Container>
      <div className="mx-auto w-[95%] max-w-2xl rounded bg-[#FAFAFA]  pb-6 pt-1">
        <Tabs defaultValue="buyer" className="w-full space-y-6">
          <TabsList className="grid w-full grid-cols-2 border-b border-[#CAC4D0]">
            <TabsTrigger
              value="buyer"
              className="rounded-none shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:shadow-none"
            >
              Buyer
            </TabsTrigger>
            <TabsTrigger
              value="seller"
              className="rounded-none shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:shadow-none"
            >
              Seller
            </TabsTrigger>
          </TabsList>
          <TabsContent className='px-6' value="buyer">
            <BuyerForm />
          </TabsContent>
          <TabsContent className='px-6' value="seller">

            <SellerForm />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
