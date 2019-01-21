function firstUpper(my_string){
	return my_string.charAt(0).toUpperCase() + my_string.substring(1); // charAt(0) ==> only the first letter

}

document.write(firstUpper("this is the text."));