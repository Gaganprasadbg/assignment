import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Signup = () => {
  const [userData, setUserData] = useState({
    email: '', 
    password: '',
    confirmPassword:'' 
  });
  const [validEmail,setValidEmail]=useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

const router = useRouter()

function validateEmail(email:string) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }
const handelOnChange=(e:any)=>{
  

    setUserData((prev) => ({
      ...prev, 
      [e.target.name]:e.target.value, 
    }));
    
   setValidEmail(validateEmail(userData.email)) 
    
}

const handleSignup=()=>{
    if (userData.password === userData.confirmPassword) {  
        router.push('/login');
        localStorage.setItem("UserCredential",JSON.stringify(userData))
      } else {
        setPasswordsMatch(false);
      }
}
  return (
    <div style={{ backgroundColor: "#a895fd", height: "100vh" }}>
    <div className="mx-auto flex justify-center items-center h-full " style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <div className="flex flex-col justify-center items-center rounded-lg border-2 border-solid  w-[400px] gap-4 py-12 px-5  m-6" style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}>
        <div className="flex flex-col w-full flex-auto max-w-lg gap-2">
            <div className='text-center'>
              Sign Up
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
          {validEmail ===false ? <span className='text-red-500'>Enter Valid Email</span>:''}
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
        <div className="flex flex-col w-full max-w-md gap-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="p-2 rounded-lg"
            type="password"
            id="confirmPassword"
            name='confirmPassword'
            onChange={(e)=>handelOnChange(e)}
            placeholder="Enter Password"
            style={{caretColor:"#a895fd"}}
          />
          {passwordsMatch ===false? <span className='text-red-500'>Make Sure That Confirm Password is Same as Password </span> : ''}
        </div>
        <div className='w-full text-center'>
          <button
            className="w-full max-w-md rounded-lg border-2 border-solid p-3"
            type="submit"
            onClick={()=>handleSignup()}
          >
           Sign Up
          </button>
          
        </div>
      </div>
    </div>
  </div>
  
   
  

  );
};

export default Signup;
