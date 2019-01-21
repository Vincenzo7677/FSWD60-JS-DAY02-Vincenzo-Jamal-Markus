

crystalGazer(5, "Sonja", "Vienna", "Software Developer");

document.write("text");

function crystalGazer(numOfChildren, partnersName, geographicLocation, jobTitle){
	document.write("You will be a "+jobTitle+" in "+geographicLocation+" and married to "+partnersName+" with "+ numOfChildren +" children.");
	
}
function ageCalculator(birthyear, currentyear){
 var age=currentyear-birthyear;
 var age2=age-1;                     // -1 because we don't know the birth month
 document.write("<br>You are either " + age + " or " + age2);


}
ageCalculator(1988,2019);


function ageCalculator2(birthyear){
	var age = new Date(); //set new date to use the date methods
	var age1 = age.getFullYear(); //get full year f.e.to get the current year
	var age3 = age1-birthyear; // calculate the maximum age
	var age4 = age3-1; // calculate minimum age
	document.write("<br>You are either " + age3 + " or " + age4);
}
ageCalculator2(1977); //value "birthyear"


function degToRad(var_degrees){
	var radian = var_degrees * (Math.PI / 180); // formula was given in example ... calculate the radian from degrees
	document.write("<br>"+radian); // show the result

}

degToRad(90);