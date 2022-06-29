import React from "react";

function Table(props) {
    const { index, provinces } = props
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{provinces.kota}</td>
            <td>{provinces.kasus}</td>
            <td>{provinces.sembuh}</td>
            <td>{provinces.dirawat}</td>
            <td>{provinces.meninggal}</td>
        </tr>
    );
}

export default Table;