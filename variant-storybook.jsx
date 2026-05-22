// Variation B — Storybook / Picture-book
// Wavy dividers, blob shapes, illustrated badges, playful color blocks.

const B = {
  paper: '#FBF6E8',
  panel: '#FFFCF3',
  pink: '#F4C9B9',
  pinkDeep: '#E89E89',
  mustard: '#F0B83C',
  mustardDeep: '#D49520',
  sage: '#B8CDA0',
  sageDeep: '#7B9C5A',
  sky: '#B8D4DD',
  brown: '#7A5A3A',
  text: '#3D2E1F',
  subtext: '#7A6A52',
  border: 'rgba(122,90,58,0.18)',
};

const bStyles = {
  page: {
    width: '100%', background: B.paper, color: B.text,
    fontFamily: "'Noto Sans JP', system-ui, sans-serif",
    fontSize: 14, lineHeight: 1.7,
    overflow: 'hidden', position: 'relative',
  },
  brush: { fontFamily: "'Yusei Magic', 'Klee One', cursive", fontWeight: 400 },
  round: { fontFamily: "'Kosugi Maru', 'Klee One', cursive", fontWeight: 400 },
};

// Wavy SVG divider between colored sections
function Wavy({ from, to, flip = false }) {
  return (
    <div style={{ background: from, lineHeight: 0 }}>
      <svg viewBox="0 0 420 40" width="100%" height="40" preserveAspectRatio="none"
           style={{ display: 'block', transform: flip ? 'scaleY(-1)' : 'none' }}>
        <path d="M0 20 Q 52 0, 105 20 T 210 20 T 315 20 T 420 20 L 420 40 L 0 40 Z" fill={to}/>
      </svg>
    </div>
  );
}

// Sticker/badge that wraps any content
function Badge({ children, bg, color = B.text, rotate = 0, style }) {
  return (
    <div style={{
      display: 'inline-block', background: bg, color, padding: '6px 14px',
      borderRadius: 999, fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap',
      transform: `rotate(${rotate}deg)`, ...bStyles.brush, ...style,
    }}>{children}</div>
  );
}

function NavBarB({ showHiyoko }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 20px', background: 'rgba(251,246,232,0.94)',
      backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 10,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {showHiyoko && <HiyokoMark size={32} color={B.mustard} beak={B.mustardDeep} bg={B.panel}/>}
        <span style={{ ...bStyles.brush, fontSize: 19, color: B.brown, whiteSpace: 'nowrap' }}>ひよこ英会話</span>
      </div>
      <button style={{
        border: `2px solid ${B.brown}`, background: B.mustard, color: B.brown,
        padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 700,
        cursor: 'pointer', ...bStyles.brush, whiteSpace: 'nowrap',
        boxShadow: `2px 2px 0 ${B.brown}`,
      }}>体験する</button>
    </div>
  );
}

