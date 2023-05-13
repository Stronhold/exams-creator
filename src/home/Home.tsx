import List from '../shared/List/List';
import subjects from '../../public/subjects.json';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const goTo = (subject: string) => navigate(`/subject/${subject}`);

  return (
    <>
      <h2>Elige asignatura</h2>
      <List list={subjects.subjects} onClick={goTo} />
    </>
  )
};

export default Home;