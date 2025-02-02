import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Twitter (X) icon

const SocialIcons = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} color="#1877F2" />
      </a>

      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="#E4405F" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaXTwitter size={30} color="black" />
      </a>
    </div>
  );
};

export default SocialIcons;
