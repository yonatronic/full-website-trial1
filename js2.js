let numberWritten = '' ;
let numberWrittens = '' ;
let numberReminder = '' ;
let passed = 0;
let failed = 0;
let named = '';
let names = '';
let email = '';
let emailed = '';
let button = document.querySelector('.submit')
let buttonContainer1 = document.querySelector('.link-button-container')


function checker() { 
  passed = false;
  failed = 0;
  email = document.querySelector('.email');
  emailed = email.value;
  named = document.querySelector('.name')
  names = named.value;  
  if (names.length < 3) {
    document.querySelector('.name-corrector').innerText = 'name should be atleast 3 characters'  
    checker2();   
    return
  }else if (names.length >= 3) {
    document.querySelector('.name-corrector').innerText = '';
    passed = true;
  }  
  numberWrittens = document.querySelector('.phone-number').value;
        numberWritten = numberWrittens; 
  numberReminder = document.querySelector('.number-reminder');
  if (isNaN(numberWritten) === false) {
    numberReminder.innerText = '';
    passed = true;
  }else if (isNaN(numberWritten) === true) {
    numberReminder.innerText = 'write only numbers';  
    passed = false;
    checker2(); 
    return 
  }
  if (numberWritten.length < 10 ) {
    numberReminder.innerText = 'write atleast ten numbers'
    numberWrittens.value = '';
    passed = false;   
    checker2();
    return
  }
 
  numberWrittens.value = ''; 
  checker2(); 
}

function checker2() {  
  if (passed === false) {
    buttonContainer1.innerHTML = `<button class="submit-dim"
      onclick="checker();
      checker2();"
        >submit</button>`

  }else if (passed === true) {
    buttonContainer1.innerHTML = `<button class = "submit" onclick = "
    window.location.href = 'html4.html'        
    checker()
    checker2()">submit</button>`
  }
}

setInterval(checker, 1000)
