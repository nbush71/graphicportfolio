export type Project = {
  title: string;
  year: string;
  type: string;
  description: string;
  tools: string[];
  images: { src: string; alt: string }[];
};

const img = (name: string, alt: string) => ({ src: `/images/${name}`, alt });

export const projects: Project[] = [
  {
    title: "Graduation Announcement",
    year: "2017",
    type: "Print Design",
    description:
      "A graduation announcement for my daughter's High School. Portrait photography, script lettering, and clear typographic hierarchy.",
    tools: ["Adobe InDesign CS2", "Illustrator CS3", "Photoshop CS3"],
    images: [img("graduation.jpg", "Graduation announcement for local High School, Class of 2017")],
  },
  {
    title: "Wells Fargo Home Mortgage — Page Layout Drafts 1",
    year: "2015",
    type: "Web Layout",
    description:
      "Webpage layout drafts for a new Wells Fargo Home Mortgage website. These explore navigation by role and loan type, a guidelines index, and a policy and procedure panel layout.",
    tools: ["Microsoft Paint"],
    images: [img("wells-fargo-1.jpg", "Wells Fargo Home Mortgage webpage layout draft 1")],
  },
  {
    title: "Wells Fargo Home Mortgage — Page Layout Drafts 2",
    year: "2015",
    type: "Web Layout",
    description:
      "A second set of drafts showing the search results state and how a linked PDF disclosure opens from the results.",
    tools: ["Microsoft Paint"],
    images: [img("wells-fargo-2.jpg", "Wells Fargo Home Mortgage webpage layout draft 2")],
  },
  {
    title: "Captain Jack Communications — Business Card",
    year: "2009",
    type: "Business Card",
    description:
      "A business card featuring the Captain Jack Communications globe-and-orbit logo, with clear contact hierarchy. Business closed in 2010.",
    tools: [],
    images: [img("captain-jack.jpg", "Captain Jack Communications business card")],
  },
  {
    title: "DTA Logo and Business Cards",
    year: "2004",
    type: "Brand Identity",
    description:
      "Logo and business cards for Disability Transportation Accessibility, a business I used to work for that provides low-income, disabled and elderly transportation in Iowa. The stacked D-T-A letterforms form the mark.",
    tools: ["Adobe Illustrator CS3", "QuarkXPress"],
    images: [img("dta.jpg", "DTA logo and business card")],
  },
  {
    title: "Monogram Business Logo",
    year: "1992",
    type: "Logo Design",
    description:
      "A calligraphic monogram created for business stationery, pairing a dark script letterform with crimson accents.",
    tools: ["Adobe Illustrator CS3"],
    images: [img("monogram-logo.jpg", "Calligraphic B monogram logo")],
  },
  {
    title: "Arthritis Reporter Newsletter",
    year: "2000",
    type: "Publication Design",
    description:
      "A four-page newsletter for the Arthritis Foundation Iowa Chapter. A class project — mine was selected to be used for the current newsletter.",
    tools: ["QuarkXPress", "Adobe Photoshop CS3"],
    images: [
      img("arthritis-1.jpg", "Arthritis Reporter, page 1"),
      img("arthritis-2.jpg", "Arthritis Reporter, page 2"),
      img("arthritis-3.jpg", "Arthritis Reporter, page 3"),
      img("arthritis-4.jpg", "Arthritis Reporter, page 4"),
    ],
  },
  {
    title: "Graphic Impressions — Magazine Cover",
    year: "2000",
    type: "Magazine Design",
    description:
      "A class contest to create a cover for Graphic Impressions magazine. A CMYK-quadrant compass carries the theme “Align your education & training with career.”",
    tools: ["QuarkXPress", "Adobe Illustrator CS3", "Adobe Photoshop CS3"],
    images: [img("magazine-cover.jpg", "Graphic Impressions magazine cover, April 2000")],
  },
  {
    title: "African Mask",
    year: "2000",
    type: "Illustration",
    description:
      "A class project: pick out an African mask and recreate it. Layered geometric patterns, chevrons and bead details, drawn as vector shapes.",
    tools: ["Adobe Illustrator CS3"],
    images: [img("african-mask.jpg", "African mask recreated as a vector illustration")],
  },
  {
    title: "Booklet — Walt Disney: The Man Behind the Mouse",
    year: "1992",
    type: "Print Production",
    description:
      "Research a subject, create a booklet, and print it on a press. I selected the paper, cut it on an industrial cutter, made darkroom negatives for each color, readied the press, then collated and stapled the booklets.",
    tools: ["QuarkXPress", "Offset press", "Darkroom"],
    images: [
      img("disney-cover.jpg", "Walt Disney booklet cover"),
      img("disney-back.jpg", "Walt Disney booklet back, compiled and printed by Nadine Bush '92"),
    ],
  },
  {
    title: "Booklet — The Secret of Great Breaks",
    year: "1992",
    type: "Print Production",
    description:
      "A second press-printed booklet, taken from layout through plates, press runs for each color, and hand finishing.",
    tools: ["QuarkXPress", "Offset press", "Darkroom"],
    images: [
      img("pool-cover.jpg", "The Secret of Great Breaks booklet cover"),
      img("pool-back.jpg", "The Secret of Great Breaks booklet back"),
    ],
  },
  {
    title: "Bush Well Company Logo",
    year: "2000",
    type: "Logo Design",
    description:
      "A circular badge for Bush Well Company, a third-generation company until 2010, built around a water drop and custom lettering.",
    tools: ["Adobe Illustrator CS3"],
    images: [img("bush-well.jpg", "Bush Well Company logo")],
  },
  {
    title: "Ba·Bush·Kin — Tags and Business Cards",
    year: "1992",
    type: "Business Stationery",
    description:
      "My mother was making homemade jointed bears at the time, and I offered to create tags and business cards for her.",
    tools: ["QuarkXPress", "Adobe Illustrator CS3"],
    images: [img("babushkin.jpg", "Ba-Bush-Kin bear photo, business card and tag")],
  },
];
