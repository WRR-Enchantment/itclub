import { useState, useEffect } from "react";
import { FaUserPlus, FaWhatsapp, FaInstagram, FaQuestionCircle, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const definitions = {
  "Desain grafis": "Desain grafis adalah seni dan praktik merancang serta menyusun elemen visual untuk menyampaikan pesan melalui media seperti poster, brosur, dan media digital.",
  "Fotografi": "Fotografi adalah seni menangkap cahaya dengan kamera untuk menciptakan gambar visual yang bisa bercerita atau menyampaikan emosi.",
  "Videografi": "Videografi adalah proses menangkap gambar bergerak dengan kamera untuk membuat video dokumentasi, promosi, maupun karya seni.",
  "Editor": "Editor bertanggung jawab dalam mengolah konten foto, video, atau tulisan menjadi lebih menarik dan sesuai kebutuhan dengan perangkat lunak editing.",
  "Coding": "Coding adalah proses menulis instruksi dalam bahasa pemrograman untuk membuat perangkat lunak, aplikasi, atau sistem berbasis komputer.",
  "Presenter": "Presenter bertugas menyampaikan informasi atau membawakan acara di depan kamera atau audiens, baik untuk keperluan dokumentasi, podcast, maupun siaran langsung."
};

const testimonials = [
  {
    quote: "Seru banget kalian wajib coba",
    author: "@559mlia"
  },
  {
    quote: "Di IT Gw jadi dapet piagam gubernur, cocok banget buat kalian yang pengen belajar",
    author: "@rafli_rizki_"
  },
  {
    quote: "Gw Jadi bisa ikut serta dalam lomba FLS3N karena join IT",
    author: "@dwiki.drmnsyh"
  }
];

const jobdesks = [
  {
    title: "📸 Dokumentasi Acara",
    desc: "Mengabadikan momen penting sekolah melalui foto dan video."
  },
  {
    title: "🎙️ Produksi Podcast",
    desc: "Membuat podcast bertema edukatif atau santai dengan tim produksi."
  },
  {
    title: "📱 Konten Media Sosial",
    desc: "Mendesain dan mengelola konten visual di Instagram, TikTok, dan lainnya."
  },
  {
    title: "🎥 Wawancara di Acara",
    desc: "Melakukan liputan langsung dan mewawancarai peserta acara."
  },
  {
    title: "🏆 Persiapan & Ikut Lomba",
    desc: "Menjadi bagian dari tim lomba seperti FLS2N, coding, video kreatif, dan lainnya."
  }
];

const faqs = [
  {
    question: "Kapan jadwal ekskulnya?",
    answer: "Setiap hari Jumat."
  },
  {
    question: "Apakah harus sudah ahli untuk bisa bergabung?",
    answer: "Tidak harus, karena di sini kita sama-sama belajar."
  },
  {
    question: "Apa bisa memilih lebih dari satu bidang?",
    answer: "Bisa! Kamu bebas eksplorasi, tapi disarankan fokus."
  },
  {
    question: "Bagaimana jika saya sudah ikut ekstrakurikuler lain?",
    answer: "Tidak masalah! Banyak anggota kami juga aktif di ekskul lain, asalkan bisa mengatur waktu."
  },
  {
    question: "Apakah dapat sertifikat?",
    answer: "Ya, ada sertifikat keikutsertaan dan penghargaan bila aktif atau ikut lomba."
  }
];

export default function RecruitmentPage() {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [typedIndex, setTypedIndex] = useState(0);
  const [showFAQ, setShowFAQ] = useState(false);
  const titles = ["Desainer Grafis", "Fotografer", "Videografer", "Editor", "Programmer", "Presenter"];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans cursor-default">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-black to-purple-900 blur-sm opacity-50 z-0" />

      <div className="overflow-hidden whitespace-nowrap border-y border-white/20 py-2 text-center text-white text-sm bg-white/5 mb-6">
        <div className="inline-block animate-marquee">
          🎉 Ayo gabung jadi bagian dari TAAT IT CLUB! &nbsp;|&nbsp; 🔥 Kembangkan potensimu bersama kami! &nbsp;|&nbsp; 🚀 Pilih bidang favoritmu sekarang juga!
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-black text-white z-50 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold animate-pulse"
          >
            TAAT IT CLUB
          </motion.div>
        </div>
      ) : (
        <div className="relative z-10 text-white p-6">
          <div className="text-center mb-4 text-xl text-white/80">
            Gabung Bersama Kami sebagai <span className="text-yellow-300 font-semibold">{titles[typedIndex]}</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-8 bg-white/10 p-4 rounded-2xl shadow-xl backdrop-blur-xl"
            >
              Open Recruitment TAAT IT CLUB
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {Object.keys(definitions).map((role) => (
                <motion.div
                  key={role}
                  onClick={() => setSelected(role)}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer p-6 rounded-2xl bg-white/10 hover:bg-white/20 shadow-md backdrop-blur-lg transition-all group"
                >
                  <h2 className="text-xl font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                    {role}
                  </h2>
                  <AnimatePresence>
                    {selected === role && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 text-sm text-white/80 overflow-hidden"
                      >
                        {definitions[role]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">💼 Jobdesk Populer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {jobdesks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 rounded-xl p-4 backdrop-blur-lg shadow"
                  >
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-white/80 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 mb-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc2rSNsoAd2VauTdZNrYg-NVB9Vt6jxIizntmbRfBi1cWFjTg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 text-lg bg-gray-800 hover:bg-gray-700 text-yellow-400 font-bold rounded-2xl shadow-lg backdrop-blur-xl transition-all"
              >
                <FaUserPlus /> Daftar
              </a>
              <a
                href="https://wa.me/qr/GYT677A5SLEDB1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gray-300 hover:bg-gray-200 text-green-800 font-semibold rounded-xl shadow-md backdrop-blur-xl transition-all"
              >
                <FaWhatsapp /> Contact Person
              </a>
            </div>

            <div className="mt-6">
              <a
                href="https://www.instagram.com/taat_itclub?igsh=MTd5amUyNmNxajZmdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-pink-600 hover:bg-pink-500 text-white font-semibold rounded-xl shadow-md backdrop-blur-xl transition-all"
              >
                <FaInstagram /> Instagram
              </a>
            </div>

            <div className="mt-12 max-w-xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Testimoni Alumni</h3>
              <div className="space-y-6">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="p-4 bg-white/10 rounded-xl backdrop-blur-md shadow"
                  >
                    <p className="italic text-white/80">"{t.quote}"</p>
                    <p className="text-right text-yellow-300 font-medium mt-2">{t.author}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating FAQ Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowFAQ(!showFAQ)}
          className="bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all"
        >
          {showFAQ ? <FaTimes /> : <FaQuestionCircle />}
        </button>
        <AnimatePresence>
          {showFAQ && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 bg-white text-black p-4 rounded-xl shadow-xl w-72 max-h-96 overflow-y-auto backdrop-blur-xl"
            >
              <h4 className="font-semibold text-lg mb-2">❓ FAQ</h4>
              {faqs.map((faq, index) => (
                <div key={index} className="mb-3">
                  <p className="font-semibold">Q: {faq.question}</p>
                  <p className="text-sm text-gray-700">A: {faq.answer}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
