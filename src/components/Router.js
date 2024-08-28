import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import SelectUser from "./SelectUser/SelectUser";
import NotFound from "./NotFound/NotFound";
import App from "../App";
import PrivateRoute from "./PrivateRoute";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useCookies } from "react-cookie";
import axios from 'axios'

export default function Router( {database} ){

    var userTemplate = {
      userName: '',
      isRehearsal: false,
      isBrunch: false,
      isWeddingParty: false,
    };
  
    const [loading,setLoading] = useState(true);
    const [authenticated,setAuthenticated] = useState(false);
    const [currentUser,setCurrentUser] = useState(userTemplate);
    const [cookies, setCookie] = useCookies(["user"]);
    const [ip, setIP] = useState('');

    
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/');
        setIP(res.data.IPv4)
    }

    useEffect(() => {
        getData();

        if(ip === cookies.user){
            setAuthenticated(true);
        }

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticated(true);
                setLoading(false);
            } else {
                setAuthenticated(false);
                setLoading(false);
            }
        });
    }, []);

    if (loading) {
      return (
        <div id="loading">
          <p>
            <i className="fas fa-spinner" />
            Loading...
          </p>
        </div>
      );
    }
    return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login ip = {ip} setCookie = {setCookie}/>} />
            <Route exact path='/select' element={<PrivateRoute authenticated={authenticated}/>}>
                <Route exact path='/select' element={<SelectUser setCurrentUser={setCurrentUser} database = {database}/>}/>
            </Route>
            <Route exact path='/user/:userId' element={<PrivateRoute authenticated={authenticated}/>}>
                <Route exact path='/user/:userId' element={<App user={currentUser} database = {database} setCurrentUser={setCurrentUser} />}/>
            </Route>
            <Route component={NotFound} />
          </Routes>
        </BrowserRouter>
    );
}