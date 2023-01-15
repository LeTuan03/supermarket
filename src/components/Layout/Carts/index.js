import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { useRef } from "react";
import styles from "./Carts.module.scss";
function Carts() {
  const btnBuy = useRef();
  const wanning = useRef();
  const message = useRef();
  var setBg = "#f2ecee";
  const [valueInput, setValueInput] = useState("");
  const {
    items,
    isEmpty,
    cartTotal,
    updateItemQuantity,
    // removeItem,
    emptyCart,
  } = useCart();
  var totalProductInCart = 0;
  for (let i = 0; i < items.length; i++) {
    totalProductInCart = totalProductInCart + items[i].quantity;
  }
  if (isEmpty) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-4 ">
        <h5> Your Cart is Empty</h5>
        <Link className="text-white btn btn-danger m-2" to="/product">
          Go to Shop
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.list}>
      <h2 className={styles.title}>Your Cart</h2>
      <div>
        <div
          className="row  p-2 bg-table text-white"
          style={{ backgroundColor: "#970e3d" }}
        >
          <div className="col col-5 fs-5">Product</div>
          <div className="col text-center fs-5">Unit price</div>
          <div className="col text-center fs-5">Quanlity</div>
          <div className="col text-center fs-5 ">Total</div>
        </div>
        {items.map((item, index) => {
          if (index % 2 !== 0) {
            setBg = "#f2ecee";
          } else {
            setBg = "white";
          }
          return (
            <div
              key={index}
              className="row  bg-table text-black align-items-center "
              style={{ backgroundColor: `${setBg}` }}
            >
              <div className="col col-5">
                <img className={styles.img} src={item.img} alt="anh" />
                <span className="font-weight-bold">{item.name}</span>
              </div>
              <div className="col text-center">$ {item.price}</div>
              <div className="col text-center d-flex align-items-center justify-content-center">
                <button
                  className="btn btn-danger"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <div className="px-2" style={{ minWidth: "40px" }}>
                  {item.quantity}
                </div>
                <button
                  className="btn btn-info"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="col text-center ">$ {item.itemTotal}</div>
            </div>
          );
        })}
        <div className="row bg-table text-white border-top border-top-3">
          <div className="col col-5 fs-5"></div>
          <div className="col text-center fs-5"></div>
          <div
            className="col text-center fs-5 p-1"
            style={{ backgroundColor: "#970e3d" }}
          >
            Total
          </div>
          <div
            className="col text-center fs-5 p-1"
            style={{ backgroundColor: "#970e3d" }}
          >
            $ {cartTotal}
          </div>
          <div className="text-black mt-4">
            <p>
              Enter your email and then click on pay and your products will be
              delivered to you on the same day! Enter your own Stripe
              Publishable Key in Cart.js for the checkout to work
            </p>
            <b>
              Email <span className="text-primary">*</span>
            </b>
            <div>
              <input
                placeholder="Email"
                value={valueInput}
                onChange={(e)=> setValueInput(e.target.value)}
                className={styles.input}
              />
              <p className={styles.message}ref={wanning}>This email no true</p>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-info px-5"
            onClick={() => {
              if(valueInput === '' || !(valueInput.includes('@gmail.com')) || valueInput.length < 16) {
                wanning.current.style.display = "block"
                setValueInput((pre)=> pre = '')
                return 0
              }else {
                wanning.current.style.display = "none"
                btnBuy.current.style.display = "block";
                message.current.style.display = "none";
                setTimeout(() => {
                  message.current.style.display = "block";
                }, 500);
                setTimeout(() => {
                  btnBuy.current.style.display = "none";
                  emptyCart();
                }, 4000);
              }
            }}
          >
            Pay
          </button>
          <button
            className="btn btn-danger m-2"
            onClick={() => {
              emptyCart();
            }}
          >
            Clear Item
          </button>
          <span ref={btnBuy} className={styles.modal}>
            <p ref={message} className={styles.desc}>
              Đơn hàng của bạn đã được đặt thành công
            </p>
            <span className={styles.loadingAnimate1}></span>
            <span className={styles.loadingAnimate2}></span>
            <span className={styles.loadingAnimate3}></span>
          </span>
          <Link className="text-white btn btn-danger m-2" to="/product">
            Go to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carts;
