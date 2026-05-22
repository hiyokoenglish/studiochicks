// Hiyoko chick character — SVG components in multiple poses.
// All use currentColor for the body so palette swaps work.

const HiyokoBase = ({ children, viewBox = "0 0 100 100", size = 80, style }) => (
  <svg viewBox={viewBox} width={size} height={size} style={{ display: 'block', ...style }} aria-hidden="true">
    {children}
  </svg>
);

// Standing chick — full body, slight side glance
function HiyokoStanding({ size = 90, color = '#F5C66F', beak = '#E89A4F', cheek = '#F5A98C', style }) {
  return (
    <HiyokoBase size={size} style={style}>
      {/* feet */}
      <path d="M40 86 L36 94 M40 86 L42 94 M40 86 L44 94" stroke={beak} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M60 86 L56 94 M60 86 L60 94 M60 86 L64 94" stroke={beak} strokeWidth="2.5" strokeLinecap="round"/>
      {/* body */}
      <ellipse cx="50" cy="58" rx="28" ry="28" fill={color}/>
      {/* tiny wing */}
      <path d="M28 58 Q22 56 24 66 Q30 68 32 62 Z" fill={color} stroke="rgba(0,0,0,0.08)" strokeWidth="0.5"/>
      {/* head tuft */}
      <path d="M48 30 Q50 24 52 30" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* cheeks */}
      <circle cx="38" cy="60" r="4" fill={cheek} opacity="0.7"/>
      <circle cx="62" cy="60" r="4" fill={cheek} opacity="0.7"/>
      {/* eyes */}
      <ellipse cx="42" cy="52" rx="2.4" ry="3" fill="#2b1f14"/>
      <ellipse cx="58" cy="52" rx="2.4" ry="3" fill="#2b1f14"/>
      <circle cx="42.8" cy="51" r="0.8" fill="#fff"/>
      <circle cx="58.8" cy="51" r="0.8" fill="#fff"/>
      {/* beak */}
      <path d="M48 58 L50 62 L52 58 Z" fill={beak}/>
    </HiyokoBase>
  );
}

// Waving chick — one wing raised, big smile
function HiyokoWaving({ size = 90, color = '#F5C66F', beak = '#E89A4F', cheek = '#F5A98C', style }) {
  return (
    <HiyokoBase size={size} style={style}>
      <path d="M40 86 L36 94 M40 86 L42 94 M40 86 L44 94" stroke={beak} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M60 86 L56 94 M60 86 L60 94 M60 86 L64 94" stroke={beak} strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="50" cy="58" rx="28" ry="28" fill={color}/>
      {/* raised wing waving */}
      <path d="M76 50 Q86 38 80 30 Q70 32 72 46 Z" fill={color} stroke="rgba(0,0,0,0.08)" strokeWidth="0.5"/>
      <path d="M28 60 Q22 60 26 68 Q32 68 32 62 Z" fill={color} stroke="rgba(0,0,0,0.08)" strokeWidth="0.5"/>
      <path d="M48 30 Q50 24 52 30" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="38" cy="60" r="4" fill={cheek} opacity="0.7"/>
      <circle cx="62" cy="60" r="4" fill={cheek} opacity="0.7"/>
      {/* eyes — happy curves */}
      <path d="M39 51 Q42 48 45 51" stroke="#2b1f14" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M55 51 Q58 48 61 51" stroke="#2b1f14" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* open beak smiling */}
      <path d="M46 58 Q50 64 54 58 L52 60 L48 60 Z" fill={beak}/>
    </HiyokoBase>
  );
}

// Peeking chick — body cut off, only head showing
function HiyokoPeek({ size = 90, color = '#F5C66F', beak = '#E89A4F', cheek = '#F5A98C', style }) {
  return (
    <HiyokoBase size={size} viewBox="0 0 100 60" style={style}>
      <ellipse cx="50" cy="58" rx="32" ry="32" fill={color}/>
      <path d="M48 28 Q50 22 52 28" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="37" cy="48" r="4" fill={cheek} opacity="0.7"/>
      <circle cx="63" cy="48" r="4" fill={cheek} opacity="0.7"/>
      <ellipse cx="42" cy="40" rx="2.6" ry="3.2" fill="#2b1f14"/>
      <ellipse cx="58" cy="40" rx="2.6" ry="3.2" fill="#2b1f14"/>
      <circle cx="42.8" cy="39" r="0.9" fill="#fff"/>
      <circle cx="58.8" cy="39" r="0.9" fill="#fff"/>
      <path d="M47 46 L50 50 L53 46 Z" fill={beak}/>
    </HiyokoBase>
  );
}

