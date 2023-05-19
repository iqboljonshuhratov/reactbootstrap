import { faGamepad, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import ThemaContext from "../contex/ThemeContex";
import "./info.scss";

const InfoCard = [
  {
    imgLink: "https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg",
    link: "#",
    linkTitle: "The pros and cons of creative startups",
    date: "by Dennis . Mar 07,2022",
  },
  {
    imgLink: "https://blogzine.webestica.com/assets/images/blog/4by3/02.jpg",
    link: "#",
    linkTitle: "The pros and cons of creative startups",
    date: "by Dennis . Mar 07,2022",
  },
  {
    imgLink: "https://blogzine.webestica.com/assets/images/blog/4by3/03.jpg",
    link: "#",
    linkTitle: "The pros and cons of creative startups",
    date: "by Dennis . Mar 07,2022",
  },
  {
    imgLink: "https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg",
    link: "#",
    linkTitle: "The pros and cons of creative startups",
    date: "by Dennis . Mar 07,2022",
  },
];

export default function Info() {
  const {theme, toggleTheme} = useContext(ThemaContext);
  return (
    <div className="info-main-box ">
      <div className="info-top">
        <h1 className={`text-${theme == "light" ? "dark" : "light"} fs-1 text-light`}>
          <Button variant="dark fs-2">
            <FontAwesomeIcon icon={faSave} />
          </Button>{" "}
          Last week top highlights
        </h1>
        <p className={`text-${theme == "light" ? "dark" : "light"}`}>Check last weeks top highlights, news, stories and headline news</p>
      </div>
      <div className="info-bottom d-flex">
        <div className="left">
          <img
            src="https://cdn.iportal.ru/news/99/preview/64f880567c466b095bfeb8cfc0e5fa8d0e7b29d5_666_444_c.jpg.webp-portal"
            alt=""
          />
        </div>
        <div className="right1">
          {InfoCard.map((v, i) => {
            return (
              <div className="right">
                <div className="img-left">
                  <img src={v.imgLink} alt="" />
                </div>
                <div className="info-right">
                  <p>
                    <a className={`text-${theme == "light" ? "dark" : "light"}`} href={v.link}>{v.linkTitle}</a>
                  </p>
                  <img src={v.imgLink} alt="" />
                  <span className={`text-${theme == "light" ? "dark" : "light"}`}> {v.date} </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
