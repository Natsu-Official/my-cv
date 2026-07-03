"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* BACKGROUND GLOW */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* LEFT PANEL */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10">
            <h1 className="text-3xl font-bold">
              Дэлгэрцэцэг Бүрэнтөгс
            </h1>
            <p className="text-purple-400 mt-2">
              Програм Хангамжийн Инженер
            </p>

            <p className="mt-4 text-sm opacity-70">
              Монгол улс, Улаанбаатар хот
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <a href="mailto:delgercecegbrentgs@gmail.com" className="block hover:text-purple-400">
                Email
              </a>
              <a href="https://github.com/Natsu-Official" target="_blank" className="block hover:text-purple-400">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/%D0%B1%D2%AF%D1%80%D1%8D%D0%BD%D1%82%D3%A9%D0%B3%D1%81-%D0%B4%D1%8D%D0%BB%D0%B3%D1%8D%D1%80%D1%86%D1%8D%D1%86%D1%8D%D0%B3-b2321b3b6/" target="_blank" className="block hover:text-purple-400">
                LinkedIn
              </a>
            </div>

            <button
              onClick={() => setDark(!dark)}
              className="mt-6 w-full border border-white/20 py-2 rounded-lg hover:bg-white/10 transition"
            >
              Toggle Theme
            </button>
          </div>

          {/* SKILLS */}
          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Python","JavaScript","React","SQL","Git",
                "Java","C/C++","Unity","MongoDB"
              ].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-600/20 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Languages</h2>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Монгол — Native</li>
              <li>English — B2</li>
              <li>日本語 — JLPT N3 (J-Test D-E)</li>
            </ul>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="md:col-span-2 space-y-8">
          
          {/* ABOUT */}
          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-purple-500/30 transition">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="opacity-80 leading-relaxed">
              Би програм хангамжийн инженер мэргэжлээр суралцаж байгаа бөгөөд 
              backend болон frontend хөгжүүлэлт дээр ажиллах сонирхолтой. 
              React, Node.js, болон Python ашиглан full-stack систем хөгжүүлэх туршлагатай. 
              Шинэ технологи сурах, бодлого шийдэх чадвартай.
            </p>
          </div>

          {/* EDUCATION */}
          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-purple-500/30 transition">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <p className="font-medium">ШУТИС-МХТС</p>
            <p className="opacity-70">Програм Хангамжийн Инженерчлэл</p>
            <p className="text-sm opacity-50">2022 - 2026</p>
          </div>

          {/* PROJECTS */}
          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-purple-500/30 transition">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>

            <div className="space-y-4">
              <div className="p-4 border border-white/10 rounded-xl hover:border-purple-400 transition">
                <h3 className="font-semibold">Exam Vision</h3>
                <p className="text-sm opacity-70">
                  Автомат шалгалтын систем (OCR + AI)
                </p>
                <a
                  href="https://github.com/Natsu-Official/Exam_Vision.git"
                  target="_blank"
                  className="text-purple-400 text-sm"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}