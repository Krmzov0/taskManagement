import React from 'react'
import Header from '../Header'
import authimg from '../../Images/AuthImg.png'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

function CreateAccount() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleCreateAccount = () => {
    if (username.length === 0) {
      alert("Username is empty");
    }
    else if (password.length === 0) {
      alert("Password is empty");
    }
    else {
      const url = 'localhost/TodoList/createAccount.php';

      let fData = new FormData();
      fData.append('username', username);
      fData.append('password', password);

      axios.post(url, fData)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));

      window.location.reload(false);
    }
  }

  return (
    <>
      <Header />
      <div className='flex justify-around items-center mx-auto relative top-[15vh] createAcc'>

        <div className='w-[25%] flex flex-col justify-start'>
          <h1 className='text-4xl font-bold text-[#fff] relative flex items-center'>Create Account</h1>
          <div className='flex flex-col justify-start items-start mt-12 w-full'>
            <div className='w-full'>
              <label htmlFor="title" className='text-[#e9e9e9]'>Username</label>
              <input className='border mt-3 border-[#3b3b3b] rounded-lg text-[#e9e9e9]' placeholder='Username' type="text" name='username' id='username' required autoComplete='off' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='mt-7 w-full'>
              <label htmlFor="description" className='text-[#e9e9e9]'>Password</label>
              <input className='border mt-3 border-[#3b3b3b] rounded-lg text-[#e9e9e9]' type="password"name='password' id='password' placeholder='Password' required autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button onClick={handleCreateAccount} className='flex items-center justify-center mt-9 bg-[#19976A] rounded-lg text-[#222222] text-lg font-medium p-3 w-full shadow-md' type='submit' name='send' id='send' value='SEND'>Create Account</button>

            <h4 className='mt-4 text -lg text-[#e9e9e9c7]'>Already have an account? <Link to='/login' className='text-[#19976A] hover:underline'>Login</Link></h4>
          </div>
        </div>

        <div>
          <img className='w-[650px]' src={authimg} alt="" />
        </div>

      </div>
    </>
  )
}

export default CreateAccount