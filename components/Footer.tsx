import Link from 'next/link';

const Footer = () => {
  return (
    <footer 
      className='relative overflow-hidden border-t'
      style={{
        background: 'linear-gradient(to bottom right, var(--card-bg), var(--background), rgba(16, 185, 129, 0.1))',
        borderColor: 'var(--card-border)'
      }}
    >
      {/* Gradient accent line */}
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Logo and Tagline */}
          <div className='text-center md:text-left'>
            <div className='inline-flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg'>
                <span className='text-white text-lg'>💰</span>
              </div>
              <h2 className='text-xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
                ExpenseTracker AI
              </h2>
            </div>
            <p 
              className='leading-relaxed max-w-sm'
              style={{ color: 'var(--text-secondary)' }}
            >
              Intelligent financial management powered by AI. Track your
              expenses, manage your budget, and gain insights into your spending
              patterns.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='text-center md:text-left'>
            <h3 
              className='text-lg font-semibold mb-4'
              style={{ color: 'var(--text-primary)' }}
            >
              Quick Links
            </h3>
            <div className='flex flex-col space-y-3'>
              <Link
                href='/'
                className='group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200'
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className='w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                Home
              </Link>
              <Link
                href='/about'
                className='group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200'
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className='w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                About
              </Link>
              <Link
                href='/contact'
                className='group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200'
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className='w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'></span>
                Contact
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className='text-center md:text-left'>
            <h3 
              className='text-lg font-semibold mb-4'
              style={{ color: 'var(--text-primary)' }}
            >
              Features
            </h3>
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-sm'>
                <div className='w-5 h-5 bg-gradient-to-br from-emerald-500 to-green-500 rounded-md flex items-center justify-center shadow-sm'>
                  <span className='text-white text-xs'>🤖</span>
                </div>
                <span style={{ color: 'var(--text-secondary)' }}>AI-Powered Insights</span>
              </div>
              <div className='flex items-center gap-3 text-sm'>
                <div className='w-5 h-5 bg-gradient-to-br from-green-500 to-teal-500 rounded-md flex items-center justify-center shadow-sm'>
                  <span className='text-white text-xs'>✨</span>
                </div>
                <span style={{ color: 'var(--text-secondary)' }}>Smart Categorization</span>
              </div>
              <div className='flex items-center gap-3 text-sm'>
                <div className='w-5 h-5 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md flex items-center justify-center shadow-sm'>
                  <span className='text-white text-xs'>📊</span>
                </div>
                <span style={{ color: 'var(--text-secondary)' }}>Analytics Dashboard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className='w-full h-px mb-8'
          style={{
            background: 'linear-gradient(to right, transparent, var(--card-border), transparent)'
          }}
        ></div>

        {/* Copyright and Social */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <p 
              className='text-sm'
              style={{ color: 'var(--text-secondary)' }}
            >
              © {new Date().getFullYear()} ExpenseTracker AI. All rights
              reserved.
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <div 
              className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium'
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: 'var(--accent)'
              }}
            >
              <span className='w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse'></span>
              Made by Sahand
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;