import React, { JSX } from "react";
import { Home, Heart, Mail, Book, Gift, CalendarDays } from "lucide-react";

interface NavItem {
  label: string;
  icon: JSX.Element;
}

const navItems: NavItem[] = [
  { label: "Home", icon: <Home size={22} /> },
  { label: "Invitation", icon: <Mail size={22} /> },
  { label: "Couple", icon: <Heart size={22} /> },
  { label: "Story", icon: <Book size={22} /> },
  { label: "RSVP", icon: <CalendarDays size={22} /> },
  { label: "Gift", icon: <Gift size={22} /> },
];

interface BottomNavProps {
  activeIndex: number;
  onChange: (index: number) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeIndex, onChange }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onChange(index)}
            className={`flex flex-col items-center text-sm transition ${
              activeIndex === index ? "text-pink-500" : "text-gray-500"
            }`}
          >
            <div
              className={`mb-1 ${
                activeIndex === index ? "scale-110" : "scale-100"
              } transition`}
            >
              {item.icon}
            </div>
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
