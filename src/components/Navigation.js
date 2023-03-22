import "../assets/css/Navigation.css";
import { Link } from "react-router-dom";
import NavBtn from "./NavBtn";

const Navigation = () => (
  <nav>
    <Link to="/countdown">
      <NavBtn text="Countdown" />
    </Link>
    <Link to="/upload">
      <NavBtn text="Upload image" />
    </Link>
  </nav>
);

export default Navigation;
