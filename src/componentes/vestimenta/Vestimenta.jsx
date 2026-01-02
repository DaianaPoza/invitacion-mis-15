import "./Vestimenta.css";
import traje from "../../assets/traje.jpeg";
import vestido from "../../assets/vestido.jpeg";
import recomendaciones from "../../assets/recomendaciones.jpeg";

function Vestimenta() {
  return (
    <section className="ropa">
      <div className="codigo">
        <h1>Código de Vestimenta</h1>
        <h2>Formal</h2>
      </div>

      <div className="contenedor-vestimenta">
        {/* Fila superior con dos imágenes lado a lado */}
        <div className="fila-superior">
          <img src={traje} alt="traje elegante" className="imagen-lateral" />
          <img src={vestido} alt="vestido elegante" className="imagen-lateral" />
        </div>

        {/* Imagen circular centrada debajo */}
        <img src={recomendaciones} alt="recomendaciones" className="imagen-central" />
      </div>
    </section>
  );
}

export default Vestimenta;




