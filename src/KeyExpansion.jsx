import './App.css';
import Home from './Home';
import { useParams } from 'react-router-dom';

function KeyExpansion() {
  const { data } = useParams();
  return (
    <div className="App">
      <p>hello this is key expansion page</p>
    </div>
  );
}

export default KeyExpansion;
