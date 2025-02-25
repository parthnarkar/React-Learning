import React from 'react'

const Username = ({
    usernameLength,
    setUsernameLength,
    usernameLast,
    setUsernameLast,
    usernameNum,
    setUsernameNum,
    usernameSpecial,
    setUsernameSpecial
}) => {
    return (
        <div>
            <h3 className='text-2xl text-left mt-2'>Username Options</h3>
            <div className="border p-2 max-w-full flex justify-center gap-6 rounded-2xl">
                <input
                    type="range"
                    min={8}
                    max={20}
                    value={usernameLength}
                    onChange={(e) => { setUsernameLength(parseInt(e.target.value)) }} />
                <label>Username Length: {usernameLength}</label>
                <br />
                <input
                    type="checkbox"
                    defaultChecked={usernameLast}
                    id="username-last"
                    onChange={() => {
                        setUsernameLast((prev) => !prev);
                    }} />
                <label htmlFor="username-last">Include LastName</label>
                <br />
                <input
                    type="checkbox"
                    defaultChecked={usernameNum}
                    id="username-num"
                    onChange={() => {
                        setUsernameNum((prev) => !prev);
                    }} />
                <label htmlFor="username-num">Include Numbers</label>
                <br />
                <input
                    type="checkbox"
                    defaultChecked={usernameSpecial}
                    id="username-special"
                    onChange={() => {
                        setUsernameSpecial((prev) => !prev);
                    }} />
                <label htmlFor="username-special">Include Special Characters (-/_ )</label>
            </div>
        </div>
    )
}

export default Username