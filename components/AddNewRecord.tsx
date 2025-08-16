'use client';
import { useRef, useState } from 'react';
import { Sparkles, Calendar, ChevronDown, DollarSign, CheckCircle, AlertCircle } from 'lucide-react';
import addExpenseRecord from '@/app/actions/addExpenseRecord';
import { suggestCategory } from '@/app/actions/suggestCategory';

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(50); // Default value for expense amount
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // State for alert message
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null); // State for alert type
  const [isLoading, setIsLoading] = useState(false); // State for loading spinner
  const [category, setCategory] = useState(''); // State for selected expense category
  const [description, setDescription] = useState(''); // State for expense description
  const [isCategorizingAI, setIsCategorizingAI] = useState(false); // State for AI categorization loading

  const clientAction = async (formData: FormData) => {
    setIsLoading(true); // Show spinner
    setAlertMessage(null); // Clear previous messages

    formData.set('amount', amount.toString()); // Add the amount value to the form data
    formData.set('category', category); // Add the selected category to the form data

    const { error } = await addExpenseRecord(formData); // Removed `data` since it's unused

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType('error'); // Set alert type to error
    } else {
      setAlertMessage('Expense record added successfully!');
      setAlertType('success'); // Set alert type to success
      formRef.current?.reset();
      setAmount(50); // Reset the amount to the default value
      setCategory(''); // Reset the category
      setDescription(''); // Reset the description
    }

    setIsLoading(false); // Hide spinner
  };

  const handleAISuggestCategory = async () => {
    if (!description.trim()) {
      setAlertMessage('Please enter a description first');
      setAlertType('error');
      return;
    }

    setIsCategorizingAI(true);
    setAlertMessage(null);

    try {
      const result = await suggestCategory(description);
      if (result.error) {
        setAlertMessage(`AI Suggestion: ${result.error}`);
        setAlertType('error');
      } else {
        setCategory(result.category);
        setAlertMessage(`AI suggested category: ${result.category}`);
        setAlertType('success');
      }
    } catch {
      setAlertMessage('Failed to get AI category suggestion');
      setAlertMessage('Failed to get AI category suggestion');
      setAlertType('error');
    } finally {
      setIsCategorizingAI(false);
    }
  };

  return (
    <div className='w-full'>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(formRef.current!);
          clientAction(formData);
        }}
        className='space-y-8'
      >
        {/* Expense Description and Date */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Expense Description */}
          <div className='space-y-3'>
            <label
              htmlFor='text'
              className='flex items-center gap-3 text-sm font-semibold text-white'
            >
              <span className='w-2 h-2 bg-emerald-500 rounded-full'></span>
              Expense Description
            </label>
            <div className='relative'>
              <input
                type='text'
                id='text'
                name='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='w-full pl-4 pr-14 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white/15 focus:border-emerald-400 text-white placeholder-gray-300 text-sm transition-all duration-200'
                placeholder='Coffee, groceries, gas...'
                required
              />
              <button
                type='button'
                onClick={handleAISuggestCategory}
                disabled={isCategorizingAI || !description.trim()}
                className='absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-emerald-500/20 hover:bg-emerald-500/30 disabled:bg-gray-500/20 text-emerald-400 hover:text-emerald-300 disabled:text-gray-500 rounded-xl flex items-center justify-center transition-all duration-200'
                title='AI Category Suggestion'
              >
                {isCategorizingAI ? (
                  <div className='w-3 h-3 border-2 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin'></div>
                ) : (
                  <Sparkles className="w-4 h-4" />
                )}
              </button>
            </div>
            {isCategorizingAI && (
              <div className='flex items-center gap-2 text-xs text-emerald-400'>
                <div className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse'></div>
                AI is analyzing your description...
              </div>
            )}
          </div>

          {/* Expense Date */}
          <div className='space-y-3'>
            <label
              htmlFor='date'
              className='flex items-center gap-3 text-sm font-semibold text-white'
            >
              <span className='w-2 h-2 bg-emerald-500 rounded-full'></span>
              Expense Date
            </label>
            <div className='relative'>
              <input
                type='date'
                name='date'
                id='date'
                className='w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white/15 focus:border-emerald-400 text-white text-sm transition-all duration-200'
                required
                onFocus={(e) => e.target.showPicker()}
              />
              <div className='absolute right-4 top-1/2 -translate-y-1/2'>
                <Calendar className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Selection and Amount */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Category Selection */}
          <div className='space-y-3'>
            <label
              htmlFor='category'
              className='flex items-center gap-3 text-sm font-semibold text-white'
            >
              <span className='w-2 h-2 bg-emerald-500 rounded-full'></span>
              Category
              <span className='text-xs text-gray-300 ml-2 font-normal'>
                Use the ✨ button above for AI suggestions
              </span>
            </label>
            <div className='relative'>
              <select
                id='category'
                name='category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white/15 focus:border-emerald-400 text-white cursor-pointer text-sm transition-all duration-200 appearance-none'
                required
              >
              <option
                value=''
                disabled
                className='text-gray-400 bg-gray-800'
              >
                Select category...
              </option>
              <option value='Food' className='text-white bg-gray-800'>
                Food & Dining
              </option>
              <option
                value='Transportation'
                className='text-white bg-gray-800'
              >
                Transportation
              </option>
              <option
                value='Shopping'
                className='text-white bg-gray-800'
              >
                Shopping
              </option>
              <option
                value='Entertainment'
                className='text-white bg-gray-800'
              >
                Entertainment
              </option>
              <option
                value='Bills'
                className='text-white bg-gray-800'
              >
                Bills & Utilities
              </option>
              <option
                value='Healthcare'
                className='text-white bg-gray-800'
              >
                Healthcare
              </option>
              <option
                value='Other'
                className='text-white bg-gray-800'
              >
                Other
              </option>
            </select>
            <div className='absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none'>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

          {/* Amount */}
          <div className='space-y-3'>
            <label htmlFor='amount' className='flex items-center gap-2 text-sm font-semibold text-white mb-3'>
              <span className='w-2 h-2 bg-emerald-500 rounded-full'></span>
              Amount
              <span className='text-xs text-gray-300 ml-2 font-normal'>
                Enter amount in INR
              </span>
            </label>
            <div className='relative'>
              <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 font-medium text-sm'>
                ₹
              </span>
              <input
                type='number'
                name='amount'
                id='amount'
                step='0.01'
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                className='w-full pl-8 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-emerald-500/30 focus:bg-white/15 focus:border-emerald-400 text-white placeholder-gray-300 text-sm font-semibold transition-all duration-200'
                placeholder='50'
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-200 text-base hover:from-emerald-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Add Expense'}
        </button>
      </form>

      {/* Alert Message */}
      {alertMessage && (
        <div
          className={`mt-8 p-5 rounded-2xl backdrop-blur-sm border ${
            alertType === 'success'
              ? 'bg-emerald-500/10 text-emerald-200 border-emerald-500/20'
              : 'bg-red-500/10 text-red-200 border-red-500/20'
          }`}
        >
          <div className='flex items-center gap-3'>
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                alertType === 'success'
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              {alertType === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
            </div>
            <p className='font-medium text-sm'>{alertMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddRecord;