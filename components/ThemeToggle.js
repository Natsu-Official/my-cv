export default function ThemeToggle({ dark, setDark }) {
  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "🌙" : "☀️"}
    </button>
  );
}