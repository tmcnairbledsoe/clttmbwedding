import React, {useState} from "react";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from "firebase/app";

export default function Login( {ip, setCookie} ){
    const navigate = useNavigate();
    const [errorMessage,setErrorMessage] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = async event => {
        setErrorMessage('')
        event.preventDefault();

        const auth = getAuth();
        try {
          await signInWithEmailAndPassword(auth,'main@login.com',password)

          setCookie("user", ip, {
            path: "/"
          });
          //go to the RSVP page
          navigate(`/select`);
        } catch (error) {
            if (error instanceof FirebaseError) {
                setErrorMessage('The password you have given is incorrect');
              } else {
                alert(error);
              }
        }
      };
      
    return (
        <div className="loginContainer">
          <form className="login-form">
            <h2>
              Welcome
            </h2>
            <p>
              Please enter the password included in your invitation to access our website
              <br></br>
              (It's "testuser" now)
            </p>
            <div id="inputFields">
              <input
                name='password'
                type='password'
                required
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value.toLowerCase())}
              />
            </div>
            <button type="submit" onClick={handleLogin}>
                Submit →
            </button>
            <p>{errorMessage}</p>
          </form>
        </div>
      );
}