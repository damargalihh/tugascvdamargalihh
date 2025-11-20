import dataMahasiswa from '../data/dataMahasiswa'
import { useTheme } from '../contexts/ThemeContext'
import { useTypingAnimation } from '../hooks/useTypingAnimation'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function ProfileCard({ setActiveSection }) {
  const { isDark, toggleTheme } = useTheme()
  const typingTexts = ['Web Designer', 'Frontend Developer', 'UI/UX Enthusiast']
  const typingText = useTypingAnimation(typingTexts, 100, 2000)

  const handleDownloadPDF = async () => {
    try {
      // Show loading state
      const button = document.querySelector('.download-btn')
      if (button) button.textContent = 'GENERATING PDF...'

      const pdf = new jsPDF('p', 'mm', 'a4')
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()
      const margin = 15
      let yPosition = margin

      // Helper function to add text
      const addText = (text, fontSize, isBold = false, color = [0, 0, 0]) => {
        pdf.setFontSize(fontSize)
        pdf.setFont('helvetica', isBold ? 'bold' : 'normal')
        pdf.setTextColor(...color)
        pdf.text(text, margin, yPosition)
        yPosition += fontSize * 0.5
      }

      // Header - Name
      pdf.setFillColor(20, 184, 166) // Teal color
      pdf.rect(0, 0, pageWidth, 35, 'F')
      pdf.setTextColor(255, 255, 255)
      pdf.setFontSize(24)
      pdf.setFont('helvetica', 'bold')
      pdf.text(dataMahasiswa.nama, pageWidth / 2, 15, { align: 'center' })
      pdf.setFontSize(12)
      pdf.text('Web Designer | Frontend Developer | UI/UX Enthusiast', pageWidth / 2, 25, { align: 'center' })
      
      yPosition = 45

      // Contact Info
      pdf.setTextColor(0, 0, 0)
      pdf.setFontSize(10)
      pdf.text(`Email: ${dataMahasiswa.email}`, margin, yPosition)
      yPosition += 5
      pdf.text(`Location: ${dataMahasiswa.address}`, margin, yPosition)
      yPosition += 5
      pdf.text(`University: ${dataMahasiswa.universitas}`, margin, yPosition)
      yPosition += 10

      // About Section
      addText('TENTANG SAYA', 14, true, [20, 184, 166])
      yPosition += 2
      pdf.setFontSize(10)
      pdf.setFont('helvetica', 'normal')
      const aboutLines = pdf.splitTextToSize(dataMahasiswa.tentang, pageWidth - 2 * margin)
      pdf.text(aboutLines, margin, yPosition)
      yPosition += aboutLines.length * 5 + 8

      // Personal Info
      addText('INFORMASI PERSONAL', 14, true, [20, 184, 166])
      yPosition += 2
      pdf.setFontSize(10)
      pdf.text(`Umur: ${dataMahasiswa.age}`, margin, yPosition)
      yPosition += 5
      pdf.text(`Tempat Tinggal: ${dataMahasiswa.residence}`, margin, yPosition)
      yPosition += 5
      pdf.text(`Freelance: ${dataMahasiswa.freelance}`, margin, yPosition)
      yPosition += 10

      // Skills Section
      if (yPosition > pageHeight - 60) {
        pdf.addPage()
        yPosition = margin
      }
      
      addText('KEAHLIAN', 14, true, [20, 184, 166])
      yPosition += 2
      dataMahasiswa.skills.forEach(skill => {
        pdf.setFontSize(10)
        pdf.text(`${skill.name}`, margin, yPosition)
        
        // Progress bar
        const barWidth = 60
        const barHeight = 4
        const barX = pageWidth - margin - barWidth
        pdf.setDrawColor(200, 200, 200)
        pdf.rect(barX, yPosition - 3, barWidth, barHeight)
        pdf.setFillColor(20, 184, 166)
        pdf.rect(barX, yPosition - 3, (barWidth * skill.level) / 100, barHeight, 'F')
        
        // Percentage
        pdf.setFontSize(9)
        pdf.text(`${skill.level}%`, barX + barWidth + 2, yPosition)
        
        yPosition += 8
      })
      yPosition += 5

      // Experience Section
      if (yPosition > pageHeight - 80) {
        pdf.addPage()
        yPosition = margin
      }
      
      addText('PENGALAMAN', 14, true, [20, 184, 166])
      yPosition += 2
      dataMahasiswa.experiences.forEach((exp, index) => {
        if (yPosition > pageHeight - 40) {
          pdf.addPage()
          yPosition = margin
        }
        
        pdf.setFontSize(11)
        pdf.setFont('helvetica', 'bold')
        pdf.setTextColor(20, 184, 166)
        pdf.text(exp.jabatan, margin, yPosition)
        yPosition += 5
        
        pdf.setFontSize(10)
        pdf.setFont('helvetica', 'normal')
        pdf.setTextColor(100, 100, 100)
        pdf.text(`${exp.perusahaan} | ${exp.tahun}`, margin, yPosition)
        yPosition += 5
        
        pdf.setTextColor(0, 0, 0)
        const descLines = pdf.splitTextToSize(exp.deskripsi, pageWidth - 2 * margin)
        pdf.text(descLines, margin, yPosition)
        yPosition += descLines.length * 5 + 8
      })

      // Services Section
      if (yPosition > pageHeight - 80) {
        pdf.addPage()
        yPosition = margin
      }
      
      addText('LAYANAN', 14, true, [20, 184, 166])
      yPosition += 2
      dataMahasiswa.services.forEach(service => {
        if (yPosition > pageHeight - 30) {
          pdf.addPage()
          yPosition = margin
        }
        
        pdf.setFontSize(11)
        pdf.setFont('helvetica', 'bold')
        pdf.setTextColor(0, 0, 0)
        pdf.text(`${service.icon} ${service.title}`, margin, yPosition)
        yPosition += 5
        
        pdf.setFontSize(9)
        pdf.setFont('helvetica', 'normal')
        const serviceLines = pdf.splitTextToSize(service.description, pageWidth - 2 * margin)
        pdf.text(serviceLines, margin, yPosition)
        yPosition += serviceLines.length * 4 + 6
      })

      // Save PDF
      pdf.save(`${dataMahasiswa.nama.replace(/\s+/g, '_')}_CV.pdf`)
      
      // Reset button text
      if (button) button.textContent = 'DOWNLOAD CV'
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Gagal membuat PDF. Silakan coba lagi.')
      const button = document.querySelector('.download-btn')
      if (button) button.textContent = 'DOWNLOAD CV'
    }
  }

  return (
    <div className={`w-full md:w-[420px] ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 via-gray-50 to-white'} flex-shrink-0 flex flex-col items-center justify-center p-6 md:p-8 md:fixed md:left-28 md:top-0 md:h-screen overflow-y-auto animate-fade-in`}>
      {/* Theme Control */}
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:shadow-lg ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'} shadow-lg`}
          title="Toggle Theme"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.5C14.76 17.5 17 15.26 17 12.5S14.76 7.5 12 7.5 7 9.74 7 12.5 9.24 17.5 12 17.5M12 2L14.39 5.42C13.65 5.15 12.84 5 12 5C11.16 5 10.35 5.15 9.61 5.42L12 2M3.34 7L7.5 6.65C6.9 7.16 6.36 7.78 5.94 8.5C5.5 9.24 5.25 10 5.11 10.79L3.34 7M3.36 17L5.12 13.23C5.26 14 5.53 14.78 5.95 15.5C6.37 16.24 6.91 16.86 7.5 17.37L3.36 17M20.65 7L18.88 10.79C18.74 10 18.47 9.23 18.05 8.5C17.63 7.78 17.1 7.15 16.5 6.64L20.65 7M20.64 17L16.5 17.36C17.09 16.85 17.62 16.22 18.04 15.5C18.46 14.77 18.73 14 18.87 13.21L20.64 17M12 23L9.59 19.59C10.33 19.86 11.14 20 12 20C12.82 20 13.63 19.86 14.37 19.59L12 23Z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.75 4.09L15.22 6.03L16.13 9.09L13.5 7.28L10.87 9.09L11.78 6.03L9.25 4.09L12.44 4L13.5 1L14.56 4L17.75 4.09M21.25 11L19.61 12.25L20.2 14.23L18.5 13.06L16.8 14.23L17.39 12.25L15.75 11L17.81 10.95L18.5 9L19.19 10.95L21.25 11M18.97 15.95C19.8 15.87 20.69 17.05 20.16 17.8C19.84 18.25 19.5 18.67 19.08 19.07C15.17 23 8.84 23 4.94 19.07C1.03 15.17 1.03 8.83 4.94 4.93C5.34 4.53 5.76 4.17 6.21 3.85C6.96 3.32 8.14 4.21 8.06 5.04C7.79 7.9 8.75 10.87 10.95 13.06C13.14 15.26 16.1 16.22 18.97 15.95M17.33 17.97C14.5 17.81 11.7 16.64 9.53 14.5C7.36 12.31 6.2 9.5 6.04 6.68C3.23 9.82 3.34 14.64 6.35 17.66C9.37 20.67 14.19 20.78 17.33 17.97Z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Profile Photo */}
      <div className="mb-6 group">
        <img 
          src={dataMahasiswa.foto} 
          alt={dataMahasiswa.nama}
          className="w-64 h-80 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 group-hover:rotate-2"
        />
      </div>
      
      {/* Name & Title with Typing Animation */}
      <div className="text-center mb-8 animate-slide-up">
        <h1 className={`text-2xl md:text-3xl font-extrabold mb-2 ${isDark ? 'text-white hover:text-teal-400' : 'text-gray-800 hover:text-teal-600'} transition-colors duration-300`}>
          {dataMahasiswa.nama}
        </h1>
        <p className={`text-base md:text-lg font-semibold h-7 ${isDark ? 'text-teal-400' : 'text-teal-500'}`}>
          {typingText}<span className="animate-pulse">|</span>
        </p>
      </div>
        
      {/* Social Media Icons */}
      <div className="flex gap-3 justify-center mb-8">
        {dataMahasiswa.socialMedia.map((social, i) => (
          <a 
            key={i}
            href={social.url}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:shadow-lg ${isDark ? 'text-gray-400 hover:text-teal-400 hover:bg-gray-800' : 'text-gray-500 hover:text-teal-500 hover:bg-teal-50'}`}
            title={social.name}
          >
            {getSocialIcon(social.name)}
          </a>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
        <button
          onClick={handleDownloadPDF}
          className="download-btn relative overflow-hidden bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3.5 rounded-lg font-bold text-sm hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-center flex items-center justify-center gap-2 group"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 group-hover:animate-shimmer"></div>
          <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          DOWNLOAD CV
        </button>
        <button
          onClick={() => setActiveSection('contact')}
          className={`border-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 ${isDark ? 'border-gray-700 text-gray-300 hover:border-teal-500 hover:text-teal-400 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:border-teal-500 hover:text-teal-500 hover:bg-teal-50 hover:shadow-teal-200'}`}
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
