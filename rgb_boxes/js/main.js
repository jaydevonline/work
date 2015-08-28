var rgbBoxes = {

	config: {
	  	//default config goes here
	    'lang': 'en',
	    'thisHasValue' : ''
	},


    init: function (config) {
        if (typeof (config) === 'object')
            $.extend(rgbBoxes.config, config);

    //  console.log(rgbBoxes.config);

    	var config = this.config ;

        this.currentColor();
        this.setColorClass(config);
        this.setBoxColor(config);
        this.resetAll(config);
        	
    },

    currentColor : function(){
    	
    	return $(this.config.colorControllerCurrent).val();

    },

    setColorClass : function(config){

		config.colorController.on('click',function(){

			var elem = $(this) ;

			rgbBoxes.config.thisHasValue = elem.val() ;
		
		});    	
    },

    setBoxColor :function(config){

    	config.box.on('click',function(){

			var elem = $(this);
			var selectedColor = rgbBoxes.currentColor();
			var colorClass = config.thisHasValue ;

			if(colorClass === ''){
				alert('Please select a color before clicking on boxes.')
			}
			else{
				if(!elem.hasClass(colorClass)){

					elem.attr('class', config.boxStyleClass);
					elem.addClass(colorClass)
				}	
				else{
					alert("Already applied " + colorClass + " color") ;
				}
			}		
		});
    },

    resetAll : function(config){

    	config.reset.on('click',function(){

    		rgbBoxes.config.thisHasValue = '' ;
    		config.box.attr('class', config.boxStyleClass);

    	});

    }

}


$(document).ready(function(){

	rgbBoxes.init({
		documentBody : $('body'), 
		box : $('.box'),
		boxStyleClass : 'box' ,
		colorController : $('input[name="color_controler"]'),
		colorControllerCurrent : $('input[name="color_controler"]:checked'),
		reset : $('.btn_reset') 
	}); 

});
