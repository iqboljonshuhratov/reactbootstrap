// sports bilan qards almashib qolgan

import {
  faHighlighter,
  faList,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import { Button, Card, CardGroup, CardImg } from "react-bootstrap";
import ThemaContext from "../contex/ThemeContex";
import "./sports.scss";

const CardMassiv = [
  {
    mainImgLink:
      "https://blogzine.webestica.com/assets/images/blog/4by3/09.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "by Dennis . Mar 07,2022",
  },
  {
    mainImgLink:
      "https://blogzine.webestica.com/assets/images/blog/4by3/08.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "by Dennis . Mar 07,2022",
  },
  {
    mainImgLink:
      "https://blogzine.webestica.com/assets/images/blog/4by3/11.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "by Dennis . Mar 07,2022",
  },
  {
    mainImgLink:
      "https://blogzine.webestica.com/assets/images/blog/4by3/10.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "by Dennis . Mar 07,2022",
  },
  {
    mainImgLink:
      "https://blogzine.webestica.com/assets/images/blog/4by3/07.jpg",
    title: "Lorem ipsum dolor sit amet consectetur",
    date: "by Dennis . Mar 07,2022",
  },
  
];

export default function Sports() {

  const {theme, toggleTheme} = useContext(ThemaContext)
  {
    /*      <Card.Img variant="top" src={`${v.mainImgLink}`} />
     */
  }
  return (
    <main>
      <div className="sports-top">
        <h1 className={`text-${theme == "light" ? "dark" : "light"}  fs-1 text-light`}>
          <Button variant="dark fs-2">
            <FontAwesomeIcon icon={faSortUp} />
          </Button>{" "}
          Today's top highlights
        </h1>
        <p className={`text-${theme == "light" ? "dark" : "light"}`}>Latest breaking news, pictures, videos, and special reports</p>
      </div>
      <div className={` sports-bottom`}>
        {CardMassiv.map((v, i) => {
          return (
            <Card className={`Card bg-${theme} ${theme === "light" ? "dark" : "light"}`}>
              <Card.Img variant="top" src={`${v.mainImgLink}`} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a className={`text-${theme == "light" ? "dark" : "light"}`} href="#">{v.title}</a>
                </Card.Title>
                <Card.Text className="card-text mt-3">
                  <img src={`${v.mainImgLink}`} alt="" />
                  <span className={`text-${theme == "light" ? "dark" : "light"} ms-3`}>{v.date}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
