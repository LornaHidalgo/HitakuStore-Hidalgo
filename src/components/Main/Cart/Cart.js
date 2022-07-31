import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { CartContext } from "../../../context/cartContext";
import { ItemCount } from "../Items/ItemCount";
import "./Cart.css";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  
  const { removeItem, clearCart, getSubtotal, getTotal} =
    useContext(CartContext);

  return (
    <div className="cartContainer">
    <Container className="main">
      <h1>Carrito</h1>
      {cart.length === 0 && (
        <h3>
          Su carrito está vacio. Visite nuestros{" "}
          <Link to="productos/all">productos</Link>{" "}
        </h3>
      )}
      
        
      {cart.length !== 0 &&
        cart.map(({ item, counter }) => (
          <Container className="card__cart" id={item.id} key={item.id}>
            <div className="card__cart--info">
              
              <div className="card__cart--img">
                <img src={item.Image} alt="Foto de producto" />
              </div>
              <div className="card_product--title_principal">
                <h3 className="card__cart--title">{item.title}</h3>
                <p className="card__cart--desc">{item.description}</p>
              </div>
            </div>

            <div className="card__cart--actions">
             <h5>Cantidad</h5>
              <div className="price">{counter}</div>
            <h5>Añadir</h5>
              <ItemCount item={item} />
              
              <h5>Precio</h5>
              <div className="price">${item.price}</div>
              <h5>Precio Total</h5>
              <div className="price">${getSubtotal(counter, item.price)}</div>
              
            </div>
            <button 
                className="btn_remove btn"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
          </Container>
         
        ))}
      {cart.length !== 0 && (
        <Container className="cart__footer">
          <button className="btn" onClick={clearCart}>
            Vaciar carrito
          </button>
          <div>Total ${getTotal()}</div>
          <Link className="btn" to="/checkout">
            Finalizar compra
          </Link>
        </Container>
      )}
    </Container>
    </div>
  );
};