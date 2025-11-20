import { useTheme } from '../contexts/ThemeContext'

export default function Navbar({ activeSection, setActiveSection }) {
  const { isDark, toggleTheme } = useTheme()

  const menuItems = [
    { 
      id: 'about', 
      label: 'ABOUT', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    { 
      id: 'resume', 
      label: 'RESUME', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      id: 'works', 
      label: 'WORKS', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      id: 'contact', 
      label: 'CONTACT', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 md:left-0 md:right-auto md:h-screen w-full md:w-28 ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg z-50 flex flex-row md:flex-col items-center py-2 md:py-8`}>
      {/* Menu Items */}
      <div className="flex flex-1 flex-row md:flex-col gap-1 md:gap-6 overflow-x-auto md:overflow-x-visible justify-around md:justify-start w-full px-2 md:px-0">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex flex-col items-center gap-0.5 md:gap-2 transition-all duration-300 p-2 md:p-3 rounded-lg whitespace-nowrap flex-1 md:flex-none max-w-[80px] md:max-w-none ${
              activeSection === item.id 
                ? `${isDark ? 'text-teal-400 bg-gray-800' : 'text-teal-500 bg-teal-50'}` 
                : `${isDark ? 'text-gray-400 hover:text-teal-400 hover:bg-gray-800' : 'text-gray-400 hover:text-teal-500 hover:bg-gray-50'}`
            }`}
          >
            <div className="scale-90 md:scale-100">
              {item.icon}
            </div>
            <span className="text-[9px] md:text-xs font-semibold tracking-wider">{item.label}</span>
            {activeSection === item.id && (
              <div className={`w-1 h-1 md:w-1.5 md:h-1.5 ${isDark ? 'bg-teal-400' : 'bg-teal-500'} rounded-full`}></div>
            )}
          </button>
        ))}
      </div>

      {/* Dark Mode Toggle - Compact Version */}
      <button
        onClick={toggleTheme}
        className={`mt-auto md:mt-0 mr-2 md:mr-0 md:mb-4 p-2 rounded-lg transition-all duration-300 ${
          isDark ? 'text-yellow-400 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
        }`}
        title={isDark ? 'Light Mode' : 'Dark Mode'}
      >
        {isDark ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>
    </nav>
  )
}