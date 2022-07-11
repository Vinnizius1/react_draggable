import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";

import style from "./home.module.css";

function Home() {
  return (
    <div className={style.container}>
      <div className={style.iphone}>
        <Header />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
