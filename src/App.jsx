import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  let [color, setColor] = useState(0);
  let [text, setText] = useState("");
  let [textColor, setTextColor] = useState("");

  let [son, setSon] = useState(0);
  let [randson, setRandson] = useState(0);

  const first = useRef(null);

  useEffect(() => {
    setInterval(() => {
      setColor(
        (asd) => `#${Math.floor(Math.random() * 16777215).toString(16)}`
      );
    }, 2000);
    setRandson((asd) => Math.floor(Math.random() * 10));
  }, []);

  const javob = () => {
    if (son * 1 == randson * 1) {
      return "siz topdingiz";
    } else if (son * 1 > randson * 1) {
      return "siz yozgan son kattaroq";
    } else if (son * 1 < randson * 1) {
      return "siz yozgan son kichikroq";
    }
    return "asd";
  };

  return (
    <>
      <div
        className="bg-slate-700 w-[1150px] h-[100px] mx-auto"
        style={{ backgroundColor: color }}
      >
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
            setTextColor(
              (asd) => `#${Math.floor(Math.random() * 16777215).toString(16)}`
            );
          }}
        />
        <h2 style={{ color: textColor }}>{text}</h2>

        <input type="number" ref={first} />
        <button
          onClick={() => {
            setSon(first.current.value);
            javob();
          }}
        >
          javob
        </button>
        <p>{javob()}</p>
      </div>
    </>
  );
}

export default App;
