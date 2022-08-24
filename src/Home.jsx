import UpcomingTasks from "./UpcomingTasks";
import ProgressBar from "./_components/ProgressBar";
import Selector from "./_components/Selector";

export default function Home() {
  return (
    <div className="home">
      <Selector />
      <ProgressBar progress={60} title="Work" label="36hrs" color="#f9dc8c" />
      <ProgressBar progress={75} title="School" label="42hrs" color="#8dbef9" />
      <ProgressBar progress={50} title="Personal" label="20hrs" color="#929ae3" />
      <UpcomingTasks />
    </div>
  );
}
