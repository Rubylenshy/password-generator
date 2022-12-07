
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
    //     function getBox(num){
    //         return strengthBox[num].style.backgroundColor = '#3fbd26'
    //     }
    //     strengthBox[i].style.borderColor = 'transparent'
    //     if ( slider.value <= 5) {
    //         getBox(0)
            
    //     }if ( slider.value > 5 && slider.value <= 7) {
    //         getBox(0); getBox(1)
    //         strengthBox[2].style.backgroundColor = 'transparent'
    //         strengthBox[3].style.backgroundColor = 'transparent'
    //     }else if(slider.value > 7 && slider.value <= 9){
    //         getBox(0); getBox(1); getBox(2)
    //         strengthBox[3].style.backgroundColor = 'transparent'
    //     }
    //     else if(slider.value >= 10){
    //         getBox(i) 
    //     }else{strengthBox[i].style.backgroundColor = 'transparent'}
    // }

    const strengthBox = document.querySelector('.strength-box')
    function strength(word) {
        strengthBox.innerHTML = `${word}`
    }

    if ( slider.value <= 5) {
        strengthBox.innerHTML = `Weak`
        strengthBox.style.color = `red`
        
    }if ( slider.value > 5 && slider.value <= 7) {
        strengthBox.innerHTML = `Average`
        strengthBox.style.color = `yellow`
    }else if(slider.value > 7 && slider.value <= 9){
        strengthBox.innerHTML = `Strong`
        strengthBox.style.color = `green`
    }
    else if(slider.value >= 10){
        strengthBox.innerHTML = `Rock Solid`
        strengthBox.style.color = `green`
    }

}

function copyPassword() {
    passwordText.select();
    // passwordText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordText.value); 

  }
