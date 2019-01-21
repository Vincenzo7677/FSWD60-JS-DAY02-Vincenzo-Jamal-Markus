function timeConvert(my_minutes){

	var calc_hours = Math.floor(my_minutes/60);
	var calc_minutes = my_minutes - calc_hours*60;

	return my_minutes + " minutes = " + calc_hours + " hour(s) and " + calc_minutes + " minute(s)."

}

document.write(timeConvert(400));
   
   (function(userdate){
	var date = new Date(userdate);
	date.setDate(date.getDate() - 1);
	document.write("<br>"+String(date).substring(0,15));
	 }("Feb 11, 2017"))

 // document.write(anon("Feb 23, 2017"));




    (function(){
 		
 		dec = Math.floor((Math.random() * 65534) + 1);

 
 		ret_string = '#22' + (dec+0x10000).toString(16).substr(-4).toUpperCase();

 		document.body.bgColor =ret_string;

 	 }())

