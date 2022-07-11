import shoppingCart from "../assets/img/shoppingCart.svg";
import wedigi from "../assets/img/wedigi.svg";
import menu from "../assets/img/menu.svg";

import style from "./header.module.css";

function Header() {
  return (
    <header className={style.header}>
        <img src={menu} alt="ícone do menu" />
        <img src={wedigi} alt="logo da we.digi" />
        <img src={shoppingCart} alt="carrinho" />
      </header>
  )
}

export default Header;