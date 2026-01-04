import './Header.css';
import fondo from "../../assets/piano.jpeg"; 

function Header() {
  return (
    <section className="invitacion-fondo">
      {/* Imagen visible como fondo pero optimizada */}
      <img
        src={fondo}
        alt="Fondo invitación mis 15"
        className="invitacion-fondo-img"
      />

      <div className="invitacion-texto silvester-text">
        <h1> Aylin</h1>
        <h2>Mis 15 años</h2>
      </div>
    </section>
  );
}

export default Header;


