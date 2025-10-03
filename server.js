// server.js
import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/send", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "abdulaziscout@gmail.com", 
            pass: "vura xxtk cakn thwu",     
        },
        });

        let mailOptions = {
        from: email,
        to: "abdulaziscout@gmail.com",
        subject: `Pesan baru dari ${name}`,
        text: `
            Nama: ${name}
            Email: ${email}
            Pesan: ${message}
        `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Pesan berhasil terkirim!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Gagal mengirim pesan" });
    }
    });

    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
