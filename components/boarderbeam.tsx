import React from "react";

/**
 * BorderBeamCardInline (Tailwind v4)
 * - Single component, zero external CSS. Drop-in and go.
 * - Uses CSS mask to reveal a moving gradient "beam" along the border.
 * - Keeps everything inline for portability.
 */
export default function BorderBeamCard({
  className,
  children,
  beams = 2,
  size = 360, // diameter of the gradient blob
  width = 1.5, // border width in px
  duration = 10, // seconds per loop
  palettes = [
    "bg-gradient-to-l from-transparent via-primary to-transparent",
    "bg-gradient-to-l from-transparent via-destructive to-transparent",
  ],
}: {
  className?: string;
  children: React.ReactNode;
  beams?: 1 | 2;
  size?: number;
  width?: number;
  duration?: number;
  palettes?: string[]; // Tailwind gradient class strings
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-xl bg-card text-card-foreground",
        "shadow-none border-0 p-6",
        className ?? "",
      ].join(" ")}
      style={
        {
          // expose as CSS vars so we can reuse below
          ["--beam-size" as any]: `${size}px`,
          ["--beam-speed" as any]: `${duration}s`,
          ["--beam-width" as any]: `${width}px`,
        } as React.CSSProperties
      }
      data-slot="card"
    >
      {/* content */}
      {children}

      {/* masked border container */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] [mask-composite:intersect] [mask-clip:padding-box,border-box]"
        style={{
          // Tailwind v4 arbitrary property for border width var (utility fallback below as well)
          borderWidth: `var(--beam-width)`,
        }}
      >
        {Array.from({ length: beams }).map((_, i) => {
          const palette = palettes[i % palettes.length];
          const start = i === 0 ? 7.25 : 64.4; // different starting offsets looks nicer
          return (
            <span
              key={i}
              className={[
                "absolute aspect-square rounded-full", // the moving gradient blob
                palette,
              ].join(" ")}
              style={
                {
                  width: `var(--beam-size)`,
                  // trace a big rounded rect around the card's rim
                  offsetPath: `rect(0px auto auto 0px round ${Math.max(
                    size,
                    300
                  )}px)`,
                  animation: `beam-move-${i} var(--beam-speed) linear infinite`,
                  offsetDistance: `${start}%`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>

      {/* inline keyframes + webkit mask fallbacks */}
      <style>{`
        @supports (-webkit-mask-box-image: inherit) {
          /* safari fallbacks to keep the mask working */
          .[mask-clip\\:padding-box\\,border-box] { -webkit-mask-clip: padding-box, border-box; }
          .[mask-image\\:linear-gradient\\(transparent\\,transparent\\)\\,linear-gradient\\(#000\\,#000\\)] { -webkit-mask-image: linear-gradient(transparent, transparent), linear-gradient(#000, #000); }
        }

        /* independent keyframes so each beam can start at a different offset */
        @keyframes beam-move-0 { from { offset-distance: 7.25%; } to { offset-distance: 107.25%; } }
        @keyframes beam-move-1 { from { offset-distance: 64.4%; } to { offset-distance: 164.4%; } }
      `}</style>
    </div>
  );
}

/*
Usage:
<BorderBeamCardInline className="max-w-xl w-full">
  <div className="space-y-6">
    ...your content...
  </div>
</BorderBeamCardInline>
*/