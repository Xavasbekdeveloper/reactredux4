import React, { memo } from "react";

import "./header.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let { pathname } = useLocation();
  let wishlistData = useSelector((state) => state.wishlistSlice.data);

  if (pathname === "/admin/create-product") return;
  if (pathname === "/admin/manage-product") return;

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
              {wishlistData.length ? <sup>{wishlistData.length}</sup> : <></>}
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
