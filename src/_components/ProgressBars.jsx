import ProgressBar from "./ProgressBar";

export default function ProgressBars() {
  return (
    <div className="progressbars">
      <ProgressBar title="Work" subtitle="48hrs" percent={85} />
      <ProgressBar title="School" subtitle="32hrs" percent={70} />
      <ProgressBar title="Personal" subtitle="4hrs" percent={20} />
    </div>
  );
}