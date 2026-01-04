import "./Confirmacion.css";

export default function Confirmacion() {
  return (
    <section className="rsvp">
      <h2>Confirmación de asistencia</h2>
      <p>
        Tu presencia es muy importante para mí.  
        
      </p>

      <a
        className="rsvp-btn"
        href="https://docs.google.com/forms/d/e/1FAIpQLSeLKolEmKdzsIPhSkA0xxFppgHs9FjoyprQz_Ki-0bn_Kr7hQ/viewform?usp=dialog"
        target="_blank"
        rel="noreferrer"
      >
        Confirmar asistencia
      </a>
    </section>
  );
}


