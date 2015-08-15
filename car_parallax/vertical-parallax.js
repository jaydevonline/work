

$(document).ready(function() { //when the document is ready
				
		windowHeight = $(window).height(); //get the height of the window
		console.log(windowHeight);
		
		car_red = windowHeight * 1.4; //create a variable that contains the starting position for car_red.png
		car_green = windowHeight * 1.9; //do the same for car_green.png
		car_blue = windowHeight * 0.240; //do the same for car_blue.png
		car_yellow = windowHeight * 1.1; //do the same for car_yellow.png

		
		
		$('#main').css({"background" : "url(images/car_red.png) 30px " + car_red + "px no-repeat, url(images/car_green.png) 180px " + car_green + "px no-repeat, url(images/car_blue.png) 330px " + car_blue + "px no-repeat, url(images/car_yellow.png) 330px " + car_yellow + "px no-repeat"});
		
		
		function Move(){ //set up a function to be called whenever the window is scrolled or resized
			windowHeight = $(window).height(); //get the height of the window
			pos = $(window).scrollTop(); //get the position of the scrollbar
			car_red = windowHeight * 1.4 + pos * (-0.5); //create a variable that contains the starting position for car_red.png
			car_green = windowHeight * 1.9 + pos * (-1.5); //do the same for car_green.png
			car_blue = windowHeight * 0.240 + pos * 0.51; //do the same for car_blue.png
			car_yellow = windowHeight * 1.1 + pos * 0.51; //do the same for car_yellow.png
				
			//change the css of the <div id="main"> element to give it multiple backgrounds using CSS3. The variables contained will change for every pixel the window is resized or scrolled
		$('#main').css({"background" : "url(images/car_red.png) 30px " + car_red + "px no-repeat, url(images/car_green.png) 180px " + car_green + "px no-repeat, url(images/car_blue.png) 330px " + car_blue + "px no-repeat, url(images/car_yellow.png) 330px " + car_yellow + "px no-repeat"});
		}
		
	$(window).resize(function(){ //when the window is resized...
		Move(); //call the Move() function
	});		
	
	$(window).bind('scroll', function(){ //when the user is scrolling...
		Move(); //call the Move() function
	});
	
});