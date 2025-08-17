import RoundedImg from "../assets/images/bg-rounded.jpeg";
const Hero = ({ name: name }: { name: string | undefined }) => {
  return (
    <div className="flex flex-col text-white z-[9999] text-center gap-4 w-full max-w-sm items-center">
      <div className="h-40 w-40">
        <img
          src={RoundedImg}
          alt=""
          className="w-full h-full object-cover rounded-full border-3 border-white"
        />
      </div>

      <h1 className="font-montaga font-semibold text-3xl lg:text-2xl xl:text-2xl">
        Kepada Bapak/Ibu/Saudara/i
      </h1>
      <h1 className="font-montaga font-semibold text-3xl lg:text-2xl xl:text-2xl">
        {name ?? "-"}
      </h1>

      <h1 className="font-montaga font-semibold text-3xl lg:text-2xl xl:text-2xl">
        The Wedding Of
      </h1>
      <p className="font-bold font-clicker text-7xl lg:text-7xl xl:text-7xl">
        Vania & Eko
      </p>
      {/* <p className="font-bold font-montaga text-md lg:text-2xl xl:text-2xl">
        Akan segera melangsungkan pernikahan dalam :
      </p> */}
      {/* <Countdown /> */}
      <h1 className="font-montaga text-3xl lg:text-3xl xl:text-3xl font-thin">
        20 09 2025
      </h1>
    </div>
  );
};

export default Hero;
