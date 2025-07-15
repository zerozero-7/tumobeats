
window.onload = function () {
    console.log("Estou pronto")
    //** variaveis de elementos **//
    let title = document.querySelector("#title")
    title.innerText = "Hello"
    let previousButton = document.querySelector("#previous-button")
    let nextButton = document.querySelector("#next-button")
    let PlayButton = document.querySelector("#play-pause")

    //** Funções **/
    function changetitle (value)
    {title.innerText = value}


    previousButton.onclick = function() {
        console.log("previews button")
    }
    nextButton.onclick = function() {
        console.log("next button")
    }  
      PlayButton.onclick = function() {
        console.log("play button")
    }
    changetitle("guilherme")
    console.log(title)

}

