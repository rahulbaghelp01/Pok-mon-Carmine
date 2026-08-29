import frame from "../assets/svg-border/frame.svg";

/**
 * DeckCard
 * A stripped-down, display-only version of Card: same visual language
 * (gold frame, paper texture, name badge, stats), but no 3D flip, no
 * back side, and no redux/selection logic. Meant to sit 3-across inside
 * the scroll's "Deck" section.
 *
 * Pass the same shape you already pass to Card: { name, image | assets, type, hp, attack }
 */
export default function DeckCard({ pokemonsObject }) {
  if (!pokemonsObject) {
    return (
      <div className="h-[7.5rem] w-[5rem] sm:h-[8.5rem] sm:w-[5.75rem] md:h-[9.5rem] md:w-[6.5rem] rounded-md border border-[var(--black)]/20 bg-black/5 flex items-center justify-center">
        <span className="text-[9px] sm:text-[10px] text-[var(--black)]/40 font-cormorant">
          empty
        </span>
      </div>
    );
  }

  return (
    <div
      className="
        relative
        h-[7.5rem] w-[5rem]
        sm:h-[8.5rem] sm:w-[5.75rem]
        md:h-[9.5rem] md:w-[6.5rem]
        p-1.5
        bg-[var(--gold)]
        rounded-md
        shadow-md shadow-black/30
      "
    >
      <div className="relative h-full w-full bg-[image:var(--paper)] overflow-hidden rounded-sm">
        <div
          className={`${
            pokemonsObject.assets && pokemonsObject.type ? "h-full" : "h-[62%]"
          } w-full relative`}
        >
          <div className="absolute top-0 left-0 w-12 h-4 sm:w-14 sm:h-5 md:w-16 md:h-6 overflow-hidden">
            <img
              src={frame}
              className="absolute left-[-9px] top-[-1px] w-9 sm:w-10 md:w-12"
              alt=""
            />
          </div>

          <p className="absolute top-0 left-0.5 text-[var(--gold)] font-bold text-[7px] sm:text-[8px] md:text-[9px] leading-tight truncate max-w-[80%]">
            {pokemonsObject.name}
          </p>

          <img
            className={`w-full h-full object-cover ${
              pokemonsObject.assets ? "relative z-10" : ""
            }`}
            src={pokemonsObject.image || pokemonsObject.assets}
            alt={pokemonsObject.name || "pokemon"}
          />
        </div>

        {pokemonsObject.assets ? null : (
          <div className="font-bold flex flex-col justify-between h-[38%] p-1 gap-0.5 text-[var(--text)] font-cormorant text-[7px] sm:text-[8px] md:text-[9px] leading-tight">
            <p className="truncate">HP: {pokemonsObject.hp}</p>
            <p className="truncate">ATK: {pokemonsObject.attack}</p>
          </div>
        )}
      </div>
    </div>
  );
}
