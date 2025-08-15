'use client';
import { useRef, useState } from 'react';
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
        className='space-y-6'
      >
        {/* Expense Description and Date */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Expense Description */}
          <div className='space-y-2'>
            <label
              htmlFor='text'
              className='flex items-center gap-2 text-sm font-semibold text-white'
            >
              <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
              Expense Description
            </label>
            <div className='relative'>
              <input
                type='text'
                id='text'
                name='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='w-full pl-3 pr-12 py-3 bg-gray-700/70 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-green-500/30 focus:bg-gray-600/90 focus:border-green-400 text-white placeholder-gray-400 text-sm transition-all duration-200'
                placeholder='Coffee, groceries, gas...'
                required
              />
              <button
                type='button'
                onClick={handleAISuggestCategory}
                disabled={isCategorizingAI || !description.trim()}
                className='absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-600 hover:bg-gray-500 disabled:bg-gray-700 text-white rounded-lg flex items-center justify-center transition-all duration-200'
                title='AI Category Suggestion'
              >
                {isCategorizingAI ? (
                  <div className='w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )}
              </button>
            </div>
            {isCategorizingAI && (
              <div className='flex items-center gap-2 text-xs text-green-400'>
                <div className='w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse'></div>
                AI is analyzing your description...
              </div>
            )}
          </div>

          {/* Expense Date */}
          <div className='space-y-2'>
            <label
              htmlFor='date'
              className='flex items-center gap-2 text-sm font-semibold text-white'
            >
              <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
              Expense Date
            </label>
            <div className='relative'>
              <input
                type='date'
                name='date'
                id='date'
                className='w-full px-3 py-3 bg-gray-700/70 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-green-500/30 focus:bg-gray-600/90 focus:border-green-400 text-white text-sm transition-all duration-200'
                required
                onFocus={(e) => e.target.showPicker()}
              />
              <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Category Selection and Amount */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Category Selection */}
          <div className='space-y-2'>
            <label
              htmlFor='category'
              className='flex items-center gap-2 text-sm font-semibold text-white'
            >
              <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
              Category
              <span className='text-xs text-gray-400 ml-2 font-normal'>
                Use the ✨ button above for AI suggestions
              </span>
            </label>
            <div className='relative'>
              <select
                id='category'
                name='category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='w-full px-3 py-3 bg-gray-700/70 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-green-500/30 focus:bg-gray-600/90 focus:border-green-400 text-white cursor-pointer text-sm transition-all duration-200 appearance-none'
                required
              >
              <option
                value=''
                disabled
                className='text-gray-500 bg-gray-700'
              >
                Select category...
              </option>
              <option value='Food' className='text-white bg-gray-700'>
                Food & Dining
              </option>
              <option
                value='Transportation'
                className='text-white bg-gray-700'
              >
                Transportation
              </option>
              <option
                value='Shopping'
                className='text-white bg-gray-700'
              >
                Shopping
              </option>
              <option
                value='Entertainment'
                className='text-white bg-gray-700'
              >
                Entertainment
              </option>
              <option
                value='Bills'
                className='text-white bg-gray-700'
              >
                Bills & Utilities
              </option>
              <option
                value='Healthcare'
                className='text-white bg-gray-700'
              >
                Healthcare
              </option>
              <option
                value='Other'
                className='text-white bg-gray-700'
              >
                Other
              </option>
            </select>
            <div className='absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none'>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

          {/* Amount */}
          <div className='space-y-2'>
            <label
              htmlFor='amount'
              className='flex items-center gap-2 text-sm font-semibold text-white'
            >
              <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
              Amount
              <span className='text-xs text-gray-400 ml-2 font-normal'>
                Enter amount between $0 and $1,000
              </span>
            </label>
            <div className='relative'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm'>
                $
              </span>
              <input
                type='number'
                name='amount'
                id='amount'
                min='0'
                max='1000'
                step='0.01'
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                className='w-full pl-6 pr-3 py-3 bg-gray-700/70 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-green-500/30 focus:bg-gray-600/90 focus:border-green-400 text-white placeholder-gray-400 text-sm font-semibold transition-all duration-200'
                placeholder='50'
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-white text-black px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-base'
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Add Expense'}
        </button>
      </form>

      {/* Alert Message */}
      {alertMessage && (
        <div
          className={`mt-6 p-4 rounded-xl backdrop-blur-sm ${
            alertType === 'success'
              ? 'bg-green-900/20 text-green-200'
              : 'bg-red-900/20 text-red-200'
          }`}
        >
          <div className='flex items-center gap-3'>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                alertType === 'success'
                  ? 'bg-green-800'
                  : 'bg-red-800'
              }`}
            >
              {alertType === 'success' ? (
                <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
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