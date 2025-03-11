import Scores from "./components/Scores.jsx";
import {HTML_RESULTS} from './data.js'
import Header from "./components/Header.jsx"

function App() {
  return (
    <>
      <Header name="Ah Poy"/>

      <main className="scores-container">
        <Scores courseName="HTML" courseResults={HTML_RESULTS}/>
      </main>
    </>
  );
}

export default App;
