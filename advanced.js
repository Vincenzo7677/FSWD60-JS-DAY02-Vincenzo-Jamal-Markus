function timeConvert(my_minutes){

	var calc_hours = Math.floor(my_minutes/60);
	var calc_minutes = my_minutes - calc_hours*60;

	return my_minutes + " minutes = " + calc_hours + " hour(s) and " + calc_minutes + " minute(s)."

}

document.write(timeConvert(400));
   
  var anon = (function(userdate){
  var date1 = new Date();
  date1=userdate;
  date1.setDate(date1.getDate()-1);
  return date1;


  }());
  document.write(anon("Feb 23, 2017"));