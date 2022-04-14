(function($){

    $.fn.imageRandPlus = function(options){
        let settings = $.extend({
        //add options in here
        imageNum: 3,
		imageWidth: "300px",
		imageHeight: "300px"

        }, options)
        return this.each(function(){
            let images_array = [];
            console.log("plug in called");
            
            $("#image_list img").each( (index, element) => {
                const swappedImage = new Image();
                swappedImage.src = $(element).attr("src");
                images_array[index] = swappedImage;
                console.log(images_array[index]);

	        });

            let rand_list = [];
            Math.floor(Math.random())

            function randomNum(min, max) {
                var n = [];
                let divHtml = "";

                for(var i=0;i<settings.imageNum;i++){
                    let rand_num = Math.floor(Math.random() * max) + min;
                    if(n.includes(rand_num)){
                        i--;
                        continue
                    }else{
                        n.push(rand_num);
                        divHtml += `<img id=image${i} display="none">`

                    }
                }
                $("#rand_list").html(divHtml);

                $("img").css(
                    {
                        "width": settings.imageWidth,
                        "height": settings.imageHeight
                        
                    }
                )
                
                return n;
            }



	
            // set up event handlers for links    
            $("#enter").click( evt => {
                let isShuffling = true;
                setInterval(() =>{
                    
                        let rand_list = randomNum(0, images_array.length -1);
                        for (let index = 0; index < rand_list.length; index++) {
                            $(`#image${index}`).attr("src", images_array[rand_list[index]].src);
                            // const element = array[index];
                            
                            
                            
                        }

                        $("#rand_list").fadeIn(1000,
                            
                            ()=> {$("#rand_list").fadeOut(1000)})
                            console.log(images_array[rand_list[index]]);
                        
    
    
                        
    
                    
                    

                
                },2000)
                    
                
                
                
	        }); 

        })

    }
}(jQuery));