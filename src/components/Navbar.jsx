import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-xs">
            <div className="container mx-auto flex justify-between items-center py-5 px-6 md:px-12 lg:px-20">
                {/* Logo */}
                <div className="logo">
                    <a href="#" className="text-2xl font-bold text-green-500 transition duration-300 hover:animate-pulse hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.9)]">
                        PORTFOLIO
                    </a>
                </div>

                {/* Hamburger Button (mobile only) */}
                <button className="md:hidden text-3xl text-green-500" onClick={() => setIsOpen(!isOpen)}>
                    <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </button>

                {/* Menu (Desktop) */}
                <ul className="hidden md:flex gap-7 font-medium">
                    {["Home", "About", "Project", "Contact"].map((item) => (
                        <li key={item} className="relative group">
                        <a href={`#${item.toLowerCase()}`} className="relative px-2 py-1">
                            {item}
                        </a>
                        {/* Sudut hover */}
                        <span className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-green-500 opacity-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.9)] transition duration-300"></span>
                        <span className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-green-500 opacity-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.9)] transition duration-300"></span>
                        <span className="absolute left-0 bottom-0 h-2 w-2 border-l-2 border-b-2 border-green-500 opacity-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.9)] transition duration-300"></span>
                        <span className="absolute right-0 bottom-0 h-2 w-2 border-r-2 border-b-2 border-green-500 opacity-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.9)] transition duration-300"></span>
                        </li>
                    ))}
                </ul>

                {/* Sosmed (Desktop) */}
                <ul className="hidden md:flex text-2xl gap-5 text-white bg-green-500 w-40 h-12 rounded-full items-center justify-center">
                    <li>
                        <a href="https://www.linkedin.com/in/abd-azis-b868bb270/" className="inline-block transition-transform duration-300 hover:scale-125">
                            <i className="fa-brands fa-square-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/aziscout" className="inline-block transition-transform duration-300 hover:scale-125">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="inline-block transition-transform duration-300 hover:scale-125">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md">
                    <ul className="flex flex-col items-center gap-4 py-6 font-medium text-green-500">
                        {["HOME", "ABOUT", "PROJECT", "CONTACT"].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex justify-center gap-6 pb-6 text-2xl text-green-500">
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-square-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
        );
    };

export default Navbar;
