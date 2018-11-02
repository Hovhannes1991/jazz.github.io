var frame = 2;

var angryGirl = new Array();
angryGirl[0] = false;
angryGirl[1] = "1.png";
angryGirl[2] = "2.png";
angryGirl[3] = "3.png";
angryGirl[4] = "4.png";
angryGirl[5] = "5.png";
angryGirl[6] = "6.png";
angryGirl[7] = "7.png";
angryGirl[8] = "8.png";
angryGirl[9] = "9.png";
angryGirl[10] = "10.png";

function dance() {
	document.getElementById("angry").src=angryGirl[frame];
	if (frame < angryGirl.length - 1){
	frame++;
   }
   else {
   	frame = 1;
   }
}