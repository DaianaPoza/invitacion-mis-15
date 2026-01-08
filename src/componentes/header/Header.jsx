import './Header.css';
import fondo from "../../assets/piano.jpeg"; 

function Header() {
  return (
    <section className="invitacion-fondo fade-section">
      {/* Imagen visible como fondo pero optimizada */}
      <img
        src={fondo}
        alt="Fondo invitación mis 15"
        className="invitacion-fondo-img"
      />

      <div className="invitacion-texto silvester-text">
        <h1> Aylín</h1>
        <h2>Mis 15 años</h2>
      </div>

      <div className="scroll-indicador">
  <i className="bi bi-chevron-double-down"></i>
  <span>Deslizá para ver más</span>
</div>


    </section>
  );
}

export default Header;


