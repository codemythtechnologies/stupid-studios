import { FadeUp, SectionHeader } from './Reveal';

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200';

const chapters = [
  {
    no: '01',
    title: 'The Origin',
    body: 'Stupid Studios began as a few friends with one borrowed camera and too many ideas. Every film is self-written, self-shot and self-directed \u2014 no studio, no shortcuts.',
  },
  {
    no: '02',
    title: 'The Craft',
    body: 'From taut thrillers like Thani Kaattu Raja to tender romances like Aval Naan Mazhai, we chase mood over budget \u2014 lighting, silence and performance doing the heavy lifting.',
  },
  {
    no: '03',
    title: 'The Mission',
    body: 'Prove that a compelling story shot on the streets of Tamil Nadu can move an audience just as hard as anything on the big screen. 28 films in, we are just getting started.',
  },
];

export const About = () => {
  return (
    <section id="about" className="relative px-6 md:px-14 py-20 md:py-28 border-t border-neutral-200">
      <SectionHeader
        prefix="02"
        label="About"
        subtitle="Story first. Always. A short manifesto in three chapters."
        watermark="Studio"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
        <FadeUp className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl bg-neutral-200">
            <img
              src={ABOUT_IMG}
              alt="On set"
              className="w-full h-[420px] object-cover hover:scale-[1.03] transition-transform duration-[900ms]"
            />
          </div>
          <div className="mt-6 flex items-center justify-between text-[12px] text-neutral-500">
            <span>On location · Tamil Nadu</span>
            <span className="tabular-nums">EST. 2023</span>
          </div>
        </FadeUp>

        <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-10">
          {chapters.map((c, i) => (
            <FadeUp key={c.no} delay={i * 0.08}>
              <div className="border-t border-neutral-200 pt-6">
                <div className="flex items-baseline gap-6">
                  <span className="text-[12px] tabular-nums text-neutral-400">/ {c.no}</span>
                  <h3 className="font-display uppercase text-2xl md:text-3xl tracking-[-0.03em] text-neutral-900">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-600 max-w-xl md:pl-16">
                  {c.body}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};
