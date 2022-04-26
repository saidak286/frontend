import { useEffect, useState } from "react";

function Counter() {
    /**
     * useState mengembalikan sepasang value (array): [0, function()]
     */
    const [angka, setAngka] = useState(0);

    function addAngka() {
        setAngka(angka + 1);
        console.log(angka);
    }

    /**
     * useEffect dijalankan pada lifecycle mount dan update 
     */
    function updateDOM() {
        console.log("Lifecycle: Component dimount");
        // Melakukan side effect: mengakses DOM
        document.title = `Hasil: ${angka}`;
    }

    useEffect(updateDOM, [angka]);

    console.log("Lifecycle: Component dirender");

    return (
        <div>
            <p>Hasil: {angka}</p>
            {/* Menambahkan event onClick */}
            <button onClick={addAngka}>Add</button>
        </div>
    )
}

export default Counter;