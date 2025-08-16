import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div className='font-sans bg-black text-white transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8'>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse'></span>
            <span className='hidden sm:inline'>AI-Powered Financial Management</span>
            <span className='sm:hidden'>AI Financial Management</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-6 text-white '>
            Welcome to{' '}
            <span className='text-white'>
              ExpenseTracker AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            Track your expenses, manage your budget, and get AI-powered insights
            to take control of your finances with intelligent automation.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0 my-8'>
            <SignInButton>
              <button className='group relative overflow-hidden bg-white hover:bg-gray-200 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'>
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  Get Started Free
                  <span className='text-lg'>→</span>
                </span>
              </button>
            </SignInButton>
            <button className='group border-2 border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm'>
              Learn More
            </button>
          </div>

          {/* Feature highlights */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0'>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-6 h-6 sm:w-8 sm:h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                  </svg>
                </div>
                <h3 className='text-base sm:text-lg font-bold mb-2 text-center text-white group-hover:text-blue-100 transition-colors duration-700'>
                  AI Insights
                </h3>
                <p className='text-xs sm:text-sm text-center text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                  Smart analysis of your spending patterns
                </p>
              </div>
            </div>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-6 h-6 sm:w-8 sm:h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z' />
                  </svg>
                </div>
                <h3 className='text-base sm:text-lg font-bold mb-2 text-center text-white group-hover:text-green-100 transition-colors duration-700'>
                  Auto Categories
                </h3>
                <p className='text-xs sm:text-sm text-center text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                  Intelligent expense categorization
                </p>
              </div>
            </div>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105 sm:col-span-2 md:col-span-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-6 h-6 sm:w-8 sm:h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
                  </svg>
                </div>
                <h3 className='text-base sm:text-lg font-bold mb-2 text-center text-white group-hover:text-orange-100 transition-colors duration-700'>
                  Smart Dashboard
                </h3>
                <p className='text-xs sm:text-sm text-center text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                  Beautiful, intuitive financial overview
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 backdrop-blur-sm relative overflow-hidden'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              FAQ
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0'>
              Frequently Asked{' '}
              <span className='text-white'>
                Questions
              </span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2 sm:px-0'>
              Everything you need to know about ExpenseTracker AI and how it can
              transform your financial management.
            </p>
          </div>

          <div className='space-y-4 sm:space-y-6'>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-700 hover:-translate-y-2 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='flex items-start gap-3 sm:gap-4 relative z-10'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-100 transition-colors duration-700'>
                    What is ExpenseTracker AI?
                  </h3>
                  <p className='text-sm sm:text-base leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                    ExpenseTracker AI is an intelligent financial management
                    tool that uses artificial intelligence to help you monitor
                    your spending patterns, get smart category suggestions, and
                    receive personalized insights to improve your financial
                    health.
                  </p>
                </div>
              </div>
            </div>

            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-700 hover:-translate-y-2 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='flex items-start gap-3 sm:gap-4 relative z-10'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-green-100 transition-colors duration-700'>
                    How does the AI work?
                  </h3>
                  <p className='text-sm sm:text-base leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                    Our AI analyzes your spending data to automatically
                    categorize expenses, detect patterns, and provide
                    personalized recommendations. You can also ask the AI
                    questions about your spending habits and get instant,
                    intelligent responses.
                  </p>
                </div>
              </div>
            </div>

            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] transition-all duration-700 hover:-translate-y-2 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='flex items-start gap-3 sm:gap-4 relative z-10'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-orange-100 transition-colors duration-700'>
                    Is ExpenseTracker AI free?
                  </h3>
                  <p className='text-sm sm:text-base leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                    Yes, ExpenseTracker AI offers a free plan with basic AI
                    features including smart categorization and insights.
                    Premium plans are available for advanced AI analytics and
                    unlimited AI interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 backdrop-blur-sm relative overflow-hidden'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Testimonials
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0'>
              What Our Users{' '}
              <span className='text-white'>
                Say
              </span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2 sm:px-0'>
              Join thousands of satisfied users who have transformed their
              financial habits with ExpenseTracker AI.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-700'>
                    <span className='text-black text-sm sm:text-base font-bold'>
                      S
                    </span>
                  </div>
                  <div>
                    <div className='font-bold text-sm sm:text-base text-white group-hover:text-blue-100 transition-colors duration-700'>
                      Sarah L.
                    </div>
                    <div className='text-xs sm:text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                      Verified User
                    </div>
                  </div>
                </div>
                <p className='text-sm sm:text-base leading-relaxed mb-4 text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                  &ldquo;ExpenseTracker AI has completely transformed my
                  budgeting. The AI insights are incredibly helpful and I now
                  have full control over my finances!&rdquo;
                </p>
                <div className='flex text-yellow-400 text-xs sm:text-sm'>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>

            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-700'>
                    <span className='text-black text-sm sm:text-base font-bold'>
                      J
                    </span>
                  </div>
                  <div>
                    <div className='font-bold text-sm sm:text-base text-white group-hover:text-green-100 transition-colors duration-700'>
                      John D.
                    </div>
                    <div className='text-xs sm:text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                      Verified User
                    </div>
                  </div>
                </div>
                <p className='text-sm sm:text-base leading-relaxed mb-4 text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                  &ldquo;The AI-powered insights from ExpenseTracker have helped
                  me identify and reduce unnecessary spending. The smart
                  categorization is amazing!&rdquo;
                </p>
                <div className='flex text-yellow-400 text-xs sm:text-sm'>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>

            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105 sm:col-span-2 lg:col-span-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-700'>
                    <span className='text-black text-sm sm:text-base font-bold'>
                      E
                    </span>
                  </div>
                  <div>
                    <div className='font-bold text-sm sm:text-base text-white group-hover:text-orange-100 transition-colors duration-700'>
                      Emily R.
                    </div>
                    <div className='text-xs sm:text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                      Verified User
                    </div>
                  </div>
                </div>
                <p className='text-sm sm:text-base leading-relaxed mb-4 text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                  &ldquo;ExpenseTracker AI is so intelligent and easy to use.
                  The AI recommendations are spot-on and have genuinely improved
                  my financial habits!&rdquo;
                </p>
                <div className='flex text-yellow-400 text-xs sm:text-sm'>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-20 px-8 relative overflow-hidden'>
        <div className='max-w-4xl mx-auto text-center relative z-10'>
          <div className='inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg'>
            <span className='w-2 h-2 bg-white rounded-full animate-pulse'></span>
            Ready to Transform Your Finances?
          </div>

          <h2 className='text-4xl md:text-6xl font-bold mb-6 leading-tight text-white'>
            Start Your{' '}
            <span className='text-white'>
              Financial Journey
            </span>
          </h2>

          <p className='text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            Join thousands of users who have already transformed their financial
            habits with ExpenseTracker AI. Start your journey towards smarter
            budgeting today.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <SignInButton>
              <button className='group relative overflow-hidden bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'>
                <span className='relative z-10 flex items-center gap-2'>
                  Get Started Free
                </span>
              </button>
            </SignInButton>

            <button className='group border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center gap-2'>
              Learn More
            </button>
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

export default Guest;