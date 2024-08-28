import React, {useState, useEffect} from "react";
import "./RsvpForm.css";
import { set, ref, onValue } from "firebase/database";

export default function RsvpForm({user, database}) {
  const [hasData, setHasData] = useState(false);
  const [plusOne, setPlusOne] = useState(false);
  const [attendance, setAttendance] = useState("yes");
  const [camera, setCamera] = useState("no");
  const [music, setMusic] = useState('');
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    if(user.userName !== null && user.userName !== ''){
      const test = ref(database, 'users/' + user.userName);
      onValue(test, (snapshot) => {
        const data = snapshot.val();
        if(data !== null){
          setPlusOne(data.plusOne);
          setAttendance(data.attendance);
          setMusic(data.music);
          setGuestName(data.guestName);
          setCamera(data.camera);
          setHasData(true);
        }
      });
    }
  }, [user]);

  const submitForm = e => {
    //stop the form from submitting
    e.preventDefault();

    set(ref(database, 'users/' + user.userName), {
      attendance : attendance,
      music: music,
      plusOne : plusOne,
      camera : camera,
      guestName: guestName
    });

    alert("Your RSVP form has been submitted. You can still edit and resubmit the form if you need to change anything.");
  };

  function displayPlusOneOptions() {
    if (plusOne) {
      return (
        <div className="guestDetails">
          <input
            name="guestName"
            type="text"
            value={guestName}
            onChange={e => setGuestName(e.target.value)}
            placeholder="Guest Full Name"
          />
        </div>
      );
    }
  };

  function displayIsSingle() {
    if (!user.isCouple) {
      return (
        <div>
          <ul id="plusOneOptions">
            <p id="plusOneText">
              Do you have a Plus-One?
            </p>
            <div id="radiobuttons">
              <li>
                <label>Yes</label>
                <input
                  name="plusOne"
                  type="radio"
                  value="yes"
                  onClick={() =>
                    setPlusOne(true)
                  }
                />
              </li>
              <li>
                <label>No</label>
                <input
                  name="plusOne"
                  type="radio"
                  value="no"
                  onClick={() =>
                    setPlusOne(false)
                  }
                />
              </li>
            </div>
          </ul>
          {displayPlusOneOptions()}
        </div>
      );
    }
  };

  function displayIsSingleReset() {
    if (!user.isCouple) {
      return (
        <div>
        <label className="inputLabel">
          Guest Full Name
        </label>
        <input
          name="guestName"
          type="text"
          value={guestName}
          onChange={e => setGuestName(e.target.value)}
        />
        </div>
      );
    }
  };

  if (!hasData) {
    return (
      <div className="register-wrapper section" id="RSVP">
        <h2>
          R.S.V.P.
        </h2>
        <p id="headerExplain">
          Please complete the form below to let us know if you can make it to the wedding.
        </p>
        <hr />
        <div className="register-block">
          <form onSubmit={submitForm}>
            <select required name="attendance" 
            value={attendance}
            onChange={e => setAttendance(e.target.value)}>
              <option value="yes">
                  Yes I will be there
              </option>
              <option value="no">
                  I can't make it
              </option>
            </select>
            <textarea
              name="music"
              value={music}
              onChange={e => setMusic(e.target.value)}
              placeholder="Any song requests?"
            />
            <label>Would you want to help shoot video?</label>
            <select name="camera" 
            value={camera}
            onChange={e => setCamera(e.target.value)}>
              <option value="no">
                  No thank you
              </option>
              <option value="yes">
                  Yes I want to help shoot candid video during the reception
              </option>
            </select>
            {displayIsSingle()}
            <input
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <p>
          Contact us anytime at tmcnairbledsoe@gmail.com
        </p>
      </div>
    );
  } else {
    return (
      <div className="register-wrapper section" id="RSVP">
        <h2>
          Your RSVP
        </h2>
        <p>
          Thanks for your RSVP. Please let us know if there are any changes at least two weeks before the wedding.
        </p>
        <hr />
        <div className="register-block">
          <form onSubmit={submitForm}>
            <label className="inputLabel">
              * Can you make it?
            </label>
            <select value={attendance} onChange={e => setAttendance(e.target.value)} name="attendance" >
              <option value="yes">
                  Yes I will be there
              </option>
              <option value="no">
                  I can't make it
              </option>
            </select>
            <label className="inputLabel">
              Any song requests?
            </label>
            <textarea
              name="music"
              type="text"
              value={music}
              onChange={e => setMusic(e.target.value)}
            />
            <label className="inputLabel">
              Would you want to help shoot video?
            </label>
            <select value={camera} onChange={e => setCamera(e.target.value)} name="camera" >
              <option value="no">
                  No thank you
              </option>
              <option value="yes">
                  Yes I want to help shoot candid video during the reception
              </option>
            </select>
            {displayIsSingleReset()}
            <input
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <p>
          Contact us anytime at tmcnairbledsoe@gmail.com
        </p>
      </div>
    );
  }
}
