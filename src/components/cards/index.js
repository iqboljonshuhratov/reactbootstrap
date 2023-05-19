import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import ThemaContext from "../contex/ThemeContex";
import "./cards.scss";

export default function Cards() {
  const {theme, toggleTheme} = useContext(ThemaContext);
  return (
    <div className="cards">
      <div className="cards-top">
        <h1 className={`text-${theme == "light" ? "dark" : "light"} fs-1 text-light`}>
          <Button variant="dark fs-2">
            <FontAwesomeIcon icon={faGamepad} />
          </Button>{" "}
          Sports update
        </h1>
        <p className={`text-${theme == "light" ? "dark" : "light"}`}>
          Get the latest sports news and updates from football, tennis, formula
          one, cricket, NBA, and golf with live scores and stats
        </p>
      </div>
      <div className="cards-bottom">
        <div className="start">
          <a href="#">
            <img src="https://binoparking.uz/content/video2/images/home_video2_pic14.jpg" alt="" />
          </a>
            <h2>10 tell-tale signs you need to get a new startup.</h2>
        </div>
        <div className="end">
          <a href="#">
           <img src="https://binoparking.uz/content/video2/images/home_video2_pic14.jpg" alt="" />
          </a>
            <h2>10 tell-tale signs you need to get a new startup.</h2>
        </div>
      </div>
    </div>
  );
}
