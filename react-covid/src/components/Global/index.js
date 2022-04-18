import data from "../../utils/constants/indonesia";
import Content from "../Content";
import styles from "./index.module.css";

function Global() {
    return (
        <div className={styles.container}>
            <div className={styles.global}>
                <h1 className={styles.global__title}>Indonesia</h1>
                <h3 className={styles.global__subtitle}>Data Covid Berdasarkan global</h3>
                    <div className={styles.global__container}>
                    {data.indonesia.map((data) => (
                        <Content 
                            key={data.status} status={data.status} total={data.total} 
                        />
                    ))}
                    </div>
            </div>
        </div>
    );
}

export default Global;