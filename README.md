# 📄 CV Website - Single Page Application

---

## 🌐 LIVE DEMO

### ➡️ **[https://cvdamargalih.vercel.app/](https://cvdamargalih.vercel.app/)**

---

## Deskripsi Aplikasi

Aplikasi CV Mahasiswa adalah **Single Page Application (SPA)** yang dibangun menggunakan **ReactJS** dan **Vite**. Aplikasi ini menampilkan informasi profil mahasiswa secara interaktif dan modern dengan fitur navigasi yang smooth dan responsif untuk berbagai ukuran layar.

---

## ✨ Fitur Aplikasi

### Fitur Utama:
1. **Single Page Application** - Navigasi berbasis tab tanpa reload halaman
2. **Responsive Design** - Support untuk desktop, tablet, dan mobile
3. **Dark Mode** - Toggle tema light/dark dengan localStorage
4. **Download CV PDF** - Generate dan download CV dalam format PDF profesional
5. **Typing Animation** - Animasi teks dinamis pada job title
6. **Contact Form** - Form kontak yang fungsional dengan validasi

### Konten yang Ditampilkan:
- **Profile Section** - Foto, nama, job title, social media
- **About Me** - Deskripsi singkat dan informasi personal
- **Services** - Layanan yang ditawarkan
- **Skills & Expertise** - Progress bar skill dengan persentase
- **Experience** - Riwayat pengalaman kerja/organisasi
- **Contact** - Form kontak dan informasi kontak lengkap

---

## 🛠️ Teknologi yang Digunakan

- **React 18** - Library JavaScript untuk membangun UI
- **Vite** - Build tool yang cepat dan modern
- **Tailwind CSS** - Utility-first CSS framework untuk styling
- **jsPDF** - Library untuk generate PDF
- **EmailJS** - Service untuk integrasi email (opsional)

---

## 📂 Struktur Folder

```
cvgalih/
├── public/
├── src/
│   ├── assets/              # Gambar dan assets
│   ├── components/          # Komponen React
│   │   ├── AboutContent.jsx
│   │   ├── Contact.jsx
│   │   ├── Experiences.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── contexts/            # Context API
│   │   └── ThemeContext.jsx
│   ├── data/                # Data source
│   │   └── dataMahasiswa.js
│   ├── hooks/               # Custom hooks
│   │   └── useTypingAnimation.js
│   ├── App.jsx              # Main component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---



## 📊 Komponen Aplikasi

### 1. **Navbar.jsx**
Navigasi utama dengan 5 menu: About, Resume, Works, Blog, Contact
- Responsive: Horizontal (mobile) / Vertical sidebar (desktop)
- Active state indication
- Dark mode aware

### 2. **ProfileCard.jsx**
Card profil dengan:
- Foto profil
- Nama dan typing animation
- Dark mode toggle
- Tombol Download CV (PDF)
- Tombol Contact Me
- Social media links

### 3. **AboutContent.jsx**
Informasi tentang diri:
- Deskripsi singkat
- Info personal (Age, Residence, Freelance, Address)

### 4. **Services.jsx**
Grid card menampilkan layanan:
- Web Development
- UI/UX Design
- Frontend Development
- Responsive Design

### 5. **Skills.jsx**
Progress bar menampilkan keahlian:
- HTML & CSS
- JavaScript / TypeScript
- React.js
- Tailwind CSS
- Git & GitHub
- Figma

### 6. **Experiences.jsx**
Timeline pengalaman kerja/organisasi dengan detail:
- Jabatan
- Perusahaan/Organisasi
- Periode waktu
- Deskripsi pekerjaan

### 7. **Contact.jsx**
Form kontak dan informasi:
- Form input (Name, Email, Subject, Message)
- Validasi form
- Contact information display
- Social media links

---

## 👨‍💻 Informasi Developer

**Nama**: Damar Galih Abdurrahman  
**NIM**: L200230184  
**Program Studi**: Informatika  
**Universitas**: Universitas Muhammadiyah Surakarta  
**Email**: l200230184@student.ums.ac.id

---

## 📝 Catatan

Aplikasi ini dibuat sebagai tugas Pemrograman Web menggunakan framework React.js dengan fokus pada:
- Single Page Application (SPA)
- Responsive Web Design
- Modern UI/UX
- Component-based Architecture
- State Management dengan Context API

---

**Tanggal Dibuat**: 20 November 2025
