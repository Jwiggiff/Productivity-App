import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Task({ name, date }) {
  return (
    <li className="upcoming-tasks__task">
      <input type="checkbox" name="complete" id="complete" />
      <label htmlFor="complete"></label>
      <p>{name}</p>
      <span>
        <FontAwesomeIcon icon={faCalendar} />
        <small>
          {Intl.DateTimeFormat("en", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          }).format(date)}
        </small>
      </span>
    </li>
  );
}
