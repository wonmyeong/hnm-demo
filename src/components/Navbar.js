import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="nav-section">
      <div className="right-section">
        <div>고객서비스</div>
        <div>뉴스레터</div>
        <div>매장찾기</div>
        <div>
          <FontAwesomeIcon icon={faEllipsis} size="2x" />
        </div>
      </div>
      <div className="login-section">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
    </div>
  );
};

export default Navbar;
//map함수로 메뉴바 만들기
