import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import { Mail, Play, Pause, Music } from "lucide-react";
import Undangan from "../components/Undangan";
import BottomNav from "../components/NavigationBar";
import UndanganCard from "../components/UndanganCard";
import { motion, AnimatePresence } from "framer-motion";
import StorySection from "../components/StorySection";
import WeddingInfoCard from "../components/WeddingInfoCard";
import WeddingAttendanceForm from "../components/WeddingAttedanceForm";
import GiftSection from "../components/GiftSection";
import AUDIO_SRC from "../assets/audio/audio-bg.mp3";
export const Route = createFileRoute("/")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      nama: (search.nama as string) ?? "",
    };
  },
});

function RouteComponent() {
  const images = [
    "/src/assets/images/bg-prewed2.jpg",
    "/src/assets/images/bg-prewed3.jpg",
    "/src/assets/images/bg-prewed.jpg",
  ];

  const [currentBg, setCurrentBg] = useState(0);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { nama } = useSearch({ strict: false });
  const homeRef = useRef<HTMLDivElement | null>(null);
  const invitationRef = useRef<HTMLDivElement | null>(null);
  const coupleRef = useRef<HTMLDivElement | null>(null);
  const storyRef = useRef<HTMLDivElement | null>(null);
  const rsvpRef = useRef<HTMLDivElement | null>(null);
  const giftRef = useRef<HTMLDivElement | null>(null);

  const sectionRefs = [
    homeRef,
    invitationRef,
    coupleRef,
    storyRef,
    rsvpRef,
    giftRef,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const sections = [
      { ref: homeRef, index: 0 },
      { ref: invitationRef, index: 1 },
      { ref: coupleRef, index: 2 },
      { ref: storyRef, index: 3 },
      { ref: rsvpRef, index: 4 },
      { ref: giftRef, index: 5 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (s) => s.ref.current === entry.target
            );
            if (section) {
              setActiveIndex(section.index);
              setShowBottomNav(section.index !== 0);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  /* ===== 🎵 BACKGROUND MUSIC ===== */
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    // coba autoplay ketika mount
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setAutoplayBlocked(false);
      })
      .catch(() => {
        // browser block autoplay dengan sound
        setIsPlaying(false);
        setAutoplayBlocked(true);
      });

    // kalau autoplay diblokir, play saat first user interaction
    const tryResume = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
            window.removeEventListener("click", tryResume);
            window.removeEventListener("touchstart", tryResume);
          })
          .catch(() => {
            // tetap diam kalau gagal
          });
      }
    };

    if (autoplayBlocked) {
      window.addEventListener("click", tryResume, { once: true });
      window.addEventListener("touchstart", tryResume, { once: true });
    }

    return () => {
      window.removeEventListener("click", tryResume);
      window.removeEventListener("touchstart", tryResume);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // mount sekali

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setAutoplayBlocked(true);
        });
    }
  };

  const fabBottomClass = showBottomNav ? "bottom-24" : "bottom-4"; // naik dikit biar ga tabrakan dgn BottomNav

  return (
    <div className="w-full h-dvh relative" id="bg-root">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === currentBg ? 1 : 0,
          }}
        />
      ))}

      {/* Scrollable container */}
      <div className="relative z-10 overflow-y-auto h-dvh scroll-smooth">
        {/* Hero */}
        <div
          ref={homeRef}
          className="flex flex-col items-center justify-center h-dvh gap-4"
        >
          <Hero name={nama} />
          <button
            type="button"
            onClick={() => {
              togglePlay(); // nyalain musik
              invitationRef.current?.scrollIntoView({ behavior: "smooth" }); // scroll ke section
            }}
            className="font-montaga bg-pink-400 text-white font-semibold px-4 py-2 rounded-xl gap-2 flex cursor-pointer"
          >
            <Mail />
            Open Invitation
          </button>
        </div>

        {/* Invitation */}
        <div ref={invitationRef} className="h-screen bg-white">
          <Undangan
            refProps={invitationRef}
            onAction={() =>
              coupleRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>

        {/* Couple */}
        <div
          ref={coupleRef}
          className="min-h-screen h-screen bg-[#FFF2EB] py-8"
        >
          <UndanganCard
            onAction={() =>
              storyRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            groom={{
              name: "Asep Irawan",
              role: "Son of",
              parents: "Mr. Ilham & Mrs. Fatima",
              image: "https://i.pravatar.cc/300",
              socials: { instagram: "#", twitter: "#", facebook: "#" },
            }}
            bride={{
              name: "Putri Amanda",
              role: "Daughter of",
              parents: "Mr. Ibrahim & Mrs. Etna Dwi",
              image: "https://i.pravatar.cc/300",
              socials: { instagram: "#", twitter: "#", facebook: "#" },
            }}
          />
        </div>

        {/* Gallery */}
        <div
          className="bg-[#FFF2EB] h-screen min-h-screen flex items-center justify-center py-8"
          ref={storyRef}
        >
          <StorySection
            title="THE FIRST MEET"
            year="2018"
            topImage="https://picsum.photos/400/250?random=2"
            bottomImage="https://picsum.photos/400/200?random=2"
            description="Lorem ipsum justo, enim augue neque, eu pulvinar etiam. Elit quam gravida a nec. Mauris eu nulla vulputate vitae nisl, massa vulputate tellus sit. Sit integer cras nibh sodales. Sit pharetra, tellus elit in."
          />
        </div>

        {/* RSVP */}
        <div
          ref={rsvpRef}
          className="bg-[#FFF2EB] min-h-sceeen flex flex-col items-center justify-center p-4 sm:p-6"
        >
          <WeddingInfoCard
            date="Sunday, 21 July 2024"
            time="10:00 AM - 12:00 PM"
            location="Grand Ballroom Hotel XYZ"
            address="Jl. Soekarno-Hatta No.791B, Babakan Penghulu, Kec. Cinambo, Kota Bandung, Jawa Barat 40293"
          />

          {/* Google Maps */}
          <div className="w-full max-w-lg mt-6 rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-[4/3] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6124751582083!2d107.68541237487385!3d-6.936832993063157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c2b84b4739a5%3A0x86f4dfb4687ce617!2sGrand%20Cordela%20Hotel%20Bandung!5e0!3m2!1sen!2sid!4v1755405397661!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <p className="text-[12px] md:text-sm text-center font-montaga mt-4 max-w-md px-4">
            It's an honor and happiness for us if Mr/Ms/Brother is willing to
            attend to give blessings to the bride and groom.
          </p>
        </div>

        <WeddingAttendanceForm />

        <div
          ref={giftRef}
          className="bg-[#FFF2EB] min-h-screen flex items-center justify-center py-12"
        >
          <GiftSection />
        </div>
      </div>

      {/* BottomNav tetap fixed */}
      <AnimatePresence>
        {showBottomNav && (
          <motion.div
            key="bottom-nav"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-0 left-0 w-full z-50"
          >
            <BottomNav activeIndex={activeIndex} onChange={handleNavClick} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🎵 Floating Play/Pause Button */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className={`fixed right-4 ${fabBottomClass} z-[60] rounded-full shadow-xl border border-white/20
          bg-pink-600 text-white p-3 md:p-4 flex items-center gap-2 hover:scale-105 active:scale-95 transition
          ${isPlaying ? "animate-none" : ""}`}
      >
        <span className="relative inline-flex">
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </span>
        <span className="hidden sm:inline text-sm font-semibold">
          {isPlaying ? "Pause" : "Play"}
        </span>
        {/* indikator kecil */}
        <span className="ml-1 hidden md:inline-flex items-center">
          <Music
            size={16}
            className={isPlaying ? "opacity-100" : "opacity-60"}
          />
        </span>
      </button>

      {/* Optional: hint kecil kalau autoplay ke-block */}
      {autoplayBlocked && (
        <div className="hidden fixed right-4 bottom-28 md:bottom-32 z-[60] bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          Tap play to start music
        </div>
      )}
    </div>
  );
}
