export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#top" className="font-serif text-base tracking-wide">
          Nadine Ann Bush
        </a>
        <div className="flex items-center">
          <ul className="hidden gap-8 text-xs uppercase tracking-[0.14em] text-muted sm:flex">
            {[
              ["Work", "#work"],
              ["Skills", "#skills"],
              ["Dev Portfolio", "https://devportfolio-gilt.vercel.app/"]
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition hover:text-accent" target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
