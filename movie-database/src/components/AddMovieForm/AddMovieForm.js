import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return(
        <form className={styles.container}>
            <section className={styles.addmovieform}>
                <div className={styles.addmovieform_left}>
                    <img 
                      className={styles.addmovieform_image}
                      src="https://picsum.photos/536/354" 
                      alt="placeholder" />
                </div>
                <div className={styles.addmovieform_right}>
                    <div>
                        <h2 className={styles.addmovieform_title}>Add Movie</h2>
                        <div className={styles.addmovieform_form}>
                            <label className={styles.addmovieform_label}>Title</label> 
                            <input type="text" className={styles.addmovieform_input}/>
                        </div>
                        <div className={styles.addmovieform_form}>
                            <label className={styles.addmovieform_label}>Year</label> 
                            <input type="text" className={styles.addmovieform_input}/>
                        </div>
                        <div>
                            <button className={styles.addmovieform_buton}>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
}

export default AddMovieForm;