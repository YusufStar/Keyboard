var activecaps = false

var input = document.getElementsByTagName("input")[0]

var caps = document.getElementById("capslight")

window.addEventListener("load", () => {
    input.focus()
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

window.addEventListener("keydown", (e) => {
    document.getElementsByClassName(`key c${e.keyCode}`)[0].classList.add("keydown")
    if(!activecaps) {
            if(e.keyCode == 20) {
                caps.style.background = "red"
                activecaps = true
            }
    } else if(e.keyCode == 20) {
                caps.style.background = "#999"
                activecaps = false
            }
})

window.addEventListener("keyup", (x) => {
    document.getElementsByClassName(`key c${x.keyCode}`)[0].classList.remove("keydown")
})