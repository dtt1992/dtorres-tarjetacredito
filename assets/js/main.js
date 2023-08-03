const inputCard = document.querySelector("#inputCard")
const inputDate = document.querySelector("#inputDate")
const inputCVV = document.querySelector("#inputCVV")

const maskNumber = "####-####-####-####"
const maskDate = "##/##"
const maskCVV = "###"

let current = []
let cardNumber = []
let dateNumber = []
let cvvNumber = []

inputCard.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return
    }
    e.preventDefault()
    handleInput(maskNumber, e.key, cardNumber)
    inputCard.value = cardNumber.join("")
})

inputDate.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return
    }
    e.preventDefault()
    handleInput(maskDate, e.key, dateNumber)
    inputDate.value = dateNumber.join("")
})

inputCVV.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        return
    }
    e.preventDefault()
    handleInput(maskCVV, e.key, cvvNumber)
    inputCVV.value = cvvNumber.join("")
})

function handleInput(mask, key, arr) {
    // Teclas permitidas que puede utilizar el usuario
    let numbers =["0","1","2","3","4","5","6","7","8","9"]
    // Si la tecla es borrar y el arreglo tiene mas de un elemento, borro ese elemento
    if (key === "Backspace" && arr.length > 0) {
        arr.pop()
        return
    }
    // Si la tecla que pulsamos existe en el array numbers y si la longitud mas 1 sigue siendo menor o igual a la array de la mask
    if (numbers.includes(key) && arr.length + 1 <= mask.length) {
        // Longitud del array si en la posicion existe el - o / si lo pongo al array
        if (mask[arr.length] === "-" || mask[arr.length] ==="/") {
            arr.push(mask[arr.length], key)
        }else{
            // Si en la posicion es libre, pones la tecla presionada
            arr.push(key)
        }
    }
}