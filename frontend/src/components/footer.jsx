import "../styles/footer.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <a href="#facebook">
          <FaFacebookSquare />
        </a>
        <a href="#twitter">
          <FaTwitterSquare />
        </a>
        <a href="#instagram">
          <FaInstagramSquare />
        </a>
        <a href="#youtube">
          <FaYoutubeSquare />
        </a>
      </div>
      <div className="terms">
        <li>
          <a href="#terms">Terms & policy |</a>
          <a href="#about">About |</a>
          <a href="#contact">Contact </a>
        </li>
      </div>
      <div className="copyright">
          <p>@2023 Aech, Inc. All Rights Reserved</p>
        </div>
    </div>
  );
};

export default Footer;
