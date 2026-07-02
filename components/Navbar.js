import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ lang, setLang, dark, setDark }) {
  return (
    <div className="flex justify-between items-center p-4 backdrop-blur-md bg-white/10 dark:bg-black/30 border-b border-white/10">
      <div className="font-bold text-lg">CV</div>

      <div className="flex gap-3 items-center">
        <LanguageSwitcher lang={lang} setLang={setLang} />
        <ThemeToggle dark={dark} setDark={setDark} />
      </div>
    </div>
  );
}