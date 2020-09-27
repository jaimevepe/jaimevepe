import React, {useState} from 'react';

import './App.css';

function App() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const handleUser = event => {
        setUserName({[event.target.name] : event.target.value})
    }
    const handlePassword = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setPassword({
            [name] : value
        })
    }
    
    return(
        <div className="container">
            <input 
                type="text"
                name="username"
                placeholder="Enter Username"
                onChange={handleUser}
                value={userName.name}
            />

            <input 
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter Password"
                value={password.name}
                onChange={handlePassword}
            />
            <h2> {userName.username} </h2>
            {/* if the showPassword is true, then we display SHOWPASSWORD else, we Display ****....... */}
            <h2> { showPassword ? password.password : '*'.repeat(password.password.length) } </h2>

            <button onClick={(e) => {setShowPassword(!showPassword)}} >Show/Hide Password</button>
        </div>
    )
}

export default App;