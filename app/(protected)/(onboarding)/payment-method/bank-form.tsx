'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BankForm = () => {
  return (
    <div className="space-y-8">
      <h4 className="font-medium">Bank Transfer</h4>
      <form className="space-y-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <label className="block space-y-1.5">
            <Label className="text-sm">Bank Name</Label>
            <Input className="w-full bg-transparent" placeholder="Bank Name" />
          </label>
          <label className="block space-y-1.5">
            <Label className="text-sm">Account Holder Name</Label>
            <Input
              className="w-full bg-transparent"
              placeholder="Account Holder Name"
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <label className="block space-y-1.5">
            <Label className="text-sm">Account Number</Label>
            <Input
              className="w-full bg-transparent"
              placeholder="Account Number"
              type="tel"
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
export default BankForm;
