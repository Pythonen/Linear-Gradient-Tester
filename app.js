let rightColor ="#84fab0";
let leftColor = "#8fd3f4";
let direction = "to right";
//console.log(rightColor)
body = document.querySelector("body");
body.style.display = 'inline';

let btn = document.querySelector("button");
btn.addEventListener("click", copyValues);

function changeColorLeft(colorLeft) {
    //console.log(colorLeft);
    leftColor = document.getElementById("left").value;
    body.style.backgroundImage = 'linear-gradient(' + direction +','+ colorLeft + ',' + rightColor + ')';
    return leftColor;
}


function changeColorRight(colorRight) {
    //console.log(colorRight);
    rightColor = document.getElementById("right").value;
    body.style.backgroundImage = 'linear-gradient(' + direction +','+ leftColor + ',' + colorRight + ')';
    return rightColor;
}

function copyValues() {
    btn.classList.toggle("is_active");
    let leftValue = changeColorLeft(document.getElementById("left").value);
    let rightValue = changeColorRight(document.getElementById("right").value);
    let values = 'linear-gradient(' + direction +','+ leftValue + ',' + rightValue + ')';
    let btnPos = document.getElementsByClassName("btnn")[0];
    let textArea = document.createElement("textarea");
    
    if (!btn.classList.contains("is_active")){
        
        textArea.value = values;
        btnPos.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        btnPos.removeChild(textArea);
    }
    else {
        setTimeout(function(){btn.className = "btnn";},2000)
    }
}