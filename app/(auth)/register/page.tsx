import Container from '@/components/shared/container';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BuyerForm from './BuyerForm';

export default function Page() {
  return (
    <main className="space-y-8 py-12">
      <Container className="space-y-2 text-center">
        <h2 className="text-4xl">Register</h2>
        <p>
          Are you a buyer or a seller? Kindly provide accurate details to ensure
          a smooth and secure experience on Tokunbo.
        </p>
      </Container>
      <div className="mx-auto w-[95%] max-w-2xl rounded bg-secondary px-6 pb-6 pt-1">
        <Tabs defaultValue="buyer" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="buyer"
              className="rounded-none shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Buyer
            </TabsTrigger>
            <TabsTrigger
              value="seller"
              className="rounded-none shadow-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Seller
            </TabsTrigger>
          </TabsList>
          <TabsContent value="buyer">
            <BuyerForm />
          </TabsContent>
          <TabsContent value="seller">Seller</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
