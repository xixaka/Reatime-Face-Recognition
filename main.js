function setup(){
    canvas = createCanvas(300, 300);
    //canvas.center();
    canvas.position(600, 150);
    xion = createCapture(VIDEO);
    xion.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Y7ffJj3MQ");
}

function preLoad(){
    //Has no use...
}

function draw(){
    image(xion, 0, 0, 300, 300);
    classifier.classify(xion, expectthatitshouldbeafunction);
}

function expectthatitshouldbeafunction(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence * 100;

    }
}

//result_accuracy
//result_object_name
//