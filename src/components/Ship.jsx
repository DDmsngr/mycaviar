export default function Ship({ className = '' }) {
  return (
    <svg
      viewBox="0 0 700 180"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mast */}
      <rect x="302" y="8" width="3" height="88" />
      {/* Boom arms */}
      <path d="M303 35 L255 72" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M304 35 L350 72" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Flag */}
      <path d="M305 8 L320 17 L305 26 Z" opacity="0.7" />

      {/* Main superstructure */}
      <rect x="240" y="72" width="140" height="35" rx="2" />
      {/* Bridge */}
      <rect x="265" y="48" width="90" height="24" rx="1" />
      {/* Funnel */}
      <rect x="295" y="34" width="20" height="18" rx="1" opacity="0.9" />
      {/* Smoke wisps */}
      <path d="M300 30 Q296 18 302 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.25" />
      <path d="M307 28 Q312 16 308 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.15" />

      {/* Hull top */}
      <path d="M80 107 L590 107 L580 128 L90 128 Z" />
      {/* Hull body */}
      <path d="M90 128 Q200 145 350 148 Q500 145 580 128 L590 107 L80 107 Z" opacity="0.5" />

      {/* Anchor chain / portholes */}
      <circle cx="180" cy="112" r="4" fill="rgba(3,13,26,0.6)" />
      <circle cx="220" cy="112" r="4" fill="rgba(3,13,26,0.6)" />
      <circle cx="460" cy="112" r="4" fill="rgba(3,13,26,0.6)" />
      <circle cx="500" cy="112" r="4" fill="rgba(3,13,26,0.6)" />

      {/* Bow anchor chain */}
      <path d="M130 107 L105 128" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* Seagull 1 */}
      <path d="M100 48 Q115 38 130 48" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Seagull 2 */}
      <path d="M490 30 Q505 20 520 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Seagull 3 — small */}
      <path d="M420 62 Q430 55 440 62" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Seagull 4 — tiny far */}
      <path d="M580 50 Q587 45 594 50" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}
