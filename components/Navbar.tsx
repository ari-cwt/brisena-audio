export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-16 items-center justify-center">
        <div
          className="
            h-full
            w-full
            bg-black/40
            backdrop-blur-md
            flex
            items-center
            justify-center
            text-center
          "
        >
          <span className="text-sm sm:text-base font-semibold tracking-tight text-white">
            BRISENA AUDIO PRODUCTION
          </span>
        </div>
      </div>
    </header>
  );
}
