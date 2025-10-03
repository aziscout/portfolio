import DataImage, { listTools, listProyek }  from "./data";
import HeroTitle from "./components/HeroTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,    
    });
  }, []);
  return (
    <>
    {/* hero section start */}
      <div id="home" className="hero flex flex-col-reverse lg:flex-row pt-10 lg:pt-30 px-5 md:px-10 lg:px-50 justify-between items-center">
        <div className="w-full lg:w-xl text-center lg:text-left" data-aos="zoom-in" data-aos-once="false">
          <div className="text-xl md:text-2xl font-semibold">
            <h1>Hello, I'm <span className="text-green-500">Abdul Azis</span></h1>
          </div>

          <HeroTitle />

          <div className="border-l-0 lg:border-l-4 px-0 lg:px-3 mt-5 border-green-500">
            <p className="lg:text-justify sm:text-center text-sm md:text-base">
              "Saya seorang <span className="font-semibold text-green-500">UI & UX Designer</span> sekaligus <span className="font-semibold text-green-500">Web Developer</span> yang berfokus pada pembuatan desain antarmuka modern, interaktif, dan pengembangan website yang responsif serta fungsional."
            </p>
          </div>
          <div className="my-8 flex justify-center lg:justify-start">
            <a
              href="/cv.pdf"
              download="CV-Abdul Azis.pdf"
              className="w-36 md:w-40 border-green-500 border-2 p-2 rounded-full text-green-500 text-center hover:bg-green-500 hover:text-white transition duration-500"
            >
              Download CV
            </a>
          </div>

        </div>

        <div className="relative w-full md:w-[400px] lg:w-[500px] mb-8 lg:mb-0">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-96 md:w-[500px] lg:w-[700px] rounded-lg mx-auto" data-aos="zoom-in" data-aos-once="false" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/3 bg-gradient-to-t from-white/98 via-transparent to-transparent rounded-b-lg pointer-events-none"></div>
        </div>
      </div>
      {/* hero section end */}

      {/* about section start */}
      <div id="about" className="about flex flex-col lg:flex-row items-center justify-between px-5 md:px-10 lg:px-50 py-16 lg:py-24">
        {/* Bagian Gambar */}
        <div className="relative md:w-[400px] lg:w-[500px] mb-8 lg:mb-0" data-aos="zoom-in" data-aos-once="false">
          <img 
            src={DataImage.AboutImage} 
            alt="About Me" 
            className="
              md:w-[300px] lg:w-[400px] 
              rounded-lg
              transition duration-500 ease-in-out 
              transform hover:scale-105 
              shadow-[0_0_25px_5px_rgba(34,197,94,0.7)]
            " 
          />
        </div>

        {/* Bagian Teks */}
        <div
          className="lg:w-1/2 text-center lg:text-left"
          data-aos="zoom-in"
          data-aos-once="false"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            About <span className="text-green-500">Me</span>
          </h2>
          <p className="text-sm lg:text-justify md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
            Halo! Saya <span className="font-semibold text-green-500">Abdul Azis</span>, 
            seorang <span className="font-semibold text-green-500">UI & UX Designer </span> 
            sekaligus <span className="font-semibold text-green-500">Web Developer</span>. 
            Saya memiliki ketertarikan besar dalam membangun desain antarmuka modern, 
            interaktif, serta mengembangkan website yang responsif dan fungsional.  
          </p>
          <p className="lg:text-justify text-sm md:text-base  lg:text-lg text-gray-600 leading-relaxed mb-6">
            Dengan pengalaman dalam menggabungkan estetika desain dan performa teknologi, 
            saya berfokus dalam menciptakan pengalaman pengguna yang menyenangkan 
            sekaligus menjaga kualitas kode yang bersih dan mudah dikembangkan.
          </p>

          {/* Tombol */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="w-36 md:w-40 border-green-500 border-2 p-2 rounded-full text-green-500 text-center hover:bg-green-500 hover:text-white transition duration-500"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      {/* about section end */}

      {/* Section Tech Stack */}
      <div id="tech" className="tech px-5 md:px-10 lg:px-20 py-16 lg:py-24 bg-gray-50">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-800"
          data-aos="fade-up"
          data-aos-once="false"
        >
          Tools & <span className="text-green-500">Technologies</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
          {listTools.map((tool) => (
            <div data-aos="zoom-in" data-aos-once="false" key={tool.id} >
              <img
                      src={tool.gambar}
                      alt={tool.nama}
                      className="w-16 h-16 object-contain mx-auto hover:scale-110 transition-transform duration-300"
                    />
              <p className="mt-2 text-sm font-medium">{tool.nama}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Section Tech Stack */}
        
      {/* project start */}
      <div
        id="project"
        className="projects px-5 md:px-10 lg:px-20 py-16 lg:py-24 bg-gray-50"
      >
        {/* Judul */}
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-800"
          data-aos="fade-up"
          data-aos-once="false"
        >
          My <span className="text-green-500">Projects</span>
        </h2>

        {/* Grid Projects */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              // className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={proyek.dad}
              data-aos-once="false"
            >
              {/* Gambar */}
              <img
                src={proyek.gambar}
                alt={proyek.nama}
                className="w-full h-48 object-cover"
              />

              {/* Konten */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{proyek.nama}</h3>
                <p className="text-sm text-gray-600 mb-4">{proyek.desk}</p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* project end */}

      <Achievement />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
