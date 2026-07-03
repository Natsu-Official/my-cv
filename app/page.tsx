"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeToggle from "../components/ThemeToggle";
import PDFButton from "../components/PDFButton";
import SkillBar from "../components/SkillBar";
import { translations } from "../lib/translations";

// 🔥 TYPE FIX
type Lang = "mn" | "en" | "jp";

export default function Home() {
  const [lang, setLang] = useState<Lang>("mn");
  const [dark, setDark] = useState(true);

  const t = translations[lang];

  return (
    <main
      className={
        dark
          ? "bg-black text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      {/* NAVBAR */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        dark={dark} 
        setDark={setDark} 
      />

      {/* TOP CONTROLS */}
      <div className="flex justify-between p-5">
        <LanguageSwitcher setLang={setLang} />
        <ThemeToggle dark={dark} setDark={setDark} />
      </div>

      {/* HERO */}
      <section className="text-center mt-20">
        <h1 className="text-4xl font-bold">{t.title}</h1>
        <p className="mt-2 text-gray-400">{t.subtitle}</p>

        <div className="mt-5">
          <PDFButton />
        </div>
      </section>

      {/* INFO */}
      <section className="mt-16 text-center space-y-2">
        <p>📍 Ulaanbaatar, Mongolia</p>
        <p>📧 delgercecegbrentgs@gmail.com</p>

        <div className="space-x-4">
          <a href="https://github.com/Natsu-Official">GitHub</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Skills</h2>

        <div className="mt-5 space-y-3 px-10">
          <SkillBar name="Python" level={90} />
          <SkillBar name="React" level={85} />
          <SkillBar name="SQL" level={80} />
          <SkillBar name="Java" level={75} />
          <SkillBar name="C++" level={70} />
        </div>
      </section>
    </main>
  );
}