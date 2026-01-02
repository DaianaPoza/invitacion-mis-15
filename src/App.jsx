//import React from 'react';
import './App.css'
import Header from './componentes/header/Header'
import Seccion from './componentes/seccion/Seccion'
import Footer from './componentes/footer/Footer'
import Map from "./componentes/mapa/Map.jsx";
import { WEDDING } from "./config/WeddingConfig.js";
import Regalo from "./componentes/regalo/Regalo.jsx";
import Vestimenta from "./componentes/vestimenta/Vestimenta.jsx";
import Chicos from "./componentes/chicos/Chicos.jsx"
import Musica from "./componentes/Musica/Musica.jsx"
import RSVP from "./componentes/confirmacion/Confirmacion.jsx";
import Fecha from "./componentes/fecha/Fecha.jsx";
import Music from "./componentes/music/Music.jsx";


function App() {

  
  return (
    <>
    <div className='body'>
  <Header />

   <Music /> 

  <Fecha />
  <Seccion />
  <Map
        name={WEDDING.venue.name}
        address={WEDDING.venue.address}
      />
<Vestimenta/>
<Chicos/>
<Musica/>
  <Regalo />
  <RSVP />
  <Footer />
  </div>
    </>
  
  )
}

export default App;
