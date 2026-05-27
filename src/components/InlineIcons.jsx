export function PinIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M22 13c12-4 23 5 21 18-2 13-15 18-26 11" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M25 22c8-3 15 2 14 10-1 8-9 11-16 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4z" strokeWidth="2" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChipIcon({ type }) {
  if (type === "pin") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12Z" strokeWidth="2" />
        <circle cx="12" cy="9" r="2.5" strokeWidth="2" />
      </svg>
    );
  }
  if (type === "cap") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m3 8 9-4 9 4-9 4-9-4Z" strokeWidth="2" />
        <path d="M7 10v5c2 2 8 2 10 0v-5" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="5" strokeWidth="2" />
      <path d="m8 13-2 8 6-3 6 3-2-8" strokeWidth="2" />
    </svg>
  );
}
