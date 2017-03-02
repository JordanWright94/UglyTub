/* This Function allows the user to move through images on the process page 
 hides certain images and shows them when the user requests it.*/
	function process(num){ //gets images
		var img1 = document.getElementById('img1');
		var img2 = document.getElementById('img2');
		var img3 = document.getElementById('img3');
		var img4 = document.getElementById('img4');
		var img5 = document.getElementById('img5');
		var img6 = document.getElementById('img6');
		if (num == 1){
			img1.style.display = 'block'; //shows the first three images in the process hides the last three
			img2.style.display = 'block';
			img3.style.display = 'block';
			img4.style.display = 'none';
			img5.style.display = 'none';
			img6.style.display = 'none';
		}
		if (num == 2){
			img1.style.display = 'none'; //shows the last three images in the process hides the first three
			img2.style.display = 'none';
			img3.style.display = 'none';
			img4.style.display = 'block';
			img5.style.display = 'block';
			img6.style.display = 'block';
		}	
	}