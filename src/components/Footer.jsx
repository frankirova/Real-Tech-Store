import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="contacto-inferior d-flex justify-content-center text-center">
        <a href="https://t.me/rmwifi">
          <i className="fa-brands fa-telegram icon-footer"></i>
        </a>
        <a href="https://walink.co/03da0e">
          <i className="fa-brands fa-whatsapp icon-footer"></i>
        </a>
        <a href="https://mail.google.com/">
          <i className="fa-solid fa-envelope icon-footer"></i>
        </a>
      </div>
    </div>
  );
};
