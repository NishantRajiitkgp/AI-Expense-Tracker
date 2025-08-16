'use client';

const ContactPage = () => {
  return (
    <div className='font-sans bg-black text-white transition-all duration-300 min-h-screen'>
      {/* Hero Section */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8'>
        <div className='relative z-10 max-w-4xl mx-auto w-full'>
          <div className='inline-flex items-center gap-2 bg-white/10 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg'>
            <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse'></span>
            Get in Touch
          </div>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight'>
            Contact{' '}
            <span className='text-white'>
              ExpenseTracker AI
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0'>
            Have questions about AI-powered expense tracking or need help?
            We&apos;re here to assist you with intelligent financial management.
          </p>
          <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0'>
            <a
              href='mailto:support@costpilot-ai.com'
              className='group relative overflow-hidden bg-white hover:bg-gray-200 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10 flex items-center justify-center gap-2'>
                Send us an Email
              </span>
            </a>
            <a
              href='tel:+11234567890'
              className='group border-2 border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center justify-center gap-2'
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 backdrop-blur-sm relative overflow-hidden'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Contact Information
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0'>
              Multiple Ways to{' '}
              <span className='text-white'>
                Connect
              </span>
            </h2>
            <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2 sm:px-0'>
              Choose the most convenient way to reach out to our ExpenseTracker
              AI support team.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10 text-center'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-6 h-6 sm:w-8 sm:h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-blue-100 transition-colors duration-700'>
                  Email Support
                </h3>
                <p className='text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-700'>
                  Get detailed assistance with your questions. We typically
                  respond within 24 hours.
                </p>
                <a
                  href='mailto:support@costpilot-ai.com'
                  className='inline-flex items-center gap-2 text-white hover:text-blue-100 font-medium transition-colors duration-700 text-sm sm:text-base break-all sm:break-normal group-hover:translate-x-1'
                >
                  <span className='hidden sm:inline'>
                    support@costpilot-ai.com
                  </span>
                  <span className='sm:hidden'>Email Us</span>
                  <span className='text-sm group-hover:translate-x-1 transition-transform duration-700'>→</span>
                </a>
              </div>
            </div>

            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10 text-center'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-6 h-6 sm:w-8 sm:h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
                  </svg>
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-green-100 transition-colors duration-700'>
                  Phone Support
                </h3>
                <p className='text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-700'>
                  Speak directly with our support team for immediate assistance
                  with urgent matters.
                </p>
                <a
                  href='tel:+11234567890'
                  className='inline-flex items-center gap-2 text-white hover:text-green-100 font-medium transition-colors duration-700 text-sm sm:text-base group-hover:translate-x-1'
                >
                  +1 (123) 456-7890
                  <span className='text-sm group-hover:translate-x-1 transition-transform duration-700'>→</span>
                </a>
              </div>
            </div>

            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105 sm:col-span-2 lg:col-span-1'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10 text-center'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-700'>
                  <svg className='w-6 h-6 sm:w-8 sm:h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                </div>
                <h3 className='text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-orange-100 transition-colors duration-700'>
                  Office Location
                </h3>
                <p className='text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-100 transition-colors duration-700'>
                  Visit our headquarters for in-person consultations and
                  partnership discussions.
                </p>
                <div className='text-white font-medium text-sm sm:text-base group-hover:text-orange-100 transition-colors duration-700'>
                  123 AI Innovation St
                  <br />
                  Tech City, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours & FAQ Section */}
      <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 backdrop-blur-sm relative overflow-hidden'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-10 sm:mb-12 md:mb-16'>
            <div className='inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6'>
              <span className='w-1.5 h-1.5 bg-white rounded-full'></span>
              Support Information
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0'>
              We&apos;re Here to{' '}
              <span className='text-white'>
                Help
              </span>
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-700 hover:-translate-y-2 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-700'>
                    <svg className='w-4 h-4 sm:w-5 sm:h-5 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <h3 className='text-lg sm:text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-700'>
                    Support Hours
                  </h3>
                </div>
                <div className='space-y-2 text-sm sm:text-base text-gray-300 group-hover:text-gray-100 transition-colors duration-700'>
                  <div className='flex justify-between'>
                    <span>Monday - Friday:</span>
                    <span className='font-medium'>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Saturday:</span>
                    <span className='font-medium'>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Sunday:</span>
                    <span className='font-medium'>Closed</span>
                  </div>
                  <div className='mt-4 p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-700'>
                    <p className='text-xs sm:text-sm text-white'>
                      <strong>Email support:</strong> Available 24/7 with
                      responses within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-700 hover:-translate-y-2 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-700'>
                    <svg className='w-4 h-4 sm:w-5 sm:h-5 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                    </svg>
                  </div>
                  <h3 className='text-lg sm:text-xl font-bold text-white group-hover:text-green-100 transition-colors duration-700'>
                    Quick Help
                  </h3>
                </div>
                <div className='space-y-3'>
                  <div className='p-3 bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-all duration-700'>
                    <h4 className='font-semibold text-white text-xs sm:text-sm mb-1'>
                      Technical Issues
                    </h4>
                    <p className='text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-700'>
                      App not working properly? Check our troubleshooting guide
                      first.
                    </p>
                  </div>
                  <div className='p-3 bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-all duration-700'>
                    <h4 className='font-semibold text-white text-xs sm:text-sm mb-1'>
                      AI Features
                    </h4>
                    <p className='text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-700'>
                      Questions about AI insights? Our AI documentation has
                      answers.
                    </p>
                  </div>
                  <div className='p-3 bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-all duration-700'>
                    <h4 className='font-semibold text-white text-xs sm:text-sm mb-1'>
                      Account & Billing
                    </h4>
                    <p className='text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-700'>
                      Account issues or billing questions? Contact us directly.
                    </p>
                  </div>
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
            Need Immediate Assistance?
          </div>

          <h2 className='text-4xl md:text-6xl font-bold mb-6 leading-tight text-white'>
            Let&apos;s Get Your{' '}
            <span className='text-white'>
              Questions Answered
            </span>
          </h2>

          <p className='text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            Our support team is ready to help you with any questions about ExpenseTracker AI. Reach out today and get the assistance you need.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <a
              href='mailto:support@costpilot-ai.com'
              className='group relative overflow-hidden bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5'
            >
              <span className='relative z-10 flex items-center gap-2'>
                Send Email
                
              </span>
            </a>

            <a
              href='tel:+11234567890'
              className='group border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm flex items-center gap-2'
            >
              Call Now
            </a>
          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10 text-center'>
                <div className='text-4xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-700'>
                  24/7
                </div>
                <div className='text-gray-200 font-regular text-lg group-hover:text-white transition-colors duration-700'>
                  Email support
                </div>
              </div>
            </div>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10 text-center'>
                <div className='text-4xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-green-100 to-emerald-100 bg-clip-text text-transparent group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-700'>
                  &lt; 24h
                </div>
                <div className='text-gray-200 font-regular text-lg group-hover:text-white transition-colors duration-700'>
                  Response time
                </div>
              </div>
            </div>
            <div className='group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(251,146,60,0.5)] transition-all duration-700 hover:-translate-y-3 hover:scale-105'>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700'></div>
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-3xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-700'></div>
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl'></div>
              <div className='relative z-10 text-center'>
                <div className='text-4xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-orange-100 to-red-100 bg-clip-text text-transparent group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-700'>
                  100%
                </div>
                <div className='text-gray-200 font-regular text-lg group-hover:text-white transition-colors duration-700'>
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;