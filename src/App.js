import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./components/header";
import Navbarr from "./components/navbar";
import Cards from "./components/cards";
import Sports from "./components/sports";
import Premium from "./components/premium";
import Info from "./components/info";
import Photos from "./components/photos";
import News from "./components/news";
import Story from "./components/story";
import Futer from "./components/futer";
import ThemaContext from "./components/contex/ThemeContex";
import { useContext, useState } from "react";

function App() {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((theme)=>theme == "light" ? "dark" : "light")
  }

  return (
    <ThemaContext.Provider value={{theme, toggleTheme}}>
      <div className={`bg-${theme} p-0`}>
        <div className="container">
          <Navbarr />
          <Header></Header>
          <Sports />
          <Premium />
          <Info />
          <Photos />
          <Cards />
          <News />
          <Story />
          <Futer />
        </div>
      </div>
    </ThemaContext.Provider>
  );
}

export default App;
