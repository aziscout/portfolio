const Footer = () => {
    return (
        <footer className="bg-green-500 py-6 text-white text-center">
            <h2 className="text-xl font-bold">Abdul Azis</h2>
            <p className="mt-2 text-sm opacity-90">
                UI & UX Designer | Web Developer
            </p>
            <div className="flex justify-center gap-5 mt-4 text-xl">
                <a href="#"><i className="fab fa-github" /></a>
                <a href="#"><i className="fab fa-linkedin" /></a>
                <a href="#"><i className="fab fa-whatsapp" /></a>
            </div>
            <p className="mt-4 text-xs opacity-80">
                © {new Date().getFullYear()} Abdul Azis. All Rights Reserved.
            </p>
        </footer>
        );
    };

export default Footer;
