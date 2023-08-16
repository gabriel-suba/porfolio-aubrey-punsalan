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
          <h1>myeowb.</h1>
          {/* <img src={icon} alt="" height={50} /> */}
        </div>
        {/* <ul className="links">
          <li>
            <a href="#" className="md">
              Gallery
            </a>
            <a href="#" className="sm links__icon">
              <img src={gallery} alt="" />
            </a>
          </li>
          <li>
            <a href="#" className="md">
              Contact
            </a>
            <a href="#" className="sm links__icon">
              <img src={contact} alt="" />
            </a>
          </li>
          <li>
            <a href="#" className="md">
              Socials
            </a>
            <a href="#" className="sm links__icon">
              <img src={socials} alt="" />
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navigation;
