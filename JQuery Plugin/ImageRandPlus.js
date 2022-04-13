"use strict";

$(document).ready( () => {
	// preload images
	$("#image_list a").each( (index, element) => {
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click( evt => {
		const link = evt.currentTarget;
		$("a").fadeOut(1000),	
		
			()=>{
				const imageURL = $(link).attr("href");
				$("#image").attr("src", imageURL).fadeIn(1000);
				
			
								
		
	    evt.preventDefault();
            }
	}); 
	
	
}); 