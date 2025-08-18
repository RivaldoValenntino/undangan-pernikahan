import ImageTriple from "./ImageTriple";
import WeddingHeaderCard from "./WeddingHeader";
import flowerDecoration from "../assets/images/bunga-2.png";
import { Heart } from "lucide-react";

const Undangan = ({
  refProps,
  onAction = () => {},
}: {
  refProps: React.RefObject<HTMLDivElement | null>;
  onAction?: () => void;
}) => {
  return (
    <section
      ref={refProps}
      className="flex items-center py-12 h-dvh mb-20 px-4 bg-secondary flex-col gap-8 font-montaga"
    >
      <div className="bg-white px-6 py-10 rounded-2xl w-full max-w-2xl shadow-lg relative flex flex-col items-center text-center">
        {/* Dekorasi bunga */}
        <img
          src={flowerDecoration}
          alt=""
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40"
        />

        {/* Foto 3 bulat */}
        <ImageTriple
          images={[
            "https://i.pravatar.cc/100?img=1",
            "https://i.pravatar.cc/150?img=2",
            "https://i.pravatar.cc/100?img=3",
          ]}
        />

        {/* Header + countdown */}
        <WeddingHeaderCard date="20 September 2025" />

        {/* Tombol */}
        <button
          type="button"
          onClick={onAction}
          className="rounded-md bg-pink-600 px-6 py-3 w-full mt-8 max-w-sm flex items-center justify-center gap-2 text-white font-semibold shadow-md hover:bg-pink-700 transition"
        >
          <Heart size={20} />
          Meet The Couple
        </button>
      </div>
    </section>
  );
};

export default Undangan;
