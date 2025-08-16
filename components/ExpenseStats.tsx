import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Calendar } from 'lucide-react';
import getUserRecord from '@/app/actions/getUserRecord';
import getBestWorstExpense from '@/app/actions/getBestWorstExpense';

const ExpenseStats = async () => {
  try {
    // Fetch both average and range data
    const [userRecordResult, rangeResult] = await Promise.all([
      getUserRecord(),
      getBestWorstExpense(),
    ]);

    const { record, daysWithRecords } = userRecordResult;
    const { bestExpense, worstExpense } = rangeResult;

    // Calculate average expense
    const validRecord = record || 0;
    const validDays =
      daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;
    const averageExpense = validRecord / validDays;

    return (
      <div className='bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl'>
        {/* Header */}
        <div className='flex items-center gap-4 mb-8'>
          <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg'>
            <BarChart3 className='w-6 h-6 text-white' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-white'>
              Expense Statistics
            </h3>
            <p className='text-gray-300 text-sm'>
              Your spending insights and ranges
            </p>
          </div>
        </div>

        <div className='space-y-6'>
          {/* Average Daily Spending */}
          <div className='bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10'>
            <div className='flex items-center gap-3 mb-3'>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center'>
                <DollarSign className='w-5 h-5 text-white' />
              </div>
              <span className='text-sm font-semibold text-blue-200 uppercase tracking-wider'>
                Average Daily Spending
              </span>
            </div>
            <div className='text-4xl font-bold text-white mb-2'>
              ₹{averageExpense.toFixed(2)}
            </div>
            <div className='flex items-center gap-2 text-sm text-emerald-400'>
              <div className='w-2 h-2 bg-emerald-400 rounded-full'></div>
              <span>Based on {validDays} day{validDays !== 1 ? 's' : ''} with expenses</span>
            </div>
          </div>

          {/* Expense Range */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {/* Highest Expense */}
            <div className='bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm p-5 rounded-2xl border border-red-500/20 hover:border-red-500/30 transition-all duration-200'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center'>
                  <TrendingUp className='w-4 h-4 text-white' />
                </div>
                <span className='text-sm font-semibold text-red-200 uppercase tracking-wider'>
                  Highest
                </span>
              </div>
              <div className='text-2xl font-bold text-white'>
                {bestExpense !== undefined ? `₹${bestExpense}` : 'No data'}
              </div>
            </div>

            {/* Lowest Expense */}
            <div className='bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm p-5 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/30 transition-all duration-200'>
              <div className='flex items-center gap-3 mb-3'>
                <div className='w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center'>
                  <TrendingDown className='w-4 h-4 text-white' />
                </div>
                <span className='text-sm font-semibold text-emerald-200 uppercase tracking-wider'>
                  Lowest
                </span>
              </div>
              <div className='text-2xl font-bold text-white'>
                {worstExpense !== undefined
                  ? `₹${worstExpense}`
                  : 'No data'}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching expense statistics:', error);
    return (
      <div className='bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl'>
        <div className='flex items-center gap-4 mb-6'>
          <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg'>
            <BarChart3 className='w-6 h-6 text-white' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-white'>
              Expense Statistics
            </h3>
            <p className='text-gray-300 text-sm'>
              Your spending insights and ranges
            </p>
          </div>
        </div>
        <div className='bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-8 h-8 bg-red-500 rounded-xl flex items-center justify-center'>
              <TrendingUp className='w-4 h-4 text-white' />
            </div>
            <p className='text-red-300 font-semibold'>
              Unable to load expense statistics
            </p>
          </div>
          <p className='text-red-400 text-sm ml-11'>
            Please try again later
          </p>
        </div>
      </div>
    );
  }
};

export default ExpenseStats;
