import getRecords from '@/app/actions/getRecords';
import BarChart from './BarChart'; // Ensure BarChart.tsx  exists in the same directory

const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className='w-full'>
        <div className='bg-red-900/20 backdrop-blur-sm p-4 rounded-xl border-l-4 border-l-red-500'>
          <div className='flex items-center gap-3 mb-2'>
            <div className='w-8 h-8 bg-red-800 rounded-full flex items-center justify-center'>
              <svg className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <p className='text-red-300 font-semibold text-sm'>
              Error loading chart data
            </p>
          </div>
          <p className='text-red-400 text-sm ml-11'>{error}</p>
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className='w-full'>
        <div className='text-center py-8'>
          <div className='w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h4 className='text-lg font-bold text-gray-200 mb-2'>
            No Data to Display
          </h4>
          <p className='text-gray-400 max-w-md mx-auto leading-relaxed text-sm'>
            Start tracking your expenses to see your spending patterns
            visualized in this chart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full'>
      <div className='overflow-x-auto'>
        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </div>
    </div>
  );
};

export default RecordChart;