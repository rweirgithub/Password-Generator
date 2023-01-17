const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];



function passwordBtn() {
    renderPasswords()
}

const passwordLength = 15

function renderPasswords() {
    let passwordElOne = document.getElementById("password-el-1")
    let passwordElTwo = document.getElementById("password-el-2")
    passwordElOne.textContent = " "
    passwordElTwo.textContent = " "
    for (let i = 0; i < passwordLength; i++) {
        let randomPassword1 = Math.floor(Math.random() * characters.length)
        let randomPassword2 = Math.floor(Math.random() * characters.length)
        passwordElOne.textContent += characters[randomPassword1]
        passwordElTwo.textContent += characters[randomPassword2]
    }
}

function clearBtn() {
    document.getElementById("password-el-1").innerText = " "
    document.getElementById("password-el-2").innerText = " "
}