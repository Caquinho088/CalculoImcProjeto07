import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC, notANumber} from './ultils.js'


const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeigth = document.querySelector('#heigth')

inputWeigth.oninput = () => AlertError.close()
inputHeigth.oninput = () => AlertError.close()

form.onsubmit = event => {
  event.preventDefault()

  const weigth = inputWeigth.value
  const heigth = inputHeigth.value

  const weigthOrHeigthIsNotANumber = notANumber(weigth) || notANumber (heigth)
  
  if(weigthOrHeigthIsNotANumber){
    AlertError.open()
    return;
  }

  AlertError.close()
  

  const result = IMC (weigth, heigth)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()

}





