import React from "react";
import styles from "./index.module.css";

function Content(props) {
    const { status, total } = props;

    return (
        <div className={styles.content}>
            <h3 className={styles.status}>{status}</h3>
            <h2 className={styles.total}>{total}</h2>
        </div>
    );
}

export default Content;