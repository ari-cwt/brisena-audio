export default function RecordingContent() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="space-y-3 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Recording Studio
        </h2>

        <p className="text-xl md:text-2xl font-medium">Rp. 1.000.000 / shift</p>
      </div>

      {/* DESCRIPTION */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold tracking-tight">
          Ketentuan &amp; Alur Pengerjaan
        </h3>

        <ol className="space-y-5 list-decimal list-inside text-white/80 text-sm md:text-base leading-relaxed">
          <li>
            <span className="font-medium text-white">
              Diskusi &amp; Penjadwalan
            </span>
            <p className="mt-1">
              • Diskusi kebutuhan rekaman, jenis sesi (vokal/instrumen), serta
              penentuan jadwal studio.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">Penentuan Harga</span>
            <p className="mt-1">
              • Harga ditentukan berdasarkan durasi sesi, jumlah personel, dan
              kebutuhan teknis rekaman.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">Down Payment (DP)</span>
            <p className="mt-1">
              • Klien melakukan pembayaran DP sebesar 30% dari total biaya
              sebagai konfirmasi jadwal.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">Sesi Rekaman</span>
            <p className="mt-1">
              • Proses rekaman dilakukan sesuai jadwal yang telah disepakati,
              didampingi oleh operator studio.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">
              Preview Hasil Rekaman
            </span>
            <p className="mt-1">
              • Hasil rekaman dapat dipreview oleh klien setelah sesi selesai.
              <br />• Klien memberikan feedback maksimal 2 hari kerja setelah
              file dikirim.
            </p>
          </li>

          <li>
            <span className="font-medium text-white">Pengiriman File</span>
            <p className="mt-1">
              • File hasil rekaman dikirim melalui Google Drive atau Dropbox.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
