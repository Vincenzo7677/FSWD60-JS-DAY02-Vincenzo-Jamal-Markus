function atm(a){
	var note1=Math.floor(a/100);
	var note2=Math.floor((a%100)/50);
	var note3=Math.floor(((a%100)%50)/20);
	var note4=Math.floor((((a%100)%50)%20)/10);
	document.write(note1 + note2 + note3 + note4);
	
}
atm(50);
