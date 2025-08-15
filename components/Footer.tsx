import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
          {/* Logo and Tagline */}
          <div className='md:col-span-1'>
            <div className='flex items-center gap-2 mb-4'>
              
              <h2 className='text-xl font-bold text-white'>
                CostPilot
              </h2>
            </div>
            <p className='text-white text-sm leading-relaxed max-w-sm'>
              Your Product Roadmap, Powered by Feedback
            </p>
          </div>

          {/* Features Column */}
          <div className='md:col-span-1'>
            <h3 className='text-white font-bold mb-4'>
              Features
            </h3>
            <div className='space-y-2'>
              <Link
                href='/'
                className='block text-gray-400 text-sm hover:text-gray-300 transition-colors duration-200'
              >
                Feedback
              </Link>
              <Link
                href='/about'
                className='block text-gray-400 text-sm hover:text-gray-300 transition-colors duration-200'
              >
                Roadmap
              </Link>
              <Link
                href='/contact'
                className='block text-gray-400 text-sm hover:text-gray-300 transition-colors duration-200'
              >
                Changelog
              </Link>
              <div className='text-gray-400  text-sm'>
                Help Center
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div className='md:col-span-1'>
            <h3 className='text-white  font-bold mb-4'>
              Product
            </h3>
            <div className='space-y-2'>
              <div className='text-gray-400  text-sm'>
                Pricing
              </div>
              <div className='text-gray-400  text-sm'>
                Download
              </div>
              <div className='text-gray-400  text-sm'>
                Changelog
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div className='md:col-span-1'>
            <h3 className='text-white  font-bold mb-4'>
              Company
            </h3>
            <div className='space-y-2'>
              <Link
                href='/about'
                className='block text-gray-400 text-sm hover:text-gray-300 transition-colors duration-200'
              >
                About us
              </Link>
              <Link
                href='/contact'
                className='block text-gray-400 text-sm hover:text-gray-300 transition-colors duration-200'
              >
                Contact
              </Link>
              <div className='text-gray-400  text-sm'>
                Customers
              </div>
              <div className='text-gray-400  text-sm'>
                Blog
              </div>
            </div>
          </div>

          {/* Legal Column */}
          <div className='md:col-span-1'>
            <h3 className='text-white  font-bold mb-4'>
              Legal
            </h3>
            <div className='space-y-2'>
              <div className='text-gray-400  text-sm'>
                Terms of Conditions
              </div>
              <div className='text-gray-400  text-sm'>
                Privacy Policy
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-px bg-gray-800 my-8'></div>

        {/* Copyright and Social */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <p className='text-white text-sm'>
              © {new Date().getFullYear()} CostPilot AI. All rights
              reserved.
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-white'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Made by Nishant Raj
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;