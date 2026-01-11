import Link from "next/link";

export default function ServiceButton({
  label,
  href = "#",
}: {
  label: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        px-12 py-4
        sm:px-16 sm:py-8
        rounded-full
        bg-white/30
        backdrop-blur-sm
        text-sm sm:text-base
        tracking-wide
        text-black
        transition
        hover:bg-white/70
        hover:-translate-y-0.5 hover:shadow-xl
        cursor-pointer
      "
    >
      {label.toUpperCase()}
    </Link>
  );
}
