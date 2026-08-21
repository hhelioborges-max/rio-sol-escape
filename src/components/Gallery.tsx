import { useCallback, useEffect, useState } from "react";

export type GalleryItem = { src: string; alt: string; span?: string };

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.src + i}
            type="button"
            onClick={() => setIndex(i)}
            className={`group relative overflow-hidden bg-muted ${item.span ?? "aspect-square"}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 bg-river-deep/0 transition-colors duration-500 group-hover:bg-river-deep/20" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-river-deep/95 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={items[index]?.src}
            alt={items[index]?.alt ?? ""}
            className="max-h-[85vh] max-w-full object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white/90 hover:bg-white/10"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/90 hover:bg-white/10 sm:left-8"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Próxima"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white/90 hover:bg-white/10 sm:right-8"
          >
            ›
          </button>
          <p className="absolute bottom-6 left-0 right-0 text-center text-xs tracking-widest text-white/70">
            {index + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}
