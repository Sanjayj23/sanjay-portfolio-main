import clsx from "clsx";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const variants = {
  squiggle: (
    <svg viewBox="0 0 120 24" aria-hidden="true">
      <path {...stroke} strokeWidth="3.5" d="M3 14c28-12 56 10 84-4 18-9 28-8 34-6" />
      <path {...stroke} strokeWidth="2" opacity="0.65" d="M8 19c24-8 50 8 76-2" />
    </svg>
  ),
  squiggleWide: (
    <svg viewBox="0 0 180 28" aria-hidden="true">
      <path {...stroke} strokeWidth="4" d="M4 13c42-14 86 17 172-2" />
      <path {...stroke} strokeWidth="2" opacity="0.7" d="M12 20c38-10 82 12 150-1" />
    </svg>
  ),
  underline: (
    <svg viewBox="0 0 100 16" aria-hidden="true">
      <path {...stroke} strokeWidth="4" d="M4 10c24-8 48 12 72 4 12-4 18-6 24-4" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path {...stroke} strokeWidth="4" d="M8 24h28M26 14l10 10-10 10" />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path {...stroke} strokeWidth="3" d="M24 4v40M4 24h40M10 10l28 28M38 10 10 38" />
    </svg>
  ),
  starSmall: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path {...stroke} strokeWidth="3" d="M24 6 27 18 39 15 30 24 39 33 27 30 24 42 21 30 9 33 18 24 9 15 21 18Z" />
    </svg>
  ),
  loop: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path {...stroke} strokeWidth="4" d="M34 18c-2-12-20-14-28-4-8 10 2 26 18 24 10-1 16-8 14-16-2-10-14-12-22-6" />
    </svg>
  ),
  dots: (
    <svg viewBox="0 0 48 12" aria-hidden="true">
      <circle cx="6" cy="6" r="3" fill="currentColor" />
      <circle cx="24" cy="6" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="42" cy="6" r="3" fill="currentColor" opacity="0.45" />
    </svg>
  ),
  zigzag: (
    <svg viewBox="0 0 64 20" aria-hidden="true">
      <path {...stroke} strokeWidth="3" d="M4 10 16 4 28 16 40 4 52 16 60 10" />
    </svg>
  ),
  circleBurst: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="10" {...stroke} strokeWidth="3" />
      <path {...stroke} strokeWidth="2.5" d="M24 4v8M24 36v8M4 24h8M36 24h8" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path {...stroke} strokeWidth="5" d="M10 26 20 36 38 14" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path {...stroke} strokeWidth="3.5" d="M24 40S6 28 6 18c0-8 7-14 14-10 2 1 3 3 4 5 1-2 2-4 4-5 7-4 14 2 14 10 0 10-18 22-18 22Z" />
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path {...stroke} strokeWidth="4" d="M20 6v28M6 20h28" />
    </svg>
  ),
};

export function MiniDoodle({ variant = "squiggle", className, style, white = false, size }) {
  const content = variants[variant];
  if (!content) return null;

  const wide = variant === "squiggle" || variant === "squiggleWide" || variant === "underline" || variant === "zigzag" || variant === "dots";

  return (
    <span
      className={clsx("mini-doodle", wide && "mini-doodle-wide", white && "white", className)}
      style={{ "--w": size, ...style }}
      aria-hidden="true"
    >
      {content}
    </span>
  );
}
