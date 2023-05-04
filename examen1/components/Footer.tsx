import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram,faYoutube, faLinkedin,} from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  const iconStyle = {
    with: "50px",
    height: "50px",
    padding: "36px",
  };
  return (
    <footer className="d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center">
        <div className="text-center">
          <p>
            © {2023} {["Aaron Barboza Amador"]}
          </p>
          <div className="d-flex justify-content-center">
            <a href="https://www.facebook.com/profile.php?id=100008872750977&mibextid=LQQJ4d">
              <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
            </a>
            <a href="https://www.instagram.com/_barbxx__">
              <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
            </a>
            <a href="https://www.linkedin.com/in/aaron-barboza-amador-74002320b">
              <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=50661330764&text=Hola%20Necesito%20de%20tu%20Ayuda%20Aaron%20%E2%98%A0%EF%B8%8F%E2%98%A0%EF%B8%8F%E2%98%A0%EF%B8%8F">
              <FontAwesomeIcon icon={faWhatsapp} style={iconStyle} />
            </a>
            <a href="https://github.com/AaronBarboza">
              <FontAwesomeIcon icon={faGithub} style={iconStyle} />
            </a>
            <a href="https://www.youtube.com/channel/UCMZJITU9mQwUZXYHFdloHHw">
              <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
            </a>
            <a href="https://twitter.com/barboza_am10215">
              <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;