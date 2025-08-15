import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div 
      className='font-sans transition-all duration-300 min-h-screen'
      style={{
        background: 'linear-gradient(to bottom right, var(--card-bg), var(--background), rgba(16, 185, 129, 0.1))'
      }}
    >
      {/* Hero Section */}
      <section 
        className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8'
        style={{
          background: 'linear-gradient(to bottom right, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.05), rgba(20, 184, 166, 0.1))'
        }}
      >
        <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div 
            className='inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              color: 'var(--accent)'
            }}
          >
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse'></span>
            <span className='hidden sm:inline'>
              AI-Powered Financial Management
            </span>
            <span className='sm:hidden'>AI Financial Management</span>
          </div>
          <h1 
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight'
            style={{ color: 'var(--text-primary)' }}
          >
            Welcome to{' '}
            <span className='bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent'>
              ExpenseTracker AI
            </span>
          </h1>
          <p 
            className='text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2 sm:px-0'
            style={{ color: 'var(--text-secondary)' }}
          >
            Track your expenses, manage your budget, and get AI-powered insights
            to take control of your finances with intelligent automation.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0'>
            <SignInButton>
              <button className='group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'>
                <span className='relative z-10 flex items-center justify-center gap-2'>
                  Get Started Free
                  <span className='text-lg'>→</span>
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              </button>
            </SignInButton>
            <button 
              className='group border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm'
              style={{
                borderColor: 'rgba(16, 185, 129, 0.2)',
                color: 'var(--accent)'
              }}
            >
              Learn More
            </button>
          </div>

          {/* Feature highlights */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0'>
            <div 
              className='backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border'
              style={{
                backgroundColor: 'rgba(var(--card-bg-rgb), 0.8)',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                <span className='text-white text-base sm:text-lg'>🤖</span>
              </div>
              <h3 
                className='text-base sm:text-lg font-bold mb-2 text-center'
                style={{ color: 'var(--text-primary)' }}
              >
                AI Insights
              </h3>
              <p 
                className='text-xs sm:text-sm text-center'
                style={{ color: 'var(--text-secondary)' }}
              >
                Smart analysis of your spending patterns
              </p>
            </div>
            <div 
              className='backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border'
              style={{
                backgroundColor: 'rgba(var(--card-bg-rgb), 0.8)',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                <span className='text-white text-base sm:text-lg'>✨</span>
              </div>
              <h3 
                className='text-base sm:text-lg font-bold mb-2 text-center'
                style={{ color: 'var(--text-primary)' }}
              >
                Auto Categories
              </h3>
              <p 
                className='text-xs sm:text-sm text-center'
                style={{ color: 'var(--text-secondary)' }}
              >
                Intelligent expense categorization
              </p>
            </div>
            <div 
              className='backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border sm:col-span-2 md:col-span-1'
              style={{
                backgroundColor: 'rgba(var(--card-bg-rgb), 0.8)',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-4 mx-auto'>
                <span className='text-white text-base sm:text-lg'>📊</span>
              </div>
              <h3 
                className='text-base sm:text-lg font-bold mb-2 text-center'
                style={{ color: 'var(--text-primary)' }}
              >
                Smart Dashboard
              </h3>
              <p 
                className='text-xs sm:text-sm text-center'
                style={{ color: 'var(--text-secondary)' }}
              >
                Beautiful, intuitive financial overview
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section 
        className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 backdrop-blur-sm relative overflow-hidden'
        style={{
          backgroundColor: 'rgba(var(--card-bg-rgb), 0.8)'
        }}
      >
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500'></div>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div 
              className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: 'var(--accent)'
              }}
            >
              <span className='w-1.5 h-1.5 bg-emerald-500 rounded-full'></span>
              FAQ
            </div>
            <h2 
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0'
              style={{ color: 'var(--text-primary)' }}
            >
              Frequently Asked{' '}
              <span style={{ color: 'var(--accent)' }}>
                Questions
              </span>
            </h2>
            <p 
              className='text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0'
              style={{ color: 'var(--text-secondary)' }}
            >
              Everything you need to know about ExpenseTracker AI and how it can
              transform your financial management.
            </p>
          </div>

          <div className='space-y-4 sm:space-y-6'>
            <div 
              className='group backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-200'
              style={{
                backgroundColor: 'rgba(var(--card-bg-rgb), 0.8)',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg flex-shrink-0'>
                  <span className='text-white text-xs sm:text-sm'>?</span>
                </div>
                <div className='flex-1'>
                  <h3 
                    className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'
                    style={{ color: 'var(--text-primary)' }}
                  >
                    What is ExpenseTracker AI?
                  </h3>
                  <p 
                    className='text-sm sm:text-base leading-relaxed'
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    ExpenseTracker AI is an intelligent financial management
                    tool that uses artificial intelligence to help you monitor
                    your spending patterns, get smart category suggestions, and
                    receive personalized insights to improve your financial
                    health.
                  </p>
                </div>
              </div>
            </div>

            <div 
              className='group backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-200'
              style={{
                backgroundColor: 'rgba(var(--card-bg-rgb), 0.8)',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg flex-shrink-0'>
                  <span className='text-white text-xs sm:text-sm'>🤖</span>
                </div>
                <div className='flex-1'>
                  <h3 
                    className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'
                    style={{ color: 'var(--text-primary)' }}
                  >
                    How does the AI work?
                  </h3>
                  <p 
                    className='text-sm sm:text-base leading-relaxed'
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Our AI analyzes your spending data to automatically
                    categorize expenses, detect patterns, and provide
                    personalized recommendations. You can also ask the AI
                    questions about your spending habits and get instant,
                    intelligent responses.
                  </p>
                </div>
              </div>
            </div>

            <div 
              className='group backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-200'
              style={{
                backgroundColor: 'rgba(var(--card-bg-rgb), 0.8)',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className='flex items-start gap-3 sm:gap-4'>
                <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg flex-shrink-0'>
                  <span className='text-white text-xs sm:text-sm'>💎</span>
                </div>
                <div className='flex-1'>
                  <h3 
                    className='text-lg sm:text-xl font-bold mb-2 sm:mb-3'
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Is ExpenseTracker AI free?
                  </h3>
                  <p 
                    className='text-sm sm:text-base leading-relaxed'
                    style={{ color: 'var(--text-secondary)' }}
                  >
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
      <section 
        className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'
        style={{
          background: 'linear-gradient(to bottom right, var(--card-bg), var(--background), rgba(16, 185, 129, 0.1))'
        }}
      >
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div 
              className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: 'var(--accent)'
              }}
            >
              <span className='w-1.5 h-1.5 bg-emerald-500 rounded-full'></span>
              Testimonials
            </div>
            <h2 
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0'
              style={{ color: 'var(--text-primary)' }}
            >
              What Our Users{' '}
              <span style={{ color: 'var(--accent)' }}>
                Say
              </span>
            </h2>
            <p 
              className='text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0'
              style={{ color: 'var(--text-secondary)' }}
            >
              Join thousands of satisfied users who have transformed their
              financial habits with ExpenseTracker AI.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div 
              className='group relative backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'
              style={{
                backgroundColor: 'rgba(var(--card-bg-rgb), 0.8)',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg'>
                    <span className='text-white text-xs sm:text-sm font-bold'>
                      S
                    </span>
                  </div>
                  <div>
                    <div 
                      className='font-bold text-sm sm:text-base'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Sarah L.
                    </div>
                    <div 
                      className='text-xs sm:text-sm'
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Verified User
                    </div>
                  </div>
                </div>
                <p 
                  className='text-sm sm:text-base leading-relaxed mb-4'
                  style={{ color: 'var(--text-secondary)' }}
                >
                  &ldquo;ExpenseTracker AI has completely transformed my
                  budgeting. The AI insights are incredibly helpful and I now
                  have full control over my finances!&rdquo;
                </p>
                <div className='flex text-emerald-500 text-xs sm:text-sm'>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>

            <div 
              className='group relative backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border hover:shadow-2xl transition-all duration-200 hover:-translate-y-1'
              style={{
                backgroundColor: 'rgba(var(--card-bg-rgb), 0.8)',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 via-teal-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg'>
                    <span className='text-white text-xs sm:text-sm font-bold'>
                      J
                    </span>
                  </div>
                  <div>
                    <div 
                      className='font-bold text-sm sm:text-base'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      John D.
                    </div>
                    <div 
                      className='text-xs sm:text-sm'
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Verified User
                    </div>
                  </div>
                </div>
                <p 
                  className='text-sm sm:text-base leading-relaxed mb-4'
                  style={{ color: 'var(--text-secondary)' }}
                >
                  &ldquo;The AI-powered insights from ExpenseTracker have helped
                  me identify and reduce unnecessary spending. The smart
                  categorization is amazing!&rdquo;
                </p>
                <div className='flex text-emerald-500 text-xs sm:text-sm'>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>

            <div 
              className='group relative backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 sm:col-span-2 lg:col-span-1'
              style={{
                backgroundColor: 'rgba(var(--card-bg-rgb), 0.8)',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-500 via-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-lg'>
                    <span className='text-white text-xs sm:text-sm font-bold'>
                      E
                    </span>
                  </div>
                  <div>
                    <div 
                      className='font-bold text-sm sm:text-base'
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Emily R.
                    </div>
                    <div 
                      className='text-xs sm:text-sm'
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Verified User
                    </div>
                  </div>
                </div>
                <p 
                  className='text-sm sm:text-base leading-relaxed mb-4'
                  style={{ color: 'var(--text-secondary)' }}
                >
                  &ldquo;ExpenseTracker AI is so intelligent and easy to use.
                  The AI recommendations are spot-on and have genuinely improved
                  my financial habits!&rdquo;
                </p>
                <div className='flex text-emerald-500 text-xs sm:text-sm'>
                  ⭐⭐⭐⭐⭐
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