function HeroB({ content, showHiyoko }) {
  return (
    <section style={{ padding: '36px 24px 40px', position: 'relative', overflow: 'hidden' }}>
      {/* organic blobs in bg */}
      <div style={{ position: 'absolute', top: 20, left: -40, width: 180, height: 180,
        borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
        background: B.pink, opacity: 0.5 }}/>
      <div style={{ position: 'absolute', top: 200, right: -50, width: 160, height: 160,
        borderRadius: '38% 62% 45% 55% / 58% 38% 62% 42%',
        background: B.sky, opacity: 0.4 }}/>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Badge bg={B.pink} color={B.brown} rotate={-3}>ようこそ おうち英会話へ</Badge>

        <h1 style={{
          ...bStyles.brush, fontSize: 38, lineHeight: 1.35, margin: '18px 0 14px',
          color: B.brown, letterSpacing: '0.02em',
        }}>
          英語って、<br/>
          <span style={{ color: B.mustardDeep }}>たのしい！</span>
        </h1>
        <p style={{ ...bStyles.round, fontSize: 14, color: B.subtext, margin: '0 0 28px', maxWidth: 320, lineHeight: 1.9 }}>
          3さいの「あいうえお」みたいに、<br/>
          英語のおとを たくさんあびる毎日。<br/>
          福岡市南区・春日市のおうち教室です。
        </p>

        {/* illustration scene */}
        <div style={{
          position: 'relative', height: 240, marginBottom: 24,
          background: B.sky, borderRadius: 28,
          overflow: 'hidden',
        }}>
          {/* sun */}
          <div style={{
            position: 'absolute', top: 18, right: 24, width: 50, height: 50,
            borderRadius: '50%', background: B.mustard,
            boxShadow: `0 0 0 8px ${B.mustard}33, 0 0 0 16px ${B.mustard}1a`,
          }}/>
          {/* hills */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 100 }}>
            <svg viewBox="0 0 420 100" width="100%" height="100%" preserveAspectRatio="none">
              <ellipse cx="80" cy="120" rx="120" ry="60" fill={B.sage}/>
              <ellipse cx="280" cy="130" rx="160" ry="70" fill={B.sageDeep}/>
              <ellipse cx="200" cy="140" rx="140" ry="65" fill={B.sage} opacity="0.7"/>
            </svg>
          </div>
          {/* tiny flowers */}
          {[{x:30,c:'#fff'},{x:90,c:B.pink},{x:340,c:'#fff'},{x:380,c:B.pink}].map((f,i)=>(
            <div key={i} style={{
              position: 'absolute', bottom: 14, left: f.x, width: 8, height: 8,
              borderRadius: '50%', background: f.c,
              boxShadow: `0 0 0 2px ${B.mustard}`,
            }}/>
          ))}
          {/* chick or letter */}
          {showHiyoko ? (
            <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)' }}>
              <HiyokoWaving size={140} color={B.mustard} beak={B.mustardDeep} cheek={B.pinkDeep}/>
            </div>
          ) : (
            <div style={{ position: 'absolute', bottom: 30, left: 0, right: 0, textAlign: 'center',
              ...bStyles.brush, fontSize: 36, color: '#fff' }}>HELLO!</div>
          )}
          {/* speech */}
          <div style={{
            position: 'absolute', top: 80, left: 20, background: '#fff',
            padding: '8px 14px', borderRadius: 18, ...bStyles.brush, fontSize: 14,
            color: B.brown, border: `2px solid ${B.brown}`,
            boxShadow: `2px 2px 0 ${B.brown}`,
          }}>
            Let's play!
            <div style={{
              position: 'absolute', bottom: -8, left: 14, width: 0, height: 0,
              borderLeft: '6px solid transparent', borderRight: '6px solid transparent',
              borderTop: `8px solid ${B.brown}`,
            }}/>
          </div>
        </div>

        <button style={{
          background: B.mustard, color: B.brown, border: `2px solid ${B.brown}`,
          padding: '14px 24px', borderRadius: 999, fontSize: 15, fontWeight: 700,
          ...bStyles.brush, cursor: 'pointer', width: '100%',
          boxShadow: `3px 3px 0 ${B.brown}`,
        }}>🐣 まずは無料体験から</button>
      </div>
    </section>
  );
}

