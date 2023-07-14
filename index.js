window.addEventListener("DOMContentLoaded", function(e) {
    console.log("Page loaded sucessfully.");

    let btn = document.querySelector("#click-me");
    btn.addEventListener("click", function(e){
        console.log("Button was clicked.");
    })
});

window.addEventListener("orientationchange", function(e){
    let screen = window.screen;
    let angle = screen.orientation.angle;
    let type = screen.orientation.type;

    console.log(`angle: ${angle}, type: ${type}`);
})
