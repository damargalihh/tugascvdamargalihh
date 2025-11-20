import dataMahasiswa from '../data/dataMahasiswa'

export default function AboutContent() {
  return (
    <section className="bg-white py-8 md:py-12 px-6 md:px-12 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6 relative inline-block">
          <span className="relative z-10">About Me</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-teal-200 -z-0 transform -skew-y-1"></span>
        </h2>
        
        <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6 md:mb-8">
          {dataMahasiswa.tentang}
        </p>

        {/* Personal Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-tosca-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-tosca-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="text-gray-500 text-xs font-medium block">Age:</span>
              <span className="text-gray-800 font-semibold text-lg">{dataMahasiswa.age}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="text-gray-500 text-xs font-medium block">Residence:</span>
              <span className="text-gray-800 font-medium">{dataMahasiswa.residence}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="text-gray-500 text-xs font-medium block">Freelance:</span>
              <span className="text-green-600 font-semibold">{dataMahasiswa.freelance}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <span className="text-gray-500 text-xs font-medium block">Address:</span>
              <span className="text-gray-800 font-medium">{dataMahasiswa.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
