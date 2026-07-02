"use client";

import { useEffect, useState } from "react";
import { translations } from "../lib/translations";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import SkillBar from "../components/SkillBar";
import PDFButton from "../components/PDFButton";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const l = navigator.language;
    if (l.startsWith("mn")) setLang("mn");
    else if (l.startsWith("ja")) setLang("jp");
    else setLang("en");
  }, []);

  useEffect(() => {
    document.documentElement.className = dark ? "dark" : "";
  }, [dark]);

  const t = translations[lang];

  return (
    <div className="min-h-screen transition bg-gradient-to-br from-gray-100 to-white dark:from-black dark:to-gray-900 text-black dark:text-white">

      <Navbar lang={lang} setLang={setLang} dark={dark} setDark={setDark} />

      <main className="max-w-4xl mx-auto p-6 space-y-12">

        {/* HEADER */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg">
          <h1 className="text-4xl font-bold">{t.name}</h1>
          <p className="opacity-70">{t.title}</p>
          <PDFButton t={t} />
        </div>

        {/* ABOUT */}
        <Section title={t.about}>
          <p>Энд өөрийн тухай бичнэ</p>
        </Section>

        {/* SKILLS */}
        <Section title={t.skills}>
          <SkillBar name="Python" level={90} />
          <SkillBar name="React" level={85} />
          <SkillBar name="SQL" level={75} />
        </Section>

        {/* PROJECTS */}
        <Section title={t.projects}>
          <ul className="space-y-2">
            <li className="hover:opacity-80 cursor-pointer">Project 1</li>
            <li className="hover:opacity-80 cursor-pointer">Project 2</li>
          </ul>
        </Section>

        {/* EXPERIENCE */}
        <Section title={t.experience}>
          <p>Intern / Work info</p>
        </Section>

        {/* CONTACT */}
        <Section title={t.contact}>
          <p>Email: your@email.com</p>
        </Section>

      </main>
    </div>
  );
}