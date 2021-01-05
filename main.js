function preload()
{

}

function setup()
{
video = createCapture(VIDEO);
video.size(400 , 300);
video.position(100 , 300);
canvas = createCanvas(400 , 300 );
canvas.position(800 , 300);
//video.hide();//
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPose);
}

function draw()
{
background('#f26b6b');
fill('#f26b6b');

}

function modelLoaded()
{
    console.log("PoseNet initialized");

}

function gotPose(results)
{
    if (results.length > 0)
    {
        console.log(results);
    }
    
}