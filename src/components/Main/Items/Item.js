import React, {useContext} from "react";
import {WishContext} from "../../../context/wishContext"
import "../main.css";
import { Link } from "react-router-dom";

function Item({ x }) {
  const { addItem } = useContext(WishContext)

  return (
    <div className="card__product" id={x.id}>
      <div className="card_product--title_principal">
        <h3 className="card__product--title">{x.title}</h3>
        
      </div>
      <div className="card__product--img">
        <img src={x.Image} alt="Foto de producto" />
      </div>
      <div className="card__product--cta">
        <div className="price">${x.price}</div>
      </div>
      <div className="flex-row">
        <Link
          className="card__product--btn_more btn"
          to={`/item/${x.id}`}>
          Ver más
        </Link>
        <button className="card__product--btn_more btn" onClick={() => addItem(x)}>❤️</button>
      </div>
    </div>
  );
}
export default Item;
