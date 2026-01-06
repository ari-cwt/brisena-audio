"use client";

import { useState } from "react";

type PortfolioItem = {
  title: string;
  youtubeId: string;
};

const ITEMS_PER_PAGE = 6;

const portfolioItems: PortfolioItem[] = [
  {
    title:
      "O Little Town of Bethlehem - Merry Christmas 2022 from JOY TOBING (Cover)",
    youtubeId: "uqwkjhU2R8E",
  },
  {
    title: "Joy Tobing ( Cover ) - I look to you (Whitney Houston)",
    youtubeId: "jqah-XRLT3M",
  },
  {
    title: "JOY TOBING - Setia di JalanMu Tuhan (Joy Tobing Official)",
    youtubeId: "0eJwyKg7uFk",
  },
  { title: "KERETA API - Cover by THE CRP", youtubeId: "j4i4NYWXXCE" },
  { title: "Post Production – Film Audio", youtubeId: "IEyOYYoVrSc" },
  { title: "Mastering Demo – Pop Song", youtubeId: "SiHQU6OXVYA" },
  { title: "Electronic Music Session", youtubeId: "wWAdBZGJX5g" },
  { title: "Acoustic Recording Setup", youtubeId: "Jp_yhIptkC4" },
  { title: "Acoustic Recording Setup", youtubeId: "bKtOqzI6PnA" },
  { title: "Acoustic Recording Setup", youtubeId: "lXGiTXNT8BA" },
  { title: "Acoustic Recording Setup", youtubeId: "Be74FPJvwS8" },
  { title: "Acoustic Recording Setup", youtubeId: "sBA64CXaFRA" },
  { title: "Acoustic Recording Setup", youtubeId: "rCNC-fxY0oE" },
  { title: "Acoustic Recording Setup", youtubeId: "H0lerHJKS0o" },
  { title: "Acoustic Recording Setup", youtubeId: "tx_kewGOhZc" },
];

export default function PortfolioPage() {
  const [page, setPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(
    null
  );

  const totalPages = Math.ceil(portfolioItems.length / ITEMS_PER_PAGE);

  const currentItems = portfolioItems.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  function truncate(text: string, max = 20) {
    return text.length > max ? text.slice(0, max) + "..." : text;
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 sm:px-12 lg:px-24 pt-32 pb-20">
      {/* TITLE */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-12">
        PORTOFOLIO
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((item) => (
          <button
            key={item.youtubeId}
            onClick={() => setSelectedVideo(item)}
            className="
              group
              text-left
              rounded-xl
              overflow-hidden
              bg-neutral-900
              hover:bg-neutral-800
              transition
              cursor-pointer
            "
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
            </div>

            {/* Title */}
            <div className="p-4">
              <p className="text-lg font-medium">{truncate(item.title, 50)}</p>
            </div>
          </button>
        ))}
      </div>

      {/* FIXED PAGINATION */}
      <div className="fixed bottom-0 left-0 w-full z-40">
        <div className="mx-auto px-6 sm:px-12 lg:px-24 py-4 bg-black/70 backdrop-blur-md">
          <div className="flex justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNumber = i + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`
              px-4 py-2 rounded-full text-sm font-medium
              transition cursor-pointer
              ${
                page === pageNumber
                  ? "bg-white text-black"
                  : "bg-neutral-800 hover:bg-neutral-700"
              }
            `}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CONFIRM MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-md rounded-xl bg-neutral-900 p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Leave the site?</h3>
            <p className="text-neutral-300 mb-6">
              You are about to open this video on YouTube.
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setSelectedVideo(null)}
                className="px-5 py-2 rounded-full bg-neutral-700 hover:bg-neutral-600 transition cursor-pointer"
              >
                No
              </button>
              <a
                href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition cursor-pointer"
              >
                Yes
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
