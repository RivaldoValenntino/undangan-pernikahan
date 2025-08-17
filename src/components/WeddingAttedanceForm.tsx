import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function WeddingAttendanceForm() {
  const [formData, setFormData] = useState({
    nama: "",
    jumlah: "",
    status: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(false);
  const statusOptions = ["Hadir", "Tidak Hadir"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusSelect = (value: string) => {
    setFormData({ ...formData, status: value });
    setOpenDropdown(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const created_at = new Date().toISOString();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxRTwN4OsC9YJkDxA8rjYPImQEGnPjd18QnBvWyGRbEoFLbQA2onPNr2nkFSPXPUS4Y/exec";

    try {
      if (!formData.status) {
        alert("Status kehadiran harus diisi.");
        return;
      }
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams({
          ...formData,
          created_at,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
        setFormData({ nama: "", jumlah: "", status: "" });
      } else {
        alert("Terjadi kesalahan, coba lagi.");
      }
    } catch (error) {
      console.error(error);
      alert("Gagal mengirim data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#FFF2EB] h-screen px-4 font-montaga pb-32">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white shadow-md rounded-md p-12 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Konfirmasi Kehadiran
        </h2>

        {/* Nama */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Masukkan nama Anda"
          />
        </div>

        {/* Jumlah Tamu */}
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Jumlah Tamu
          </label>
          <input
            type="number"
            name="jumlah"
            value={formData.jumlah}
            onChange={handleChange}
            required
            min="1"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Masukkan jumlah tamu"
          />
        </div>

        {/* Custom Dropdown Status Kehadiran */}
        <div className="relative">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Status Kehadiran
          </label>
          <div
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg flex justify-between items-center cursor-pointer bg-white hover:border-pink-400 transition"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            {formData.status || "Pilih Status"}
            <ChevronDown
              className={`w-5 h-5 transition-transform ${openDropdown ? "rotate-180" : ""}`}
            />
          </div>
          {openDropdown && (
            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              {statusOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => handleStatusSelect(option)}
                  className="px-4 py-3 text-lg hover:bg-pink-100 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-500 text-white font-bold text-lg py-3 rounded-lg hover:bg-pink-600 transition disabled:opacity-60"
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>

        {success && (
          <p className="text-green-600 text-center text-lg mt-4">
            Terima kasih! Data berhasil dikirim.
          </p>
        )}
      </form>
    </div>
  );
}
