import fotoDamar from '../assets/foto-damar.jpg';

const dataMahasiswa = {
  nama: "Damar Galih Abdurrahman",
  nim: "L200230184",
  jurusan: "Informatika",
  universitas: "Universitas Muhammadiyah Surakarta",
  email: "l200230184@student.ums.ac.id",
  alamat: "Sragen, Jawa Tengah",
  foto: fotoDamar,
  tentang: "Mahasiswa aktif semester 5 yang gemar belajar teknologi frontend modern seperti React, Tailwind CSS, dan Vite. Memiliki ketertarikan di bidang UI/UX Design dan pengembangan web berbasis framework.",
  
  // Personal Info
  age: 20,
  residence: "Sragen, Jawa Tengah",
  freelance: "Available",
  address: "Sragen, Jawa Tengah, Indonesia",
  
  // Social Media
  socialMedia: [
    { name: "Website", icon: "🌐", url: "#" },
    { name: "GitHub", icon: "💻", url: "https://github.com/damargalihh" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Instagram", icon: "📷", url: "https://www.instagram.com/damarglih_?igsh=bW12cDFneDE2Z2gw&utm_source=qr" },
    { name: "Email", icon: "✉️", url: "mailto:l200230184@student.ums.ac.id" },
  ],

  skills: [
    { name: "HTML & CSS", level: 92 },
    { name: "JavaScript / TypeScript", level: 88 },
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Git & GitHub", level: 87 },
    { name: "Figma", level: 78 },
  ],
  
  // Services
  services: [
    {
      title: "Web Development",
      icon: "💻",
      description: "Membuat website modern dan responsif menggunakan React.js, Tailwind CSS, dan teknologi web terkini."
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "Merancang antarmuka yang user-friendly dan menarik dengan Figma untuk pengalaman pengguna terbaik."
    },
    {
      title: "Frontend Development",
      icon: "⚡",
      description: "Mengembangkan aplikasi web interaktif dengan performa tinggi dan kode yang clean."
    },
    {
      title: "Responsive Design",
      icon: "📱",
      description: "Memastikan tampilan website optimal di berbagai perangkat, dari mobile hingga desktop."
    },
  ],

  experiences: [
    {
      tahun: "2024 - Sekarang",
      jabatan: "Freelance Frontend Developer",
      perusahaan: "Projects.co.id & Upwork",
      deskripsi: "Membuat landing page, dashboard, dan company profile menggunakan React + Tailwind CSS."
    },
    {
      tahun: "2024",
      jabatan: "Web Developer Intern",
      perusahaan: "PT. Teknologi Maju Indonesia",
      deskripsi: "Mengembangkan fitur internal dashboard menggunakan Vite + React + Tailwind."
    },
    {
      tahun: "2023 - 2025",
      jabatan: "Anggota Bidang Kaderasi",
      perusahaan: "Himpunan Mahasiswa Teknik Informatika UMS",
      deskripsi: "Mengelola internal Organisasi"
    }
  ]
}

export default dataMahasiswa