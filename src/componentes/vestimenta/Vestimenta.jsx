import "./Vestimenta.css";
import traje from "../../assets/hombre.jpg";
import vestido from "../../assets/mujer1.avif";
import recomendaciones from "../../assets/recomendaciones.jpeg";

function Vestimenta() {
  return (
    <section className="ropa fade-section">
      <div className="codigo">
        <h1 className="dress"> Dress code</h1>
        
        <p className="hombreymujer"> Elegante sport </p>
      </div>

      <div className="contenedor-vestimenta">
        {/* Fila superior con dos imágenes lado a lado */}
        <div className="fila-superior">
          <img src={traje} alt="traje elegante" className="imagen-lateral" />
          <img src={vestido} alt="vestido elegante" className="imagen-lateral" />
        </div>

        <p className="azul">  No asistir con vestimenta azul </p>
        
      </div>
    </section>
  );
}

export default Vestimenta;




