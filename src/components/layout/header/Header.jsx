import mayjuLogo from "../../../images/mayjuLogoBlanco.png";
import NavBar from "../../navBar/NavBar";
import CartWidget from "../../cartWidget/CartWidget";
import "./Header.css";

const header = () => {
  return (
    <header className="header">
      <a href="/">
        <img
          src={mayjuLogo}
          className="logo"
          alt="Logo mayju en color blanco"
        />
      </a>
      <NavBar />
      <CartWidget />
    </header>
  );
};

export default header;
