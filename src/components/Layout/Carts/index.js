import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useRef } from "react";
import styles from "./Carts.module.scss";
function Carts() {
  const btnBuy = useRef();
  const message = useRef();

  const {
    items,
    isEmpty,
    cartTotal,
    updateItemQuantity,
    removeItem,
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
      {items.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <div>
              <img className={styles.img} src={item.img} alt="d" />
            </div>
            <div className={styles.detail}>
              <div>{item.title}</div>
              <div>{item.name}</div>
              <div>$ {item.price}</div>
              <div>Number item: {item.quantity}</div>
            </div>
            <div>
              <button
                className="btn btn-info ms-2"
                onClick={() => {
                  updateItemQuantity(item.id, item.quantity - 1);
                }}
              >
                -
              </button>
              <button
                className="btn btn-info ms-2"
                onClick={() => {
                  updateItemQuantity(item.id, item.quantity + 1);
                }}
              >
                +
              </button>
              <button
                className="btn btn-danger ms-2"
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                Remove Item
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <h5>Total Items: {totalProductInCart}</h5>
        <h5>Total Price: ${cartTotal}</h5>
      </div>
      <div>
        <span ref={btnBuy} className={styles.modal}>
          <p ref={message} className={styles.desc}>
            Đơn hàng của bạn đã được đặt thành công
          </p>
          <span className={styles.loadingAnimate1}></span>
          <span className={styles.loadingAnimate2}></span>
          <span className={styles.loadingAnimate3}></span>
        </span>
        <button
          className="btn btn-info ms-2"
          onClick={() => {
            btnBuy.current.style.display = "block";
            message.current.style.display = "none";
            setTimeout(() => {
              message.current.style.display = "block";
            }, 500);
            setTimeout(() => {
              btnBuy.current.style.display = "none";
              emptyCart();
            }, 4000);
          }}
        >
          Buy
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => {
            emptyCart();
          }}
        >
          Clear Item
        </button>
        <Link className="text-white btn btn-danger m-2" to="/product">
          Go to Shop
        </Link>
      </div>
    </div>
  );
}

export default Carts;
