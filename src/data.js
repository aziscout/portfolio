import HeroImage from "/assets/hero-img.png";
import AboutImage from "/assets/hero-image.jpg"; 

const Image = {
  HeroImage,
  AboutImage
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/laravel.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 4,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 6,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 7,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 8,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 9,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 10,
    gambar: Tools12,
    nama: "Laravel",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Perpustakaan QR CODE",
    desk: "Sistem Manajemen Peminjaman Buku Menggunakan Teknologi QR CODE",
    tools: ["Laravel", "TailwindCSS", "AlpineJS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Web Wedding",
    desk: "Website Undangan Pernikahan",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Smart Lapor",
    desk: "Platform Layanan Masyarakat",
    tools: ["Vite", "ReactJS", "TailwindCSS"],
    dad: "400",
  },
  // {
  //   id: 4,
  //   gambar: Proyek4,
  //   nama: "Website Course",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
  //   dad: "500",
  // },
  // {
  //   id: 5,
  //   gambar: Proyek5,
  //   nama: "Web Portfolio",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
  //   dad: "600",
  // },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];


export const listAchievement = [
  {
    id: 1,
    title: "Belajar Dasar Pemrograman WEB",
    desc: "Peserta pelatihan yang di selenggarakan oleh Dicoding.",
    date: "2024",
    thumbnail: "/assets/thumbnails/dicoding.png", // gambar preview
    pdf: "/dicoding.pdf"        // file asli PDF
  },
  {
    id: 2,
    title: "Hackathon PERMIKOMNAS RI 2025",
    desc: "Peserta lomba tingkat nasional dalam ajang Hackathon PERMIKOMNAS RI 2025 yang diselenggarakan di BBPSDMP Makassar.",
    date: "2025",
    thumbnail: "/assets/thumbnails/hackathon.png",
    pdf: "/hackathon.pdf"
  },
  {
    id: 3,
    title: "Kampus Mengajar Angkatan 7",
    desc: "Partisipasi dalam program Merdeka Belajar Kampus Merdeka (MBKM) Kampus Mengajar Angkatan 7 di SMPN 6 KENDARI.",
    date: "2024",
    thumbnail: "/assets/thumbnails/km7.png",
    pdf: "/km7.pdf"
  },
];
