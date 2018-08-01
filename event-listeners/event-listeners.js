var pictures = ['./imgs/pic1.jpg','./imgs/pic2.jpg','./imgs/pic3.jpg','./imgs/pic4.jpeg'];
var currentIndex = 0;


function slide() {

	var picto = document.getElementsByTagName("img")
	picto[0].src = pictures[currentIndex];
	currentIndex++
	if (currentIndex==4){
		currentIndex=0;
	}


  }


