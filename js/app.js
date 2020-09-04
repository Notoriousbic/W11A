//example 1 makepurple
function makePurple() {
    header.style.color = 'purple'
}

var header = document.getElementById('header');
header.addEventListener('mouseenter', makePurple);


// example 2 makered
function makeRed() {
    header.style.color = 'red'
}

var header = document.getElementById('header');
header.addEventListener('click', makeRed);


//example3 makeblue

function makeBlue(eventdetail){
    if (eventdetail.key == " ") {
        header.style.backgroundColor = 'blue'
    }

}

var header = document.getElementById("body");
header.addEventListener('keypress', makeBlue);





