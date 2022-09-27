import UpcomingTasks from "./_components/UpcomingTasks";
import Preview from "./_components/Preview";

export default function Home() {
  return (
    <div className="home">
      <Preview />
      <UpcomingTasks />
    </div>
  );
}
