export default function SkillBar({ name, level }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}