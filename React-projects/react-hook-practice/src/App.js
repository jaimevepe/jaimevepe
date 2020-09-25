import React, { useState } from 'react'

import './App.css'

function App() {

    const [ userName, setUserName] = useState('');

    const [ password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(true);
    
    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name
        setUserName({
            [name] : value
        })
    }

    const handleChange2 = event => {
        setPassword({[event.target.name] : event.target.value})
    }
    return (
        <div className="container">
            <input 
              type='text'
              name="username"
              placeholder="Enter Username"
              value={userName.name}
              onChange={ handleChange }
            />

            <input 
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter Password"
              value={password.name}
              onChange={ handleChange2}
            />

            <h2> { userName.username } </h2>
            {/* if the showPassword is true then we display SHOWPASSWORD else we display  ***.   */}
            <h2> { showPassword ? password.password : '*'.repeat(password.password.length)} </h2>
            <button onClick={(e) => {setShowPassword(!showPassword)}} >Show/Hide password</button>
        </div>
    )
}

export default App;