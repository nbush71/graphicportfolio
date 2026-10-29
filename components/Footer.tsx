export default function Footer() {
  return (
    <footer className="border-t border-bg/10 bg-night text-bg/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-center text-sm md:flex-row md:px-12 md:text-left">
        <span className="font-serif text-lg text-bg">Nadine Ann Bush</span>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="tel:5157200052" className="transition hover:text-accent">515-720-0052</a>
          <a href="mailto:nbush71@gmail.com" className="transition hover:text-accent">nbush71@gmail.com</a>
          <span>Johnston, Iowa</span>
        </div>
        <span className="text-xs">© 2026 Nadine Ann Bush</span>
      </div>
    </footer>
  );
}
