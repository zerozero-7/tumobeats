
window.onload = async function () {

//carregar dados do data.json

    let request = await fetch("data.json")
 
    let audiodata = await request.json()
    console.log("Estou pronto")
    //** variaveis de elementos **//
    let title = document.querySelector("#title")
    title.innerText = "Hello"
    let previousButton = document.querySelector("#previous-button")
    let nextButton = document.querySelector("#next-button")
    let PlayButton = document.querySelector("#play-pause")
    let scrubInput = document.querySelector("#scrub-input")
    let volumeInput = document.querySelector("#volume-input")
    let fileInput = document.querySelector("#file-input")
    let audio = document.querySelector("audio")
    console.log(audio)

let currentMusic = 0






    //** Funções **/
    function changetitle (value){
        title.innerText = value
    }

    function updateiInputBar(value, bar){
        bar.style.transform = "scaleX(" + value / 100 + ")";
    }


    previousButton.onclick = function() {
        console.log("previews button")
    }
    nextButton.onclick = function() {
        console.log("next button")
    } 
    PlayButton.onclick = function() {

        if (audio.paused){
            playaudio()
        }else{
            pauseaudio()
        }
    }

    scrubInput.querySelector("input").oninput = function(event) {
        let bar = scrubInput.querySelector(".range-bar");
       updateiInputBar(event.target.value, bar); 
    }

    volumeInput.querySelector("input").oninput = function(event) {
        let bar = volumeInput.querySelector(".range-bar");
       updateiInputBar(event.target.value, bar); 
    }
    fileInput.oninput = function () {
        console.log("aqui")


    }

    function playaudio() {
        audio.src = audiodata[currentMusic].url
        audio.play();
    }
    function pauseaudio(){
        audio.pause()
    }
    audio.onplay = function() {
        let playicon = document.querySelector("#icon-play")
        let pauseicon = document.querySelector("#icon-pause")
        playicon.style.display = "none"
        pauseicon.style.display = "block"

        console.log(pauseicon)
    }

    audio.onpause = function() {
        let playicon = document.querySelector("#icon-play")
        let pauseicon = document.querySelector("#icon-pause")
        playicon.style.display = "block"
        pauseicon.style.display = "none"

    }
}








