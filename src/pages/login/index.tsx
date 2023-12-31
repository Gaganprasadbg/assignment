import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Login = () => {
  const [user, setUser] = useState({
    email: '', 
    password: '', 
  });
  const [userCredential,setUserCredential]:any=useState()
  const [validateLogin, setValidateLogin]=useState(true)

const router = useRouter()
// Fetch userData from local storage
useEffect(()=>{
  const data:any=localStorage.getItem("UserCredential")
 setUserCredential(JSON.parse(data))
 
},[])

const handelOnChange=(e:any)=>{
setUser((prev) => ({
      ...prev, 
      [e.target.name]:e.target.value, 
    }));
}

const handleLogin=()=>{
  if(user.email === userCredential.email && user.password ===userCredential.password ){
   router.push('/expenses')
  }else{
    setValidateLogin(false)
  }
}
  return (
    <div style={{ backgroundColor: "#a895fd", height: "100vh" }}>
    <div className="mx-auto flex justify-center items-center h-full " style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <div className="flex flex-col justify-center items-center rounded-lg border-2 border-solid  w-[400px] gap-4 py-12 px-5  m-6" style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}>
        <div className="flex flex-col w-full flex-auto max-w-lg gap-2">
            <div className='text-center'>
              <LockOpenIcon/>
            </div>
            <div>
             {!validateLogin ? <span className='text-red-500'>Enter Valid Email or Password</span>:''}
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
          <div className='mt-4'>Don't Have Account
            <a className='pl-2' href="/signup" style={{color:"#fff"}}> Signup <ArrowForwardIcon/></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
   
  

  );
};

export default Login;
