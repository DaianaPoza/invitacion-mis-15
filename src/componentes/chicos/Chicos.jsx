import './Chicos.css';
import manos from "../../assets/manos.jpeg"; 


function Chicos() {
    return (
        <section className="chicos">
        {/* Imagen visible como fondo pero optimizada */}
        <img
          src={manos}
          alt="Fondo invitación mis 15"
          className="melodia"
        />
        
        <div className="melodia-texto">
          <h2> Preparate ... para una noche que empezará a sonar desde el corazón 🎶 </h2>
        </div>
        </section>

    )
}

export default Chicos;

