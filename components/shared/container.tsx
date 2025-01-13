import { cn } from '@/lib/utils';

const Container = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        className,
        'container mx-auto max-w-screen-2xl px-4 lg:px-8',
      )}
    >
      {children}
    </div>
  );
};
export default Container;
