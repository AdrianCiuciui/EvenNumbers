console.log("This code will check to see if there are any even numbers");
var numere = [3, 5, 7, 33, 13, 15, 787, 1345, 1357, 1231435, 88];
var pare=[]; //locul unde se vor aduna toate nr pare
function par (a) { //functie pt a returna True/False pt numarul introdus
    if (a%2==0) {    
    return true;
} else {
    return false;
}}

for (i=0;i<numere.length;i++) {
    //console.log (numere[i]); //pt control, ca sa vad unde este cu numerele
    if (par(numere[i])===true) {//verificam daca nr e par sau nu
        pare.push(numere[i]);//adaugam un nr par
    }
}
var temp=pare.join();//toate numerele adunate pana acum le lipim ca sa le putem scrie mai usor

if (temp==[]) {console.log("Array has no even number to display")}
else {console.log("The even numbers are "+temp)};