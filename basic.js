

crystalGazer(5, "Sonja", "Vienna", "Software Developer");

document.write("text");

function crystalGazer(numOfChildren, partnersName, geographicLocation, jobTitle){
	document.write("You will be a "+jobTitle+" in "+geographicLocation+" and married to "+partnersName+" with "+ numOfChildren +" children.");
	
}
function ageCalculator(birthyear, currentyear){
 var age=currentyear-birthyear;
 var age2=age-1;                     // -1 because we don't know the birth month
 document.write("You are either " + age + " or " + age2);


}
ageCalculator(1988,2019);
