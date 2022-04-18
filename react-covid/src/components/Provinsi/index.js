import styles from "./index.module.css";
import data from "../../utils/constants/provinces";
import Table from "../Table/index";

function Provinsi(props) {
    const {provinces, setProvinces} = props;

    return (
        <div className={styles.container}>
            <section className={styles.provinsi}>
                <div className={styles.provinsi__title}>
                    <h1>Provinsi</h1>
                    <h3>Data Covid Berdasarkan Provinsi</h3>
                </div>
                <table className={styles.provinsi__table}>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Provinsi</th>
                            <th>Positif</th>
                            <th>Sembuh</th>
                            <th>Dirawat</th>
                            <th>Meninggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {provinces.map((data, index) => (
                            <Table
                                index={index} key={data.kota} kota={data.kota} kasus={data.kasus} sembuh={data.sembuh} dirawat={data.dirawat} meninggal={data.meninggal}
                            />
                         ))}
                    </tbody>
                </table>

            </section>
        </div>
    );
}

export default Provinsi;