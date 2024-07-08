
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import "./App.css"

function App() {
    const [ profile, setProfile ] = useState({name:"",email:"",profile:""});
    
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
          localStorage.setItem("token",JSON.stringify(codeResponse.access_token))
               
        },
        onError: (error) => console.log('Login Failed:', error)
    });
    useEffect(() => {
            if (JSON.parse(localStorage.getItem("token")) ) {
              console.log("log")
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${JSON.parse(localStorage.getItem("token"))}`, {
                        headers: {
                            Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                      console.log(res)
                        setProfile({
                          name:res.data.name,
                          email:res.data.email,
                          profile:res.data.picture
                        });
                    })
                    .catch((err) => console.log(err));
            }
        },[ JSON.parse(localStorage.getItem("token"))] );

    const logOut = () => {
      localStorage.removeItem("token")
        googleLogout();
    
        setProfile(null);
    };

    return (
        <div>
           
            <br />
            <br />
            {JSON.parse(localStorage.getItem("token")) ? (
                <div className='container'>
                  <div className='authenication'>
                  <h2>React Google Login</h2>
                  <div className='avatar'>
                  <img src={profile?.profile} alt=" image" />
                  </div>
                    <h2>User Logged in</h2>
                    <input type='text' value={profile?.name} name='name' 
                    onChange={(e)=>setProfile({...profile,[e.target.name]:e.target.value})}/>
                    <input type='text' value={profile?.email} name='email'
                     onChange={(e)=>setProfile({...profile,[e.target.name]:e.target.value})}/>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                  </div>
                </div>
            ) : (
               <div className='logout'>
                 <button onClick={login} className='button'>Sign in with Google 🚀 </button>
               </div>
            )}
        </div>
    );
}
export default App;