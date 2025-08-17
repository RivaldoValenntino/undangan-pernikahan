import { useEffect, useState } from "react";

const OpeningGate = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // otomatis buka setelah 1 detik
    const timer = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex font-poppins">
      <div
        id="bg-open-r"
        className={`w-1/2 h-full transition-transform duration-1000 ${
          open ? "-translate-x-full" : "translate-x-0"
        }`}
      ></div>

      <div
        id="bg-open-l"
        className={`w-1/2 h-full transition-transform duration-1000 ${
          open ? "translate-x-full" : "translate-x-0"
        }`}
      ></div>

      {!open && (
        <div className="absolute inset-0 items-center justify-center flex flex-col">
          <h1 className="text-white text-3xl font-bold">The Wedding</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
            temporibus!
          </p>
        </div>
      )}
    </div>
  );
};

export default OpeningGate;
