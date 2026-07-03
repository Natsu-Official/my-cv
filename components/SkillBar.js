export default function SkillBar({ name, level }) {
  return (
    <div>
      <p className="text-left">{name}</p>
      <div className="w-full bg-gray-700 rounded">
        <div
          className="bg-blue-500 p-1 rounded"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}