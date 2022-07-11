import React from "react";
import style from "./footer.module.css";
// import wedigi2 from "../assets/img/wedigi2.svg" (O formato "svg" não ficou bonito)
import  wedigi3 from "../assets/img/wedigi3.png";


function Footer() {
  return (
    <div className={style.footer}>
      <p className={style.text}>TODOS OS DIREITOS RESERVADOS À WE.DIGI</p>
      {/* <img className={style.img} src={wedigi2} alt="logo we.digi" /> */} 
      <img className={style.img} src={wedigi3} alt="logo we.digi" />
    </div>
  );
}

export default Footer;
