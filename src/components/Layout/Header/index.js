import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import styles from "./Header.module.scss";
import Button from "../../ReuseComponents/Button";
function Header() {
  const { items } = useCart();
  var totalProductInCart = 0;
  for (let i = 0; i < items.length; i++) {
    totalProductInCart = totalProductInCart + items[i].quantity;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link to="/">SuperM</Link>
      </div>
      <div className={styles.sidebar}>
        <li>
          <Link className={styles.item} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.item} to="/about">
            About us
          </Link>
        </li>
        <li>
          <Link className={styles.item} to="/product">
            Products
          </Link>
        </li>
        <li>
          <Link className={styles.item} to="/carts">
            <Button>
              <p>Carts {totalProductInCart}</p>
            </Button>
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
