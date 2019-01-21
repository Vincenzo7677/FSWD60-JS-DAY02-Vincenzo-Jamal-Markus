function timeConvert(my_minutes){

	var calc_hours = Math.floor(my_minutes/60);
	var calc_minutes = my_minutes - calc_hours*60;

	return my_minutes + " minutes = " + calc_hours + " hour(s) and " + calc_minutes + " minute(s)."

}

document.write(timeConvert(400));
   
  