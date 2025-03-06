import pnLogo from "./assets/pn-logo.png";
import Scores from "./components/Scores.jsx";
import {HTML_RESULTS} from './data.js'

function App() {
  return (
    <>
      <header id="header">
        <img src={pnLogo} alt="PN Logo" />
        <h1>Students results for (fake batch name)</h1>
      </header>

      <main className="scores-container">
        <Scores courseName="HTML" courseResults={HTML_RESULTS}/>
      </main>
    </>
  );
}

export default App;
