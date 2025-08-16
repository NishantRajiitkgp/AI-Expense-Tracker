import { FileText, AlertTriangle, BarChart3, Trash2 } from 'lucide-react';
import getRecords from '@/app/actions/getRecords';
import RecordItem from './RecordItem';
import { Record } from '@/types/Record';

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className='w-full'>
        <div className='bg-gradient-to-r from-red-500/10 to-pink-500/10 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center'>
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className='font-bold text-red-300 text-base'>
                Error loading expense history
              </h4>
              <p className='text-red-400 text-sm'>
                {error}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className='w-full'>
        <div className='text-center py-12'>
          <div className='w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-indigo-500/30'>
            <BarChart3 className="w-10 h-10 text-indigo-400" />
          </div>
          <h4 className='text-xl font-bold text-gray-200 mb-3'>
            No Expense Records Found
          </h4>
          <p className='text-gray-300 max-w-md mx-auto text-base leading-relaxed'>
            Start tracking your expenses to see your spending history and
            patterns here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full'>
      {/* Header Section */}
      <div className='flex items-center gap-4 mb-8'>
        <div className='w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg'>
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className='text-2xl font-bold text-white'>
            Expense History
          </h3>
          <p className='text-gray-300 text-sm mt-1'>
            Your spending timeline
          </p>
        </div>
      </div>

      {/* Records Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {records.map((record: Record) => (
          <RecordItem key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
};

export default RecordHistory;