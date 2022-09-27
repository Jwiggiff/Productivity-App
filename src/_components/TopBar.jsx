import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear } from "@fortawesome/free-solid-svg-icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <a href="#" className="menu-toggle">
        <FontAwesomeIcon icon={faBars} />
      </a>
      <a href="#" className="btn">
        <FontAwesomeIcon icon={faGear} />
      </a>
    </div>
  );
}
