'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PaypalForm = () => {
  return (
    <div className="space-y-8">
      <h4 className="font-medium">Paypal</h4>
      <form className="space-y-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <label htmlFor="email" className="block space-y-1.5">
            <Label className="text-sm">Email Address</Label>
            <Input
              type="email"
              className="w-full bg-transparent"
              placeholder="Email Address"
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
    </div>
  );
};
export default PaypalForm;
