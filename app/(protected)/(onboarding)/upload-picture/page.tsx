import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from 'lucide-react';
import UploadPicture from './upload';

export default function Page() {
  return (
    <main className="space-y-8 py-12">
      <div className="mx-auto w-[95%] max-w-2xl rounded bg-secondary/40 py-12">
        <div className="mx-auto max-w-md space-y-4">
          <Button variant="ghost" className="text-destructive">
            <ChevronLeftIcon /> Back
          </Button>
          <div className="-full flex aspect-[1.102] flex-col items-center justify-center gap-6 rounded border-8 border-secondary px-4 py-6">
            <header className="w-full space-y-1 text-center">
              <h2 className="text-2xl font-medium">Upload your Picture</h2>
              <p className="text-sm">Files should be JPEG, PNG, or JPG.</p>
            </header>
            <UploadPicture />
          </div>
        </div>
      </div>
    </main>
  );
}
