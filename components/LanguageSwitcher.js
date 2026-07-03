export default function LanguageSwitcher({ setLang }) {
  return (
    <div className="space-x-2">
      <button onClick={() => setLang("mn")}>MN</button>
      <button onClick={() => setLang("en")}>EN</button>
      <button onClick={() => setLang("jp")}>JP</button>
    </div>
  );
}