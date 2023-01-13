import { useCart } from "react-use-cart";
import styles from "./ItemCart.module.scss";
function ItemCart(props) {
  const { addItem } = useCart();
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.imgItem}>
          <img src={props.img} className={styles.img} alt="..." />
          {/* <p className={styles.uniqueItem}>{props.uniquePr.quantity}</p> */}
        </div>
        <div className={styles.detail}>
          <h5 className="card-title">{props.title}</h5>
          <h3 className={styles.name}>{props.name}</h3>
          <p className="card-text">{props.desc}</p>
          <p className={styles.price}>$ {props.price}</p>
          <button
            className={styles.btn}
            onClick={() => {
              const alertMgs = props.messages;
              alertMgs();
              return addItem(props.item);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCart;
