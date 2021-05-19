import { useState, useEffect, useRef } from "react";

const BUTTON_TEXT = {
  NORMAL: "Button not pressed!",
  CLICKED: "Button pressed!",
};

export default function Button() {
  const [message, setMessage] = useState(BUTTON_TEXT.NORMAL);
  const timer = useRef();

  useEffect(() => {
    // Component가 사라질때 setTimeout clear
    return () => {
      if (timer.curent) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  function click() {
    setMessage(BUTTON_TEXT.CLICKED);
    timer.current = setTimeout(() => {
      setMessage(BUTTON_TEXT.NORMAL);
    }, 5000);
  }

  return (
    <>
      <p>{message}</p>
      <button onClick={click} disabled={message === BUTTON_TEXT.CLICKED}>
        button
      </button>
    </>
  );
}
