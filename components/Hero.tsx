import Image from "next/image";

const heroImages = [
  { src: "/images/magazine-cover.jpg", alt: "Graphic Impressions magazine cover", cls: "row-span-2" },
  { src: "/images/dta.jpg", alt: "DTA logo", cls: "" },
  { src: "/images/bush-well.jpg", alt: "Bush Well Company logo", cls: "" },
];

export default function Hero() {
  return (
    <header id="top" className="grid min-h-screen pt-[62px] lg:grid-cols-2">
      <div
        id="contact"
        className="flex flex-col justify-center border-line px-6 py-16 md:px-12 lg:border-r lg:py-20 lg:pl-20"
      >
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
          Graphic Design Portfolio
        </p>
        <h1 className="mb-6 font-serif text-5xl font-bold leading-[1.08] md:text-6xl">
          Nadine
          <br />
          Ann <em className="text-accent">Bush</em>
        </h1>
        <p className="mb-10 max-w-sm font-light leading-relaxed text-muted">
          Logos, publications, print production and web layouts — from press-printed booklets in
          the darkroom era to digital design.
        </p>
        <dl className="space-y-2.5 text-sm">
          {[
            ["Phone", <a key="p" href="tel:5157200052" className="hover:text-accent">515-720-0052</a>],
            ["Email", <a key="e" href="mailto:nbush71@gmail.com" className="hover:text-accent">nbush71@gmail.com</a>],
            ["Based", <span key="b">Johnston, Iowa</span>],
          ].map(([label, value], i) => (
            <div key={i} className="flex items-center gap-6">
              <dt className="w-14 shrink-0 text-[10px] uppercase tracking-[0.16em] text-muted">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid h-[420px] grid-cols-2 grid-rows-2 gap-[3px] bg-bg lg:h-auto">
        {heroImages.map((im) => (
          <div key={im.src} className={`group relative overflow-hidden bg-line ${im.cls}`}>
            <Image
              src={im.src}
              alt={im.alt}
              fill
              priority
              sizes="(min-width:1024px) 25vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </header>
  );
}
