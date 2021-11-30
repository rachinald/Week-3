const clickCode = document.getElementById("code");
const clickCharCode = document.getElementById("charCode");
const clickKey = document.getElementById("key");

document.addEventListener('keypress', (event)=> {
    clickCode.textContent = event.code
    clickCharCode.textContent = event.charCode
    clickKey.textContent = event.key

})

