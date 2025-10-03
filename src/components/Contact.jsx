import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
        const res = await fetch("http://localhost:5000/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            setStatus("Message sent successfully ✅");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus("Failed to send message ❌");
        }
        } catch (error) {
        setStatus("Error: " + error.message);
        }
    };
    return (
        <section id="contact" className="py-25 bg-white">
            <div className="container mx-auto px-5 md:px-10 lg:px-20">
                {/* Judul */}
                <h2
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
                data-aos="fade-up"
                data-aos-once="false"
                >
                Get in <span className="text-green-500">Touch</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Info Kontak */}
                    <div
                        className="flex flex-col justify-center"
                        data-aos="zoom-in"
                        data-aos-once="false"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                        Contact Information
                        </h3>
                        <p className="text-gray-600 mb-6">
                        Jangan ragu untuk menghubungi saya melalui form atau langsung lewat email & sosial media berikut.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="w-10 h-10 flex items-center justify-center border-2 text-green-600 rounded-full">
                                    <i className="fa-regular fa-envelope"></i>
                                </span>
                                <a href="mailto:abdulazis@email.com" className="text-gray-700">
                                abdulaziscout@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-10 h-10 flex items-center justify-center border-2 text-green-600 rounded-full">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </span>
                                <a href="" className="text-gray-700">
                                +62 822 2309 7616
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-10 h-10 flex items-center justify-center border-2 text-green-600 rounded-full">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </span>
                                <a href="https://www.linkedin.com/in/abd-azis-b868bb270/" target="_blank" rel="noreferrer" className="text-gray-700">
                                linkedin.com/in/abdulazis
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Form Kontak */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-once="false">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                            <label className="block text-gray-700 mb-2">Nama</label>
                            <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Masukkan Nama Anda"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Masukkan Email Anda"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Pesan</label>
                                <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Sampaikan Pesan Anda"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
