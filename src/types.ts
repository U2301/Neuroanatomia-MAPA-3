export type ScreenId = 'atlas' | 'backup';

export type MainTab = 'graph' | 'timeline' | 'disciplines' | 'flashcards';

export type NodeCategory =
  | 'Bases del Desarrollo'
  | 'Organización Neuronal y Encefalización'
  | 'Escala Filogenética Animal'
  | 'Teoría de MacLean (3 Cerebros)'
  | 'Proceso de Hominización'
  | 'Evolución, Darwin y Presiones Selectivas';

export type NodeGroup =
  | 'bases'
  | 'organizacion'
  | 'filogenia'
  | 'maclean'
  | 'hominizacion'
  | 'darwin';

export interface NeuroNode {
  id: number;
  label: string;
  period: string; // Subtítulo o clasificación conceptual
  category: NodeCategory;
  group: NodeGroup;
  desc: string;
  exam: string;
  colorGroup: string;
}

export interface NeuroEdge {
  from: number;
  to: number;
  label: string;
  arrows?: string;
}

export interface Flashcard {
  id: string;
  year: string; // Etiqueta o subgrupo
  category: string;
  question: string;
  answer: string;
  examNote: string;
}

export interface TimelineMilestone {
  id: number;
  number: number;
  year: string; // Etapa / Nivel evolutivo
  location: string; // Ámbito o grupo biológico
  title: string;
  badge: string;
  description: string;
  examNote?: string;
  category: 'origen' | 'filogenia' | 'hominizacion' | 'darwin';
  highlightColor?: string;
}

export interface HominidStageItem {
  order: string;
  code: string;
  name: string;
  brainVolume: string;
  type: 'Ancestro' | 'Australopiteco' | 'Género Homo';
  summary: string;
  details: string[];
  examKey: string;
}

export interface MacLeanBrainItem {
  name: string;
  trait: string;
  description: string;
  color: string;
}

export interface SelectivePressureItem {
  number: number;
  title: string;
  detail: string;
}

export interface DarwinPostulateItem {
  number: number;
  statement: string;
  explanation: string;
}
