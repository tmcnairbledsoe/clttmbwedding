import React, {useState, useEffect} from "react";
import "./SelectUser.css";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select'
import { ref, onValue } from "firebase/database";

export default function SelectUser({setCurrentUser, database}){
    const navigate = useNavigate();
    const [userId,setUserId] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const [users,setUsers] = useState([]);
    const [userData,setUserData] = useState([]);
    const [isCouple,setIsCouple] = useState(true);

    useEffect(() => {
      const temp = ref(database, 'userListTest/');
      onValue(temp, (snapshot) => {
        const data = snapshot.val();
        if(data != null){
          setUsers(data.users);
          setUserData(data);
        }
      });
    }, []);

    const options = users.map(d => ({
        "value" : d,
        "label" : d
      }))

    const handleChange = async event => {
      if(!event.value.includes('and') && !event.value.includes('&')){
        setIsCouple(false);
      } else {
        setIsCouple(true);
      }
      setUserId(event.value.replace(/Mrs.|Mr.|Ms.|[ ,.]/gi,""));
    };

    const handleClick = async event => {
      event.preventDefault();
      setErrorMessage('');
      if(userId === ''){
          setErrorMessage('Please select a name from the list');
          return;
      }
      
      var userTemplate = {
        userName: userId,
        isRehearsal: false,
        isBrunch: false,
        isWeddingParty: false,
        isCouple: isCouple,
      };    
      
      userData.bridalPartyUsers.forEach(element => {
        if(element.replace(/Mrs.|Mr.|Ms.|[ ,.]/gi,"") === userId){
          userTemplate.isWeddingParty = true;
        }
      });
      userData.rehearsalUsers.forEach(element => {
        if(element.replace(/Mrs.|Mr.|Ms.|[ ,.]/gi,"") === userId){
          userTemplate.isRehearsal = true;
        }
      });
      userData.brunchUsers.forEach(element => {
        if(element.replace(/Mrs.|Mr.|Ms.|[ ,.]/gi,"") === userId){
          userTemplate.isBrunch = true;
        }
      });

      setCurrentUser(userTemplate);
      navigate('/user/' + userId);
    };
      
    return (
        <div className="loginContainer">
          <form className="login-form">
            <h2>
              Select your name
            </h2>
            <p>
              Please type in and choose your name as seen on the invitation from the list below and click submit
            </p>
            <div id="inputFields">
                <Select class='userSelect' options={options} onChange={handleChange}/>
            </div>
            <button type="submit" onClick={handleClick}>
                Submit →
            </button>
            <p>{errorMessage}</p>
          </form>
        </div>
      );
}