    const playBoomSound = document.getElementById("boomSound");
const showBoomPic = document.getElementById("boomPic");
  const playClapSound = document.getElementById("clapSound");
const showClapPic = document.getElementById("clapPic");
  const playHihatSound = document.getElementById("hihatSound");
const showHihatPic = document.getElementById("hihatPic");
  const playKickSound = document.getElementById("kickSound");
const showKickPic = document.getElementById("kickPic"); 
  const playOpenhatSound = document.getElementById("openhatSound");
const showOpenhatPic = document.getElementById("openhatPic");
  const playRideSound = document.getElementById("rideSound");
const showRidePic = document.getElementById("ridePic");
  const playSnareSound = document.getElementById("snareSound");
const showSnarePic = document.getElementById("snarePic");
  const playTinkSound = document.getElementById("tinkSound");
const showTinkPic = document.getElementById("tinkPic");
  const playTomSound = document.getElementById("tomSound");
const showTomPic = document.getElementById("tomPic");
  
  document.addEventListener('keypress', (event)=> {

      if(event.key == 'a'){

            playBoomSound.pause()
            playBoomSound.currentTime = 0
            playBoomSound.play();

          showBoomPic.style.display = "block";
          showClapPic.style.display = "none";
          showHihatPic.style.display = "none";
          showKickPic.style.display = "none";
          showOpenhatPic.style.display = "none";
          showSnarePic.style.display = "none";
          showTomPic.style.display = "none";
          showTinkPic.style.display = "none";
          showRidePic.style.display = "none";
          showHihatPic.style.display = "none";

          

      } else if(event.key =='s'){

            playClapSound.pause()
            playClapSound.currentTime = 0
            playClapSound.play();
            
            showBoomPic.style.display = "none";  
            showClapPic.style.display = "block"; 
            showHihatPic.style.display = "none";
            showKickPic.style.display = "none"; 
            showOpenhatPic.style.display = "none"; 
            showSnarePic.style.display = "none"; 
            showTomPic.style.display = "none";  
            showTinkPic.style.display = "none"; 
            showRidePic.style.display = "none"; 
            showHihatPic.style.display = "none";

        } else if(event.key =='d'){

            playHihatSound.pause()
            playHihatSound.currentTime = 0
            playHihatSound.play();

            showBoomPic.style.display = "none"; 
            showHihatPic.style.display = "block";
            showClapPic.style.display = "none";
            showKickPic.style.display = "none";
            showOpenhatPic.style.display = "none";
            showSnarePic.style.display = "none";
            showTomPic.style.display = "none";
            showTinkPic.style.display = "none";
            showRidePic.style.display = "none";

        } else if(event.key =='f'){

            playKickSound.pause()
            playKickSound.currentTime = 0
            playKickSound.play();

            showHihatPic.style.display = "none";
            showBoomPic.style.display = "none"; 
            showKickPic.style.display = "block";
            showOpenhatPic.style.display = "none";
            showSnarePic.style.display = "none";
            showTomPic.style.display = "none";
            showTinkPic.style.display = "none";
            showRidePic.style.display = "none";
            showClapPic.style.display = "none";
            
        } else if(event.key =='g'){

            playOpenhatSound.pause()
            playOpenhatSound.currentTime = 0
            playOpenhatSound.play();

            showHihatPic.style.display = "none";
            showBoomPic.style.display = "none"; 
            showOpenhatPic.style.display = "block";
            showSnarePic.style.display = "none";
            showTomPic.style.display = "none";
            showTinkPic.style.display = "none";
            showRidePic.style.display = "none";
            showKickPic.style.display = "none";
            showClapPic.style.display = "none";

        } else if(event.key =='h'){

            playRideSound.pause()
            playRideSound.currentTime = 0
            playRideSound.play();

            showHihatPic.style.display = "none";
            showBoomPic.style.display = "none"; 
            showRidePic.style.display = "block";
            showOpenhatPic.style.display = "none";
            showSnarePic.style.display = "none";
            showTomPic.style.display = "none";
            showTinkPic.style.display = "none";
            showKickPic.style.display = "none";
            showClapPic.style.display = "none";

        } else if(event.key =='j'){

            playSnareSound.pause()
            playSnareSound.currentTime = 0
            playSnareSound.play();

            showOpenhatPic.style.display = "none";
            showHihatPic.style.display = "none";
            showBoomPic.style.display = "none"; 
            showSnarePic.style.display = "block";
            showTomPic.style.display = "none";
            showTinkPic.style.display = "none";
            showKickPic.style.display = "none";
            showRidePic.style.display = "none";
            showClapPic.style.display = "none";
            
        } else if(event.key =='k'){

            playTinkSound.pause()
            playTinkSound.currentTime = 0
            playTinkSound.play();

            showOpenhatPic.style.display = "none";
            showHihatPic.style.display = "none";
            showBoomPic.style.display = "none"; 
            showTinkPic.style.display = "block";
            showTomPic.style.display = "none";
            showKickPic.style.display = "none";
            showRidePic.style.display = "none";
            showClapPic.style.display = "none";
            showSnarePic.style.display = "none";

        } else if(event.key =='l'){

            playTomSound.pause()
            playTomSound.currentTime = 0
            playTomSound.play();

            showOpenhatPic.style.display = "none";
            showHihatPic.style.display = "none";
            showBoomPic.style.display = "none"; 
            showTomPic.style.display = "block";
            showTinkPic.style.display = "none";
            showKickPic.style.display = "none";
            showRidePic.style.display = "none";
            showClapPic.style.display = "none";
            showSnarePic.style.display = "none";


  }
  
  })