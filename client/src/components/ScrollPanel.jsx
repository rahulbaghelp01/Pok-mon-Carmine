import { forwardRef, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import DeckCard from "./deckcard";

/**
 * ScrollPanel
 * A parchment "scroll" that unrolls open/closed, like the reference image.
 * Structure: top rod -> paper (height-animated) -> bottom rod, stacked in a
 * normal flex column, so the bottom rod naturally travels down as the paper
 * grows taller. No manual position math needed.
 *
 * Usage:
 *   <ScrollPanel isOpen={open} pokemonCount={12} deck={[{image, name}, ...]} />
 */
const ScrollPanel = forwardRef(function ScrollPanel(
  { isOpen, pokemonCount = 0, deck = [], className = "" },
  ref
) {
  const paperWrapRef = useRef(null);
  const contentRef = useRef(null);
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    const wrap = paperWrapRef.current;
    const content = contentRef.current;
    if (!wrap || !content) return;

    if (tlRef.current) tlRef.current.kill();

    if (isOpen) {
      // Measure the natural height of the content so we can animate to it
      // (GSAP can't tween to "auto").
      const targetHeight = content.scrollHeight;

      gsap.set(wrap, { height: 0 });
      gsap.set(content, { opacity: 0, y: -12 });

      tlRef.current = gsap
        .timeline()
        .to(wrap, {
          height: targetHeight,
          duration: 0.7,
          ease: "power3.out",
        })
        .to(
          content,
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "-=0.25"
        );
    } else {
      tlRef.current = gsap
        .timeline()
        .to(content, { opacity: 0, y: -8, duration: 0.2, ease: "power1.in" })
        .to(wrap, { height: 0, duration: 0.5, ease: "power2.in" }, "-=0.05");
    }

    return () => tlRef.current && tlRef.current.kill();
  }, [isOpen, deck, pokemonCount]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center w-44 sm:w-52 md:w-60 lg:w-64 xl:w-72 ${className}`}
    >
      {/* top rod */}
      <RodCap />

      {/* the parchment itself, height-animated by gsap */}
      <div
        ref={paperWrapRef}
        className="w-[94%] overflow-hidden"
        style={{ height: 0 }}
      >
        <div
          className="bg-[image:var(--paper)] px-3 py-5 sm:px-4 sm:py-6 md:px-5 md:py-8"
          style={{ clipPath: TORN_EDGE_CLIP }}
        >
          <div ref={contentRef} className="font-cormorant text-[var(--black)]">
            <p className="font-cinzel text-center text-[var(--gold)] text-sm sm:text-base md:text-lg tracking-wide mb-3 sm:mb-4 drop-shadow-sm">
              Trainer&apos;s Scroll
            </p>

            <div className="flex flex-col gap-1 text-[11px] sm:text-xs md:text-sm border-b border-[var(--black)]/20 pb-3 sm:pb-4 mb-3 sm:mb-4">
              <span className="font-bold tracking-wide">
                Pokemon Collected
              </span>
              <span className="text-xl sm:text-2xl font-cinzel">{pokemonCount}</span>
            </div>

            <div className="flex flex-col gap-2 text-[11px] sm:text-xs md:text-sm">
              <span className="font-bold tracking-wide">Deck</span>
              <div className="flex gap-1.5 sm:gap-2 md:gap-3 justify-center">
                <DeckCard pokemonsObject={deck[0]} />
                <DeckCard pokemonsObject={deck[1]} />
                <DeckCard pokemonsObject={deck[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom rod - moves down automatically because it's below the
          growing paper in normal flex flow */}
      <RodCap />
    </div>
  );
});

function RodCap() {
  return (
    <div className="relative w-full h-4 flex items-center shrink-0">
      <span className="absolute -left-2 w-4 h-4 rounded-full bg-[var(--gold)] shadow-md shadow-black/50" />
      <div className="w-full h-3 rounded-full bg-gradient-to-b from-amber-700 via-amber-900 to-amber-950 shadow-md shadow-black/50" />
      <span className="absolute -right-2 w-4 h-4 rounded-full bg-[var(--gold)] shadow-md shadow-black/50" />
    </div>
  );
}

// Zig-zag polygon that gives the paper a torn-edge look on the left/right
// sides, flat top/bottom (since the rods cover those).
const TORN_EDGE_CLIP =
  "polygon(0% 2%,3% 0%,7% 3%,12% 0%,18% 2%,24% 0%,30% 3%,36% 0%,42% 2%," +
  "48% 0%,54% 3%,60% 0%,66% 2%,72% 0%,78% 3%,84% 0%,90% 2%,96% 0%,100% 2%," +
  "100% 98%,96% 100%,90% 97%,84% 100%,78% 98%,72% 100%,66% 97%,60% 100%," +
  "54% 98%,48% 100%,42% 97%,36% 100%,30% 98%,24% 100%,18% 97%,12% 100%," +
  "7% 98%,3% 100%,0% 98%)";

export default ScrollPanel;