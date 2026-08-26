//--Initial form--//
const qtd = document.getElementById("qtd")
const min = document.getElementById("min")
const max = document.getElementById("max")
const formArea = document.getElementById("form-area")
const formSorter = document.getElementById("form-sorter")
const checkbox = document.getElementById("toggle-style")

//--Variables--//
let fieldVerified

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


formSorter.classList.add("hidden")

formArea.onsubmit = (event) => {
    event.preventDefault()

    if (!validFields()) {
        return
    }
    formArea.classList.add("hidden")
    formSorter.classList.remove("hidden")
}

checkbox.addEventListener('change', (e)=>{
   
})







