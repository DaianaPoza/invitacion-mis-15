// src/componentes/seccion/Seccion.jsx
import { WEDDING } from "../../config/WeddingConfig.js";
import Cuentaregresiva from "../cuentaregresiva/Cuentaregresiva.jsx"
import "./Seccion.css";


export default function Seccion() {
  const fecha = new Date(WEDDING.dateISO);
  const fechaLarga = fecha.toLocaleString("es-AR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="fecha">
      <div className="countdown">
        <Cuentaregresiva dateISO={WEDDING.dateISO} />
      </div>
      <section>
      
      </section>
    </section>
  );
}
