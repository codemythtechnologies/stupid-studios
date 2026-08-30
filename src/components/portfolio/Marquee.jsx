export const Marquee = () => {
  const parts = ['Stupid Studios', 'Cinematic Shorts', 'Tamil Originals', 'Zero Budget', 'Story First'];
  const row = [...parts, ...parts, ...parts];
  return (
    <div className="relative py-6 border-y border-neutral-200 bg-neutral-100 overflow-hidden">
      <div className="marquee-track">
        {row.map((p, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-8 font-display uppercase text-neutral-800" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {p}
            <span className="inline-block w-2 h-2 rounded-full bg-neutral-900" />
          </span>
        ))}
      </div>
    </div>
  );
};
