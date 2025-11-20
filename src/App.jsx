import { useState } from 'react'
import Navbar from './components/Navbar'
import ProfileCard from './components/ProfileCard'
import AboutContent from './components/AboutContent'
import Services from './components/Services'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Contact from './components/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('about')

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
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Navbar - Top on mobile, Left sidebar on desktop */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Profile Card - Below navbar on mobile, Fixed Left Side on desktop */}
      <div className="pt-12 md:pt-0 md:ml-28">
        <ProfileCard setActiveSection={setActiveSection} />
      </div>

      {/* Main Content Area - Below profile on mobile, Right Side on desktop */}
      <main className="flex-1 bg-white overflow-y-auto md:ml-[420px]">
        {renderContent()}
      </main>
    </div>
  )
}