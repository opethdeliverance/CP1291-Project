$("#imageGallery").imagePopup({
    overlay: 'rgba(0, 0, 0, 0.5)',
    closeButton: {
        src: "images/close.png",
        width: "30px",
        height: "30px"

    },
    imageBorder: "15px solid #ffffff",
    borderRadius: "10px",
    imageWidth: "500px",
    imageHeight: "400px",
    imageCaption: {
        exist: true,
        color: "#ffffff",
        fontSize: "40px"
    },
    open: function(){
        console.log("opened");
    },
    colse: function(){
        console.log("closed");
    }

});

$("#imageGallery2").imagePopup();
