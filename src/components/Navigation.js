import "../assets/css/Navigation.css";
import { Link } from "react-router-dom";
import NavBtn from "./NavBtn";

function Navigation() {
  return (
    <nav>
      <Link to="/countdown">
        <NavBtn btnText="Countdown" />
      </Link>
      <Link to="/upload">
        <NavBtn btnText="Upload image" />
      </Link>
    </nav>
  );
}

export default Navigation;
