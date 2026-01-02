export default function ServiceButton({ label }: { label: string }) {
  return (
    <button
      className="
        px-16 py-8
        rounded-full
        bg-white/30
        backdrop-blur-sm
        text-sm sm:text-base
        tracking-wide
        text-black
        transition
        hover:bg-white/70
        hover:text-black
        hover:-translate-y-0.5 hover:shadow-xl
        cursor-pointer
      "
    >
      {label.toUpperCase()}
    </button>
  );
}
