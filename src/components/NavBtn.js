import "../assets/css/NavBtn.css";
import PropTypes from 'prop-types';


const NavBtn = ({
  text,
}) => (<button className="navBtn">{text}</button>);

NavBtn.propTypes = {
  text: PropTypes.string,
}

export default NavBtn;
