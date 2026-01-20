export default function PembuatanLaguContent() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="space-y-3 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Pembuatan Lagu
        </h2>

        <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">
          mulai dari
        </span>

        <p className="text-xl md:text-2xl font-medium">Rp. 2.500.000</p>
      </div>

      {/* DESCRIPTION */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight">
          Ketentuan & Alur Pengerjaan
        </h3>

        <ol className="space-y-5 list-decimal list-inside text-white/80 text-sm md:text-base leading-relaxed">
          <li>
            <span className="font-medium text-white">Diskusi Awal</span>
            <p className="mt-1">
              • Diskusi kebutuhan proyek, referensi sound, dan target hasil
              mixing & mastering yang diinginkan.
              <br />• Durasi lagu maksimal 5 menit.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">Penentuan Harga</span>
            <p className="mt-1">
              • Harga ditentukan berdasarkan tingkat kompleksitas lagu, jumlah
              track, dan kebutuhan pengerjaan.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">Down Payment (DP)</span>
            <p className="mt-1">
              • Klien melakukan pembayaran DP sebesar 30% dari total harga
              sebagai tanda dimulainya proyek.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">Proses Produksi Lagu</span>
            <p className="mt-1">
              • Proses penulisan lirik, aransemen, dan produksi musik dilakukan
              sesuai hasil diskusi.
              <br />• Estimasi waktu pengerjaan 7–10 hari kerja.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">Preview</span>
            <p className="mt-1">
              • Hasil awal akan dikirim untuk didengarkan oleh klien.
              <br />• Feedback maksimal 2 hari kerja setelah file dikirim.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">Revisi</span>
            <p className="mt-1">
              • 2 kali revisi minor (±2 hari kerja per revisi).
              <br />• Revisi tambahan dikenakan biaya Rp1.000.000 per revisi.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">
              Finalisasi & Pengiriman File
            </span>
            <p className="mt-1">
              • File master final dikirim via Google Drive atau Dropbox.
            </p>
          </li>
        </ol>
      </div>

      {/* EXTRA INFO */}
      <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-center">
        <p className="text-white/80">
          <span className="font-medium text-white">
            Penambahan Session Player:
          </span>{" "}
          Rp. 1.200.000 / orang
        </p>
      </div>
    </div>
  );
}
