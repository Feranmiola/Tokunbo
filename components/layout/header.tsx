import Link from 'next/link';
import Container from '../shared/container';
import { cn } from '@/lib/utils';
import { milonga } from '@/app/layout';
import { ChevronDown, Search, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
const Header = () => {
  return (
    <header>
      <Container className="flex items-center justify-between py-4">
        <Link href="/">
          <h1
            className={cn(milonga.className, 'text-xl font-medium lg:text-3xl')}
          >
            Tokunbo Market
          </h1>
        </Link>
        <nav className='max-lg:hidden'>
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-primary"
              >
                Products <ChevronDown className="h-4 w-4" />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-primary"
              >
                Requests <ChevronDown className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center lg:gap-2">
          <Button size="icon" variant="ghost" className='[&_svg]:size-5'>
            <Search className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className='[&_svg]:size-5'>
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Separator orientation="vertical" />
          <Button variant="ghost" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};
export default Header;
