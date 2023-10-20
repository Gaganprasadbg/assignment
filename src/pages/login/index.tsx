import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
const [user ,setUser]=useState([{}])
const router = useRouter()
const handelOnChange=(e:any)=>{
  

    setUser((prev) => ({
      ...prev, 
      [e.target.name]:e.target.value, 
    }));
    
    
    
}

const handleLogin=()=>{
   router.push('/expenses')
    
}
  return (
    <div style={{ backgroundColor: "#a895fd", height: "100vh" }}>
    <div className="mx-auto flex justify-center items-center h-full " style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <div className="flex flex-col justify-center items-center rounded-lg border-2 border-solid  w-[400px] gap-4 py-12 px-5  m-6" style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}>
        <div className="flex flex-col w-full flex-auto max-w-lg gap-2">
            <div className='text-center'>
            </div>
          <label htmlFor="email">Email</label>
          <input
            className="p-2 rounded-lg"
            type="email"
            id="email"
            name='email'
            onChange={(e)=>handelOnChange(e)}
            placeholder="Enter Email"
            style={{caretColor:"#a895fd"}}
          />
        </div>
        <div className="flex flex-col w-full max-w-md gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="p-2 rounded-lg"
            type="password"
            id="password"
            name='password'
            onChange={(e)=>handelOnChange(e)}
            placeholder="Enter Password"
            style={{caretColor:"#a895fd"}}
          />
        </div>
        <div className='w-full text-center'>
          <button
            className="w-full max-w-md rounded-lg border-2 border-solid p-3"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
  
   
  

  );
};

export default Login;
