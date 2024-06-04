import React, { memo } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import "./products.scss";
import { useDispatch } from "react-redux";

const Products = ({ data, isLoading }) => {
  const dispatch = useDispatch();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  let products = data?.map((product) => (
    <div className="products__card" key={product.id}>
      <div className="products__card__img"></div>
      <div className="products__card__info">
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <button className="products__card__heart-btn">
          <FaRegHeart />
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <section className="products">
        <div className="container products__cards">{products}</div>
      </section>
    </>
  );
};

export default memo(Products);
