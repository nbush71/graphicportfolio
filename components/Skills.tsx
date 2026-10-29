const groups = [
  { title: "Adobe", items: ["Illustrator", "Photoshop", "InDesign"] },
  { title: "Publishing", items: ["QuarkXPress", "Newsletter design", "Magazine layout"] },
  { title: "Print Production", items: ["Printing press", "Darkroom negatives", "Press plates", "Paper cutting & collating"] },
  { title: "Design", items: ["Logos & branding", "Business stationery", "Illustration", "Web page layouts"] },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-night text-bg">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="mb-14 flex items-baseline gap-5 border-b border-bg/15 pb-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-bg/50">Capabilities</span>
          <h2 className="font-serif text-3xl font-bold">Tools & Skills</h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="mb-4 border-b border-bg/15 pb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {g.title}
              </h3>
              <ul className="space-y-2.5 text-sm font-light text-bg/80">
                {g.items.map((i) => (
                  <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-1.5 before:bg-accent">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
