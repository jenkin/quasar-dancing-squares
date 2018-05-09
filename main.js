var elementWidth = 100,
    elementHeight = elementWidth,
    container = document.getElementById("container"),
    input = document.getElementById("elements"),
    period = 1500;

createElement(getPosition(0,0));

setInterval(function() {

    var numRequiredElements = +input.value || 1,
        numExistingElements = document.getElementsByClassName("element").length,
        numNewElements = numRequiredElements - numExistingElements,
        containerWidth = container.offsetWidth,
        containerHeight = container.offsetHeight,
        oldPosition = container.lastChild ? container.lastChild.getAttribute("style") : getPosition(0,0),
        newX = Math.random() * (containerWidth - elementWidth),
        newY = Math.random() * (containerHeight - elementHeight),
        newPosition = getPosition(newX,newY);

    for (var i=0; i < Math.abs(numNewElements); i++) {
        if (numNewElements < 0) {
            container.removeChild(container.lastChild);
        } else {
            createElement(oldPosition);
        }
    }

    Array.prototype.forEach.call(document.getElementsByClassName("element"), function(div,index) {
        setTimeout(function() {
            moveElement(div,newPosition);
        },Math.round((numRequiredElements - index) * period/numRequiredElements/10));
    });
    
},period);

function createElement(pos) {
    var div = document.createElement("div");
    div.setAttribute("class","element");
    moveElement(div,pos);
    container.prepend(div);
}

function moveElement(div,pos) {
    div.setAttribute("style",pos);
}

function getPosition(x,y) {
    return "left:"+x+"px;top:"+y+"px";
}