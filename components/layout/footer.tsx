import Link from 'next/link';
import Container from '../shared/container';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { milonga } from '@/app/layout';

const Footer = () => {
  return (
    <footer className="space-y-12 bg-primaryGreen pt-10 text-white">
      <Container className="grid lg:grid-cols-[2.55fr_1.45fr] gap-8">
        <section className="grid lg:grid-cols-[0.9fr_0.9fr_0.9fr_1.3fr] gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold">Home</h3>
            <ul className="space-y-1">
              {['About Us', 'Privacy Policy', 'Products'].map(link => (
                <li key={link}>
                  <Link href="/" className="hover:text-white/80">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Categories</h3>
            <ul className="space-y-1">
              {['Electronics', 'Furniture', 'Clothes', 'Assessories'].map(
                link => (
                  <li key={link}>
                    <Link href="/" className="hover:text-white/80">
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Helpful Links</h3>
            <ul className="space-y-1">
              {['Privacy Policy', 'Terms & Conditions', 'Legal Service'].map(
                link => (
                  <li key={link}>
                    <Link href="/" className="hover:text-white/80">
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Contact Us</h3>
            <ul className="space-y-1">
              {['Support: help@tokunbo.com', 'Phone: +234 819 975 9097'].map(
                text => (
                  <li key={text}>{text}</li>
                ),
              )}
            </ul>
          </div>
        </section>
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="font-semibold">
              Be the first to get hot product deals
            </h2>
            <p className="text-sm">
              Get Exclusive Hot Deals Straight to Your Inbox.
            </p>
          </div>
          <div className="flex items-center">
            <Input
              placeholder="Enter your email"
              type="email"
              className="rounded-sm rounded-r-none border-white bg-transparent placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="rounded-sm rounded-l-none bg-white text-primary">
              Subscribe
            </Button>
          </div>
        </section>
      </Container>
      <Container className="flex items-center justify-between py-4 max-lg:flex-col max-lg:justify-center">
        <Link href="/">
          <h1
            className={cn(milonga.className, 'text-xl font-medium lg:text-3xl')}
          >
            Tokunbo Market
          </h1>
        </Link>
        <p>&copy;2024 Tokunbo Market. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};
export default Footer;
