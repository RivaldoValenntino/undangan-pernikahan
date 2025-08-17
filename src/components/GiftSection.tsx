import { useState, useEffect } from "react";
import { Copy } from "lucide-react";

export default function GiftSection() {
  const wallets = [
    {
      name: "Asep Irawan",
      bank: "BCA",
      account: "009 - 0222 2444 21",
    },
    {
      name: "Putri Amanda",
      bank: "BCA",
      account: "009 - 0222 2444 21",
    },
  ];

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  useEffect(() => {
    // konfigurasi Disqus
    (window as any).disqus_config = function () {
      this.page.url = window.location.href; // bisa pakai URL artikel
      this.page.identifier = "gift-section"; // ganti dengan slug / id unik halaman
    };

    // inject script kalau belum ada
    const d = document;
    if (!d.getElementById("disqus-script")) {
      const s = d.createElement("script");
      s.src = "https://undangan-pernikahan-zgnuv7k4xr.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date() + "");
      s.id = "disqus-script";
      (d.head || d.body).appendChild(s);
    }
  }, []);

  return (
    <div className="font-montaga">
      {/* Gift Section */}
      <section className="py-10 px-4 text-center">
        <h2 className="text-pink-600 text-3xl font-semibold mb-4">
          Give a Gift
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500 text-sm mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, ipsum
          erat pretium, tempus. Molestie ornare amet, placerat aliquet orci arcu
          pretium. Donec sit mauris tortor tortor tempus urna.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* Digital Wallet */}
          <div className="bg-white rounded-2xl shadow-md p-6 w-full">
            <h3 className="text-gray-700 text-xl font-semibold mb-4">
              Digital Wallet
            </h3>
            <p className="text-gray-400 text-xs mb-4">Tap to copy the number</p>
            <div className="space-y-4">
              {wallets.map((w, i) => (
                <div key={i}>
                  <p className="text-pink-500 font-semibold">{w.name}</p>
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2 mt-1">
                    <span className="text-gray-700 text-sm">{w.account}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(w.account, i)}
                      className="text-gray-400 hover:text-pink-500"
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                  <p className="text-xs text-pink-600 font-medium">{w.bank}</p>
                  {copiedIndex === i && (
                    <p className="text-green-500 text-xs mt-1">
                      Copied to clipboard!
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disqus Section */}
      <section className="w-full mx-auto px-4 py-10">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Share Your Thoughts
        </h3>
        <div id="disqus_thread" className="bg-white shadow-md rounded-xl p-4" />
      </section>
    </div>
  );
}
