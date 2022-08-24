export default function ProgressBar({ progress, title, label, color }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__progress"
        style={{ width: `${progress}%`, backgroundColor: color }}
      >
        <h3 className="progress-bar__title">{title}</h3>
        <h3 className="progress-bar__label">{label}</h3>
      </div>
    </div>
  );
}
