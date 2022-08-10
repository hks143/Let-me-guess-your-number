import { useState } from "react";
import "./App.css";

export default function App() {


  const [low, setLow] = useState(1);
  const [high, setHigh] = useState(1000);
  const [cur, setCur] = useState(500);
  const [ans, setAns] = useState(500);
  const [num, setNum] = useState(0);
  const [start, setStart] = useState(false);
  
  const Srt = () => {
    setStart(true);
  }
  const more = () => {
    setAns(cur);

    // console.log(low, high);
    let p = Math.floor((low + cur - 1) / 2);
    setCur(p);
    setNum(num + 1);
    setHigh(cur - 1);
  }
  const less = () => {
    // setAns(cur);

    // console.log(low, high);
    let p = Math.floor((cur + 1 + high) / 2);
    setCur(p);
    setNum(num + 1);
    setLow(cur + 1);

  }
  return (
    <div className="App">

      {
        ((num <= 10 && start) && (
          <>

            <h1>{cur}</h1>
            <div className="outputbox">
              <button onClick={more} style={{ padding: '5px', cursor: 'pointer' }}>
                It is equal to or more than my number
              </button>

              <button onClick={less} style={{ padding: '5px', cursor: 'pointer' }}>
                It is less than my number
              </button>
            </div>
          </>
        ))
      }

      {
        ((num >= 11 && start) && (
          <>
            <h3>Your number is {ans}</h3>
            <br />
            <button onClick={() => window.location.reload()} style={{ cursor: 'pointer' }}>
              Play Again
            </button>
          </>
        ))
      }

      {
        ((start === false) && (
          <>
            <h3>Let's play a game. Just think of a number between 1 and 1000. I will guess your number</h3>
            <br />
            <button onClick={Srt} style={{ cursor: 'pointer' }}>
              There is a number in my mind ,Start the game !
            </button>
          </>

        ))
      }

    </div>
  );
}