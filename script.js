var ButtonsNum = document.querySelectorAll(".box").length;




for (var i = 0; i < ButtonsNum; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", function() {
        var innerhtml = this.className[4];

        makeSound(innerhtml);

        buttonAnimation(innerhtml);
    });

};


document.addEventListener("keypress", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});



function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
    }
}

function buttonAnimation(currentKey) {
    console.log(currentKey)
    var button = document.querySelector("." + currentKey);
    console.log(button)
    button.classList.add("pressed");

    setTimeout(function() {
        button.classList.remove("pressed");
    }, 100);
}