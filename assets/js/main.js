
const passwordText = document.querySelector("input[type='text']")
const slider = document.querySelector("input[type='range']");
const checkInput = document.querySelectorAll("input[type='checkbox']")

const output = document.querySelector(".count");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

function getChar(num) {
    return document.querySelector("input[name=" + num + "]").checked
}

function genPassword() {
    var chars = ""
    var numbers = "0123456789"
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var symbols = "!@#$%^&*()"
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (getChar("numbers")) chars += numbers
    if (getChar("symbols")) chars += symbols
    if (getChar("lowercase")) chars += lowercase
    if (getChar("uppercase")) chars += uppercase

    var passwordLength = slider.value;
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomCharacter = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomCharacter, randomCharacter+1);
        
        passwordText.value = password;
    }
    
    // const strengthBox = document.querySelectorAll('.bar')
    
    // for (let i = 0; i < strengthBox.length; i++) {
    //     if ( slider.value < 5) {
    //         strengthBox[0].style.backgroundColor = '#bd4926'
    //         strengthBox[i].style.borderColor = 'transparent'
    //     }if ( slider.value <= 7) {
    //         strengthBox[0].style.backgroundColor = '#f0e222'
    //         strengthBox[1].style.backgroundColor = '#f0e222'
    //         strengthBox[i].style.borderColor = 'transparent'
    //     }else if(slider.value <= 9){
    //         strengthBox[0].style.backgroundColor = '#3fbd26' 
    //         strengthBox[1].style.backgroundColor = '#3fbd26' 
    //         strengthBox[2].style.backgroundColor = '#3fbd26'
    //         strengthBox[i].style.borderColor = 'transparent' 
    //     }
    //     else if(slider.value >= 10){
    //         strengthBox[i].style.backgroundColor = '#3fbd26' 
    //         strengthBox[i].style.borderColor = 'transparent' 
    //     }else{strengthBox[i].style.backgroundColor = 'transparent'}
    // }
    

}

function copyPassword() {
    passwordText.select();
    // passwordText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordText.value); 

  }
