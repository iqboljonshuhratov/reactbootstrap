import React from "react";
import "./photos.scss";

const PhotosMassiv = [
  {
    link: "#",
    imgLink: "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/01.jpg",
    title: "travel"
  },
  {
    link: "#",
    imgLink: "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/04.jpg",
    title: "travel"
  },
  {
    link: "#",
    imgLink: "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/02.jpg",
    title: "travel"
  },
  {
    link: "#",
    imgLink: "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/03.jpg",
    title: "travel"
  },
  {
    link: "#",
    imgLink: "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/04.jpg",
    title: "travel"
  },
  {
    link: "#",
    imgLink: "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/05.jpg",
    title: "travel"
  },
  {
    link: "#",
    imgLink: "https://blogzine.webestica.com/assets/images/blog/1by1/thumb/04.jpg",
    title: "travel"
  },
  
];

export default function Photos() {
  return (
    <div className="Photos-main-box mt-5 shadow rounded">
      <div className="photos-top d-flex justify-content-between mb-3 ">
        <h2 className="text-white">Trending topics</h2>
        <a href="#">View all categories</a>
      </div>
      <div className="photos-bottom d-flex">
        {PhotosMassiv.map((v, i) => 
          <div className="img-div">
            <a href={v.link}>
              <img src={v.imgLink} alt="" />
              <p>{v.title}</p>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
