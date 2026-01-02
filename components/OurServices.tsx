import ServiceButton from "./ServiceButton";

export default function OurServices() {
  return (
    <section className="h-screen w-full bg-black text-white">
      <div className="h-full flex flex-col">
        {/* TOP (title area) */}
        <div className="flex items-center px-4 sm:px-8 lg:px-32 pt-20 sm:pt-24 lg:pt-32 pb-6 sm:pb-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight">
            OUR SERVICES
          </h2>
        </div>

        {/* BOTTOM (video area) */}
        <div className="relative px-4 sm:px-8 lg:px-32 pb-8 sm:pb-12 lg:pb-16">
          <div className="relative w-full h-[75vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden rounded-xl">
            {/* Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/visualizer.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-orange-800/50 via-indigo-800/50 to-purple-900/60" />

            {/* CENTER PANEL */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="w-full max-w-3xl">
                {/* MOBILE */}
                <div className="flex flex-col gap-4 sm:hidden">
                  <ServiceButton label="Recording" />
                  <ServiceButton label="Mixing" />
                  <ServiceButton label="Sound Design" />
                  <ServiceButton label="Mastering" />
                  <ServiceButton label="Post Production" />
                </div>

                {/* DESKTOP */}
                <div className="hidden sm:flex flex-col gap-6">
                  <div className="flex justify-between gap-4">
                    <ServiceButton label="Recording" />
                    <ServiceButton label="Mixing" />
                  </div>

                  <div className="flex justify-center">
                    <ServiceButton label="Sound Design" />
                  </div>

                  <div className="flex justify-between gap-4">
                    <ServiceButton label="Mastering" />
                    <ServiceButton label="Post Production" />
                  </div>
                </div>
              </div>
            </div>
            {/* END CENTER PANEL */}
          </div>
        </div>
      </div>
    </section>
  );
}
