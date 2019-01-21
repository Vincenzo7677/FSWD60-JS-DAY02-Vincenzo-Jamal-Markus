function bubbleSort(toSortArray){

	var workarray = new Array;
	workarray = toSortArray;
	var was_done;
	document.write("<br>"+workarray+"<br>");

	do{	
		was_done = false;
	
		for(i=0; i<workarray.length-1; i++){
			if(workarray[i]>workarray[i+1]){
				var arrswitch = workarray[i];
				workarray[i]=workarray[i+1];
				workarray[i+1]=arrswitch;
				was_done = true;
				document.write("<br>"+workarray);
			}
		} 
	}
	while(was_done==true);
}

	
bubbleSort([4,8,2,5]);
