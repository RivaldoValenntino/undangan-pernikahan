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
      className="flex justify-center py-12 h-dvh px-4 bg-[#FFF2EB] flex-col gap-8 font-montaga"
      ref={refProps}
    >
      <div className="bg-white px-6 py-8 rounded-md w-full mx-auto max-w-3xl shadow-md relative flex flex-col items-center">
        <img
          src={flowerDecoration}
          alt=""
          className="absolute -bottom-25 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
        <ImageTriple
          images={[
            "https://i.pravatar.cc/100?img=1",
            "https://i.pravatar.cc/150?img=2",
            "https://i.pravatar.cc/100?img=3",
          ]}
        />

        <WeddingHeaderCard date="20 September 2025" />
        <button
          type="button"
          onClick={onAction}
          className="rounded-md bg-primary px-4 py-3 w-full mt-8 max-w-sm mx-auto flex items-center justify-center gap-2 cursor-pointer"
          style={{ color: "#FFFFFF" }}
        >
          <Heart size={20} />
          Meet The Couple
        </button>
      </div>
      {/* <WeddingInfoCard
        date="Sunday, 21 July 2024"
        time="10:00 AM - 12:00 PM"
        location="Grand Ballroom Hotel XYZ"
        address="Jl. Merdeka No.45, Jakarta"
        mapLink="https://goo.gl/maps/example"
      /> */}
    </section>
  );
};

export default Undangan;
