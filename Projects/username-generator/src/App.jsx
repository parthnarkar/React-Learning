import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Username from './components/Username'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [userName, setUserName] = useState("");
  const [usernameLength, setUsernameLength] = useState(8);
  const [usernameLast, setUsernameLast] = useState(false);
  const [usernameNum, setUsernameNum] = useState(false);
  const [usernameSpecial, setUsernameSpecial] = useState(false);

  const userNameGenerator = () => {
    let username = ""
    let str = firstName.trim();

    if (usernameLast) {
      str += lastName.trim();
    }
    if (usernameNum) {
      str += "1234567890";
    }
    if (usernameSpecial) {
      str += "-_";
    }

    for (let i = 0; i < usernameLength; i++) {
      let char = Math.floor(Math.random() * str.length);
      username += str.charAt(char);
    }

    setUserName(username);
  }

  useEffect(() => {
    userNameGenerator();
  }, [usernameLength, usernameLast, usernameNum, usernameSpecial, firstName, lastName])

  return (
    <>
      <div class="main-container">
        <h1 className='text-3xl m-2'>Username & Password Generator</h1>
        <div class="container">
          <div class="user-input">
            <input
              type="text"
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='border border-gray-400 p-1 rounded' />
            <input
              type="text"
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='border border-gray-400 m-1 p-1 rounded' />
          </div>

          <Username
            usernameLength={usernameLength}
            setUsernameLength={setUsernameLength}
            usernameLast={usernameLast}
            setUsernameLast={setUsernameLast}
            usernameNum={usernameNum}
            setUsernameNum={setUsernameNum}
            usernameSpecial={usernameSpecial}
            setUsernameSpecial={setUsernameSpecial}
          />

          <div className='m-5 flex justify-center gap-2'>
            <input
              type="text"
              disabled
              value={userName}
              className='border border-gray-300 bg-gray-200 text-gray-700 px-2 py-1 rounded cursor-not-allowed' />
            <button
              id='username-button'
              type="button"
              onClick={userNameGenerator}
              className="bg-blue-500 text-white px-4 py-2 rounded">
              Generate Username
            </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
