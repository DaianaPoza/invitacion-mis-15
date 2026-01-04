import './Footer.css';
import footer from "../../assets/footer.jpeg"; 


function Chicos() {
    return (
        <section className="footer">
        <img
          src={footer}
          alt="Fondo invitación mis 15"
          className="footer-img"
        />
        <div className="footer-texto">
          <h2 > ¡¡ Te espero !!</h2>
          <p> Porque los buenos momentos, se viven mejor acompañados</p>
        </div>
        </section>

    )
}

export default Chicos;


