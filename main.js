function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);
    
    canvas = createCanvas(600,400);
    canvas.position(700,550)

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose' , gotPoses);
}

function draw()
{
}


function modelLoaded()
{
    console.log("PoseNet is initialised");
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
    }
}