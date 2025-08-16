import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className='font-sans bg-black text-white transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8'>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse'></span>
            <span className='hidden sm:inline'>Powered by AI Technology</span>
            <span className='sm:hidden'>AI Technology</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
            About{' '}
            <span className='text-white'>
              ExpenseTracker AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            Your intelligent companion for tracking expenses and managing your
            finances with cutting-edge AI-powered insights.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-white hover:bg-gray-200 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10'>Start Your Journey</span>
            </Link>
            <Link
              href='/contact'
              className='group border-2 border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm'
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8  backdrop-blur-sm relative overflow-hidden'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center gap-2  text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
            <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
            Our Mission
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white px-2 sm:px-0'>
            Transforming Financial Management with{' '}
            <span className='text-white'>AI</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
            At ExpenseTracker AI, we leverage cutting-edge artificial
            intelligence to revolutionize how individuals achieve financial
            wellness. Our AI analyzes your spending patterns to deliver
            personalized recommendations and actionable insights that lead to
            better budgeting and financial freedom.
          </p>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-700'>
                  10K+
                </div>
                <div className='text-gray-200 font-medium text-lg group-hover:text-white transition-colors duration-700'>
                  Active Users
                </div>
              </div>
            </div>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-green-100 to-emerald-100 bg-clip-text text-transparent group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-700'>
                  ₹2M+
                </div>
                <div className='text-gray-200 font-medium text-lg group-hover:text-white transition-colors duration-700'>
                  Money Tracked
                </div>
              </div>
            </div>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-orange-100 to-red-100 bg-clip-text text-transparent group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-700'>
                  99%
                </div>
                <div className='text-gray-200 font-medium text-lg group-hover:text-white transition-colors duration-700'>
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-8 '>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Features
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
              Why Choose{' '}
              <span className='text-white'>
                ExpenseTracker AI?
              </span>
            </h2>
            <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
              Discover the powerful features that make our AI-driven platform
              the smart choice for modern financial management.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-8 h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors duration-700'>
                  AI-Powered Insights
                </h3>
                <p className='text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-700'>
                  Get intelligent analysis of your spending patterns with
                  personalized AI recommendations and automated category
                  suggestions that learn from your behavior.
                </p>
              </div>
            </div>

            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-8 h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-4 text-white group-hover:text-green-100 transition-colors duration-700'>
                  Smart Categorization
                </h3>
                <p className='text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-700'>
                  Let our AI automatically categorize your expenses with 99%
                  accuracy and provide tailored recommendations to enhance your
                  budget management effortlessly.
                </p>
              </div>
            </div>

            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-8 h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-4 text-white group-hover:text-orange-100 transition-colors duration-700'>
                  Intelligent Dashboard
                </h3>
                <p className='text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-700'>
                  Experience a modern, AI-enhanced interface with real-time
                  insights, interactive financial analytics, and beautiful
                  visualizations that make sense of your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 px-8  backdrop-blur-sm relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-64 h-64  rounded-full blur-2xl'></div>
        <div className='absolute bottom-0 left-0 w-64 h-64  rounded-full blur-2xl'></div>

        <div className='max-w-4xl mx-auto relative z-10'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Our Story
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-8 text-white'>
              Built for the{' '}
              <span className='text-white'>
                Future
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <p className='text-lg text-gray-300 leading-relaxed'>
                ExpenseTracker AI was born from the vision of creating truly
                intelligent financial management tools. Our team of financial
                experts, data scientists, and technologists came together to
                solve a critical problem: making personal finance management
                smarter, more intuitive, and more effective.
              </p>
              <p className='text-lg text-gray-300 leading-relaxed'>
                Since our launch, we&#39;ve helped thousands of users achieve
                better budgeting and improve their overall financial health
                through the power of artificial intelligence. Every feature is
                designed with user experience and financial wellness in mind.
              </p>
              <div className='flex items-center gap-4 pt-4'>
                <div className='flex -space-x-2'>
                  <div className='w-10 h-10 bg-white rounded-full border-2 border-gray-800'></div>
                  <div className='w-10 h-10 bg-white rounded-full border-2 border-gray-800'></div>
                  <div className='w-10 h-10 bg-white rounded-full border-2 border-gray-800'></div>
                </div>
                <div className='text-sm text-gray-300'>
                  <div className='font-semibold'>Trusted by 10,000+ users</div>
                  <div>Join our growing community</div>
                </div>
              </div>
            </div>

            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(147,51,234,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/30 to-indigo-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10 space-y-6'>
                <div className='flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-700'>
                  <div className='w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-transform duration-700'></div>
                  <div className='text-white font-medium group-hover:text-purple-100 transition-colors duration-700'>
                    Founded in 2024
                  </div>
                </div>
                <div className='flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-700'>
                  <div className='w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-transform duration-700'></div>
                  <div className='text-white font-medium group-hover:text-purple-100 transition-colors duration-700'>
                    AI-First Approach
                  </div>
                </div>
                <div className='flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-700'>
                  <div className='w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-transform duration-700'></div>
                  <div className='text-white font-medium group-hover:text-purple-100 transition-colors duration-700'>
                    Global Impact
                  </div>
                </div>
                <div className='flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-700'>
                  <div className='w-3 h-3 bg-white rounded-full group-hover:scale-125 transition-transform duration-700'></div>
                  <div className='text-white font-medium group-hover:text-purple-100 transition-colors duration-700'>
                    User-Centric Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-20 px-8  relative overflow-hidden'>
        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='inline-flex items-center gap-2  text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg'>
            <span className='w-2 h-2 bg-white rounded-full animate-pulse'></span>
            Ready to Transform Your Finances?
          </div>

          <h2 className='text-4xl md:text-6xl font-bold mb-6 leading-tight text-white'>
            Take Control of Your{' '}
            <span className='text-white'>
              Financial Future
            </span>
          </h2>

          <p className='text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            Join thousands of users who have already transformed their financial
            habits with ExpenseTracker AI. Start your journey towards smarter
            budgeting today.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <Link
              href='/sign-up'
              className='group relative overflow-hidden bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10 flex items-center gap-2'>
                Get Started Free
              </span>
            </Link>

            <Link
              href='/contact'
              className='group border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center gap-2'
            >
              Contact Us
              
            </Link>
          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10 text-center'>
                <div className='text-4xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-700'>
                  Free
                </div>
                <div className='text-gray-200 font-regular text-lg group-hover:text-white transition-colors duration-700'>
                  No credit card required
                </div>
              </div>
            </div>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10 text-center'>
                <div className='text-4xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-green-100 to-emerald-100 bg-clip-text text-transparent group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-700'>
                  24/7
                </div>
                <div className='text-gray-200 font-regular text-lg group-hover:text-white transition-colors duration-700'>
                  AI-powered support
                </div>
              </div>
            </div>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10 text-center'>
                <div className='text-4xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-orange-100 to-red-100 bg-clip-text text-transparent group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-700'>
                  Instant
                </div>
                <div className='text-gray-200 font-regular text-lg group-hover:text-white transition-colors duration-700'>
                  Setup in minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;