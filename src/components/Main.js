import Hello from "./Hello";
/**
 * Membuat Component Main
 * Menampung konten utama
 */
 function Main() {
    return (
        <main>
            <Hello nama="Said" />
            <Hello nama="Irvan"/>
            <Hello nama="Farhan"/>
            <Hello nama="Zuhdi"/>
            <Hello nama="Fikri"/> 
        </main>
    );
}

export default Main;