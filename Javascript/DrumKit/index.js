

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio('./sounds/crash.mp3');
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio('./sounds/kick-bass.mp3');
            audio2.play();
        case "s":
            var audio3 = new Audio('./sounds/snare.mp3');
            audio3.play();
        case "d":
            var audio4 = new Audio('./sounds/tom-1.mp3');
            audio4.play();
        case "j":
            var audio5 = new Audio('./sounds/tom-2.mp3');
            audio5.play();
        case "k":
            var audio6 = new Audio('./sounds/tom-3.mp3');
            audio6.play();
        case "l":
            var audio7 = new Audio('./sounds/tom-4.mp3');
            audio7.play();    
        
        default: console.log(buttonInnerHTML);
    }
}   

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    // add css class
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}