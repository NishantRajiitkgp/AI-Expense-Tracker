'use client';

import { useState, useEffect } from 'react';
import { Brain, RefreshCw, AlertTriangle, CheckCircle, Lightbulb, Info, ArrowRight, Bot } from 'lucide-react';
import { getAIInsights } from '@/app/actions/getAIInsights';
import { generateInsightAnswer } from '@/app/actions/generateInsightAnswer';

interface InsightData {
  id: string;
  type: 'warning' | 'info' | 'success' | 'tip';
  title: string;
  message: string;
  action?: string;
  confidence?: number;
}

interface AIAnswer {
  insightId: string;
  answer: string;
  isLoading: boolean;
}

const AIInsights = () => {
  const [insights, setInsights] = useState<InsightData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [aiAnswers, setAiAnswers] = useState<AIAnswer[]>([]);

  const loadInsights = async () => {
    setIsLoading(true);
    try {
      const newInsights = await getAIInsights();
      setInsights(newInsights);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('❌ AIInsights: Failed to load AI insights:', error);
      // Fallback to mock data if AI fails
      setInsights([
        {
          id: 'fallback-1',
          type: 'info',
          title: 'AI Temporarily Unavailable',
          message:
            "We're working to restore AI insights. Please check back soon.",
          action: 'Try again later',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = async (insight: InsightData) => {
    if (!insight.action) return;

    // Check if answer is already loading or exists
    const existingAnswer = aiAnswers.find((a) => a.insightId === insight.id);
    if (existingAnswer) {
      // Remove the answer if it already exists (toggle functionality)
      setAiAnswers((prev) => prev.filter((a) => a.insightId !== insight.id));
      return;
    }

    // Add loading state
    setAiAnswers((prev) => [
      ...prev,
      {
        insightId: insight.id,
        answer: '',
        isLoading: true,
      },
    ]);

    try {
      // Generate question based on insight title and action
      const question = `${insight.title}: ${insight.action}`;

      // Use server action to generate AI answer
      const answer = await generateInsightAnswer(question);

      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id ? { ...a, answer, isLoading: false } : a
        )
      );
    } catch (error) {
      console.error('❌ Failed to generate AI answer:', error);
      setAiAnswers((prev) =>
        prev.map((a) =>
          a.insightId === insight.id
            ? {
                ...a,
                answer:
                  'Sorry, I was unable to generate a detailed answer. Please try again.',
                isLoading: false,
              }
            : a
        )
      );
    }
  };

  useEffect(() => {
    loadInsights();
  }, []);

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />;
      case 'success':
        return <CheckCircle className="w-4 h-4" />;
      case 'tip':
        return <Lightbulb className="w-4 h-4" />;
      case 'info':
        return <Info className="w-4 h-4" />;
      default:
        return <Bot className="w-4 h-4" />;
    }
  };

  const getInsightColors = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-orange-500/20';
      case 'success':
        return 'bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-emerald-500/20';
      case 'tip':
        return 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/20';
      case 'info':
        return 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20';
      default:
        return 'bg-gradient-to-r from-gray-500/10 to-slate-500/10 border-gray-500/20';
    }
  };

  const getIconColors = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-gradient-to-br from-orange-500 to-yellow-500';
      case 'success':
        return 'bg-gradient-to-br from-emerald-500 to-green-500';
      case 'tip':
        return 'bg-gradient-to-br from-blue-500 to-indigo-500';
      case 'info':
        return 'bg-gradient-to-br from-emerald-500 to-teal-500';
      default:
        return 'bg-gradient-to-br from-gray-500 to-slate-500';
    }
  };

  const getButtonColors = (type: string) => {
    switch (type) {
      case 'warning':
        return 'text-orange-300 hover:text-orange-200 hover:bg-orange-500/10';
      case 'success':
        return 'text-emerald-300 hover:text-emerald-200 hover:bg-emerald-500/10';
      case 'tip':
        return 'text-blue-300 hover:text-blue-200 hover:bg-blue-500/10';
      case 'info':
        return 'text-emerald-300 hover:text-emerald-200 hover:bg-emerald-500/10';
      default:
        return 'text-gray-300 hover:text-gray-200 hover:bg-gray-500/10';
    }
  };

  const formatLastUpdated = () => {
    if (!lastUpdated) return 'Loading...';

    const now = new Date();
    const diffMs = now.getTime() - lastUpdated.getTime();
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;

    return lastUpdated.toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className='w-full'>
        <div className='space-y-6'>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className='animate-pulse bg-gradient-to-r from-white/5 to-white/10 p-6 rounded-2xl border border-white/10'
            >
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 bg-gray-500/20 rounded-xl'></div>
                <div className='flex-1 space-y-3'>
                  <div className='h-4 bg-gray-500/20 rounded-lg w-3/4'></div>
                  <div className='h-3 bg-gray-500/20 rounded-lg w-full'></div>
                  <div className='h-3 bg-gray-500/20 rounded-lg w-2/3'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='w-full'>
      {/* Header Section */}
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-4'>
          <div className='w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg'>
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-white'>
              AI Insights
            </h3>
            <p className='text-gray-300 text-sm mt-1'>
              AI-powered financial analysis
            </p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='inline-flex items-center gap-2 bg-white/10 text-orange-300 px-3 py-2 rounded-xl text-sm font-medium border border-white/20'>
            <span className='w-2 h-2 bg-orange-500 rounded-full'></span>
            <span className='hidden sm:inline'>{formatLastUpdated()}</span>
            <span className='sm:hidden'>
              {formatLastUpdated().includes('ago')
                ? formatLastUpdated().replace(' ago', '')
                : formatLastUpdated()}
            </span>
          </div>
          <button
            onClick={loadInsights}
            className='w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200'
            disabled={isLoading}
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Insights Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {insights.map((insight) => {
          const currentAnswer = aiAnswers.find(
            (a) => a.insightId === insight.id
          );

          return (
            <div
              key={insight.id}
              className={`relative overflow-hidden rounded-2xl p-6 border border-white/10 hover:shadow-xl transition-all duration-200 ${getInsightColors(
                insight.type
              )}`}
            >
              <div className='flex items-start gap-4 mb-4'>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getIconColors(insight.type)}`}>
                  {getInsightIcon(insight.type)}
                </div>
                <div className='flex-1'>
                  <h4 className='font-bold text-white text-lg mb-2'>
                    {insight.title}
                  </h4>
                  {insight.confidence && insight.confidence < 0.8 && (
                    <span className='inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-medium border border-yellow-500/30'>
                      Preliminary
                    </span>
                  )}
                </div>
              </div>
              
              <p className='text-gray-300 text-sm leading-relaxed mb-4'>
                {insight.message}
              </p>
              
              {insight.action && (
                <div className='flex items-center justify-between'>
                  <span
                    onClick={() => handleActionClick(insight)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm cursor-pointer transition-all duration-200 ${getButtonColors(
                      insight.type
                    )}`}
                  >
                    <span>{insight.action}</span>
                    {currentAnswer?.isLoading ? (
                      <div className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin'></div>
                    ) : (
                      <ArrowRight className={`w-4 h-4 transition-transform ${currentAnswer ? 'rotate-90' : ''}`} />
                    )}
                  </span>
                </div>
              )}

              {/* AI Answer Display */}
              {currentAnswer && (
                <div className='mt-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10'>
                  <div className='flex items-start gap-3'>
                    <div className='w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className='flex-1'>
                      <h5 className='font-semibold text-white text-sm mb-2'>
                        AI Answer:
                      </h5>
                      {currentAnswer.isLoading ? (
                        <div className='space-y-2'>
                          <div className='animate-pulse bg-white/10 h-3 rounded-lg w-full'></div>
                          <div className='animate-pulse bg-white/10 h-3 rounded-lg w-3/4'></div>
                          <div className='animate-pulse bg-white/10 h-3 rounded-lg w-1/2'></div>
                        </div>
                      ) : (
                        <p className='text-gray-300 text-sm leading-relaxed'>
                          {currentAnswer.answer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className='mt-8 pt-6 border-t border-white/10'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-3 text-sm text-gray-300'>
            <div className='w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center'>
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className='font-medium'>Powered by AI analysis</span>
          </div>
          <button
            onClick={loadInsights}
            className='px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-xl font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2'
          >
            <span className='sm:hidden'>Refresh</span>
            <span className='hidden sm:inline'>Refresh Insights</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;