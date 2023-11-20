function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    calssifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LD2uBYYHj/model.json', modelReady);
}

function modelReady(){
    calssifier.classify(gotResults);
}
