import levelUplogo from "./assets/levelUplogo-nobg.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={levelUplogo} className="logo" alt="Vite logo" />
      </div>
      <h1>The levelUp project</h1>
      <p>Your server is seth by defult to localhost:3000</p>
      <a href="http://localhost:3000/db/test">
        Click me to that the server is running
      </a>
    </>
  );
}

export default App;
