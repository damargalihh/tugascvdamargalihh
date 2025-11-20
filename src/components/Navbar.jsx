export default function Navbar({ activeSection, setActiveSection }) {
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
    <nav className="fixed top-0 left-0 right-0 md:left-0 md:right-auto md:h-screen w-full md:w-28 bg-white shadow-lg z-50 flex flex-row md:flex-col items-center py-2 md:py-8">
      {/* Menu Items */}
      <div className="flex flex-1 flex-row md:flex-col gap-1 md:gap-6 overflow-x-auto md:overflow-x-visible justify-around md:justify-start w-full px-2 md:px-0">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex flex-col items-center gap-0.5 md:gap-2 transition-all duration-300 p-2 md:p-3 rounded-lg whitespace-nowrap flex-1 md:flex-none max-w-[80px] md:max-w-none ${
              activeSection === item.id 
                ? 'text-teal-500 bg-teal-50' 
                : 'text-gray-400 hover:text-teal-500 hover:bg-gray-50'
            }`}
          >
            <div className="scale-90 md:scale-100">
              {item.icon}
            </div>
            <span className="text-[9px] md:text-xs font-semibold tracking-wider">{item.label}</span>
            {activeSection === item.id && (
              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-teal-500 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}