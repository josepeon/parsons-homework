export interface Slide {
  title: string;
  content: string;
  image?: string;
}

export interface Prompt {
  label: string;
  question: string;
  slides: [Slide, Slide, Slide];
}

export interface Homework {
  id: string;
  title: string;
  week: string;
  slug: string;
  prompts: [Prompt, Prompt];
}
