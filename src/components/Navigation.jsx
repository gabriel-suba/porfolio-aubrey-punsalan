import "../styles/Navigation.css";
import gallery from "../assets/icons/brush.svg";
import contact from "../assets/icons/contact.svg";
import socials from "../assets/icons/socials.svg";
import icon from "../assets/icon.png";

const Navigation = () => {
  return (
    <nav>
      <div className="container flex-between">
        <div className="icon">
          <h1>meowb.</h1>
          {/* <img src={icon} alt="" height={50} /> */}
        </div>
        <ul className="links">
          <li>
            <a href="#" className="md">
              Gallery
            </a>
            <a href="#" className="sm">
              <img src={gallery} alt="" height={25} width={25} />
            </a>
          </li>
          <li>
            <a href="#" className="md">
              Contact
            </a>
            <a href="#" className="sm">
              <img src={contact} alt="" height={25} width={25} />
            </a>
          </li>
          <li>
            <a href="#" className="md">
              Socials
            </a>
            <a href="#" className="sm">
              <img src={socials} alt="" height={25} width={25} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
