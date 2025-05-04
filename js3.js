const emailInput = document.querySelector('.email')
const submitButton = document.querySelector('.submit-container')
const submitContainer = document.querySelector('.submit-container')


function Checker() {
  let passed = 0
  let nameInput = document.querySelector('.name');
  console.log(nameInput.value.length)
  let nameCorrector = document.querySelector('.name-corrector')
  if (nameInput.value.length < 3 ) {
    nameCorrector.innerText = "name should be atleast 3 characters"
    passed += 10  
  }else {
    nameCorrector.innerText = ""
    passed -= 1
  }


  const phoneInput = document.querySelector('.phone-number');
  if (passed <= 0 && phoneInput.value != "" ) {   
  let numberReminder = document.querySelector('.number-reminder')
  if ((Number(phoneInput.value)/Number(phoneInput.value) === 1)) {
    numberReminder.innerText = ""
  }else {
    numberReminder.innerText = "write only numbers"
    passed += 10
  }  


  if (passed <= 0) {
    submitContainer.innerHTML = `<a href = "html4.html"><button class="submit"
          >submit</button></a>`
  }else {
    submitContainer.innerHTML =  `<button class="submit-dim">submit</button>`          
  }
  }  

  if (emailInput.value ==="" || nameInput.value === "" || phoneInput.value === "") {
    submitContainer.innerHTML =  `<button class="submit-dim">submit</button>`
  }
  
}

submitContainer.addEventListener("click" , () => {
  const overallReminder = document.querySelector('.overall-reminder')
  if (emailInput.value ==="" || nameInput.value === "" || phoneInput.value === "") {
    overallReminder.innerText = "the info entered don't exist"
  }
})


setInterval(Checker, 1000)
