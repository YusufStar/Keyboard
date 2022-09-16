var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "];

var activecaps = false

var a = document.querySelectorAll("a")

var input = document.getElementsByTagName("input")[0]

var caps = document.getElementById("capslight")

window.addEventListener("load", () => {
    input.focus()
})

window.addEventListener("keydown", (e) => {
    for(i = 0; i < alphabet.length; i++) {
        if(e.key.toUpperCase() == alphabet[i]) {
            input.value += e.key
        }
    }
    if (e.keyCode == 8) {
        input.value = input.value.slice(0, -1)
    }
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