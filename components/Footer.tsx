export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* Top subtle gradient divider */}
      <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="px-6 sm:px-12 lg:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold tracking-widest mb-4">
              BRISENA AUDIO PRODUCTION
            </h3>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              High-performance sound production space built for artists,
              creators, and industry professionals.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-4">
              CONTACT
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Address: Street Name, City, Country</li>
              <li>Phone: +00 0000 0000</li>
              <li>Email: hello@yourstudio.com</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest mb-4">
              FOLLOW
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  SoundCloud
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>© 2025 Brisena Audio Production. All rights reserved.</span>
          <span>Designed & built with precision.</span>
        </div>
      </div>
    </footer>
  );
}
