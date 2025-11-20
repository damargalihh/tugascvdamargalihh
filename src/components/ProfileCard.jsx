import dataMahasiswa from '../data/dataMahasiswa'

export default function ProfileCard({ setActiveSection }) {
  return (
    <div className="w-full md:w-[420px] bg-gradient-to-br from-gray-100 via-gray-50 to-white flex-shrink-0 flex flex-col items-center justify-center p-6 md:p-8 md:fixed md:left-28 md:top-0 md:h-screen overflow-y-auto animate-fade-in">
      {/* Profile Photo */}
      <div className="mb-6 group">
        <img 
          src={dataMahasiswa.foto} 
          alt={dataMahasiswa.nama}
          className="w-64 h-80 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 group-hover:rotate-2"
        />
      </div>
      
      {/* Name & Title */}
      <div className="text-center mb-8 animate-slide-up">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2 hover:text-teal-600 transition-colors duration-300">
          {dataMahasiswa.nama}
        </h1>
        <p className="text-base md:text-lg text-teal-500 font-semibold animate-pulse">Web Designer</p>
      </div>
        
      {/* Social Media Icons */}
      <div className="flex gap-3 justify-center mb-8">
        {dataMahasiswa.socialMedia.map((social, i) => (
          <a 
            key={i}
            href={social.url}
            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-teal-500 hover:bg-teal-50 rounded-lg transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:shadow-lg"
            title={social.name}
          >
            {getSocialIcon(social.name)}
          </a>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
        <a 
          href="#" 
          download
          className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3.5 rounded-lg font-bold text-sm hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-center flex items-center justify-center gap-2 group"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 group-hover:animate-shimmer"></div>
          <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          DOWNLOAD CV
        </a>
        <button
          onClick={() => setActiveSection('contact')}
          className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold text-sm hover:border-teal-500 hover:text-teal-500 hover:bg-teal-50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-200 hover:scale-105"
        >
          CONTACT ME
        </button>
      </div>
    </div>
  )
}

function getSocialIcon(name) {
  switch(name.toLowerCase()) {
    case 'website':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    case 'github':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    case 'instagram':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
        </svg>
      )
    case 'email':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    default:
      return null
  }
}
