const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
let outputtext = document.getElementById("outputtext");
let age;

mysubmit.onclick = function(){

    age = mytext.value;
    age = Number(age);

    if(age >= 18){
    outputtext.textContent = (`YOU are ELIGIBLE to Apply for Driving License`);  
    }
    else{
    outputtext.textContent = (`YOU are UNDERAGE`);
    } 
}