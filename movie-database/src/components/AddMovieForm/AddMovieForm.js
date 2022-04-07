import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import Alert from "../Alert/Alert";

function AddMovieForm(props) {
    // destructing props
    const { movies, setMovies } = props;

    // Membuat state title
    const [title, setTitle] = useState("");
    // Membuat state data
    const [date, setDate] = useState("");
    // Membuat state poster
    const [poster, setPoster] = useState("");
    // Membuat state genre
    const [genre, setGenre] = useState("");

    // Membuat state title dan data error/empty
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isPosterError, setIsPosterError] = useState(false);

    // Membuat fungsi handleTitle
    function handleTitle(e) {
        setTitle(e.target.value);
    }
    // Membuat fungsi handleDate
    function handleDate(e) {
        setDate(e.target.value);
    }
    // Membuat fungsi handlePoster
    function handlePoster(e) {
        setPoster(e.target.value);
    }
    // Membuat fungsi handleGenre
    function handleGenre(e) {
        setGenre(e.targer.value);
    }

    // Handle form ketika disubmit
    function handleSubmit(e) {
        // Mencegah perilaku default: refresh
        e.preventDefault();

        // Jika title kosong, maka set error title run
        if (title === "") {
            setIsTitleError(true);
        }
        // Jika title kosong, maka set error date true
        else if (date === "") {
            setIsTitleError(false);
            setIsDateError(true);
        }
        // Jika title dan date kosong, maka set error poster true
        else if (date === "") {
            setIsTitleError(false);
            setIsDateError(false);
            setIsPosterError(true);
        }

        else {
             // Siapkan movie yang ingin diinput
            const movie ={
                id: nanoid(),
                title: title,
                year: date,
                type: genre,
                poster: poster,
            };

            setMovies([ ...movies, movie ]);
            setIsTitleError(false);
            setIsDateError(false);
        }
    }

    return( 
        <form onSubmit={handleSubmit} className={styles.container}>
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
                            <input onChange={handleTitle} id="title" type="text" className={styles.addmovieform_input} value={title}/>
                            {/* 
                            Jika error title true: muncul error 
                            Jika tidak, munculkan string kosong  
                            */}
                            {isTitleError && <Alert>Title Wajib Diisi </Alert>}
                        </div>
                        <div className={styles.addmovieform_form}>
                            <label className={styles.addmovieform_label}>Year</label> 
                            <input onChange={handleDate} id="date" type="text" className={styles.addmovieform_input} value={date}/>
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.addmovieform_form}>
                            <label className={styles.addmovieform_label}>Poster</label> 
                            <input onChange={handlePoster} id="poster" type="text" className={styles.addmovieform_input} value={poster}/>
                            {isPosterError && <Alert>Link Poster Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.addmovieform_form}>
                            <label className={styles.addmovieform_label}>Genre</label>
                            <select onChange={handleGenre} id="genre" className={styles.addmovieform_input} value={genre}>
                                <option>--Select One--</option>
                                <option value="action">Action</option>
                                <option value="drama">Drama</option>
                                <option value="horror">Horror</option>
                                <option value="comedy">Comedy</option>
                                <option value="animation">Animation</option>
                            </select>
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