function preload(){

}


function setup(){
    canvas = createCanvas(350,350);
    //canvas.center();
    canvas.position(500,300);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}
function draw(){
    image(video, 0, 0, 350, 350);
    tint(tint_color);

}

function ApplyFIL(){
    
    tint_color  = document.getElementById("color_name").value;
}

function take_snapshot(){
    save("my_image.png");
}