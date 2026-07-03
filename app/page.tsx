"use client";

import { useEffect, useState } from "react";

const skills = [
  { name: "Python", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "SQL", level: 75 },
  { name: "Java", level: 70 },
  { name: "C/C++", level: 70 },
  { name: "Unity", level: 65 },
  { name: "MongoDB", level: 75 },
];

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* CURSOR GLOW */}
      <div className="pointer-events-none fixed w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl top-[-100px] left-[-100px]" />

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* LEFT */}
        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-lg border border-white/10">
            <h1 className="text-3xl font-bold">
              Бүрэнтөгс
            </h1>
            <p className="text-purple-400">
              Software Engineer
            </p>

            <div className="mt-4 text-sm opacity-70">
              Ulaanbaatar, Mongolia
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <a href="mailto:delgercecegbrentgs@gmail.com">Email</a>
              <a href="https://github.com/Natsu-Official" target="_blank">GitHub</a>
              <a href="https://www.linkedin.com/in/%D0%B1%D2%AF%D1%80%D1%8D%D0%BD%D1%82%D3%A9%D0%B3%D1%81-%D0%B4%D1%8D%D0%BB%D0%B3%D1%8D%D1%80%D1%86%D1%8D%D1%86%D1%8D%D0%B3-b2321b3b6/" target="_blank">LinkedIn</a>
            </div>

            <button
              onClick={() => setDark(!dark)}
              className="mt-5 border px-3 py-1 rounded-lg"
            >
              Theme
            </button>
          </div>

          {/* SKILLS BAR */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl mb-4">Skills</h2>

            {skills.map((s) => (
              <div key={s.name} className="mb-3">
                <div className="flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded">
                  <div
                    className="h-2 bg-purple-500 rounded transition-all duration-700"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2 space-y-8">
          
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl mb-4">About</h2>
            <p className="opacity-80">
              Програм хангамжийн инженерийн чиглэлээр суралцаж байгаа ба 
              full-stack хөгжүүлэлтэд сонирхолтой. React болон Python ашиглан 
              систем хөгжүүлэх туршлагатай.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl mb-4">Education</h2>
            <p>ШУТИС-МХТС</p>
            <p className="opacity-70">Software Engineering</p>
            <p className="text-sm opacity-50">2022 - 2026</p>
          </div>

          {/* PROJECT */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl mb-4">Projects</h2>

            <div className="p-4 border border-white/10 rounded-xl hover:border-purple-400">
              <h3>Exam Vision</h3>
              <p className="text-sm opacity-70">
                OCR + AI шалгалтын систем
              </p>
              <a href="https://github.com/Natsu-Official/Exam_Vision.git">
                View →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}