import { useState } from "react";
import { useDispatch } from  "react-redux";
import Alert from "../Alert";
import StyledForm from "./index.Styled";
import { updateCovids } from "../../feature/covidSlice";

function Form(props) {
    const {provinces} = props;
    const dispatch = useDispatch();
    // Membuat state dalam bentuk object
    const [ formData, setFormData ] = useState({
        provinsi: "",
        status: "",
        jumlah: "",
    })
    // Membuat state title dan data error/empty
    const [ isError, setIsError ] = useState({
        isProvinsiError: false,
        isStatusError: false,
        isJumlahError: false,
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({...formData,[name]: value});
    }
    const { provinsi, status, jumlah } = formData;

    function validate() {
        // Jika provinsi kosong, maka set error provinsi run
        if (provinsi === "") {
            setIsError({...isError, isProvinsiError: true});
            return false;
        }
        // Jika provinsi kosong, maka set error status true
        else if (status === "") {
            setIsError({...isError, isProvinsiError: false, isStatusError: true});
            return false;
        }
        // Jika provinsi dan status kosong, maka set error jumlah true
        else if (jumlah === "") {
            setIsError({...isError, isProvinsiError: false, isStatusError: false, isJumlahError: true});
            return false;
        }

        else {
            setIsError({
                isProvinsiError: false,
                isStatusError: false,
                isJumlahError: false,
            });
            return true;
        }
    }

    function submitProvinces() {
        dispatch(updateCovids(formData));
    }

    // Handle form ketika disubmit
    function handleSubmit(e) {
        // Mencegah perilaku default: refresh
        e.preventDefault();

        validate() && submitProvinces();
    }


    return (
        <StyledForm onSubmit={handleSubmit}>
            <section>
                <div className="form__left">
                    <img 
                        src="https://img.freepik.com/free-vector/flat-hand-drawn-doctor-injecting-vaccine-patient-illustration_23-2148863748.jpg?t=st=1650291126~exp=1650291726~hmac=ca995fee7e45f1cd0ba7e21282b7f3b5d2bb5e08cdb243ff7a075076e4fb378c&w=740" 
                        alt="" />
                </div>
                <div className="form__right">
                    <h2>Form Covid</h2>
                    <div className="form__covid">
                        <label >Provinsi</label>
                        <select onChange={handleChange} id="provinsi" name="provinsi" value={provinsi}>
                            <option>--Select One--</option>
                            {provinces.map((data) => (
                                <option key={data.kota} value={data.kota}>{data.kota}</option>
                            ))}
                        </select>
                        {/* 
                        Jika error title true: muncul error 
                        Jika tidak, munculkan string kosong  
                        */}
                        {isError.isProvinsiError && <Alert>Provinsi Wajib Diisi </Alert>}
                    </div>
                    <div className="form__covid">
                        <label>Status</label>
                        <select onChange={handleChange} id="status" name="status" value={status}>
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
                        {isError.isStatusError && <Alert>Status Wajib Diisi </Alert>}
                    </div>
                    <div className="form__covid">
                        <label>Jumlah</label>
                        <input type="text" onChange={handleChange} id="jumlah" name="jumlah" value={jumlah}/>
                         {/* 
                        Jika error title true: muncul error 
                        Jika tidak, munculkan string kosong  
                        */}
                        {isError.isJumlahError && <Alert>Jumlah Wajib Diisi </Alert>}
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </section>
        </StyledForm>
    );
}

export default Form;