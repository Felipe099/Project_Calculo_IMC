import { Modal } from "./modal.js"
import { AlertError } from "./alert.js"
import { notANumber, calculateIMC } from "./utils.js"

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = (event) => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;
    
    const weightOrheightIsANotNumber = notANumber(weight) || notANumber(height)

    if (weightOrheightIsANotNumber){
        AlertError.open()
        return
    }

    AlertError.close()

    const result = calculateIMC(weight, height);
    displayResultMessage(result)
   
};

function displayResultMessage(result) {
    let message;
    

    if(result > 18.5){
        message = `O seu IMC é de: ${result}

        CLASSIFICAÇÃO: MAGREZA
        `;
    } else if(result >= 18.5 || result <= 24.9) {
        message = `O seu IMC é de: ${result}

        CLASSIFICAÇÃO: NORMAL
        `;
    } else if(result >= 25 || result <= 29.9) {
        message = `O seu IMC é de: ${result}

        CLASSIFICAÇÃO: SOBREPESO
        `;
    } else if(result >= 30 || result <= 39.9) {
        message = `O seu IMC é de: ${result}

        CLASSIFICAÇÃO: OBESIDADE
        `;
    } else{
        message = `O seu IMC é de: ${result}

        CLASSIFICAÇÃO: OBESIDADE
        `;
    } 

    Modal.modalMessage.innerText = message;
    Modal.open();
}