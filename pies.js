window.addEventListener("DOMContentLoaded", function(e){
    const orderButtons = this.document.querySelectorAll("button[data-order]");

    orderButtons.forEach(function(button){

        button.addEventListener("click", function(e){
            const button = e.currentTarget;
            const container = button.parentNode;

            const order = {
                id : button.getAttribute("data-order"),
                title : container.querySelector(".title").textContent,
                price : container.querySelector(".price").textContent,
                desc : container.querySelector(".desc").textContent
            }

            localStorage.setItem("order", JSON.stringify(order)); //"order" is id, order is object

            const url = window.location.href.replace("pies.html", "order.html"); //redirects
            window.location.href = url;
        });
    });
})

