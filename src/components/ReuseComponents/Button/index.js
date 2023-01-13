import styles from './Button.module.scss'
function Button({ children}) {
    let classes = ['btn']
    return ( <button className={styles[classes]} >{children}</button> );
}
export default Button;