export interface Option {
  texto: string;
  esCorrecta: boolean;
  value: number;
}

export interface Question {
  titulo: string;
  opciones: Option[];
  selectedOption: number;
  questionId: number;
  questionStatus: QuestionStatus;
}

export enum QuestionStatus {
  OK = 'ok',
  ERROR = 'error',
  NOT_CHECKED = 'not_checked'
}