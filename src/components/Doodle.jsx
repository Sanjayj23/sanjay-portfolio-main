const common = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function DoodleIcon({ type }) {
  switch (type) {
    case "pencil":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="6" d="M16 79 69 26l12 12-53 53-17 6 5-18Z" />
          <path {...common} strokeWidth="6" d="m64 30 7-13 12 12-13 7" />
          <path {...common} strokeWidth="5" d="M17 78 29 90" />
        </svg>
      );
    case "charcoal":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="9" d="M22 73 65 18c3-4 10 1 7 5L29 80c-4 5-11-1-7-7Z" />
          <path {...common} strokeWidth="4" d="M19 82c12-3 21-1 31 5" />
          <path {...common} strokeWidth="3" opacity=".65" d="M33 75c9 0 16 2 23 6" />
        </svg>
      );
    case "paintbrush":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="6" d="M66 11c9 8 11 18 4 25L31 75c-5 5-14-4-9-9l40-40c-2-7-1-12 4-15Z" />
          <path {...common} strokeWidth="6" d="M23 74c-8 2-13 7-16 16 10-2 17-6 22-12" />
          <path {...common} strokeWidth="6" d="M70 13 87 30" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="5" d="M50 7 58 39 89 27 64 51 91 69 58 64 49 94 42 62 11 74 36 51 12 30 42 39Z" />
          <path {...common} strokeWidth="3" opacity=".75" d="M50 18 51 82M19 51h64" />
        </svg>
      );
    case "asterisk":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="7" d="M50 11v78M17 31l66 38M83 31 17 69" />
          <path {...common} strokeWidth="4" opacity=".7" d="M28 16 72 84M72 16 28 84" />
        </svg>
      );
    case "swirl":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="7" d="M79 58c-6 20-36 25-53 8-15-15-8-42 14-49 21-6 40 11 35 29-5 17-31 20-40 6-8-13 7-27 20-21 9 4 10 16 2 21" />
        </svg>
      );
    case "palette":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="6" d="M52 12c23 0 39 14 39 34 0 14-9 20-20 19-6 0-8 5-7 10 2 8-5 14-17 13-22-2-38-18-38-39 0-21 18-37 43-37Z" />
          <circle cx="34" cy="37" r="4" fill="currentColor" />
          <circle cx="50" cy="29" r="4" fill="currentColor" />
          <circle cx="66" cy="39" r="4" fill="currentColor" />
          <circle cx="43" cy="55" r="5" fill="currentColor" />
        </svg>
      );
    case "nib":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="6" d="M50 10 82 74 50 92 18 74 50 10Z" />
          <path {...common} strokeWidth="5" d="M50 10v44" />
          <circle cx="50" cy="59" r="7" {...common} strokeWidth="5" />
          <path {...common} strokeWidth="5" d="M43 66 25 78M57 66l18 12" />
        </svg>
      );
    case "film":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <rect x="16" y="20" width="68" height="60" rx="6" {...common} strokeWidth="6" />
          <path {...common} strokeWidth="5" d="M34 20v60M66 20v60M16 38h18M66 38h18M16 62h18M66 62h18" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="7" d="M58 8 18 55h27L39 92l43-52H55Z" />
        </svg>
      );
    case "crown":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="6" d="M16 70 23 31l21 23 12-32 14 32 20-23-7 39H16Z" />
          <path {...common} strokeWidth="6" d="M20 80h60" />
        </svg>
      );
    case "drop":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="6" d="M50 10c15 22 27 37 27 55 0 16-12 27-27 27S23 81 23 65c0-18 12-33 27-55Z" />
          <path {...common} strokeWidth="5" d="M39 70c2 7 8 11 16 10" />
        </svg>
      );
    case "tape":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="6" d="M16 36h68v28H16z" />
          <path {...common} strokeWidth="3" strokeDasharray="4 5" d="M25 36v28M43 36v28M61 36v28M79 36v28" />
        </svg>
      );
    case "clip":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="8" d="M33 82V26c0-15 22-15 22 0v45c0 21-33 21-33 0V30" />
        </svg>
      );
    case "camera":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <rect x="14" y="28" width="72" height="52" rx="8" {...common} strokeWidth="6" />
          <circle cx="50" cy="54" r="14" {...common} strokeWidth="6" />
          <path {...common} strokeWidth="5" d="M34 28 42 18h16l8 10" />
        </svg>
      );
    case "compass":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="34" {...common} strokeWidth="6" />
          <path {...common} strokeWidth="6" d="M50 18 58 50 50 82 42 50Z" />
          <path {...common} strokeWidth="5" d="M18 50h64M50 18v64" opacity=".5" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="6" d="M50 12c-16 0-26 12-26 28 0 10 6 18 14 24v8h24v-8c8-6 14-14 14-24 0-16-10-28-26-28Z" />
          <path {...common} strokeWidth="5" d="M38 72h24M42 80h16" />
          <path {...common} strokeWidth="4" opacity=".6" d="M50 6v4M22 28l6 6M78 28l-6 6" />
        </svg>
      );
    case "scissors":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="28" cy="28" r="10" {...common} strokeWidth="5" />
          <circle cx="28" cy="72" r="10" {...common} strokeWidth="5" />
          <path {...common} strokeWidth="6" d="M36 32 72 12M36 68 72 88M72 12 58 50 72 88" />
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="5" d="M50 8v84M8 50h84M20 20l60 60M80 20 20 80" />
          <path {...common} strokeWidth="4" opacity=".65" d="M50 22 54 46 78 50 54 54 50 78 46 54 22 50 46 46Z" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="6" d="M50 82S18 62 18 38c0-16 14-28 30-18 2 2 3 5 4 8 1-3 2-6 4-8 16-10 30 2 30 18 0 24-32 44-32 44Z" />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <path {...common} strokeWidth="7" d="M18 50h58M52 28l24 22-24 22" />
        </svg>
      );
    default:
      return null;
  }
}
