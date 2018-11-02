var audio = new  Array();
audio[0] = false;
audio[1] = new Audio("src/audio/1.mp3");
audio[2] = new Audio("src/audio/2.mp3");
audio[3] = new Audio("src/audio/3.mp3");
audio[4] = new Audio("src/audio/4.mp3");
audio[5] = new Audio("src/audio/5.mp3");
audio[6] = new Audio("src/audio/6.mp3");
audio[7] = new Audio("src/audio/7.mp3");
audio[8] = new Audio("src/audio/8.mp3");
audio[9] = new Audio("src/audio/9.wav");
audio[10] = new Audio("src/audio/10.wav");

/*function audioPlay (x) {
	var sound = audio[x];
	sound.pause();
    sound.currentTime = 0;
	sound.play();
}*/


function bgImageChange() {
	var bgImage = document.getElementById("bgImage").value;
	if (bgImage == "orange"){
		document.body.style.backgroundImage = "url('src/background-orange.jpg')";
	}
	  else if (bgImage == "girl") {
	  	document.body.style.backgroundImage = "url('src/background-girl-red.png')";
	  }
	   else if (bgImage == "light-blue") {
	   	document.body.style.backgroundImage = "url('src/background-light-blue.jpg')";
	   }
	  else {
	  	document.body.style.backgroundImage = "url('src/background-red.jpg')";
	  }
}

function audioPlay (x) {
	var text = "src/audio/" + x + ".mp3";	
	sound = new Audio(text);
	sound.pause();    
	sound.play();	
}



function audioPlayNums(event) {
	if (on_Off == 1){
	if (event.which < 49 || event.which > 57){
		return
	}
	else {
		switch (event.which) {
			case 49:
				var n = 1;
				document.getElementsByTagName('img')[0].style.width = '130px';
				break;
			case 50:
				var n = 2;
				document.getElementsByTagName('img')[1].style.width = '190px';
				break;
			case 51:
				var n = 3;
				document.getElementsByTagName('img')[2].style.width = '160px';
				break;
			case 52:
				var n = 4;
				document.getElementsByTagName('img')[3].style.width = '90px';
				break;
			case 53:
				var n = 5;
				document.getElementsByTagName('img')[4].style.width = '115px';
				break;
			case 54:
				var n = 6;
				document.getElementsByTagName('img')[5].style.width = '124px';
				break;
			case 55:
				var n = 7;
				document.getElementsByTagName('img')[6].style.width = '124px';
				break;
			case 56:
				var n = 8;
				document.getElementsByTagName('img')[7].style.width = '114px';
				break;
			case 57:
				var n = 9;
				document.getElementsByTagName('img')[8].style.width = '114px';
				break;											
		}
		audioPlay(n);
	}
}
}





var on_Off = 0;
function onOff() {
	if(on_Off == 0){
	/*  document.getElementById("onOff").value="Keyboard On";
		document.getElementsByTagName('img')[0].src = 'src/imageNumbers/num_1.png';
		document.getElementsByTagName('img')[1].src = 'src/imageNumbers/num_2.png';
		document.getElementsByTagName('img')[2].src = 'src/imageNumbers/num_3.png';
		document.getElementsByTagName('img')[3].src = 'src/imageNumbers/num_4.png';
		document.getElementsByTagName('img')[4].src = 'src/imageNumbers/num_5.png';
		document.getElementsByTagName('img')[5].src = 'src/imageNumbers/num_6.png';
		document.getElementsByTagName('img')[6].src = 'src/imageNumbers/num_7.png';
		document.getElementsByTagName('img')[7].src = 'src/imageNumbers/num_8.png';
		document.getElementsByTagName('img')[8].src = 'src/imageNumbers/num_9.png';  */
		for (var srcIndex = 0; srcIndex < 9; srcIndex++){
			document.getElementsByTagName('img')[srcIndex].src = 'src/imageNumbers/num_' + (srcIndex + 1) + '.png';
		}
		on_Off++;
	}
	else {
		document.getElementById("onOff").value="Keyboard Off";		
		document.getElementsByTagName('img')[0].src = "src/baraban-3.png";
		document.getElementsByTagName('img')[1].src = "src/baraban-3.png";
		document.getElementsByTagName('img')[2].src = "src/baraban-3.png";
		document.getElementsByTagName('img')[3].src = "src/baraban-3.png";
		document.getElementsByTagName('img')[4].src = "src/baraban-2.png";
		document.getElementsByTagName('img')[5].src = "src/baraban-2.png";
		document.getElementsByTagName('img')[6].src = "src/baraban-2.png";
		document.getElementsByTagName('img')[7].src = "src/baraban-1.png";
		document.getElementsByTagName('img')[8].src = "src/baraban-1.png";
		on_Off--;
	}
}



function keyup(arg) {
	var k = arg.which;
	switch (k) {
		case 97:
			document.getElementsByTagName('img')[0].style.width = '139px';
			break;
		case 98:
			document.getElementsByTagName('img')[1].style.width = '200px';
			break;
		case 99:
			document.getElementsByTagName('img')[2].style.width = '170px';
			break;
		case 100:
			document.getElementsByTagName('img')[3].style.width = '100px';
			break;
		case 101:
			document.getElementsByTagName('img')[4].style.width = '125px';
			break;
		case 102:
			document.getElementsByTagName('img')[5].style.width = '131px';
			break;
		case 103:
			document.getElementsByTagName('img')[6].style.width = '131px';
			break;
		case 104:
			document.getElementsByTagName('img')[7].style.width = '131px';
			break;
		case 105:
			document.getElementsByTagName('img')[8].style.width = '131px';
			break;								
		
	}
}