import { Link } from 'react-router-dom';
import styles from './Home.module.scss'
function Home() {
    return (
    <div className={styles.wrapper}> 
        <div className={styles.content}>
            <div className={styles.introduction}>
                <h1 className={styles.title}>Online shopping simplified</h1>
                <p className={styles.desp}>Order your groceries from SuperM with our easy to use app, and get your products delivered straight to your doorstep.</p>
               <Link to='/product'> <button className={styles.btn}>Start shopping</button></Link>
            </div>
            <div>
                <img className={styles.img} src='https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_700/v1607770215/react-tutorial/supermarket/home.jpg' alt='anh' />
            </div>
        </div>
    </div> );
}

export default Home;