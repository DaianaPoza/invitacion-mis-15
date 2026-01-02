import "./Regalo.css";
import paris from "../../assets/paris.jpeg";
import { FaGift } from "react-icons/fa";
import React, { useState } from "react";

function Regalo () {
  const [copiado, setCopiado] = useState(null);
  const [mostrarDatos, setMostrarDatos] = useState(false);


  const cbu = "0340053108530014689006"; // <-- tu CBU real
  const alias = "Boda.dai.diego"; // <-- tu alias real

  const copiarTexto = async (texto, tipo) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(tipo);
      setTimeout(() => setCopiado(null), 2000);
    } catch (error) {
      console.error("Error al copiar:", error);
    }
  };

  return (
    <section className="regalo">
      <div className="regalo-container">
      <FaGift className="icono-regalo" /> 
        <div className="regalo-imagen">
          <img src={paris} alt="Dai y Diego" />
        </div>

        <div className="regalo-texto">
          <h2>
            El mejor regalo para nosotros es compartir con vos este día tan especial, 
            pero si lo deseás, podés colaborar con nuestra luna de miel.
          </h2>

 {/* Botón para ver/ocultar el cuadro */}
 <button
            className="boton-datos"
            onClick={() => setMostrarDatos(!mostrarDatos)}
          >
            {mostrarDatos ? "Ocultar datos bancarios" : "Ver datos bancarios"}
          </button>


          {/* Cuadro con CBU y Alias */}
          {mostrarDatos && (
            <div className="datos-bancarios">
              <div className="linea-dato">      
                <strong className="dato-label">CBU:</strong> 
                <span className="dato-valor">{cbu}</span>
                <button
                  className="boton-copiar"
                  onClick={() => copiarTexto(cbu, "cbu")}
                >
                  Copiar
                </button> 
                </div>
             
             <div className="linea-dato">
                <strong className="dato-label">Alias:</strong>
                <span className="dato-valor"> {alias}</span>
                <button
                  className="boton-copiar"
                  onClick={() => copiarTexto(alias, "alias")}
                >
                  Copiar
                </button>
              </div>

              {copiado && (
                <p className="mensaje-copiado">
                  {copiado === "cbu" ? "CBU copiado ✅" : "Alias copiado ✅"}
                </p>
              )}
            </div>
          )}
              
        </div>
      </div>
    </section>
);
}

export default Regalo; 
