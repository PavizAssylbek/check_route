import { useParams } from 'react-router-dom';

const Journal = () => {
  const location = useParams();
  console.log('🚀 ~ file: Journal.tsx ~ line 5 ~ Journal ~ location', location);

  return <h1>lele</h1>;
};

export default Journal;
