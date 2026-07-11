/* ===========================================================
              VINTAGE LOVE LETTER
                  SCRIPT.JS
=========================================================== */
/* ===========================================================
                    LETTER PREVIEW
=========================================================== */

const letterPreview = document.getElementById("letterPreview");
const letterSection = document.getElementById("letterSection");

letterPreview.addEventListener("click", () => {

    letterPreview.classList.add("opening");

    setTimeout(() => {
        letterPreview.style.display = "none";

        letterSection.classList.remove("hidden");
        letterSection.classList.add("reveal");

        letterSection.scrollIntoView({

            behavior: "smooth"

        });

    }, 850);

});

const backButton = document.getElementById("backButton");
const intro = document.querySelector(".intro");

backButton.addEventListener("click", () => {

    // Hide letter
    letterSection.classList.add("hidden");

    // Show preview again
    letterPreview.style.display = "block";

    // Reset animation
    letterPreview.classList.remove("opening");

    // Force browser reflow
    void letterPreview.offsetWidth;

    // Restore
    letterPreview.style.opacity = "1";
    letterPreview.style.transform = "";

    // Scroll back
    intro.scrollIntoView({

        behavior:"smooth"

    });

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


