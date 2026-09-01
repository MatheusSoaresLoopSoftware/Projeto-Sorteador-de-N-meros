//--Initial form--//
const qtd = document.getElementById("qtd")
const min = document.getElementById("min")
const max = document.getElementById("max")
const formArea = document.getElementById("form-area")
const formSorter = document.getElementById("form-sorter")
const checkbox = document.getElementById("toggle-style")

//--Variables--//
let fieldVerified
let noRepeat

//--Verify inputs--//
qtd.oninput = () => {
    // Verify input number
    qtd.value = qtd.value.replace(/[^\d,]/g, "")
}

min.oninput = () => {
    // Verify input number
    min.value = min.value.replace(/[^\d,]/g, "")
}

max.oninput = () => {
    // Verify input number
    max.value = max.value.replace(/[^\d,]/g, "")
}

checkbox.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        noRepeat = Boolean(e.target.checked)
        console.log(noRepeat)
    }
})

formSorter.classList.add("hidden")

formArea.onsubmit = (event) => {
    event.preventDefault()

    if (!validFields()) {
        return
    }

    const numeros = sorter(qtd.value, min.value, max.value, noRepeat)
    console.log(numeros) 
    
    formArea.classList.add("hidden")
    formSorter.classList.remove("hidden")
}


//--FUNCTION AREA--//

// Valid Fields
function validFields() {
    try {
        // Verify null field       
        if (qtd.value == "" || min.value == "" || max.value == "") {
            alert("Preencha todos os campos!")
            return false
        }

        return true

    } catch (error) {
        console.log(error)
        alert("Não foi possivel realizar o sorteio.")
    }
}


// SoarterNumber
function sorterNumber(min, max) {
    min = Number(min)
    max = Number(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function noRepeatSorter(min, max, qtd) {
    min = Number(min)
    max = Number(max)
    qtd = Number(qtd)

    const idleNumbers = []
    for (let i = min; i <= max; i++) idleNumbers.push(i);

    const resultNoRepeat = [];
    for (let i = 0; i < qtd; i++) {
        const randomIndex = Math.floor(Math.random() * idleNumbers.length)
        resultNoRepeat.push(idleNumbers[randomIndex]);
        idleNumbers.splice(randomIndex, 1);
    }

    return resultNoRepeat;
}


// Sorter
function sorter(qtd, min, max, noRepeatNumber) {

    min = Number(min)
    max = Number(max)
    qtd = Number(qtd)

       if (noRepeatNumber) {
        return sortearSemRepetir(min, max, qtd)
    }

    const result = [];
    for (let i = 0; i < qtd; i++) {
        result.push(sorterNumber(min, max));
    }
    return result;
}








