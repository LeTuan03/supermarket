

import Header from '../Header';
import styles from './DefaultLayOut.module.scss'
function DefaultLayOut({ children }) {
    return ( <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
            {children}
        </div>
    </div> );
}

export default DefaultLayOut;