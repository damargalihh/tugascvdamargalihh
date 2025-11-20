import { useState } from 'react'
import { useTheme } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'
import AboutContent from './components/AboutContent'
import Services from './components/Services'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Contact from './components/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const { isDark } = useTheme()

  const renderContent = () => {
    switch(activeSection) {
      case 'about':
        return (
          <>
            <AboutContent />
            <Services />
          </>
        )
      case 'resume':
        return <Skills />
      case 'works':
        return <Experiences />
      case 'contact':
        return <Contact />
      default:
        return <AboutContent />
    }
  }

  return (
    <div className={`flex flex-col md:flex-row min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navbar - Top on mobile, Left sidebar on desktop */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Profile Card - Below navbar on mobile, Fixed Left Side on desktop */}
      <div className="pt-20 md:pt-0 md:ml-28">
        <ProfileCard setActiveSection={setActiveSection} />
      </div>

      {/* Main Content Area - Below profile on mobile, Right Side on desktop */}
      <main id="cv-content" className={`flex-1 overflow-y-auto md:ml-[420px] ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        {renderContent()}
      </main>
    </div>
  )
}