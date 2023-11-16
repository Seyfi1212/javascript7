let displayText = document.getElementById("displayText");
let displayArtirText = document.getElementById("böyütÖlçü");
let displayAzaltText = document.getElementById("kiçiltÖlçü");
let radiusArtirButton = document.getElementById("böyütRadius");
let radiusAzaltButton = document.getElementById("kiçiltRadius");
let artirHundurButton = document.getElementById("böyütHündürlük");
let azaltHundurButton = document.getElementById("kiçiltHündürlük");
let eninArtirButton = document.getElementById("böyetEni");
let eninAzaltButton = document.getElementById("kiçiltEni");
let manipulateDiv = document.getElementById("manipulateDiv");

displayArtirText.addEventListener("click", function() {
    let olcuPlus = parseInt(window.getComputedStyle(displayText).fontSize);
    displayText.style.fontSize = (olcuPlus + 5) + "px";
});

displayAzaltText.addEventListener("click", function() {
    let olcuMinus = parseInt(window.getComputedStyle(displayText).fontSize);
    if (olcuMinus > 5) {
        displayText.style.fontSize = (olcuMinus - 5) + "px";
    }
});

radiusArtirButton.addEventListener("click", function() {
    let RadiusPlus = parseInt(window.getComputedStyle(manipulateDiv).borderRadius);
    manipulateDiv.style.borderRadius = (RadiusPlus + 5) + "px";
});

radiusAzaltButton.addEventListener("click", function() {
    let RadiusMinus = parseInt(window.getComputedStyle(manipulateDiv).borderRadius);
    if (RadiusMinus > 5) {
        manipulateDiv.style.borderRadius = (RadiusMinus - 5) + "px";
    }
});

artirHundurButton.addEventListener("click", function() {
    let HeightPlus = parseInt(window.getComputedStyle(manipulateDiv).height);
    manipulateDiv.style.height = (HeightPlus + 5) + "px";
});

azaltHundurButton.addEventListener("click", function() {
    let HeightMinus = parseInt(window.getComputedStyle(manipulateDiv).height);
    if (HeightMinus > 5) {
        manipulateDiv.style.height = (HeightMinus - 5) + "px";
    }
});

eninArtirButton.addEventListener("click", function() {
    let WidthPlus = parseInt(window.getComputedStyle(manipulateDiv).width);
    manipulateDiv.style.width = (WidthPlus + 5) + "px";
});

eninAzaltButton.addEventListener("click", function() {
    let WidthMinus = parseInt(window.getComputedStyle(manipulateDiv).width);
    if (WidthMinus > 5) {
        manipulateDiv.style.width = (WidthMinus - 5) + "px";
    }
});
