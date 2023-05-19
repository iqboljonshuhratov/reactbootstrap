import { faSave } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import ThemaContext from "../contex/ThemeContex";
import "./news.scss";

const NewsMassiv1 = [
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
];
const NewsMassiv2 = [
  {
    imgLink: "https://blogzine.webestica.com/assets/images/blog/4by3/04.jpg",
    link: "#",
    linkTitle: "The pros and cons of creative startups",
    date: "by Dennis . Mar 07,2022",
  },
  {
    imgLink: "https://blogzine.webestica.com/assets/images/blog/4by3/05.jpg",
    link: "#",
    linkTitle: "The pros and cons of creative startups",
    date: "by Dennis . Mar 07,2022",
  },
  {
    imgLink: "https://blogzine.webestica.com/assets/images/blog/4by3/06.jpg",
    link: "#",
    linkTitle: "The pros and cons of creative startups",
    date: "by Dennis . Mar 07,2022",
  },
];

export default function News() {
  const {theme, toggleHtheme} = useContext(ThemaContext)
  return (
    <div className="news-main-box ">
      <div className="news-top">
        <h1 className={`text-${theme == "light" ? "dark" : "light"} fs-1 text-light`}>
          <Button variant="dark fs-2">
            <FontAwesomeIcon icon={faSave} />
          </Button>
          Last week top highlights
        </h1>
        <p className={`text-${theme == "light" ? "dark" : "light"}`}>Check last weeks top highlights, news, stories and headline news</p>
      </div>

      <div className="news-bottom d-flex p-2">
        <div className="right1">
          {NewsMassiv1.map((v, i) => (
            <div className="right">
              <div className="img-left">
                <img src={v.imgLink} alt="" />
              </div>
              <div className="news-right">
                <p>
                  <a className={`text-${theme == "light" ? "dark" : "light"}`} href={v.link}>{v.linkTitle}</a>
                </p>
                <img src={v.imgLink} alt="" />
                <span className={`text-${theme == "light" ? "dark" : "light"}`}> {v.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="right1">

          {NewsMassiv2.map((v, i) => (
            <div className="right">
              <div className="img-left">
                <img src={v.imgLink} alt="" />
              </div>
              <div className="news-right">
                <p>
                  <a className={`text-${theme == "light" ? "dark" : "light"}`} href={v.link}>{v.linkTitle}</a>
                </p>
                <img src={v.imgLink} alt="" />
                <span className={`text-${theme == "light" ? "dark" : "light"}`}> {v.date}</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
