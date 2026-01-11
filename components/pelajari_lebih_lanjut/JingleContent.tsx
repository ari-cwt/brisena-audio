export default function JingleContent() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="space-y-3 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Jingle & Commercial Music
        </h2>
        <h3>Harga sudah termasuk 1 orang penyanyi</h3>
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
            <span className="font-medium text-white">
              Proses Mixing & Mastering
            </span>
            <p className="mt-1">
              • Proses pengerjaan dilakukan sesuai brief yang telah disepakati,
              dengan estimasi waktu 5–10 hari kerja.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">Preview</span>
            <p className="mt-1">
              • Hasil awal akan dikirim untuk didengarkan oleh klien.
              <br />
              • Klien diharapkan memberikan feedback maksimal 2 hari kerja
              setelah file dikirim.
              <br />• Apabila tidak ada feedback dalam periode tersebut, hasil
              terakhir dianggap telah disetujui.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">Revisi</span>
            <p className="mt-1">
              • Tersedia 2 (dua) kali revisi minor, dengan estimasi 2 hari kerja
              per revisi.
              <br />• Revisi tambahan atau perubahan di luar revisi minor akan
              dikenakan biaya Rp1.000.000 per revisi.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">
              Finalisasi & Pengiriman File
            </span>
            <p className="mt-1">
              • File master final akan dikirim melalui Google Drive atau
              Dropbox.
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
