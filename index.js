const myFile = "data.json";

const par1 = document.getElementById("lab11");
const par2 = document.getElementById("lab12");
const par3 = document.getElementById("lab13");
const par4 = document.getElementById("lab21");
const par5 = document.getElementById("lab22");
const par6 = document.getElementById("lab23");
const par7 = document.getElementById("lab31");
const par8 = document.getElementById("lab32");
const par9 = document.getElementById("lab33");
const par10 = document.getElementById("lab41");
const par11 = document.getElementById("lab42");
const par12 = document.getElementById("lab43");

let res1;

fetch (myFile)
    .then(response => response.json())
    .then(r=>{
        res1 = r;
        console.log(res1);
        par1.innerHTML = res1.lab1.task1;
        par2.innerHTML = res1.lab1.task2;
        par3.innerHTML = res1.lab1.task3;
        par4.innerHTML = res1.lab2.task1;
        par5.innerHTML = res1.lab2.task2;
        par6.innerHTML = res1.lab2.task3;
        par7.innerHTML = res1.lab3.task1;
        par8.innerHTML = res1.lab3.task2;
        par9.innerHTML = res1.lab3.task3;
        par10.innerHTML = res1.lab4.task1;
        par11.innerHTML = res1.lab4.task2;
        par12.innerHTML = res1.lab4.task3;

    })
    .catch(err => console.log(err))

