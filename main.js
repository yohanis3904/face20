prediction_1=""
prediction_2=""


Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src=" '+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3YWmGqgAS/model.json',modelLoaded);


function modelLoaded() {
    console.log('Model Loaded!');
}


function check()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    } else {
    console.log(results)
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == "Peace")
    {
        document.getElementById("update_emoji").innerHTML = "&#9996;";
    }
    if(results[0].label == "Fist")
    {
        document.getElementById("update_emoji").innerHTML = "&#9994;";
    }
    
    if(results[0].label == "Calp")
    {
        document.getElementById("update_emoji").innerHTML = "&#128075;";
    }
    if(results[0].label == "Rocken")
    {
        document.getElementById("update_emoji").innerHTML = "&#129304";
    }
    if(results[0].label == "Thums up")
    {
        document.getElementById("update_emoji").innerHTML = "&#128077;";     
    }
    if(results[0].label == "It all good")
    {
        document.getElementById("update_emoji").innerHTML = "&#128076;";
    }





    
    if(results[1].label == "Peace")
    {
        document.getElementById("update_emoji2").innerHTML = "&#9996;";
    }
    if(results[1].label == "Fist")
    {
        document.getElementById("update_emoji2").innerHTML = "&#9994;";
    }
    
    if(results[1].label == "Calp")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128075;";
    }
    if(results[1].label == "Rocken")
    {
        document.getElementById("update_emoji2").innerHTML = "&#129304";
    }
    if(results[1].label == "Thums up")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128077;";     
    }
    if(results[1].label == "It all good")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128076;";
    }
}

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first perdiction is " + prediction_1;
    speak_data_2 = " And the second perdiction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}