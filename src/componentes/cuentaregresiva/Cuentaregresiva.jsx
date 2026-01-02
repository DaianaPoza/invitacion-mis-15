
import useCountdown from "../../hooks/useCountdown.js";
import "./Cuentaregresiva.css";

export default function CuentaRegresiva({ dateISO }) {
  const { days, hours, minutes, seconds } = useCountdown(dateISO);

  const Box = ({ value, label }) => (
    <div className="countdown-box">
      <div className="countdown-value">{value}</div>
      <div className="countdown-label">{label}</div>
    </div>
  );

  return (
   <section className="cuenta"> 
    <div className="countdown">
      <h3 className="countdown-title">Cuenta regresiva</h3>
      <div className="countdown-row">
        <Box value={days} label="Días" />
        <Box value={hours} label="Horas" />
        <Box value={minutes} label="Min" />
        <Box value={seconds} label="Seg" />
      </div>
    </div>
    </section>
  );
}


