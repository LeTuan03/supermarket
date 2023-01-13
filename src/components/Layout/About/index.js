import styles from "./About.module.scss";
function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <h1 className={styles.title}>About us</h1>
          <p className={styles.desp}>
            We started operations in 2020. We guarantee fresh produce. Save time
            by shopping on our app and we'll deliver the products right to your
            home.
            <br></br>
            <i>We use Stripe to process your payment.</i>
          </p>
        </div>
        <div>
          <img
            className={styles.img}
            src="https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/About.jpg"
            alt="anh"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
