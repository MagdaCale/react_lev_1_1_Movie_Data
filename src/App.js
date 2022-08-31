import './App.css';
import movies from './components/Movie';
import Data from './components/Data'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); 

function App() {
  return (

    <div className="App">
      {movies.map((elt, i) =>
        <Data 
          key={uuidv4()}
          title={elt.title}
          year={elt.year}
          director={elt.director}
          duration={elt.duration}
          genre={elt.genre}
          rate={elt.rate}
        />
      )}
    </div>
  );
}

export default App;
