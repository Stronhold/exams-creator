import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { shuffle } from "./helper";
import Question from "./Question";
import { QuestionStatus, Question as QuestionType } from "../types";

const Test = () => {
  const { subject, test } = useParams();
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [correctQuestions, setCorrectQuestions] = useState(0);
  const navigate = useNavigate();
  const goBack = () => navigate(`/subject/${subject}`);
  const selectOption = (questionId: number, option: number) => {
    const computedQuestions = [...questions];
    computedQuestions[questionId].selectedOption = option;
    setQuestions(computedQuestions);
    setShowResults(false);
  };

  const checkQuestions = () => {
    const computedQuestions = [...questions];
    let correctQuestions = 0;
    questions.forEach((question) => {
      const correctOption = question.opciones.find(o => o.esCorrecta);
      const questionStatus = question.selectedOption === correctOption?.value ? QuestionStatus.OK : QuestionStatus.ERROR;
      computedQuestions[question.questionId].questionStatus = questionStatus;
      if (questionStatus === QuestionStatus.OK) {
        correctQuestions++;
      }
    });
    setCorrectQuestions(correctQuestions);
    setQuestions(computedQuestions);
    setShowResults(true);
  };

  useEffect(() => {
    import(`../../public/tests/${subject}/${test}.json`).then((response) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const questions = shuffle(response.default.preguntas).map((question: any, index: number) => ({
        ...question,
          selectedOption: 0,
          questionId: index
        })
      )
      setQuestions(questions);
    })
  }, [subject, test]);

  return(
    <>
      <button onClick={goBack}>Volver a {subject}</button>
      <h2>Test {test}</h2>
      {
        questions.length > 0 ? <div className="question-list"> 
          {questions.map((question, index) => <Question {...question} key={index} selectOption={selectOption}/>)}
          {showResults ? <span> {correctQuestions} / {questions.length}</span>: null}
          <button onClick={() => checkQuestions()}>Check!</button>
        </div> : null
      }
    </>
  );
};

export default Test;
