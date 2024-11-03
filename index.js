const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let boxOneEl = document.getElementById("boxOne")
let boxTwoEl = document.getElementById("boxTwo")

let passwordArrayOne = []
let passwordArrayTwo = []

function generatePW(){
    for (let i = 0; i < 15; i++){
   let randomIndex =  Math.floor(Math.random() * characters.length)
   passwordArrayOne.push(characters[randomIndex])
}
boxOneEl.textContent = passwordArrayOne
passwordArrayOne = []


for (let i = 0; i < 15; i++){
   let randomIndex =  Math.floor(Math.random() * characters.length)
   passwordArrayTwo.push(characters[randomIndex])
}
boxTwoEl.textContent = passwordArrayTwo
passwordArrayTwo = []
}


