import AddNewRecord from '@/components/AddNewRecord';
import AIInsights from '@/components/AIInsights';
import ExpenseStats from '@/components/ExpenseStats';
import Guest from '@/components/Guest';
import RecordChart from '@/components/RecordChart';
import RecordHistory from '@/components/RecordHistory';
import { currentUser } from '@clerk/nextjs/server';

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <div className='font-sans bg-black text-white transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8'>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse'></span>
            <span className='hidden sm:inline'>Welcome to Your Dashboard</span>
            <span className='sm:hidden'>Dashboard</span>
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
            Welcome Back,{' '}
            <span>
              {user.firstName}!
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            Here's a quick overview of your recent expense activity. Track your spending, analyze patterns, and manage your budget efficiently with AI-powered insights.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <div className='inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium'>
              <span className='w-2 h-2 bg-white rounded-full'></span>
              Member since {new Date(user.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 backdrop-blur-sm relative overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Your Financial Dashboard
            </div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white'>
              Track Your{' '}
              <span>
                Expenses
              </span>
            </h2>
            <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
              Get real-time insights into your spending habits and financial patterns with our AI-powered analytics.
            </p>
          </div>

          {/* Mobile-optimized container with responsive padding */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            {/* Left Column - Stacked on mobile */}
            <div className='space-y-6 sm:space-y-8'>
              {/* User Profile Card */}
              <div className='group relative bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 card-hover'>
                <div className='relative z-10 flex items-start gap-6'>
                  {/* User Avatar */}
                  <div className='relative flex-shrink-0'>
                    <div className='w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center'>
                      <span className='text-white text-2xl font-bold'>
                        {user.firstName?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <div className='absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center'>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* User Details */}
                  <div className='flex-1'>
                    <h3 className='text-2xl font-bold text-white mb-3'>
                      {user.firstName} {user.lastName}
                    </h3>
                    <p className='text-gray-300 mb-6 leading-relaxed'>
                      Ready to take control of your finances? Add new expenses and get AI-powered insights instantly.
                    </p>
                    
                    {/* Info Boxes */}
                    <div className='flex gap-4'>
                      {/* Joined Box */}
                      <div className='bg-gray-700/50 border border-gray-600/50 px-4 py-3 rounded-xl flex items-center gap-3'>
                        <div className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0'>
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <span className='text-xs font-medium text-gray-400 block'>
                            Joined
                          </span>
                          <span className='text-sm font-semibold text-white'>
                            {new Date(user.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      
                      {/* Last Active Box */}
                      <div className='bg-gray-700/50 border border-gray-600/50 px-4 py-3 rounded-xl flex items-center gap-3'>
                        <div className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0'>
                          <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <span className='text-xs font-medium text-gray-400 block'>
                            Last Active
                          </span>
                          <span className='text-sm font-semibold text-white'>
                            {user.lastActiveAt
                              ? new Date(user.lastActiveAt).toLocaleDateString()
                              : 'Today'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add New Expense */}
              <div className='group relative bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 card-hover'>
                <div className='relative z-10'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='w-10 h-10 bg-white rounded-xl flex items-center justify-center'>
                      <div className="text-black text-4xl font-bold">+</div>
                    </div>
                    <h3 className='text-xl font-bold text-white'>
                      Add New Expense
                    </h3>
                  </div>
                  <AddNewRecord />
                </div>
              </div>
            </div>

            {/* Right Column - Stacked below on mobile */}
            <div className='space-y-6 sm:space-y-8'>
              {/* Expense Analytics */}
              <div className='group relative bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700/50 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 card-hover'>
                <div className='relative z-10'>
                  {/* Header Section */}
                  <div className='flex items-center justify-between mb-6'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg'>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className='text-xl font-bold text-white'>
                          Expense Analytics
                        </h3>
                        <p className='text-sm text-gray-400 mt-1'>
                          Visual representation of your spending
                        </p>
                      </div>
                    </div>
                    <button className='px-4 py-2 bg-gray-600/50 hover:bg-gray-600/70 text-white rounded-lg transition-all duration-200 text-sm font-medium border border-gray-500/50 hover:border-gray-400/50'>
                      View Details
                    </button>
                  </div>
                  
                  {/* Chart Content */}
                  <RecordChart />
                  

                </div>
              </div>

              <div className='group relative bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 card-hover'>
                <div className='relative z-10'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
                      <span className='text-white text-lg'>📈</span>
                    </div>
                    <h3 className='text-xl font-bold text-white'>
                      Financial Stats
                    </h3>
                  </div>
                  <ExpenseStats />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width sections below - mobile-friendly spacing */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8'>
        <div className='max-w-7xl mx-auto space-y-6 sm:space-y-8'>
          <div className='group relative bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 card-hover'>
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg'>
                  <span className='text-white text-lg'>🤖</span>
                </div>
                <h3 className='text-xl font-bold text-white'>
                  AI Insights
                </h3>
              </div>
              <AIInsights />
            </div>
          </div>

          <div className='group relative bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 card-hover'>
            <div className='relative z-10'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg'>
                  <span className='text-white text-lg'>📋</span>
                </div>
                <h3 className='text-xl font-bold text-white'>
                  Expense History
                </h3>
              </div>
              <RecordHistory />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}