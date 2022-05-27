import React, {useState, useRef } from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Data from './Data';
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// import song from '../Suncrown - Legend of the Forgotten Centuries.mp3'

import Player from "./com/Player";
import Song from "./com/Song";
import Library from "./com/Library";
import Nav from "./com/Nav";
import Credit from "./com/Credit";
import DataMusics from "./DataMusics";



const Boxdiv = styled(Box)`
position: relative;
top: -70px;    
width: 100%;
    height:130vh;
    background: lightblue url("https://img.freepik.com/free-photo/dj-spinning-mixing-scratching-track-controls-dj-s-deck-strobe-dj-music-club-life-concept_627829-8280.jpg?t=st=1651834493~exp=1651835093~hmac=38b3e2444f1c367e34523b09a23227ad51d91bd8c6af68b730c53be74b39ac25&w=740") no-repeat fixed center;
    background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
    `;

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
    
    
    

export default function Home() {


const audioRef = useRef(null);

	// State
	const [songs, setSongs] = useState(DataMusics);
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

  // Functions
	const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		let nextSong = songs[(currentIndex + 1) % songs.length];
		await setCurrentSong(nextSong);

		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) {
			audioRef.current.play();
		}
	};

    const [data, setData] = useState(Data);
      

   


    var countDownDate = new Date("July 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the Date
document.getElementById("day").innerHTML = days;
document.getElementById("hour").innerHTML = hours;
document.getElementById("min").innerHTML = minutes;
document.getElementById("sec").innerHTML = seconds;
    }, 1000);





  return (
      <>
      <Boxdiv>
    
    <Typography variant="h6" sx = {{color: "white", textAlign: "center", fontFamily: 'IBM Plex Sans', letterSpacing: "10px", fontSize: {xs: "0.7rem", sm: "1.1rem" }}}>NEW SINGLE</Typography>

    <Typography variant="h6" sx = {{ color: "white", fontFamily: 'Water Brush', letterSpacing: "3px", fontSize: {xs: "3.5rem", sm: "5.5rem", md: "8rem", textAlign: "center" }}}>Feel the heart beats</Typography>

    <Typography variant="p" sx = {{padding: "0px 40px 10px 40px", color: "white", fontFamily: 'IBM Plex Sans',  fontSize: {xs: "0.7rem", sm: "0.9rem", textAlign: "center" }}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
</Typography>
<Typography variant="p" sx = {{padding: "0px 40px 10px 40px", color: "white", fontFamily: 'IBM Plex Sans',  fontSize: {xs: "0.7rem", sm: "0.9rem", textAlign: "center" }}}>
tempor incididunt ut labore et dolore magna aliqua.</Typography>


<div style={{marginTop: "40px" ,backgroundColor: "rgba(255, 255, 255, 0.283)", height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<div style={{backgroundColor: "white", height: "60px", width: "60px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<SlowMotionVideoIcon className='slomoicon' fontSize = "large"/>
</div>
</div>
    </Boxdiv>

<div className='container' >
<div className='innerdiv'>
<KeyboardDoubleArrowDownIcon fontSize='large' className='arrow'/>
</div>

<div className='events'>
    <div style={{display: "flex"}}>
<Typography  variant="h4" className='head' sx = {{ fontFamily: 'Kanit',
  fontWeight: "bold",paddingRight: "40px", letterSpacing: "2px", fontSize: {xs:"1.5rem", sm:"2rem", md: "2.5rem"}}}>UPCOMING EVENTS</Typography>
  {/* <hr style={{ width: "100%",height: "0.3px", backgroundColor: "gray", marginTop: "2%"}} /> */}

{/* <div className='arrows'>
    <KeyboardArrowLeftIcon sx = {{color: "orange"}}/>
    <KeyboardArrowRightIcon sx = {{color: "orange"}}/>
</div> */}

  </div>







      <div className="App">
      <Carousel breakPoints={breakPoints}>
          {
              data.map((val,ind)=>{

        return  <Item  key = {ind} className = "items" style={{backgroundImage: `url(${val.image})`, backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}> 
        <div className='iteminner' id='inner'>
            <h6 id='name' className='nam'> {val.name} </h6>

<p id='address' className='addr' > {val.address} </p>
<p id='phone' className='pho'>{val.ph}</p>

<div id='date' className='datediv'>
   
<p className='da'>{val.date}</p>

</div>

        </div>

        </Item>
       
              })
          }
          </Carousel>
      </div>







</div>

</div>



<div className='intro'>
<div className='imagesec'>
<img src="https://preview.colorlib.com/theme/djoz/img/about/xabout.png.pagespeed.ic.UQ_7DY9Axc.webp" alt="image" width="500"  height="400"  />
</div>

<div className='detailsec'>
<Typography  variant="h4"  sx = {{ fontFamily: 'Kanit',
  fontWeight: "bold",paddingRight: "40px", paddingRight: "20px", paddingLeft: "20px", letterSpacing: "2px", fontSize: {xs:"1.3rem", sm:"2rem", md: "2.5rem"}}}>DJ ALEXANDRA RUD</Typography>

<Typography  variant="h4"  sx = {{ fontFamily: 'IBM Plex Sans',  marginTop: "20px", fontSize: {xs:"0.6rem", sm:"0.8rem", md: "1rem", paddingRight: "20px", paddingLeft: "20px"}}}>DJ Rainflow knows how to move your mind, body and soul by delivering tracks that stand out from the norm. As if this impressive succession of high impact, floor-filling bombs wasn’t enough to sustain.

<br />

DJ Rainflow knows how to move your mind, body and soul by delivering tracks that stand out from the norm. As if this impressive succession of high impact, floor-filling bombs wasn’t enough to sustain.
</Typography>

<Button variant="contained" sx = {{marginTop: "40px", width: "auto"}}>Contact Me</Button>

</div>

</div>


{/* Section 3 part */}

<div className='section3'>
<div className='ls'>

<div style={{marginTop: "40px" ,backgroundColor: "rgba(255, 255, 255, 0.283)", height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<div style={{backgroundColor: "white", height: "60px", width: "60px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<SlowMotionVideoIcon className='slomoicon' fontSize = "large"/>
</div>
</div>

</div>
<div className='rs'>

<div className='in1'>

<div className='inn1'>

<img src="./images/love.png" style={{height: "60px", width: "60px"}} alt="" />

<h2 style={{fontSize: "1.5rem",textAlign: "center", color: "white", fontFamily: 'Kanit'}}> Wedding </h2>
<p style={{fontSize: "0.9rem", color: "white", textAlign: "center", fontFamily: 'IBM Plex Sans'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.  </p>
</div>

<div className='inn2'>

<img src="./images/bar-counter.png" style={{height: "60px", width: "60px"}} alt="" />

<h2 style={{fontSize: "1.5rem",textAlign: "center", color: "white", fontFamily: 'Kanit'}}> Clubs and bar </h2>
<p style={{fontSize: "0.9rem", color: "white", textAlign: "center", fontFamily: 'IBM Plex Sans'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.  </p>
</div>

</div>

<div className='in1'>


<div className='inn2'>

<img src="./images/party.png" style={{height: "60px", width: "60px"}} alt="" />

<h2 style={{fontSize: "1.5rem",textAlign: "center", color: "white", fontFamily: 'Kanit'}}> Corporate events </h2>
<p style={{fontSize: "0.9rem", color: "white", textAlign: "center", fontFamily: 'IBM Plex Sans'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.  </p>
</div>

<div className='inn1'>
  
<img src="./images/musical-notes.png" style={{height: "60px", width: "60px"}} alt="" />

<h2 style={{fontSize: "1.5rem", color: "white",textAlign: "center", fontFamily: 'Kanit'}}> DJ lessons </h2>
<p style={{fontSize: "0.9rem", color: "white", textAlign: "center", fontFamily: 'IBM Plex Sans'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.  </p>
</div>

</div>

<div className='in1'>

</div>

<div className='in1'>

</div>

</div>


</div>




{/* Tracks */}
<div className='main2'>
<Typography  variant="h4"  sx = {{ fontFamily: 'Kanit',
  fontWeight: "bold",paddingRight: "40px", paddingRight: "20px", paddingLeft: "20px", paddingBottom: "15px", letterSpacing: "2px", fontSize: {xs:"1.3rem", sm:"2rem", md: "2.5rem"}}}>Latest Tracks</Typography>

<div className='section4'>

<div className='tracks'>









			{/* <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} /> */}
		
			
      <Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
		
	












</div>

<div className='trackrs'>
<div className ='trackimg'>
{/* <div style={{marginTop: "40px" ,backgroundColor: "rgba(255, 255, 255, 0.283)", height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<div style={{backgroundColor: "white", height: "60px", width: "60px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<SlowMotionVideoIcon className='slomoicon' fontSize = "large"/>
</div>
</div> */}

<AppContainer className='appcon' libraryStatus={libraryStatus}>

<Song currentSong={currentSong} />

<Player
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				songs={songs}
				setSongs={setSongs}
			/>


			<audio
				onLoadedMetadata={updateTimeHandler}
				onTimeUpdate={updateTimeHandler}
				onEnded={songEndHandler}
				ref={audioRef}
				src={currentSong.audio}
			/>
	</AppContainer>


</div>
</div>


</div>

</div>





{/* Youtube feed */}

<div className='youtubefeed'>
<Typography  variant="h4"  sx = {{ fontFamily: 'Kanit',
  fontWeight: "bold", textAlign: "center", paddingRight: "40px", paddingRight: "20px", paddingLeft: "20px", paddingBottom: "15px", letterSpacing: "2px", fontSize: {xs:"1.3rem", sm:"2rem", md: "2.5rem"}}}>Youtube Feed</Typography>

 <div className='feedinner'>


<div className='inner1 i1'>
<div style={{marginTop: "40px" ,backgroundColor: "rgba(255, 255, 255, 0.283)", height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<div style={{backgroundColor: "white", height: "60px", width: "60px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<SlowMotionVideoIcon className='slomoicon' fontSize = "large"/>
</div>
</div>
</div>

<div className='inner1 i2'>
<div style={{marginTop: "40px" ,backgroundColor: "rgba(255, 255, 255, 0.283)", height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<div style={{backgroundColor: "white", height: "60px", width: "60px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<SlowMotionVideoIcon className='slomoicon' fontSize = "large"/>
</div>
</div>
</div>

<div className='inner1 i3'>
<div style={{marginTop: "40px" ,backgroundColor: "rgba(255, 255, 255, 0.283)", height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<div style={{backgroundColor: "white", height: "60px", width: "60px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
<SlowMotionVideoIcon className='slomoicon' fontSize = "large"/>
</div>
</div>
</div>

 </div>

</div>



<div className='timmer'>
<div className='timmer2'>
<div className='innertimmer'>

<div>
<Typography variant="h6" sx = {{ color: "white", fontFamily: 'Water Brush', letterSpacing: "3px", fontSize: {xs: "1.5rem", sm: "3.5rem", md: "5rem", textAlign: "center" }}}>Tomorrow Land 2223</Typography>

<Typography variant="h6" sx = {{color: "white", textAlign: "center", fontFamily: 'IBM Plex Sans',  fontSize: {xs: "0.7rem", sm: "1.4rem", md: "2rem" }}}>MUSIC FESTIVAL START IN</Typography>

</div>

<div>

<div className='j1'>

<div className='j2'> <h2 className='hh2' id='day'>  </h2>  <p className='para2' > DAYS </p> </div>
<div className='j2'> <h2 className='hh2' id='hour'>  </h2>  <p className='para2' > HOURS </p></div>

</div>

<div className='j1'>
<div className='j2'> <h2 className='hh2' id='min'>  </h2>  <p className='para2' > MINUTES </p> </div>
<div className='j2'> <h2 className='hh2' id='sec'>  </h2>  <p className='para2' > SECONDS </p> </div>
</div>

</div>
</div>
</div>
</div>


{/* <div className='footer'>



</div> */}


</>

  )
}


const AppContainer = styled.div`
	transition: all 0.5s ease;
	margin-left: ${(p) => (p.libraryStatus ? "10rem" : "0")};
	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;
