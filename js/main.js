function onReady(bmiCalc) {
    if (document.readyState === 'complete') { // Or also compare to 'interactive'
        setTimeout(document.getElementById("calcBtn").addEventListener("click", bmiCalc), 1); // Schedule to run immediately
    } else {
        readyStateCheckInterval = setInterval(function () {
            if (document.readyState === 'complete') { // Or also compare to 'interactive'
                clearInterval(readyStateCheckInterval);
                document.getElementById("calcBtn").addEventListener("click", bmiCalc);
            }
        }, 10);
    }
}
function bmiCalc() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    if(height === undefined || isNaN(height) || height > 999 || height < 0){
        alert("Wrong Height value! Please check it.");
    }
    if(weight === undefined || isNaN(weight) || weight > 999 || weight < 0){
        alert("Wrong Weight value! Please check it.");
    }
    var bmiIndex = (weight / height / height) * 10000;
    bmiIndex = bmiIndex.toFixed(2);
    var bmiResultText = 'Your BMI Result: <strong>' + bmiIndex + '</strong><br>Category: ';
    if(bmiIndex < 18.5){
        bmiResultText += '<strong style="color:red;">Underweight!</strong>';
    } else if(bmiIndex >= 18.5 && bmiIndex <= 24.9){
        bmiResultText += '<strong>Normal weight</strong>';
    } else if(bmiIndex >= 25 && bmiIndex <= 29.9){
        bmiResultText += '<strong>Overweight</strong>';
    } else if(bmiIndex >= 30){
        bmiResultText += '<strong style="color:red;">Obesity!</strong>';
    }
    document.getElementById("bmiResultTxt").innerHTML = bmiResultText;
    document.getElementById("bmiResultDiv").setAttribute('style','');
}
onReady(bmiCalc);