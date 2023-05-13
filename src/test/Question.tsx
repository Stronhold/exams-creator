import { Option, QuestionStatus } from "../types";

interface Props {
  titulo: string;
  opciones: Option[];
  selectedOption: number;
  questionId: number;
  questionStatus: QuestionStatus;
  selectOption: (questionId: number, option: number) => void;
}
const Question = ({opciones, titulo, selectedOption, questionId, questionStatus, selectOption}: Props) => {
  const titleClassname = questionStatus === QuestionStatus.OK ? 'title-ok' : QuestionStatus.ERROR === questionStatus ? 'title-error' : '';
  return (
    <div className="question">
      <h3 className={titleClassname}>{titulo}</h3>
      <div className="opciones">
        {opciones.map((opcion) => (
          <div key={`${questionId}-${opcion.value}`}>
            <input type="radio" id={`${opcion.value}`} checked={selectedOption === opcion.value} onClick={() => selectOption(questionId, opcion.value)}/>
            <label htmlFor={`${opcion.value.toString()}`}>{opcion.texto}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;