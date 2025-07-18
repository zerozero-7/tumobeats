
window.onload = async function () {

    //carregar dados do data.json
     if ("serviceWorker" in navigator) {
         navigator.serviceWorker.register("service-worker.js")
     }

    
    let request = await fetch("data.json")
    let audiodata = await request.json()


    console.log("Estou pronto")
    //** variaveis de elementos **//
 
    let previousButton = document.querySelector("#previous-button")
    let nextButton = document.querySelector("#next-button")
    let PlayButton = document.querySelector("#play-pause")
    let scrubInput = document.querySelector("#scrub-input")
    let volumeInput = document.querySelector("#volume-input")
    let fileInput = document.querySelector("#input-file")
    let audio = document.querySelector("audio")
    console.log(audio)

    let currentMusic = 0
    let pauseTime = 0;






    //** Funções **/
    function changetitle (value){
        title.innerText = value
    }

    function updateiInputBar(value, bar){
        bar.style.transform = "scaleX(" + value / 100 + ")";
    }


    previousButton.onclick = function() {
        currentMusic--;
        if(currentMusic<0){
            currentMusic = audiodata.length - 1
        }
        playaudio()

    }
    nextButton.onclick = function() {
        console.log("next button")
        currentMusic++;
        if(currentMusic >= audiodata.length){
            currentMusic = 0
    } 
    playaudio()
    }

    audio.onended = function () {
        nextButton.click()
    }
    PlayButton.onclick = function() {

        if (audio.paused){
            playaudio()
            audio.currentTime = pauseTime
            pauseTime = 0
        }else{
            pauseTime = audio.currentTime
            pauseaudio()
        }
    }

    scrubInput.querySelector("input").oninput = function(event) {
        let bar = scrubInput.querySelector(".range-bar");
        let value = event.target.value
        scrubaudio(value)
       updateiInputBar(value, bar); 

    }

    volumeInput.querySelector("input").oninput = function(event) {
        let bar = volumeInput.querySelector(".range-bar");
        let value = event.target.value
       updateiInputBar(value, bar); 
       audio.volume = value/100
    }
    fileInput.oninput = function(event) {

        let file = Array.from(fileInput.files)[0];
        let reader = new FileReader();
        reader.onload = function() {
        audioData.push({
        title: file.name,
        url: reader.result
        });
        }
        if (file) {
        reader.readAsDataURL(file);
        }
        }
function scrubaudio(value){
    if (!audio.src) return;
    console.log(audio.duration)
    console.log(audio.currentTime)
    audio.currentTime = audio.duration * (value / 100 )
    updateiInputBar(value, bar)
}

function scrubaudio(value){
    if(!audio.src) return;
    audio.currentTime = audio.duration * ( value / 100)
}
    function playaudio() {
        audio.src = audiodata[currentMusic].url
        changetitle(audiodata[currentMusic].title)
        audio.play();
    }
    function pauseaudio(){
        audio.pause
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
audio.onprogress = function() {

}

audio.ontimeupdate = function() {
    let bar = scrubInput.querySelector(".range-bar");
    let value = (audio.currentTime / audio.duration)* 100;
    updateiInputBar(value, bar) 
}
    audio.onpause = function() {
        let playicon = document.querySelector("#icon-play")
        let pauseicon = document.querySelector("#icon-pause")
        playicon.style.display = "block"
        pauseicon.style.display = "none"

    }
}








