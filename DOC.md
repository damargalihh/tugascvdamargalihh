# 📄 Dokumentasi Aplikasi CV Mahasiswa

## Deskripsi Aplikasi

Aplikasi CV Mahasiswa adalah Single Page Application (SPA) yang dibangun menggunakan ReactJS dan Vite. Aplikasi ini menampilkan informasi profil mahasiswa secara interaktif dan modern dengan fitur navigasi yang smooth dan responsif untuk berbagai ukuran layar.

### Fitur Utama:
- **Single Page Application** dengan navigasi tab-based
- **Responsive Design** - Support desktop, tablet, dan mobile
- **Profile Section** - Menampilkan foto, nama, kontak, dan informasi personal
- **About Me** - Deskripsi singkat dan detail personal (age, residence, freelance, address)
- **Services** - Layanan yang ditawarkan (Web Development, UI/UX Design, Frontend Development, Responsive Design)
- **Skills & Expertise** - Progress bar skill dengan persentase
- **Experience** - Riwayat pengalaman kerja/organisasi
- **Contact** - Form kontak dan informasi kontak lengkap dengan social media

### Teknologi yang Digunakan:
- **React 18** - Library JavaScript untuk membangun UI
- **Vite** - Build tool yang cepat dan modern
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - useState untuk state management

### Struktur Folder:
```
cvgalih/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutContent.jsx
│   │   ├── Contact.jsx
│   │   ├── Experiences.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── dataMahasiswa.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── DOC.md
```

### Komponen Aplikasi:
1. **Navbar.jsx** - Navigasi sidebar (desktop) dan top bar (mobile)
2. **ProfileCard.jsx** - Card profil dengan foto, nama, social media, dan tombol CTA
3. **AboutContent.jsx** - Section about me dengan informasi personal
4. **Services.jsx** - Grid card layanan yang ditawarkan
5. **Skills.jsx** - Progress bar skills dengan animasi
6. **Experiences.jsx** - Timeline pengalaman kerja
7. **Contact.jsx** - Form kontak dan informasi kontak

### Data Management:
Semua data mahasiswa disimpan di file terpisah `src/data/dataMahasiswa.js` dan di-import ke komponen yang membutuhkan. Data tidak di-hardcode di dalam komponen, melainkan dibaca secara otomatis dari object data.

---

## 🚀 Cara Menjalankan Aplikasi

### Prasyarat:
- Node.js versi 16 atau lebih tinggi
- npm atau yarn package manager

### Langkah-langkah:

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd cvgalih
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```

4. **Buka di Browser**
   ```
   http://localhost:5173
   ```

5. **Build untuk Production**
   ```bash
   npm run build
   ```

6. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## 🌐 Link Deployment

**Live Demo:** [Akan diisi setelah deployment]

Platform deployment: Vercel / Netlify

---

## 📸 Screenshot Tampilan

### Desktop View
![Desktop View - Profile](./screenshots/desktop-profile.png)
*Tampilan profil dan about me di desktop*

![Desktop View - Services](./screenshots/desktop-services.png)
*Tampilan services dan skills di desktop*

![Desktop View - Contact](./screenshots/desktop-contact.png)
*Tampilan contact form di desktop*

### Mobile View
![Mobile View - Profile](./screenshots/mobile-profile.png)
*Tampilan profil di mobile dengan navbar di atas*

![Mobile View - Services](./screenshots/mobile-services.png)
*Tampilan services responsive di mobile*

![Mobile View - Contact](./screenshots/mobile-contact.png)
*Tampilan contact form di mobile*

---

## 🎨 Design Highlights

### Color Palette:
- **Primary Color**: Teal (#14b8a6) - Untuk aksen, button, dan highlight
- **Background**: White (#ffffff) dan Light Gray (#f9fafb)
- **Text**: Gray scale untuk hierarchy

### Responsive Breakpoints:
- **Mobile**: < 768px (Navbar di atas, layout vertical)
- **Tablet**: 768px - 1024px (Transisi layout)
- **Desktop**: > 1024px (Sidebar fixed, profile card fixed)

### Interactive Features:
- Smooth tab navigation dengan state management
- Hover effects pada card dan button
- Animated progress bars untuk skills
- Smooth scrolling pada content area
- Icon animations dengan scale dan rotate

---

## 👨‍💻 Informasi Developer

**Nama**: Damar Galih Abdurrahman  
**NIM**: [Sesuaikan dengan NIM Anda]  
**Mata Kuliah**: Pemrograman Web Berbasis Framework  
**Dosen**: [Sesuaikan dengan nama dosen]  

---

## 📝 Catatan Pengembangan

### Commit History:
- ✅ Initial project setup dengan Vite + React
- ✅ Implementasi komponen Navbar, ProfileCard, AboutContent
- ✅ Implementasi Services, Skills, Experiences, Contact
- ✅ Styling dengan Tailwind CSS
- ✅ Implementasi responsive design untuk mobile
- ✅ Integrasi data dari dataMahasiswa.js
- ✅ Optimasi UI/UX dan interaksi
- ✅ Testing dan bug fixes
- ✅ Documentation

### Perbaikan yang Dilakukan:
1. Implementasi responsive navbar (horizontal mobile, vertical desktop)
2. Perbaikan color palette menggunakan Teal Tailwind
3. Optimasi layout untuk mobile devices
4. Perbaikan fungsi tombol Contact Me
5. Cleanup dan optimasi code

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.3"
  }
}
```

---

## 🔗 Links & Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Deployment Guide - Vercel](https://vercel.com/docs)
- [Deployment Guide - Netlify](https://docs.netlify.com)

---

**Last Updated**: 20 November 2025
