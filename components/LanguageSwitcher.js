export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      className="bg-transparent border px-2 py-1 rounded"
    >
      <option value="en">EN</option>
      <option value="mn">MN</option>
      <option value="jp">JP</option>
    </select>
  );
}