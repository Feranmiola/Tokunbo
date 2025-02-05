import Link from 'next/link';
import Container from '../shared/container';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { milonga } from '@/app/layout';

const Footer = () => {
  return (
    <footer className="bg-primaryGreen pt-10 text-white">
      <Container className="flex flex-col w-full space-y-12">
        <div className="flex flex-col lg:flex-row lg-w-full  lg:justify-between gap-8">
          {/* Links Section */}
          <div className="flex flex-1 flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-2">

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
            <div className="flex-1 space-y-2">
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
            <div className="flex-1 space-y-2">
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
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold">Contact Us</h3>
              <ul className="space-y-1">
                {['Support: help@tokunbo.com', 'Phone: +234 819 975 9097'].map(
                  text => (
                    <li key={text}>{text}</li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className=" space-y-4">
            <div className="space-y-1">
              <h2 className="font-semibold">
                Be the first to get hot product deals
              </h2>
              <p className="text-sm">
                Get Exclusive Hot Deals Straight to Your Inbox.
              </p>
            </div>
            <div className="flex">
              <Input
                placeholder="Enter your email"
                type="email"
                className="rounded-sm rounded-r-none border-white bg-transparent placeholder:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-sm rounded-l-none bg-white text-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-center w-full border-t border-white/20 py-4 max-lg:flex-col max-lg:gap-4">
          <div className="flex w-full  items-center justify-between max-lg:flex-col max-lg:gap-4">
            <Link href="/">
              <h1
                className={cn(milonga.className, 'text-xl font-medium lg:text-3xl')}
              >
                Tokunbo Market
              </h1>
            </Link>
            <p>&copy;2024 Tokunbo Market. All Rights Reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