function StatsB({ content }) {
  const bgs = [B.pink, B.sage, B.sky];
  return (
    <section style={{ padding: '0 24px 40px', position: 'relative' }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {content.stats.map((s, i) => (
          <div key={i} style={{
            flex: 1, background: bgs[i], borderRadius: 18,
            padding: '18px 8px', textAlign: 'center',
            border: `2px solid ${B.brown}`, boxShadow: `2px 2px 0 ${B.brown}`,
            transform: `rotate(${i === 1 ? 0 : i === 0 ? -1.5 : 1.5}deg)`,
          }}>
            <div style={{ ...bStyles.brush, fontSize: 26, color: B.brown, lineHeight: 1 }}>
              {s.num}
              <span style={{ fontSize: 11, marginLeft: 2 }}>{s.unit}</span>
            </div>
            <div style={{ fontSize: 10, color: B.brown, marginTop: 8, opacity: 0.8, lineHeight: 1.4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ChapterHeaderB({ chapter, title, subtitle, color }) {
  return (
    <div style={{ marginBottom: 24, textAlign: 'center' }}>
      <div style={{ ...bStyles.brush, fontSize: 11, color, letterSpacing: '0.2em', marginBottom: 6 }}>
        CHAPTER {chapter}
      </div>
      <h2 style={{ ...bStyles.brush, fontSize: 26, margin: 0, color: B.brown, lineHeight: 1.3 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ ...bStyles.round, fontSize: 12, color: B.subtext, margin: '6px 0 0' }}>{subtitle}</p>
      )}
    </div>
  );
}

function TeacherB({ content, showHiyoko }) {
  const { teacher } = content;
  return (
    <section style={{ padding: '48px 24px', background: B.pink, position: 'relative' }}>
      <ChapterHeaderB chapter="01" title="ひよこ先生のはなし" subtitle="〜 おうち教室がうまれるまで 〜" color={B.brown}/>

      <div style={{
        background: B.panel, borderRadius: 24, padding: 22,
        border: `2px solid ${B.brown}`, boxShadow: `3px 3px 0 ${B.brown}`,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
          <div style={{
            width: 110, height: 110, borderRadius: '50%', background: B.mustard,
            border: `3px solid ${B.brown}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `3px 3px 0 ${B.brown}`,
          }}>
            {showHiyoko
              ? <HiyokoReading size={90} color={B.panel} beak={B.mustardDeep} bookColor={B.brown}/>
              : <span style={{ ...bStyles.brush, fontSize: 28, color: B.brown }}>先生</span>}
          </div>
          <div style={{ ...bStyles.brush, fontSize: 17, marginTop: 12, color: B.brown, whiteSpace: 'nowrap' }}>子ども英会話講師</div>
          <div style={{ ...bStyles.round, fontSize: 12, color: B.subtext, whiteSpace: 'nowrap' }}>24年・のべ37,000人</div>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 22 }}>
          <div style={{ position: 'absolute', left: 6, top: 8, bottom: 8, width: 2,
            background: `repeating-linear-gradient(180deg, ${B.brown} 0 4px, transparent 4px 10px)` }}/>
          {teacher.bio.map((line, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 14 }}>
              <div style={{
                position: 'absolute', left: -22, top: 4, width: 14, height: 14,
                borderRadius: '50%', background: B.mustard,
                border: `2px solid ${B.brown}`,
              }}/>
              <div style={{ ...bStyles.round, fontSize: 12.5, lineHeight: 1.8, color: B.text }}>
                {line}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 18, padding: 16, background: B.sage,
          borderRadius: 16, border: `2px solid ${B.brown}`,
          ...bStyles.brush, fontSize: 13, lineHeight: 1.9, color: B.brown,
        }}>
          {teacher.message}
        </div>
      </div>
    </section>
  );
}

function CoursesB({ content }) {
  const colors = [
    { bg: B.pink, deep: B.pinkDeep },
    { bg: B.sage, deep: B.sageDeep },
    { bg: B.sky, deep: '#5A8A99' },
    { bg: B.mustard, deep: B.mustardDeep },
    { bg: B.pinkDeep, deep: B.brown },
  ];
  return (
    <section style={{ padding: '56px 24px', background: B.paper }}>
      <ChapterHeaderB chapter="02" title="5つの クラス" subtitle="〜 3さいから 18さいまで 〜" color={B.brown}/>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {content.courses.map((c, i) => {
          const col = colors[i % colors.length];
          return (
            <div key={c.id} style={{
              background: col.bg, borderRadius: 22, padding: 18,
              border: `2px solid ${B.brown}`, boxShadow: `3px 3px 0 ${B.brown}`,
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: -10, right: 14, background: B.panel,
                border: `2px solid ${B.brown}`, padding: '3px 10px', borderRadius: 999,
                ...bStyles.brush, fontSize: 11, color: B.brown,
              }}>
                #{i + 1}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                <div style={{ ...bStyles.brush, fontSize: 22, color: B.brown, whiteSpace: 'nowrap' }}>{c.title}</div>
                <div style={{ ...bStyles.round, fontSize: 12, color: B.brown, opacity: 0.7, whiteSpace: 'nowrap' }}>{c.age}</div>
              </div>
              <p style={{ ...bStyles.round, fontSize: 13, margin: '0 0 12px', color: B.text, lineHeight: 1.8 }}>
                {c.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {c.keywords.map(k => (
                  <span key={k} style={{
                    fontSize: 10.5, padding: '3px 9px', background: B.panel,
                    border: `1.5px solid ${B.brown}`, borderRadius: 999,
                    color: B.brown, ...bStyles.brush, whiteSpace: 'nowrap',
                  }}>{k}</span>
                ))}
              </div>
              <div style={{ fontSize: 10, color: B.brown, opacity: 0.7, marginTop: 10 }}>
                ⏱ {c.time} / 週1回〜
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PointsB({ content, showHiyoko }) {
  const colors = [B.pink, B.sage, B.sky, B.mustard, B.pinkDeep, B.sageDeep, '#D4A85A'];
  return (
    <section style={{ padding: '48px 24px', background: B.mustard, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100,
        borderRadius: '50%', background: B.panel, opacity: 0.3 }}/>
      <ChapterHeaderB chapter="03" title="えらばれる りゆう" subtitle="〜 7つの おやくそく 〜" color={B.brown}/>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {content.selling_points.map((p, i) => (
          <div key={i} style={{
            background: B.panel, borderRadius: 18, padding: '16px 12px',
            border: `2px solid ${B.brown}`, boxShadow: `2px 2px 0 ${B.brown}`,
            transform: `rotate(${(i % 2 ? 1 : -1) * 0.6}deg)`,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%', marginBottom: 10,
              background: colors[i % colors.length],
              border: `2px solid ${B.brown}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <PointIconB name={p.icon} color={B.brown}/>
            </div>
            <div style={{ ...bStyles.brush, fontSize: 13, marginBottom: 4, color: B.brown }}>{p.title}</div>
            <p style={{ ...bStyles.round, fontSize: 11, color: B.text, margin: 0, lineHeight: 1.6 }}>{p.body}</p>
          </div>
        ))}
        {showHiyoko && (
          <div style={{
            background: B.brown, borderRadius: 18, padding: 14,
            border: `2px solid ${B.brown}`, boxShadow: `2px 2px 0 ${B.mustardDeep}`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            <HiyokoStanding size={56} color={B.mustard} beak={B.mustardDeep} cheek={B.pinkDeep}/>
            <div style={{ ...bStyles.brush, fontSize: 11, color: B.mustard, marginTop: 6, textAlign: 'center', whiteSpace: 'nowrap', lineHeight: 1.5 }}>
              いっしょに<br/>がんばろ！
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function PointIconB({ name, color }) {
  const stroke = { stroke: color, strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'home': return <svg width={20} height={20} viewBox="0 0 24 24"><path d="M3 11l9-7 9 7v10a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2V11z" {...stroke}/></svg>;
    case 'music': return <svg width={20} height={20} viewBox="0 0 24 24"><path d="M9 18V5l12-2v13" {...stroke}/><circle cx="6" cy="18" r="3" {...stroke}/><circle cx="18" cy="16" r="3" {...stroke}/></svg>;
    case 'medal': return <svg width={20} height={20} viewBox="0 0 24 24"><circle cx="12" cy="15" r="6" {...stroke}/><path d="M8 5l4 6 4-6" {...stroke}/></svg>;
    case 'growth': return <svg width={20} height={20} viewBox="0 0 24 24"><path d="M4 20L20 4M20 4h-7M20 4v7" {...stroke}/></svg>;
    case 'heart': return <svg width={20} height={20} viewBox="0 0 24 24"><path d="M12 21s-7-4.5-7-10a4 4 0 017-3 4 4 0 017 3c0 5.5-7 10-7 10z" {...stroke}/></svg>;
    case 'book': return <svg width={20} height={20} viewBox="0 0 24 24"><path d="M4 19V5a2 2 0 012-2h13v18H6a2 2 0 01-2-2zM6 17h13" {...stroke}/></svg>;
    case 'screen': return <svg width={20} height={20} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2" {...stroke}/><path d="M8 21h8M12 17v4" {...stroke}/></svg>;
    default: return null;
  }
}

function GalleryB() {
  const photos = [
    { hue: B.pink, label: 'ハロウィン', emoji: '🎃' },
    { hue: B.sage, label: 'クラフト', emoji: '🎨' },
    { hue: B.mustard, label: '英検合格', emoji: '🏅' },
    { hue: B.sky, label: '絵本タイム', emoji: '📖' },
    { hue: B.pinkDeep, label: 'クリスマス', emoji: '🎄' },
    { hue: B.sageDeep, label: '修了式', emoji: '🎓' },
  ];
  return (
    <section style={{ padding: '56px 24px', background: B.paper }}>
      <ChapterHeaderB chapter="04" title="きょうしつの ひびき" subtitle="〜 まいにちの 一コマ 〜" color={B.brown}/>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
        {photos.map((p, i) => (
          <div key={i} style={{
            aspectRatio: '1 / 1', background: p.hue,
            borderRadius: 18, position: 'relative',
            border: `2px solid ${B.brown}`, boxShadow: `2px 2px 0 ${B.brown}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: `rotate(${(i % 3 - 1) * 1.5}deg)`,
          }}>
            <span style={{ fontSize: 32 }}>{p.emoji}</span>
            <div style={{
              position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)',
              background: B.panel, padding: '2px 8px', borderRadius: 999,
              fontSize: 9, ...bStyles.brush, color: B.brown,
              border: `1.5px solid ${B.brown}`, whiteSpace: 'nowrap',
            }}>{p.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function VoicesB({ content }) {
  return (
    <section style={{ padding: '48px 24px', background: B.sage }}>
      <ChapterHeaderB chapter="05" title="おうちの こえ" subtitle="〜 保護者の方より 〜" color={B.brown}/>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {content.testimonials.map((t, i) => (
          <div key={i} style={{
            background: B.panel, borderRadius: 22, padding: 18,
            border: `2px solid ${B.brown}`, boxShadow: `2px 2px 0 ${B.brown}`,
            position: 'relative', transform: `rotate(${(i % 2 ? 0.6 : -0.6)}deg)`,
          }}>
            <div style={{
              position: 'absolute', top: -12, left: 16, background: B.mustard,
              border: `2px solid ${B.brown}`, padding: '3px 10px',
              borderRadius: 999, fontSize: 10, color: B.brown,
              ...bStyles.brush,
            }}>🗣 voice {i + 1}</div>
            <p style={{ ...bStyles.round, fontSize: 13, margin: '8px 0 12px', lineHeight: 1.9, color: B.text }}>
              {t.voice}
            </p>
            <div style={{ fontSize: 11, color: B.subtext, textAlign: 'right' }}>
              — {t.who}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InstagramB({ content, showHiyoko }) {
  return (
    <section style={{ padding: '56px 24px', background: B.paper }}>
      <ChapterHeaderB chapter="06" title="まいにちの インスタ" subtitle={content.instagram.handle} color={B.brown}/>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 18 }}>
        {content.instagram.posts.map((p, i) => (
          <div key={i} style={{
            aspectRatio: '1 / 1', borderRadius: 12,
            background: [B.pink, B.sage, B.sky, B.mustard, B.pinkDeep, '#D4A85A'][i % 6],
            border: `2px solid ${B.brown}`, boxShadow: `1.5px 1.5px 0 ${B.brown}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 30, position: 'relative',
          }}>
            <span>{p.emoji}</span>
            <div style={{
              position: 'absolute', bottom: 3, right: 4, fontSize: 9,
              background: B.panel, padding: '1px 5px', borderRadius: 4,
              color: B.brown, ...bStyles.brush,
            }}>♡ {12 + i * 7}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <button style={{
          background: B.brown, color: B.mustard, border: `2px solid ${B.brown}`,
          padding: '10px 20px', borderRadius: 999, fontSize: 12, ...bStyles.brush,
          cursor: 'pointer', boxShadow: `2px 2px 0 ${B.mustardDeep}`,
        }}>📷 Instagram を見る</button>
      </div>
    </section>
  );
}

function AccessB({ content }) {
  return (
    <section style={{ padding: '48px 24px', background: B.sky }}>
      <ChapterHeaderB chapter="07" title="きょうしつへの みち" color={B.brown}/>
      <div style={{
        background: B.panel, borderRadius: 22, overflow: 'hidden',
        border: `2px solid ${B.brown}`, boxShadow: `3px 3px 0 ${B.brown}`,
      }}>
        <div style={{
          height: 140, background: B.sage, position: 'relative',
        }}>
          {/* fauxsy map */}
          <svg width="100%" height="100%" viewBox="0 0 420 140" preserveAspectRatio="xMidYMid slice">
            <path d="M0 70 Q 210 30, 420 70" stroke={B.brown} strokeWidth="3" fill="none" strokeDasharray="6 4"/>
            <path d="M210 0 L 210 140" stroke={B.sageDeep} strokeWidth="2" fill="none" opacity="0.5"/>
            <circle cx="80" cy="40" r="8" fill={B.mustard}/>
            <circle cx="340" cy="100" r="10" fill={B.pink}/>
          </svg>
          {/* pin */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -100%)',
          }}>
            {showHiyoko_b()}
          </div>
        </div>
        <div style={{ padding: 18 }}>
          <div style={{ ...bStyles.brush, fontSize: 16, color: B.brown, marginBottom: 6 }}>
            🏠 {content.access.area}
          </div>
          <p style={{ ...bStyles.round, fontSize: 12, color: B.subtext, margin: 0, lineHeight: 1.8 }}>
            {content.access.note}
          </p>
        </div>
      </div>
    </section>
  );
}
function showHiyoko_b() {
  return (
    <svg width="36" height="48" viewBox="0 0 36 48">
      <path d="M18 0 C 8 0, 0 8, 0 18 C 0 30, 18 48, 18 48 C 18 48, 36 30, 36 18 C 36 8, 28 0, 18 0 Z" fill={B.brown}/>
      <circle cx="18" cy="18" r="9" fill={B.mustard}/>
    </svg>
  );
}

function CTAB({ showHiyoko }) {
  return (
    <section style={{ padding: '60px 24px', background: B.pinkDeep, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120,
        borderRadius: '50%', background: B.mustard, opacity: 0.5 }}/>
      <div style={{ position: 'absolute', bottom: -40, left: -30, width: 140, height: 140,
        borderRadius: '50%', background: B.pink, opacity: 0.5 }}/>

      <div style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
        {showHiyoko && (
          <div style={{ marginBottom: 12 }}>
            <HiyokoEgg size={80} color={B.mustard} beak={B.mustardDeep} shell={B.panel}/>
          </div>
        )}
        <h3 style={{ ...bStyles.brush, fontSize: 26, color: '#fff', margin: '0 0 8px' }}>
          さあ、はじめよう
        </h3>
        <p style={{ ...bStyles.round, fontSize: 13, color: '#fff', margin: '0 0 24px', opacity: 0.95 }}>
          無料体験レッスン受付中🐣<br/>
          Instagram DMからお気軽にどうぞ
        </p>
        <button style={{
          background: B.mustard, color: B.brown, border: `2px solid ${B.brown}`,
          padding: '14px 32px', borderRadius: 999, fontSize: 15, fontWeight: 700,
          ...bStyles.brush, cursor: 'pointer',
          boxShadow: `4px 4px 0 ${B.brown}`,
        }}>体験を申し込む →</button>
      </div>
    </section>
  );
}

function FooterB({ showHiyoko }) {
  return (
    <footer style={{ padding: '32px 24px', background: B.brown, color: B.mustard, textAlign: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 14 }}>
        {showHiyoko && <HiyokoMark size={32} color={B.mustard} beak={B.mustardDeep}/>}
        <div style={{ ...bStyles.brush, fontSize: 18, color: B.mustard }}>ひよこ英会話</div>
      </div>
      <div style={{ ...bStyles.round, fontSize: 11, lineHeight: 1.8, opacity: 0.85 }}>
        福岡県福岡市南区・春日市<br/>
        @hiyoko_english2010<br/>
        © 2010– Hiyoko English School
      </div>
    </footer>
  );
}

function VariantB({ showHiyoko = true }) {
  const content = window.HIYOKO_CONTENT;
  return (
    <div style={bStyles.page}>
      <NavBarB showHiyoko={showHiyoko}/>
      <HeroB content={content} showHiyoko={showHiyoko}/>
      <StatsB content={content}/>
      <Wavy from={B.paper} to={B.pink}/>
      <TeacherB content={content} showHiyoko={showHiyoko}/>
      <Wavy from={B.pink} to={B.paper}/>
      <CoursesB content={content}/>
      <Wavy from={B.paper} to={B.mustard}/>
      <PointsB content={content} showHiyoko={showHiyoko}/>
      <Wavy from={B.mustard} to={B.paper}/>
      <GalleryB/>
      <Wavy from={B.paper} to={B.sage}/>
      <VoicesB content={content}/>
      <Wavy from={B.sage} to={B.paper}/>
      <InstagramB content={content} showHiyoko={showHiyoko}/>
      <Wavy from={B.paper} to={B.sky}/>
      <AccessB content={content}/>
      <Wavy from={B.sky} to={B.pinkDeep}/>
      <CTAB showHiyoko={showHiyoko}/>
      <FooterB showHiyoko={showHiyoko}/>
    </div>
  );
}

window.VariantB = VariantB;
