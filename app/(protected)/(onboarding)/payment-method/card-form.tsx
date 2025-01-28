'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CardForm = () => {
  return (
    <div className="space-y-8">
      <h4 className="font-medium">Credit/Debit Cards</h4>
      <form className="space-y-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <label className="block space-y-1.5">
            <Label className="text-sm">Cardholder Name</Label>
            <Input
              className="w-full bg-transparent"
              placeholder="Cardholder Name"
            />
          </label>
          <label className="block space-y-1.5">
            <Label className="text-sm">Card Number (16 digits)</Label>
            <Input
              className="w-full bg-transparent"
              placeholder="Enter Digits"
              type="tel"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <label className="block space-y-1.5">
            <Label className="text-sm">CVV (3 digits)</Label>
            <Input className="w-full bg-transparent" placeholder="CVV" />
          </label>
          <label className="block space-y-1.5">
            <Label className="text-sm">Expiry Date (MM/YY)</Label>
            <Input
              className="w-full bg-transparent"
              placeholder="MM/YY"
              type="date"
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
export default CardForm;
