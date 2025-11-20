import dataMahasiswa from '../data/dataMahasiswa'
import { useTheme } from '../contexts/ThemeContext'

export default function Experiences() {
  const { isDark } = useTheme()

  return (
    <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-8 md:py-12 px-6 md:px-12`}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-6 md:mb-8`}>Experience</h2>
        <div className="space-y-6">
          {dataMahasiswa.experiences.map((exp, i) => (
            <div key={i} className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border hover:-translate-y-1 border-l-4 ${isDark ? 'border-l-teal-400' : 'border-l-teal-500'} animate-slide-up`} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className={`text-2xl font-bold ${isDark ? 'text-teal-400' : 'text-teal-500'}`}>{exp.jabatan}</h3>
                <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'} font-medium mt-2 md:mt-0`}>{exp.tahun}</span>
              </div>
              <h4 className={`text-xl font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'} mb-3`}>{exp.perusahaan}</h4>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>{exp.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}