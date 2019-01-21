function firstUpper(my_string){
	return my_string.charAt(0).toUpperCase() + my_string.substring(1); // charAt(0) ==> only the first letter

}

document.write(firstUpper("i am a web depeloper."));
   
   // Average Grade
   function averageGrade(num1,num2,num3){
   	var sum= num1+num2+num3;
	var average=sum/3;
	var result=[sum,average];
	return result;
}
document.write("<br>");
document.write(averageGrade(2,4,5)[0]);
document.write("<br>");
document.write(averageGrade(2,4,5)[1]);

