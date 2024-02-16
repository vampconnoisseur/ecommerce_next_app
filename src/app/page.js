"use client"

import { useRef, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const InputText = (e) => {
    setText(e.target.value);
  };

  const sendRequest = async () => {
    const response = await fetch("/api/getInput", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    inputRef.current.innerText = data.text;
  };

  return (
    <main>
      <input
        type="text"
        value={text}
        placeholder="Enter text here..."
        onChange={InputText}
      />
      <div ref={inputRef} />
      <button onClick={sendRequest}>Send</button>
    </main>
  );
}
