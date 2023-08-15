import "../styles/Footer.css";
import facebook from "../assets/socials/facebook.svg";
import instagram from "../assets/socials/instagram.svg";
import linkedin from "../assets/socials/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__socials">
        <a className="socials__link" href="#">
          <img src={facebook} alt="an icon of facebook" />
        </a>
        <a className="socials__link" href="#">
          <img src={instagram} alt="an icon of instagram" />
        </a>
        <a className="socials__link" href="#">
          <img src={linkedin} alt="an icon of linkedin" />
        </a>
      </div>
      <p className="footer__copyright">Aubrey Ann Punsalan &copy; 2023</p>
    </div>
  );
};

export default Footer;
