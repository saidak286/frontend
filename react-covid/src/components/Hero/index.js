import styles from "./index.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__genre}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src="https://img.freepik.com/free-vector/illustration-doctor-injecting-vaccine-patient-clinic_23-2148865177.jpg?w=1060"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
