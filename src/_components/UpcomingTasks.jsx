import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Task from "./Task";

export default function UpcomingTasks() {
  return (
    <section className="upcoming-tasks">
      <div className="upcoming-tasks__header">
        <h2>Upcoming</h2>
        <a href="#" className="add-btn">
          <FontAwesomeIcon icon={faPlus} />
        </a>
      </div>
      <ol>
        <h4>In the next day...</h4>
        <Task name="Task 1" date={new Date(Date.now())} key={1} />
        <h4>In the next week...</h4>
        <Task name="Task 2" date={new Date(Date.now())} key={2} />
        <Task name="Task 3" date={new Date(Date.now())} key={3} />
        <Task name="Task 4" date={new Date(Date.now())} key={4} />
        <h4>Later...</h4>
        <Task name="Task 5" date={new Date(Date.now())} key={5} />
        <Task name="Task 6" date={new Date(Date.now())} key={6} />
        <Task name="Task 7" date={new Date(Date.now())} key={7} />
        <Task name="Task 8" date={new Date(Date.now())} key={8} />
        <Task name="Task 9" date={new Date(Date.now())} key={9} />
      </ol>
    </section>
  );
}
