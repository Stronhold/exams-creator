import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import List from "../shared/List/List";

const Subject = () => {
  const navigate = useNavigate();
  const { subject } = useParams();
  const [tests, setTests] = useState([]);
  const navigateToTest = (url: string) => {
    navigate(`test/${url}`);
  };

  useEffect(() => {
    import(`../../public/subjects/${subject}.json`).then((response) => {
      setTests(response.default.tests);
    })
  }, [subject]);

  return (
    <>
      <h2>Elige un tema para {subject}</h2>
      {tests.length > 0 ? <List list={tests} onClick={navigateToTest} /> : null}
    </>
  );
};

export default Subject;