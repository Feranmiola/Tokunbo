import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeftIcon } from 'lucide-react';

export default function Page() {
  return (
    <main className="space-y-8 py-12">
      <div className="mx-auto w-[95%] max-w-2xl space-y-4 py-12">
        <Button variant="ghost" className="text-destructive">
          <ChevronLeftIcon /> Back
        </Button>
        <div className="w-full rounded bg-secondary/40">
          <header className="border-b border-b-gray-200 py-4">
            <h2 className="text-center text-2xl font-medium">
              Set Up your Contact Information
            </h2>
          </header>
          <section className="p-8">
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <label htmlFor="shipping-address" className="block space-y-1.5">
                  <Label className="text-sm">Enter Shipping Address</Label>
                  <Input
                    id="shipping-address"
                    className="w-full bg-transparent"
                    placeholder="Shipping Address"
                  />
                </label>
                <label htmlFor="phone-number" className="block space-y-1.5">
                  <Label className="text-sm">Enter Phone Number</Label>
                  <Input
                    id="phone-number"
                    className="w-full bg-transparent"
                    placeholder="Phone Number"
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Button variant="outline" size="lg">
                  Skip
                </Button>
                <Button className="hover:bg-primary-800" size="lg">
                  Save
                </Button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
