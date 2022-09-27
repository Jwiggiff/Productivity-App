export default function ProgressBar({ title, subtitle, percent }) {
  return (
    <div className="progress">
      <svg className="progress-ring" viewBox="0 0 100 100">
        <circle
          className="progress-ring__circle"
          strokeWidth={5}
          stroke="white"
          fill="transparent"
          r={40}
          cx={50}
          cy={50}
          style={{"--progress": percent}}
        />
      </svg>
      <p className="progress__title">{title}</p>
      <p className="progress__subtitle">{subtitle}</p>
    </div>
  );
}
