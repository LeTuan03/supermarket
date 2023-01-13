import { useRef } from "react";
import { arrProducts } from "../../../datas";
import ItemCart from "../../Product/ItemCart";
import styles from "./Products.module.scss";
function Products() {
  const messages = useRef();
  const classAnimation = styles.animation;
  const clickAlert = () => {
    messages.current.classList.add(classAnimation);
    setTimeout(() => {
      messages.current.classList.remove(classAnimation);
    }, 5000);
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Products</p>
      <p className={styles.desp}>Take a look at our products</p>
      <p ref={messages} className={styles.messages}>
        <i style={{ marginRight: '10px' }} className="fa-solid fa-circle-check "></i>
        <span>Order succeed</span>
        <br></br>
        <span>Go to Carts page to see detail</span>
      </p>
      <div className={styles.products}>
        {arrProducts.map((item, index) => {
          return (
            <ItemCart
              messages={clickAlert}
              key={index}
              img={item.img}
              title={item.title}
              desp={item.desp}
              price={item.price}
              name={item.name}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
