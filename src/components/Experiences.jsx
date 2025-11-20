import dataMahasiswa from '../data/dataMahasiswa'

export default function Experiences() {
  return (
    <section className="bg-white py-8 md:py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">Experience</h2>
        <div className="space-y-6">
          {dataMahasiswa.experiences.map((exp, i) => (
            <div key={i} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-teal-500">{exp.jabatan}</h3>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.tahun}</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{exp.perusahaan}</h4>
              <p className="text-gray-600 leading-relaxed">{exp.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}