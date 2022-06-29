import { useSelector } from "react-redux";
import Table from "../Table/index";
import StyledProv from "./index.Styled";

function Provinsi() {
    const provinces = useSelector((store) => store.covids.provins);
    return (
        <StyledProv>
            <section>
                <div>
                    <h1>Provinsi</h1>
                    <h3>Data Covid Berdasarkan Provinsi</h3>
                </div>
                <table>
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
                                index={index} key={data.kota} provinces={data}
                            />
                         ))}
                    </tbody>
                </table>
            </section>
        </StyledProv>
    );
}

export default Provinsi;