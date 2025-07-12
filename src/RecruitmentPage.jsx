// RecruitmentPage.jsx
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useMemo } from "react";
import {
  FaUserPlus,
  FaWhatsapp,
  FaInstagram,
  FaQuestionCircle,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const definitions = {
  "Desain grafis":
    "Desain grafis adalah seni dan praktik merancang serta menyusun elemen visual untuk menyampaikan pesan melalui media seperti poster, brosur, dan media digital.",
  Fotografi:
    "Fotografi adalah seni menangkap cahaya dengan kamera untuk menciptakan gambar visual yang bisa bercerita atau menyampaikan emosi.",
  Videografi:
    "Videografi adalah proses menangkap gambar bergerak dengan kamera untuk membuat video dokumentasi, promosi, maupun karya seni.",
  Editor:
    "Editor bertanggung jawab dalam mengolah konten foto, video, atau tulisan menjadi lebih menarik dan sesuai kebutuhan dengan perangkat lunak editing.",
  Coding:
    "Coding adalah proses menulis instruksi dalam bahasa pemrograman untuk membuat perangkat lunak, aplikasi, atau sistem berbasis komputer.",
  Presenter:
    "Presenter bertugas menyampaikan informasi atau membawakan acara di depan kamera atau audiens, baik untuk keperluan dokumentasi, podcast, maupun siaran langsung.",
};

const testimonials = [
  { quote: "Seru banget kalian wajib coba", author: "@559mlia" },
  {
    quote:
      "Di IT Gw jadi dapet piagam gubernur, cocok banget buat kalian yang pengen belajar",
    author: "@rafli_rizki_",
  },
  {
    quote: "Gw Jadi bisa ikut serta dalam lomba FLS3N karena join IT",
    author: "@dwiki.drmnsyh",
  },
];

const jobdesks = [
  {
    title: "📸 Dokumentasi Acara",
    desc: "Mengabadikan momen penting sekolah melalui foto dan video.",
  },
  {
    title: "🎧 Produksi Podcast",
    desc: "Membuat podcast bertema edukatif atau santai dengan tim produksi.",
  },
  {
    title: "📱 Konten Media Sosial",
    desc: "Mendesain dan mengelola konten visual di Instagram, TikTok, dan lainnya.",
  },
  {
    title: "🎥 Wawancara di Acara",
    desc: "Melakukan liputan langsung dan mewawancarai peserta acara.",
  },
  {
    title: "🏆 Persiapan & Ikut Lomba",
    desc: "Menjadi bagian dari tim lomba seperti FLS2N, coding, video kreatif, dan lainnya.",
  },
];
const faqs = [
  { question: "Kapan jadwal ekskulnya?", answer: "Setiap hari Jumat." },
  {
    question: "Apakah harus sudah ahli untuk bisa bergabung?",
    answer: "Tidak harus, karena di sini kita sama-sama belajar.",
  },
  {
    question: "Apa bisa memilih lebih dari satu bidang?",
    answer: "Bisa! Kamu bebas eksplorasi, tapi disarankan fokus.",
  },
  {
    question: "Bagaimana jika saya sudah ikut ekstrakurikuler lain?",
    answer:
      "Tidak masalah! Banyak anggota kami juga aktif di ekskul lain, asalkan bisa mengatur waktu.",
  },
  {
    question: "Apakah dapat sertifikat?",
    answer:
      "Ya, ada sertifikat keikutsertaan dan penghargaan bila aktif atau ikut lomba.",
  },
];

const allGamePaths = [
  [
    {
      question: "Kamu baru masuk tim produksi, suasananya ramai banget. Kamu...",
      options: [
        { text: "Coba ikut ngobrol pelan-pelan", points: 2, next: 1 },
        { text: "Diam aja dulu sambil ngamatin", points: 1, next: 1 },
      ],
    },
    {
      question: "Ada rapat perdana, kamu dapat tugas dokumentasi. Kamu...",
      options: [
        { text: "Langsung cari tahu tugasnya", points: 2, next: 2 },
        { text: "Tanya teman dulu, takut salah", points: 1, next: 2 },
      ],
    },
    {
      question: "Kamu diminta ambil gambar pas upacara. Tapi cuaca mendung banget!",
      options: [
        { text: "Tetap ambil gambar sebaik mungkin", points: 2, next: 3 },
        { text: "Minta pindah tugas aja", points: 0, next: 3 },
      ],
    },
    {
      question: "File kamu error dan hilang. Deadline malam ini!",
      options: [
        { text: "Ulang dari awal, semampunya", points: 2, next: "result" },
        { text: "Lapor ke kakak pembina, minta solusi", points: 1, next: "result" },
      ],
    },
  ],
  [
    {
      question: "Kamu ditawari ikut jadi tim podcast. Kamu belum pernah nyoba, tapi...",
      options: [
        { text: "Oke, aku coba dulu", points: 2, next: 1 },
        { text: "Takut suara jelek, tolak halus", points: 0, next: 1 },
      ],
    },
    {
      question: "Kamu grogi pas rekaman. Suara kamu kedengeran gemetar.",
      options: [
        { text: "Coba ulang sambil tarik napas", points: 2, next: 2 },
        { text: "Tetap rekam walau deg-degan", points: 1, next: 2 },
      ],
    },
    {
      question: "Podcast tayang! Teman-teman suka. Tapi ada yang ngomentarin logatmu.",
      options: [
        { text: "Bilang makasih dan belajar logat lagi", points: 2, next: "result" },
        { text: "Bodo amat, yang penting pede", points: 1, next: "result" },
      ],
    },
  ],
];

function getResult(score) {
  if (score >= 7) {
    return "🎉 Keren! Kamu cocok jadi anggota inti tim produksi. Semangatmu luar biasa!";
  } else if (score >= 4) {
    return "👍 Kamu punya potensi! Tinggal diasah sedikit lagi. Terus belajar ya.";
  } else {
    return "✨ Awal yang oke! Masih perlu adaptasi, tapi kamu sudah melangkah.";
  }
}

function ScrollReveal({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function RecruitmentPage() {
  const [selected, setSelected] = useState(null);
  const [typedIndex, setTypedIndex] = useState(0);
  const [showFAQ, setShowFAQ] = useState(false);
  const [gameStep, setGameStep] = useState(null);
  const [gamePath, setGamePath] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const titles = [
    "Desainer Grafis",
    "Fotografer",
    "Videografer",
    "Editor",
    "Programmer",
    "Presenter",
  ];

  const gamePaths = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * allGamePaths.length);
    return allGamePaths[randomIndex];
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-yellow-400 font-bold text-2xl tracking-widest">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          TAAT IT CLUB
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen text-white px-4 pt-16 pb-6 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* MENU STRIP 3 KIRI ATAS */}
      <div className="fixed top-2 left-2 z-50">
        <button
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          className="p-2 rounded-md bg-white/90 text-black shadow-lg hover:bg-white/95 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mt-2 w-48 bg-white/90 text-black rounded-lg shadow-lg backdrop-blur-md border border-white/50"
            >
              <ul>
                <li>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-left px-4 py-2 hover:bg-yellow-300 transition"
                  >
                    Promotion Page
                  </button>
                </li>
                <li>
                  <a
                    href="https://sites.google.com/u/2/d/1Ge2ZvwszxRG4PLG9eG9Dil03pLO1uUGW/p/1dphi9Yn4LA7vqa36_QoHyzb7k7jIzAyx/preview?authuser=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-yellow-300 transition"
                  >
                    Situs
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MARQUEE TEKS DI ATAS TENGAH */}
      <div className="fixed top-2 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-xl overflow-hidden whitespace-nowrap rounded-md bg-white/90 text-black font-semibold text-sm select-none shadow-md px-4 py-1">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="inline-block"
        >
          💡 Satu klub, banyak karya. Gabung TAAT IT CLUB dan ekspresikan kreativitasmu bareng teman-teman seru!
        </motion.div>
      </div>

      {/* Logo & Judul */}
      <ScrollReveal>
        <div className="text-center mb-4 mt-8">
          <img src="/logo.png" alt="Logo" className="mx-auto w-16 h-16" />
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center">
          Open Recruitment TAAT IT CLUB
        </h1>
      </ScrollReveal>

      {/* Definisi bidang */}
      <ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-4xl mx-auto">
          {Object.keys(definitions).map((role) => (
            <motion.div
              key={role}
              onClick={() => setSelected(role)}
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer p-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 transition-all group"
            >
              <h2 className="text-sm font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                {role}
              </h2>
              <AnimatePresence>
                {selected === role && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-xs text-white/80 overflow-hidden"
                  >
                    {definitions[role]}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      {/* Jobdesk Populer */}
      <ScrollReveal>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-center">💼 Jobdesk Populer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {jobdesks.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-3 backdrop-blur-lg border border-white/10 shadow"
              >
                <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                <p className="text-white/80 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Tombol Daftar */}
      <ScrollReveal>
        <div className="mt-10 mb-6 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfZ4g5IVkPX6ChejtUwqT5XG_u7osyqlo54F4hyU0gEzA5mTA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 text-base bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-full shadow-md backdrop-blur-xl transition-all flex items-center gap-2"
          >
            <FaUserPlus /> Daftar Sekarang
          </a>
        </div>
      </ScrollReveal>
      {/* Kontak */}
      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="http://wa.me/qr/6IILUSBVL5SUM1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-xs bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg shadow-md backdrop-blur-xl transition-all flex items-center gap-2"
          >
            <FaWhatsapp /> Contact
          </a>
          <a
            href="https://www.instagram.com/taat_itclub"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-xs bg-pink-600 hover:bg-pink-500 text-white font-medium rounded-lg shadow-md backdrop-blur-xl transition-all flex items-center gap-2"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </ScrollReveal>

      {/* Testimoni Alumni */}
      <ScrollReveal>
        <div className="mt-14 max-w-xl mx-auto">
          <h3 className="text-lg font-semibold mb-3 text-center">💬 Testimoni Alumni</h3>
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-3 bg-white/10 rounded-lg backdrop-blur-md border border-white/10 shadow"
              >
                <p className="italic text-white/80 text-sm">"{t.quote}"</p>
                <p className="text-right text-yellow-300 text-xs font-medium mt-1">
                  {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Mini Simulasi */}
      <ScrollReveal>
        <div className="mt-14 max-w-xl mx-auto text-sm">
          <h3 className="text-lg font-semibold text-center mb-4">
            🎮 Mini Simulasi: Masuk Tim Produksi
          </h3>

          {gameStep === null ? (
            <div className="text-center">
              <button
                onClick={() => {
                  setGameStep(0);
                  setTotalScore(0);
                  setGamePath(gamePaths);
                }}
                className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-md hover:bg-white/30 transition"
              >
                Mulai Simulasi
              </button>
            </div>
          ) : (
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md border border-white/20">
              {gameStep === "result" ? (
                <div className="text-center">
                  <p className="mb-3 font-medium">{getResult(totalScore)}</p>
                  <button
                    onClick={() => {
                      setGameStep(null);
                      setTotalScore(0);
                      setGamePath([]);
                    }}
                    className="text-xs underline text-white/70"
                  >
                    Coba Ulang
                  </button>
                </div>
              ) : (
                <>
                  <p className="mb-3 font-medium">
                    {gamePath[gameStep].question}
                  </p>
                  <div className="space-y-2">
                    {gamePath[gameStep].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setTotalScore((prev) => prev + opt.points);
                          setGameStep(opt.next);
                        }}
                        className="w-full text-left px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition"
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* FAQ Button & Panel */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setShowFAQ(!showFAQ)}
          className="bg-yellow-400 text-black p-2 rounded-full shadow hover:bg-yellow-300 transition-all"
          aria-label="Toggle FAQ"
        >
          {showFAQ ? <FaTimes /> : <FaQuestionCircle />}
        </button>
        <AnimatePresence>
          {showFAQ && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-3 bg-white/20 backdrop-blur-xl text-white p-3 rounded-lg shadow-lg border border-white/30 w-64 max-h-80 overflow-y-auto text-sm"
            >
              <h4 className="font-semibold mb-2">❓ FAQ</h4>
              {faqs.map((faq, index) => (
                <div key={index} className="mb-2">
                  <p className="font-semibold">Q: {faq.question}</p>
                  <p className="text-white/80 text-xs">A: {faq.answer}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
