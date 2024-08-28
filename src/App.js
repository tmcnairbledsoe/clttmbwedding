import React, {useEffect} from "react";
import { useParams } from 'react-router-dom';
import { ref, onValue } from "firebase/database";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Location from "./components/Location/Location";
import RsvpForm from "./components/RsvpForm/RsvpForm";
import Navbar from "./components/Navbar/Navbar";
import GuestInfo from "./components/GuestInfo/GuestInfo";
import AboutUs from "./components/AboutUs/AboutUs";

export default function App({user, database, setCurrentUser}) {
  const { userId } = useParams();

  useEffect(() => {
    if(user.userName === ""){
      const temp = ref(database, 'userListTest/');
      onValue(temp, (snapshot) => {
        const data = snapshot.val();
        if(data != null){
          var isCouple = true;
          if(!userId.includes('and') && !userId.includes('&')){
            isCouple = false;
          } else {
            isCouple = true;
          }

          var userTemplate = {
            userName: userId,
            isRehearsal: false,
            isBrunch: false,
            isWeddingParty: false,
            isCouple: isCouple,
          };    
          
          data.bridalPartyUsers.forEach(element => {
            if(element.replace(/Mrs.|Mr.|Ms.|[ ,.]/gi,"") === userId){
              userTemplate.isWeddingParty = true;
            }
          });
          data.rehearsalUsers.forEach(element => {
            if(element.replace(/Mrs.|Mr.|Ms.|[ ,.]/gi,"") === userId){
              userTemplate.isRehearsal = true;
            }
          });
          data.brunchUsers.forEach(element => {
            if(element.replace(/Mrs.|Mr.|Ms.|[ ,.]/gi,"") === userId){
              userTemplate.isBrunch = true;
            }
          });
          
          setCurrentUser(userTemplate);
        }
      });
    }
  }, []);

  return (
    <div >
      <Navbar />
      <Intro />
      <Location user = {user}/>
      <RsvpForm user = {user} database = {database}/>
      <GuestInfo user = {user}/>
      <AboutUs />
    </div>
  );
}