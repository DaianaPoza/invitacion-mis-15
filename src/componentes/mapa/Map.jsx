// src/componentes/mapa/Map.jsx
import "./Map.css";

export default function Map({ name, address, }) {
  // Usamos nombre + dirección como consulta principal
  const q = `${name}, ${address}`;

  // URL del iframe (búsqueda por texto) y link para abrir indicaciones
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
  const link  = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;

  return (
    <section className="map">
      <div className="container">
        <h1 className="map__title liner">Cómo llegar</h1>
        <p className="map__address liner"> Cam. Parque Sesquicentenario 1630 8.5</p>
        <p className="map__address liner"> Bahía Blanca,</p>
        <p className="map__address liner">  Buenos Aires</p>

        <div className="map__frame">
          <iframe
            title={name}
            src={embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a className="map__link" href={link} target="_blank" rel="noreferrer">
          Abrir en Google Maps
        </a>
      </div>
    </section>
  );
}

