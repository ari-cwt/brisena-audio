"use client";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  price: number | string;
  showBadge?: boolean;
  onOpen: () => void;
}

export default function ServiceCard({
  title,
  description,
  image,
  price,
  showBadge = false,
  onOpen,
}: ServiceCardProps) {
  const formattedPrice =
    typeof price === "number" ? `Rp. ${price.toLocaleString("id-ID")}` : price;

  return (
    <div className="group md:h-140 relative flex flex-col overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* CONTENT TOP */}
      <div className="flex items-center flex-col gap-2 p-6 text-center md:h-44">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h3>

        {showBadge && (
          <span className="w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">
            mulai dari
          </span>
        )}

        <p className="text-lg tracking-tight">{formattedPrice}</p>
      </div>

      {/* IMAGE */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* CONTENT BOTTOM */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <p className="text-sm text-white/70 leading-relaxed">{description}</p>

        {/* CTA BUTTON */}
        <button
          onClick={onOpen}
          className="
            relative
            mt-auto
            inline-flex
            items-center
            justify-center
            rounded-full
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            overflow-hidden
            transition
            cursor-pointer
          "
        >
          {/* BASE GRADIENT */}
          <span className="absolute inset-0 bg-linear-to-r from-orange-500/40 via-pink-500/40 to-purple-600/40" />

          {/* HOVER GRADIENT */}
          <span className="absolute inset-0 bg-linear-to-r from-orange-500/60 via-pink-500/60 to-purple-600/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          <span className="relative z-10">Pelajari lebih lanjut</span>
        </button>
      </div>
    </div>
  );
}
