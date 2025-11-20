import dataMahasiswa from '../data/dataMahasiswa'

export default function Skills() {
  return (
    <section className="bg-white py-8 md:py-12 px-6 md:px-12 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8 relative inline-block">
          <span className="relative z-10">Skills & Expertise</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-teal-200 -z-0 transform -skew-y-1"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {dataMahasiswa.skills.map((skill, i) => (
            <div key={i} className="group">
              <div className="flex justify-between mb-3">
                <span className="text-xl font-semibold text-gray-700">{skill.name}</span>
                <span className="text-teal-500 font-bold text-xl">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-teal-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}