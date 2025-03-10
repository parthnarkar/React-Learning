import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0 , 3);    This selects the starting 3 positions
    window.navigator.clipboard.writeText(password);
  } , [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-2xl px-6 py-6  my-8 text-white bg-gray-800 align-middle">
        <h1 className="text-white text-center my-3 text-2xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden gap-1.5 mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-amber-50 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 transition duration-200"
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() =>
                setNumberAllowed((prev) => !prev)
              }
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() =>
                setCharAllowed((prev) => !prev)
              }
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
