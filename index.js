/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const poidsDiv = document.getElementById("poids")
const longDiv = document.getElementById("longueur")
const volDiv = document.getElementById("volume")
const convBtn = document.getElementById("conv-btn")
const convBtn2 = document.getElementById("conv-btn2")
const metInp = document.getElementById("input-field")

convBtn.addEventListener("click", convert);
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      convert();
    }
  });

  convBtn2.addEventListener("click", convert2);
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      convert2();
    }
  });



function convert() {
    let inpVal = metInp.value 

    longDiv.innerHTML = `<p> une longueur de ${inpVal} mètre(s) est égale à ${parseFloat(inpVal * 3.281).toFixed(2)} pieds </p>`
     
    poidsDiv.innerHTML = `<p> un poids de ${inpVal} kg(s) est égal à ${parseFloat(inpVal * 2.204).toFixed(2)} livres </p>`
   
    volDiv.innerHTML = `<p> un volume de ${inpVal} litre(s) est égal à ${parseFloat(inpVal * 0.264).toFixed(2)} gallons (pounds) </p>`

}

function convert2() {
  let inpVal = metInp.value 

  longDiv.innerHTML = `<p> une longueur de ${inpVal} pieds est égale à ${parseFloat(inpVal * 0.3048).toFixed(2)} mètre(s) </p>`
   
  poidsDiv.innerHTML = `<p> un poids de ${inpVal} livres est égal à ${parseFloat(inpVal * 0.45359237).toFixed(2)} kg(s) </p>`
 
  volDiv.innerHTML = `<p> un volume de ${inpVal} gallon(s) est égal à ${parseFloat(inpVal * 3.785411784).toFixed(2)} litres </p>`

}