(function($){

    $.fn.imageRandPlus = function(options){
        // let settings = $.extend({
        // //add options in here

        // }, options)
        return this.each(function(){
            let images_array = [];
            console.log("plug in called");
            $("#image_list img").each( (index, element) => {
                const swappedImage = new Image();
                //swappedImage.src = $(element).attr("href");
                images_array[index] = swappedImage;
                console.log(swappedImage.src);

	        });
	
            // set up event handlers for links    
            $("#enter").click( evt => {
                $("#image_list img").each((index, img)=>{
                    $().fadeOut(1000);	
                    


                })
                evt.preventDefault();
                const link = evt.currentTarget;
            
                ()=>{
                    const imageURL = $(link).attr("");
                    $("#image").attr("src", imageURL).fadeIn(1000);
            
                }
	    }); 

    })

    }
}(jQuery));