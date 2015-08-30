var rgbBoxes = {

	config: {
	  	//default config goes here
	    'lang': 'en'
	},


    init: function (config) {
        if (typeof (config) === 'object')
            $.extend(rgbBoxes.config, config);

    //  console.log(rgbBoxes.config);

    	var config = this.config ;

        this.setBoxColor(config);
        this.resetAll(config);
        	
    },

    setBoxColor :function(config){

    	config.box.on('click',function(){

			var elem = $(this);
			var selectedColor = $('input[name="color_controler"]:checked').val();
			var colorClass; 

			var classList = $(elem).attr('class').split(' ');
			if(classList[1]){
				colorClass = classList[1];
			}

			if(selectedColor === undefined ){
				alert('Please select a color before clicking on boxes.')
			}

			else{

				if(elem.hasClass(colorClass) && colorClass !== selectedColor){
					alert('Already applied ' + colorClass + ' color. Choose any other box.' );
					return false;
					}
				else if(elem.hasClass(colorClass) && colorClass === selectedColor){
					alert('Oops! can not apply same color again. Color ' + colorClass + ' is already applied.' );
					return false;
				}	
				else {
					elem.attr('class', config.boxStyleClass);
					elem.addClass(selectedColor);
				}
			}
				
		});
    },

    resetAll : function(config){

    	config.reset.on('click',function(){
    		config.box.attr('class', config.boxStyleClass);

    	});

    }

}


$(document).ready(function(){

	rgbBoxes.init({
		documentBody : $('body'), 
		box : $('.box'),
		boxStyleClass : 'box',
		reset : $('.btn_reset') 
	}); 

});
