export default function Section({ title, children }) {
  return (
    <div className="backdrop-blur-lg bg-white/10 dark:bg-white/5 p-6 rounded-2xl border border-white/10 shadow-md">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <div className="opacity-80">{children}</div>
    </div>
  );
}