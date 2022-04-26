import styles from "./Alert.module.css";

function Alert(props) {
    const { children } = props

    return(
        <div className={styles.alert}>
            <span className={styles.alert__title}>{children}</span>
        </div>
    );
}

export default Alert;