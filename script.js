let canvas = document.getElementById("canvas");
let = context = canvas.getContext("2d");
                 
let img = new Image();
img.src = "img.jpg";
img.onload = function() {
                 
    context.drawImage(img, 0, 0);
    let imageData = context.getImageData(0,0, 1000, 1000);
    console.log(imageData.data);
};