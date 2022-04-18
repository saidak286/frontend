import { useState } from "react";
import styles from "./index.module.css";
import data from "../../utils/constants/provinces";
import Alert from "../Alert";

function Form(props) {
    const {provinces, setProvinces} = props;

    const [provinsi, setProvinsi] = useState("");
    const [status, setStatus] = useState("");
    const [jumlah, setJumlah] = useState("");

    // Membuat state title dan data error/empty
    const [isProvinsiError, setIsProvinsiError] = useState(false);
    const [isStatusError, setIsStatusError] = useState(false);
    const [isJumlahError, setIsJumlahError] = useState(false);

    function handleProvinsi(e) {
        setProvinsi(e.target.value);
    }

    function handleStatus(e) {
        setStatus(e.target.value);
    }

    function handleJumlah(e) {
        setJumlah(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Jika title kosong, maka set error title run
        if (provinsi === "") {
            setIsProvinsiError(true);
        }
        // Jika title kosong, maka set error date true
        else if (status === "") {
            setIsProvinsiError(false);
            setIsStatusError(true);
        }
        // Jika title dan date kosong, maka set error poster true
        else if (jumlah === "") {
            setIsProvinsiError(false);
            setIsStatusError(false);
            setIsJumlahError(true);
        }

        else {
             // Siapkan movie yang ingin diinput
            const movie = {
                provinsi: provinsi,
                status: status,
                jumlah: jumlah,
            };

            setProvinces([ ...provinces, movie ]);
            setIsProvinsiError(false);
            setIsStatusError(false);
            setIsJumlahError(false)
        
            /**
             * Menambahkan movie ke state province
             * spread operator: copy dan merge array
             */
            setProvinces([...provinces, movie]);


            //Find index of specific object using findIndex method.    
            const objIndex = provinces.findIndex((obj => obj.kota === provinsi));

            //Log object to Console.
            console.log("Before update: ", provinces[objIndex]);

            //Update object's name property.
            provinces[objIndex][status] = jumlah;

            //Log object to console again.
            console.log("After update: ", provinces[objIndex]);

            console.log(data);

            setProvinces([...provinces]);
            
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                    <img 
                        className={styles.form__image}
                        src="https://img.freepik.com/free-vector/flat-hand-drawn-doctor-injecting-vaccine-patient-illustration_23-2148863748.jpg?t=st=1650291126~exp=1650291726~hmac=ca995fee7e45f1cd0ba7e21282b7f3b5d2bb5e08cdb243ff7a075076e4fb378c&w=740" 
                        alt="" />
                </div>
                <div className={styles.form__right}>
                    <h2 className={styles.form__title}>Form Covid</h2>
                    <div className={styles.form__covid}>
                        <label className={styles.form__label}>Provinsi</label>
                        <select onChange={handleProvinsi} className={styles.form__input}>
                            <option className={styles.form__option}>--Select One--</option>
                            {data.provinces.map((data) => (
                                <option key={data.kota} value={data.kota}>{data.kota}</option>
                            ))}
                        </select>
                        {/* 
                        Jika error title true: muncul error 
                        Jika tidak, munculkan string kosong  
                        */}
                        {isProvinsiError && <Alert>Title Wajib Diisi </Alert>}
                    </div>
                    <div className={styles.form__covid}>
                        <label className={styles.form__label}>Status</label>
                        <select onChange={handleStatus} className={styles.form__input}>
                            <option>--Select One--</option>
                            <option value="kasus">Positif</option>
                            <option value="sembuh">Sembuh</option>
                            <option value="dirawat">Dirawat</option>
                            <option value="meninggal">Meninggal</option>
                        </select>
                         {/* 
                        Jika error title true: muncul error 
                        Jika tidak, munculkan string kosong  
                        */}
                        {isStatusError && <Alert>Title Wajib Diisi </Alert>}
                    </div>
                    <div className={styles.form__covid}>
                        <label className={styles.form__label}>Jumlah</label>
                        <input type="text" onChange={handleJumlah} className={styles.form__input}/>
                         {/* 
                        Jika error title true: muncul error 
                        Jika tidak, munculkan string kosong  
                        */}
                        {isJumlahError && <Alert>Title Wajib Diisi </Alert>}
                    </div>
                    <div>
                        <button className={styles.form__button}>Submit</button>
                    </div>
                </div>
            </section>
        </form>
    );
}

export default Form;
