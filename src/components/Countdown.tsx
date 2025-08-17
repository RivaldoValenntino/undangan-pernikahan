import { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-09-20T00:00:00").getTime();

  const calcTimeLeft = () => {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    let animationFrame: number;

    const update = () => {
      setTimeLeft(calcTimeLeft());
      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  });

  return (
    <div className="w-full flex justify-center items-center gap-6 text-center text-white text-2xl font-bold font-poppins">
      <div className="text-black text-md flex flex-col items-center justify-center rounded-sm">
        <p>{timeLeft.days}</p>
        <p className="text-sm font-normal">Hari</p>
      </div>
      <div className="text-black text-md flex flex-col items-center justify-center rounded-sm">
        <p>{timeLeft.hours}</p>
        <p className="text-sm font-normal">Jam</p>
      </div>
      <div className="text-black text-md flex flex-col items-center justify-center rounded-sm">
        <p>{timeLeft.minutes}</p>
        <p className="text-sm font-normal">Menit</p>
      </div>
      <div className="text-black text-md flex flex-col items-center justify-center rounded-sm">
        <p>{timeLeft.seconds}</p>
        <p className="text-sm font-normal">Detik</p>
      </div>
    </div>
  );
};

export default Countdown;
