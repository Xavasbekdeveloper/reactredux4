import React, { memo } from "react";

import "./header.scss";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  let { pathname } = useLocation();

  if (pathname === "/admin/create-product") return;

  return (
    <header className="header">
      <div className="container header__container">
        <NavLink className={"header__logo"} to={"/"}>
          Products
        </NavLink>
        <ul className="header__list">
          <li className="header__item">
            <NavLink to={"/"} className={"header__link"}>
              Home
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to={"/wishlist"} className={"header__link"}>
              Wishlist
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to={"/admin/create-product"} className={"header__link"}>
              Admin
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Header);