// Chick with a book — for course/teacher sections
function HiyokoReading({ size = 110, color = '#F5C66F', beak = '#E89A4F', cheek = '#F5A98C', bookColor = '#C97B5B', style }) {
  return (
    <HiyokoBase size={size} style={style}>
      <path d="M38 84 L34 92 M38 84 L40 92 M38 84 L42 94" stroke={beak} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M62 84 L58 92 M62 84 L62 92 M62 84 L66 94" stroke={beak} strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="50" cy="54" rx="28" ry="28" fill={color}/>
      <path d="M48 26 Q50 20 52 26" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="38" cy="56" r="4" fill={cheek} opacity="0.7"/>
      <circle cx="62" cy="56" r="4" fill={cheek} opacity="0.7"/>
      <ellipse cx="42" cy="48" rx="2.4" ry="3" fill="#2b1f14"/>
      <ellipse cx="58" cy="48" rx="2.4" ry="3" fill="#2b1f14"/>
      <circle cx="42.8" cy="47" r="0.8" fill="#fff"/>
      <circle cx="58.8" cy="47" r="0.8" fill="#fff"/>
      <path d="M48 54 L50 58 L52 54 Z" fill={beak}/>
      {/* book */}
      <g transform="translate(28 66) rotate(-6)">
        <rect x="0" y="0" width="44" height="22" rx="2" fill={bookColor}/>
        <rect x="2" y="2" width="40" height="18" fill="#FBF6EC"/>
        <line x1="22" y1="2" x2="22" y2="20" stroke={bookColor} strokeWidth="0.8"/>
        <line x1="6" y1="7" x2="18" y2="7" stroke={bookColor} strokeWidth="0.6" opacity="0.6"/>
        <line x1="6" y1="11" x2="18" y2="11" stroke={bookColor} strokeWidth="0.6" opacity="0.6"/>
        <line x1="6" y1="15" x2="14" y2="15" stroke={bookColor} strokeWidth="0.6" opacity="0.6"/>
        <line x1="26" y1="7" x2="38" y2="7" stroke={bookColor} strokeWidth="0.6" opacity="0.6"/>
        <line x1="26" y1="11" x2="38" y2="11" stroke={bookColor} strokeWidth="0.6" opacity="0.6"/>
        <line x1="26" y1="15" x2="34" y2="15" stroke={bookColor} strokeWidth="0.6" opacity="0.6"/>
      </g>
    </HiyokoBase>
  );
}

// Egg with chick inside (cracked) — for hatching/start metaphor
function HiyokoEgg({ size = 90, color = '#F5C66F', beak = '#E89A4F', shell = '#FBF6EC', style }) {
  return (
    <HiyokoBase size={size} style={style}>
      {/* bottom egg shell */}
      <path d="M22 60 Q22 92 50 92 Q78 92 78 60 L72 56 L66 62 L60 56 L54 62 L48 56 L42 62 L36 56 L30 62 L24 56 Z"
            fill={shell} stroke="#d8c9a8" strokeWidth="1"/>
      {/* chick head poking out */}
      <ellipse cx="50" cy="44" rx="20" ry="20" fill={color}/>
      <path d="M48 22 Q50 17 52 22" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="44" cy="44" rx="2" ry="2.6" fill="#2b1f14"/>
      <ellipse cx="56" cy="44" rx="2" ry="2.6" fill="#2b1f14"/>
      <circle cx="44.6" cy="43" r="0.7" fill="#fff"/>
      <circle cx="56.6" cy="43" r="0.7" fill="#fff"/>
      <path d="M48 49 L50 53 L52 49 Z" fill={beak}/>
      {/* top egg shell — cracked off */}
      <path d="M30 32 L34 26 L40 30 L46 24 L52 30 L58 24 L64 30 L68 26"
            stroke="#d8c9a8" strokeWidth="1" fill="none"/>
      <path d="M26 36 Q26 16 50 16 Q74 16 74 36 L68 32 L62 38 L56 32 L50 38 L44 32 L38 38 L32 32 Z"
            fill={shell} stroke="#d8c9a8" strokeWidth="1" opacity="0"/>
    </HiyokoBase>
  );
}

// Tiny logo mark — chick face in a circle
function HiyokoMark({ size = 40, color = '#F5C66F', beak = '#E89A4F', cheek = '#F5A98C', bg = 'transparent', style }) {
  return (
    <HiyokoBase size={size} style={style}>
      {bg !== 'transparent' && <circle cx="50" cy="50" r="48" fill={bg}/>}
      <circle cx="50" cy="50" r="34" fill={color}/>
      <path d="M48 17 Q50 12 52 17" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="36" cy="54" r="4.5" fill={cheek} opacity="0.7"/>
      <circle cx="64" cy="54" r="4.5" fill={cheek} opacity="0.7"/>
      <ellipse cx="42" cy="46" rx="2.6" ry="3.2" fill="#2b1f14"/>
      <ellipse cx="58" cy="46" rx="2.6" ry="3.2" fill="#2b1f14"/>
      <circle cx="42.8" cy="45" r="0.9" fill="#fff"/>
      <circle cx="58.8" cy="45" r="0.9" fill="#fff"/>
      <path d="M47 52 L50 57 L53 52 Z" fill={beak}/>
    </HiyokoBase>
  );
}

// Footprint trail decoration
function HiyokoFootprints({ count = 5, color = '#E89A4F', size = 12, style }) {
  return (
    <svg width={count * size * 1.8} height={size * 2.2} style={style} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <g key={i} transform={`translate(${i * size * 1.8 + size * 0.4} ${i % 2 ? size * 0.2 : size * 1.0})`}>
          <ellipse cx="0" cy="0" rx={size * 0.25} ry={size * 0.35} fill={color} opacity="0.5"/>
          <ellipse cx={-size * 0.35} cy={-size * 0.25} rx={size * 0.13} ry={size * 0.18} fill={color} opacity="0.5"/>
          <ellipse cx="0" cy={-size * 0.45} rx={size * 0.13} ry={size * 0.18} fill={color} opacity="0.5"/>
          <ellipse cx={size * 0.35} cy={-size * 0.25} rx={size * 0.13} ry={size * 0.18} fill={color} opacity="0.5"/>
        </g>
      ))}
    </svg>
  );
}

Object.assign(window, {
  HiyokoStanding, HiyokoWaving, HiyokoPeek, HiyokoReading,
  HiyokoEgg, HiyokoMark, HiyokoFootprints,
});
