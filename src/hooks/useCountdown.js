import { useEffect, useState } from "react";

export default function useCountdown(targetDateISO) {
  const [diff, setDiff] = useState(() => new Date(targetDateISO) - new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDiff(new Date(targetDateISO) - new Date());
    }, 1000);
    return () => clearInterval(id);
  }, [targetDateISO]);

  const clamp = Math.max(diff, 0);
  const s = Math.floor(clamp / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;

  return { days, hours, minutes, seconds };
}
