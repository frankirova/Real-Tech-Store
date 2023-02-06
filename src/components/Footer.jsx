import { Link } from "react-router-dom";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <section className="contacto-inferior d-flex justify-content-center text-center">
        <Link href="https://t.me/rmwifi">
          <i className="fa-brands fa-telegram icon-footer"></i>
        </Link>
        <Link href="https://walink.co/03da0e">
          <i className="fa-brands fa-whatsapp icon-footer"></i>
        </Link>
        <Link href="https://mail.google.com/">
          <i className="fa-solid fa-envelope icon-footer"></i>
        </Link>
      </section>
    </footer>
  );
};
