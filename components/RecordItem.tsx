'use client';
import { useState } from 'react';
import { Trash2, Utensils, Car, ShoppingCart, Film, Lightbulb, Heart, Package } from 'lucide-react';
import { Record } from '@/types/Record';
import deleteRecord from '@/app/actions/deleteRecord';

// Helper function to get category icon
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Food':
      return <Utensils className="w-5 h-5" />;
    case 'Transportation':
      return <Car className="w-5 h-5" />;
    case 'Shopping':
      return <ShoppingCart className="w-5 h-5" />;
    case 'Entertainment':
      return <Film className="w-5 h-5" />;
    case 'Bills':
      return <Lightbulb className="w-5 h-5" />;
    case 'Healthcare':
      return <Heart className="w-5 h-5" />;
    default:
      return <Package className="w-5 h-5" />;
  }
};

// Helper function to get category colors
const getCategoryColors = (category: string) => {
  switch (category) {
    case 'Food':
      return 'bg-gradient-to-br from-orange-500 to-amber-600';
    case 'Transportation':
      return 'bg-gradient-to-br from-blue-500 to-indigo-600';
    case 'Shopping':
      return 'bg-gradient-to-br from-purple-500 to-pink-600';
    case 'Entertainment':
      return 'bg-gradient-to-br from-yellow-500 to-orange-600';
    case 'Bills':
      return 'bg-gradient-to-br from-emerald-500 to-green-600';
    case 'Healthcare':
      return 'bg-gradient-to-br from-red-500 to-pink-600';
    default:
      return 'bg-gradient-to-br from-gray-500 to-slate-600';
  }
};

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true); // Show loading spinner
    await deleteRecord(recordId); // Perform delete operation
    setIsLoading(false); // Hide loading spinner
  };

  // Determine border color based on expense amount
  const getBorderColor = (amount: number) => {
    if (amount > 100) return 'border-red-500/30'; // High expense
    if (amount > 50) return 'border-yellow-500/30'; // Medium expense
    return 'border-emerald-500/30'; // Low expense
  };

  return (
    <div
      className={`bg-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-xl hover:border-white/20 relative min-h-[140px] flex flex-col justify-between overflow-visible group transition-all duration-300 ${getBorderColor(
        record?.amount
      )}`}
    >
      {/* Delete button positioned absolutely in top-right corner */}
      <button
        onClick={() => handleDeleteRecord(record.id)}
        className={`absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg hover:shadow-xl border-2 border-white/20 backdrop-blur-sm transform hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-200 ${
          isLoading ? 'cursor-not-allowed scale-100 opacity-100' : ''
        }`}
        aria-label='Delete record'
        disabled={isLoading}
        title='Delete expense record'
      >
        {isLoading ? (
          <div className='w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin'></div>
        ) : (
          <Trash2 className="w-3 h-3" />
        )}
      </button>

      {/* Content area with proper spacing */}
      <div className='flex-1 flex flex-col justify-between'>
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <span className='text-sm font-medium text-gray-300 tracking-wide uppercase ' suppressHydrationWarning>
              {new Date(record?.date).toLocaleDateString()}
            </span>
            <span className='text-xl font-bold text-white'>
              ₹{record?.amount.toFixed(2)}
            </span>
          </div>

          <div className='flex items-center gap-3'>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getCategoryColors(record?.category)}`}>
              {getCategoryIcon(record?.category)}
            </div>
            <span className='text-base font-medium text-white'>
              {record?.category}
            </span>
          </div>
        </div>

        <div className='text-sm text-gray-300 mt-4'>
          <p className='truncate break-words line-clamp-2 leading-relaxed'>{record?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default RecordItem;