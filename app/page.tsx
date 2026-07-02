"use client";

import { useEffect, useState } from "react";

const translations = {
  en: {
    name: "Your Name",
    title: "Software Engineer",
    about: "About Me",
  },
  mn: {
    name: "Таны нэр",
    title: "Програм хангамжийн инженер",
    about: "Миний тухай",
  },
  jp: {
    name: "あなたの名前",
    title: "ソフトウェアエンジニア",
    about: "自己紹介",
  },
};

export default function Home() {
  const [lang, setLang] = useState("en");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const l = navigator.language;
    if (l.startsWith("mn")) setLang("mn");
    else if (l.startsWith("ja")) setLang("jp");
  }, []);

  useEffect(() => {
    document.documentElement.className = dark ? "dark" : "";
  }, [dark]);

  const t = translations[lang as keyof typeof translations];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold">{t.name}</h1>
      <p className="opacity-70">{t.title}</p>

      <div className="mt-5">
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("mn")} className="ml-2">MN</button>
        <button onClick={() => setLang("jp")} className="ml-2">JP</button>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl">{t.about}</h2>
        <p>Энд CV мэдээллээ бичнэ</p>
      </div>

      <button
        onClick={() => setDark(!dark)}
        className="mt-10 border px-3 py-1"
      >
        Toggle Theme
      </button>
    </div>
  );
}