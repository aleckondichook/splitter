let numOfPeople = 0
let billAmount = 0
let tipNumber = 0
const inputBillAmount = document.querySelector(".input-bill-amount")
const peopleAmount = document.querySelector(".num-of-people")
const billError = document.querySelector(".bill-zero")
const peopleError = document.querySelector(".people-zero")
const tipAmount10 = document.querySelector(".tip-amount10")
const tipAmount15 = document.querySelector(".tip-amount15")
const tipAmount20 = document.querySelector(".tip-amount20")
const tipAmount25 = document.querySelector(".tip-amount25")
const tipAmount50 = document.querySelector(".tip-amount50")
const customTip = document.querySelector(".custom-input")
const resetButton = document.querySelector(".reset-button")

const handleBillChange = (e) => {
  const tipElement = document.querySelector(".tip-amount-title")
  const number = document.querySelector(".total-bill-amount")

  billAmount = e.target.value

  if(!e.target.value) {
    peopleError.style.display = "none"
    number.innerHTML = "$0.00"
    tipElement.innerHTML = "$0.00"
    return
  }

  if(!numOfPeople) {
    number.innerHTML = "$0.00"
    peopleError.style.display = "inline"
  }
  else {
    tipElement.innerHTML = `$${((tipNumber / 100) * e.target.value) / numOfPeople}`
    number.innerHTML = `$${(((tipNumber / 100) * e.target.value) + parseFloat(e.target.value)) / numOfPeople}`
    peopleError.style.display = "none"
    billError.style.display = "none"
  }
}

const handlePeopleChange = (e) => {
  const tipElement = document.querySelector(".tip-amount-title")
  const number = document.querySelector(".total-bill-amount")

  numOfPeople = e.target.value

  if(!e.target.value) {
    billError.style.display = "none"
    number.innerHTML = "$0.00"
    tipElement.innerHTML = "$0.00"
    return
  }

  if(!billAmount) {
    number.innerHTML = "$0.00"
    billError.style.display = "inline"
  }
  else {
    tipElement.innerHTML = `$${((tipNumber / 100) * billAmount) / e.target.value}`
    number.innerHTML = `$${(((tipNumber / 100) * billAmount) + parseFloat(billAmount)) / e.target.value}`
    billError.style.display = "none"
    peopleError.style.display = "none"
  }
}

const handleTipChange = (tip) => {
  const tipElement = document.querySelector(".tip-amount-title")
  const number = document.querySelector(".total-bill-amount")

  tipNumber = tip

  if(billAmount && numOfPeople) {
    const tipAmount = (tip / 100) * billAmount

    console.log(tipAmount)
    console

    tipElement.innerHTML = `$${((tip / 100) * billAmount) / numOfPeople}`
    number.innerHTML = `$${(((tip / 100) * billAmount) + parseFloat(billAmount)) / numOfPeople}`
  }
}

const handleCustomTipChange = (e) => {
  const tipElement = document.querySelector(".tip-amount-title")
  const number = document.querySelector(".total-bill-amount")

  tipNumber = e.target.value

  if(billAmount && numOfPeople) {
    const tipAmount = (e.target.value / 100) * billAmount

    console.log(tipAmount)
    console

    tipElement.innerHTML = `$${((e.target.value / 100) * billAmount) / numOfPeople}`
    number.innerHTML = `$${(((e.target.value / 100) * billAmount) + parseFloat(billAmount)) / numOfPeople}`
  }
}

const handleReset = () => {
  numOfPeople = 0
  billAmount = 0
  tipNumber = 0

  const tipElement = document.querySelector(".tip-amount-title")
  const number = document.querySelector(".total-bill-amount")

  tipElement.innerHTML = "$0.00"
  number.innerHTML = "$0.00"

  inputBillAmount.value = ""
  peopleAmount.value = ""
}

inputBillAmount.addEventListener('input', (e) => handleBillChange(e))
peopleAmount.addEventListener('input', (e) => handlePeopleChange(e))
tipAmount10.addEventListener('click', () => handleTipChange(10))
tipAmount15.addEventListener('click', () => handleTipChange(15))
tipAmount20.addEventListener('click', () => handleTipChange(20))
tipAmount25.addEventListener('click', () => handleTipChange(25))
tipAmount50.addEventListener('click', () => handleTipChange(50))
customTip.addEventListener('input', (e) => handleCustomTipChange(e))
resetButton.addEventListener('click', () => handleReset())