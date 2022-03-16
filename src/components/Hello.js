/**
 * Membuat Component Hello
 * Component Hello mencetak UI (elememts)
 */
 function Hello(props) {
    return (
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {props.nama} - Frontend Engineer</p>
        </div>
    );
}

export default Hello;