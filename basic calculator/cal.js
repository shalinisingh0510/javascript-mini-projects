const buttonEl = document.querySelectorAll("button");
console.log("el button is ",buttonEl)
const inputFieldEl = document.getElementById("result")
console.log("input filed is",inputFieldEl)
for(let i=0;i<buttonEl.length;i++){
    buttonEl[i].addEventListener("click",()=>{
        const buttonValue = buttonEl[i].textContent;
        if(buttonValue =="c"){
            clearResult()

        }
        else if (buttonValue=="="){
         calculateResult();
        }
        else {
            appendValue(buttonValue);
        }
    });
}
function clearResult(){
    inputFieldEl.value = '';
}

function calculateResult(){
    try {
        inputFieldEl.value = eval(inputFieldEl.value);
    } catch (error) {
        inputFieldEl.value = "Error";
    }
}

function appendValue(buttonValue){
    console.log("buttpon value is and input filed is",buttonValue,inputFieldEl)
    inputFieldEl.value +=buttonValue;
    console.log("input field after assigining value is",inputFieldEl)
    // inputFieldEl.value = inputFieldEl.value;+buttonValue;
    

}