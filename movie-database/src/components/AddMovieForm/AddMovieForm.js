import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import Alert from "../Alert/Alert";
import Button from "../UI/Button";

function AddMovieForm(props) {
    // destructing props
    const { movies, setMovies } = props;
    
    // Membuat state dalam bentuk object
    const [ formData, setFormData ] = useState({
        title: "",
        date: "",
        poster: "",
        genre: "",
    })
    
    /**
     * TODO
     * - PROBLEM: 1 ERROR 1 STATE.
     * - TODO: REFACTOR SEMUA ERROR JADI 1 STATE.
     */
    const [ isError, setIsError ] = useState({
        isTitleError: false,
        isDateError: false,
        isPosterError: false,
        isGenreError: false,
        })

    // Membuat fungsi handleChange untuk handle semua input form
    function handleChange(e) {
        // Destructing name dan value
        const { name, value } = e.target;

        setFormData({...formData,[name]: value});
    }

    const { title, date, poster, genre } = formData;

    function validate() {
        // Jika title kosong, maka set error title run
        if (title === "") {
            setIsError({...isError, isTitleError: true});
            return false;
        }
        // Jika title kosong, maka set error date true
        else if (date === "") {
            setIsError({...isError, isTitleError: false, isDateError: true});
            return false;
        }
        // Jika title dan date kosong, maka set error poster true
        else if (poster === "") {
            setIsError({...isError,  isTitleError: false, isDateError: false,isPosterError: true});
            return false;
        }
        else if (genre === "") {
            setIsError({...isError, isTitleError: false, isDateError: false,isPosterError: false,isGenreError: true});
            return false;
        }
        else {
            setIsError({
                isTitleError: false,
                isDateError: false,
                isPosterError: false,
                isGenreError: false,
            });
            return true;
        }

    }

    function addMovie() {
         // Siapkan movie yang ingin diinput
         const movie ={
            id: nanoid(),
            title: title,
            year: date,
            type: genre,
            poster: poster,
        };

        setMovies([ ...movies, movie ]);
    }

    // Handle form ketika disubmit
    function handleSubmit(e) {
        // Mencegah perilaku default: refresh
        e.preventDefault();

        validate() && addMovie();
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
                            <input onChange={handleChange} id="title" name="title" type="text" className={styles.addmovieform_input} value={title}/>
                            {/* 
                            Jika error title true: muncul error 
                            Jika tidak, munculkan string kosong  
                            */}
                            {isError.isTitleError && <Alert>Title Wajib Diisi </Alert>}
                        </div>
                        <div className={styles.addmovieform_form}>
                            <label className={styles.addmovieform_label}>Year</label> 
                            <input onChange={handleChange} id="date" name="date" type="text" className={styles.addmovieform_input} value={date}/>
                            {isError.isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.addmovieform_form}>
                            <label className={styles.addmovieform_label}>Poster</label> 
                            <input onChange={handleChange} id="poster" name="poster" type="text" className={styles.addmovieform_input} value={poster}/>
                            {isError.isPosterError && <Alert>Link Poster Wajib Diisi</Alert>}
                        </div>
                        <div className={styles.addmovieform_form}>
                            <label className={styles.addmovieform_label}>Genre</label>
                            <select onChange={handleChange} id="genre" name="genre" className={styles.addmovieform_input} value={genre}>
                                <option>--Select One--</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                                <option value="Horor">Horor</option>
                                <option value="comedy">Comedy</option>
                                <option value="animation">Animation</option>
                            </select>
                            {isError.isGenreError && <Alert>Genre Wajib Dipilih</Alert>}
                        </div>
                        <div> 
                            <Button variant="secondary" full>Add Movie</Button>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
}

export default AddMovieForm;