import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => {
  const menu_list = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sports",
    "Sale",
    "지속가능성",
  ];
  return (
    <>
      <div class="img-section">
        <img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg" />
      </div>

      <div className="menu-bar">
        <ul className="menu-list">
          {menu_list.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-bar">
          <div class="img-search">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input type="text" placeholder="search item" />
        </div>
      </div>
    </>
  );
};

export default MenuBar;
