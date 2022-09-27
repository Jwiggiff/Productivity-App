import ProgressBars from "./ProgressBars";

export default function Preview() {
  let nextDay = 1;
  let nextWeek = 4;
  let nextMonth = 16;

  return (
    <section className="preview">
      <h1>
        {Intl.DateTimeFormat("en", {
          weekday: "long",
        }).format(Date.now())}
      </h1>
      <p>
        <strong>
          {nextDay} Task{nextDay > 1 ? "s " : " "}
        </strong>
        in the next day
      </p>
      <p>
        <strong>
          {nextWeek} Task{nextWeek > 1 ? "s " : " "}
        </strong>
        in the next week
      </p>
      <p>
        <strong>
          {nextMonth} Task{nextMonth > 1 ? "s " : " "}
        </strong>
        in the next month
      </p>
      <ProgressBars />
    </section>
  );
}
