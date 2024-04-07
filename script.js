let num = document.querySelector(".adviceNum");
let advice = document.querySelector(".advice");
let change = document.querySelector(".change");


change.addEventListener("click", getAdvice);

async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    num.innerHTML = "ADVICE #"+data.slip.id;
    advice.innerHTML ='"'+data.slip.advice+'"';
}