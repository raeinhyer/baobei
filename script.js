/* ===========================================================
              VINTAGE LOVE LETTER
                  SCRIPT.JS
=========================================================== */


/* ===========================================================
                    ENVELOPE OPENING
=========================================================== */


const envelope = document.getElementById("envelope");
const letterSection = document.getElementById("letterSection");


envelope.addEventListener("click", () => {


    // Add opening animation

    envelope.classList.add("open");


    // Wait for envelope animation

    setTimeout(() => {


        envelope.classList.add("hide");


    }, 1200);



    // Show letter

    setTimeout(() => {


        letterSection.classList.remove("hidden");


        letterSection.scrollIntoView({

            behavior:"smooth"

        });


    }, 1700);



});





/* ===========================================================
                    MUSIC PLAYER
=========================================================== */


const music = document.getElementById("bgMusic");

const playButton = document.getElementById("playButton");


let playing = false;



playButton.addEventListener("click", () => {


    if(!playing){


        music.play();


        playButton.innerHTML = "⏸ Pause";


        playing = true;


    }


    else{


        music.pause();


        playButton.innerHTML = "▶ Play";


        playing = false;


    }


});





/* ===========================================================
                    SECRET NOTE
=========================================================== */


const paperCorner = document.getElementById("paperCorner");

const secretNote = document.getElementById("secretNote");



paperCorner.addEventListener("click",()=>{


    secretNote.classList.remove("hidden");


});




/* Close secret note */

secretNote.addEventListener("click",()=>{


    secretNote.classList.add("hidden");


});


