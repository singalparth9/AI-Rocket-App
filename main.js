leftwristX="";
leftwristY="";
scoreleft=0;
function preload() {}
function setup() {
    canvas=createCanvas(450, 450);
    canvas.position(500, 250);

    video=createCapture(VIDEO);
    video.hide();

    modelattacher= ml5.poseNet(video, modelLoaded);
    modelattacher.on("pose", gotposes);
}
function draw() {
    image(video, 0, 0, 500, 500);
    fill("lightblue");
    stroke("lightblue");
    if (leftwristX>0 && leftwristX<225) {
        document.getElementById("rocket").src="https://th.bing.com/th/id/R.3a0077955b4ec7bd12515294ae5aa0c7?rik=prvKQmHAWlyyCA&riu=http%3a%2f%2fbestanimations.com%2fSci-Fi%2fRockets%2fnasa-rocket-space-flight-animated-gif-image-2.gif&ehk=%2bP6qtTn9mDjX0Gkao8WfMgQ0Gn1vgKmDGoiNAEV8xSw%3d&risl=&pid=ImgRaw&r=0"
    }
}
function modelLoaded() {
    console.log("model is loaded");
}
function gotposes(results) {
    if (results.length>0) {
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftwrist.y;
        scoreleft=results[0].pose.keypoints[9].score;
    }
}