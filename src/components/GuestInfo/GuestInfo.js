import React from "react";
import "./GuestInfo.css";

export default function GuestInfo({user}){

    function displayMap(){
        if(user.isRehearsal){
            return(
                <div id="mapItem">
                    <h3>Printable Event Map</h3>
                    <a href="/images/Downtown Greenville Map for Rehearsal Dinner.jpg" target="_blank" rel="noreferrer">
                        <img
                        title="Event Map"
                        alt="Event Map"
                        className="eventMap"
                        src="/images/Downtown Greenville Map for Rehearsal Dinner.jpg"
                        />
                    </a>
                </div>
            );
        }else{
            return(
                <div id="mapItem">
                    <h3>Printable Event Map</h3>
                    <a href="/images/Downtown Greenville Map for Wedding.jpg" target="_blank" rel="noreferrer">
                        <img
                        title="Event Map"
                        alt="Event Map"
                        className="eventMap"
                        src="/images/Downtown Greenville Map for Wedding.jpg"
                        />
                    </a>
                </div>
            );
        }
    }

    function displayRehearsal(){
        if(user.isRehearsal){
            return(
                <div>
                    <h4>Friday  4/8/22</h4>
                    <li>5:00 PM: <a href="https://goo.gl/maps/qTU2LPLx8UfUKipu9" target="_blank" rel="noreferrer">Wedding Rehearsal</a></li>
                    <li>6:30 PM: <a href="https://goo.gl/maps/9N8goakAaMANqEst5" target="_blank" rel="noreferrer">Rehearsal Dinner</a></li>
                </div>
            );
        }
    }

    function displayBrunch(){
        if(user.isBrunch){
            return(
                <div>
                    <h4>Sunday  4/10/22</h4>
                    <li>10:00 AM - 12:00 PM: Brunch at the Lazy Goat</li>
                </div>
            );
        }
    }

    function displayWeddingPartyEvents(){
        if(user.isWeddingParty){
            return(
                <div>
                    <li>9:00 AM: Bridesmaids meet in church basement with dresses. Breakfast provided.</li>
                    <li>10:30 AM: Groomsman meet at Top Golf</li>
                    <li>1:00 PM: Bridesmaids light lunch</li>
                    <li>2:30 PM: Bridesmaids and Groomsmen pictures at church</li>
                </div>
            );
        }
    }

    return(
        <div className="section" id="guestInfo">
            <h2>Guest Info</h2>
            <p>
                You will find all important event information here
            </p>
            <hr />
            <div id="info">
                <div id="times">
                    <h3>Time of Events</h3>
                    <p className="moreinfo">
                        {displayRehearsal()}
                        <h4>Saturday  4/9/22</h4>
                            {displayWeddingPartyEvents()}
                            <li>4:00 PM: <a href="https://goo.gl/maps/qTU2LPLx8UfUKipu9" target="_blank" rel="noreferrer">Wedding Ceremony</a></li>
                            <li>5:30 PM: <a href="https://goo.gl/maps/yp5W67Frvqf5DH2V9" target="_blank" rel="noreferrer">Wedding Reception</a></li>
                        {displayBrunch()}
                    </p>
                </div>
                <div id="photo">
                    <img
                    alt="Camera"
                    title="Camera"
                    className="infoPhoto"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/99/LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg"
                    />
                    <p className="moreinfo">
                        We would like to share pictures and videos with our guests. We would also like for you to share your pictures and videos 
                        afterwards so everyone can see. If you have anything you could share please drop them here. We will post everything we have of the
                        event here.
                        <br></br>
                        <a href="https://drive.google.com/drive/folders/1YgtM85mNdRqx0bQbmu8Pm4vtaTAGRD-w?usp=sharing" target="_blank" rel="noreferrer">Public Google Drive</a> 
                    </p>
                </div>
                <div id="video">
                    <img
                    title="Videocamera"
                    alt="Videocamera"
                    className="infoPhoto"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/14/Panasonic_AG-DVX100B_20150324.jpg"
                    />
                    <p className="moreinfo">
                        There is a question in the online RSVP asking if you would like to help video the wedding reception. We are asking around 6 guests to do some guerrilla video shooting
                        so that we can bring all the clips together to make a truly personal and candid video for all involved. If you would like to help by either using a digital
                        camera or your phone, say yes above. If you don't have one, we will give you one you can use. This is only for the reception.
                    </p>
                </div>
            </div>
            <h2>Registry</h2>
            <p>
                <div><a href="https://www.target.com/gift-registry/gift-giver?registryId=f3b0bfb0-0e67-11ec-a21d-175309c26bb4&type=WEDDING" target="_blank" rel="noreferrer">Target (Kitchen Items)</a></div>
                <div><a href="https://www.dillards.com/registry/Charlotte-Townes-Mcnair-Bledsoe/133291880?firstName=charlotte&lastName=TOWNES&stateCode=SC" target="_blank" rel="noreferrer">Dillard's (Dish Pattern, Silverwear, House Items, etc.)</a></div>
            </p>
            <hr />
            <div id="mapForGuests">
                {displayMap()}
            </div>
        </div>
    );
}