import { useRef, useState } from "react";
import "./Music.css";
import cancion from "../../assets/marry/MarryYou.mp3"; // ← tu archivo MP3 (ajustá el nombre/ruta si cambia)

export default function Music() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;

    if (playing) {
      el.pause();
    } else {
      el.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="musica">
      <button
        className={`musica__btn ${playing ? "is-playing" : ""}`}
        onClick={togglePlay}
      >
        {playing ? "🔊 Pausar música" : "🎶 Reproducir música"}
      </button>

      <audio ref={audioRef} src={cancion} loop preload="none" controls={false}/>
    </section>
  );
}
