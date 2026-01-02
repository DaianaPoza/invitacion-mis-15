import './Header.css';
import fondo from "../../assets/nana.jpeg"; 

function Header() {
  return (
    <section className="invitacion-fondo">
      {/* Imagen visible como fondo pero optimizada */}
      <img
        src={fondo}
        alt="Fondo invitación Dai & Diego"
        className="invitacion-fondo-img"
      />

      <div className="invitacion-texto">
        <h1>Day & Diego</h1>
        <h2>¡Nos casamos!</h2>
      </div>
    </section>
  );
}

export default Header;


