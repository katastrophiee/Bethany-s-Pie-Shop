window.addEventListener("DOMContentLoaded", function(e){

    const order = this.localStorage.getItem("order");

        if (order) { //by passing 'order' as the if expression, java is asking if the order variable has 'truthiness' to it, this checks if it has a value and does not default to null
            const pieOrder = JSON.parse(order);

            const pie = this.document.querySelector(".pie");

            const title = pie.querySelector(".title");
            const price = pie.querySelector(".price");
            const desc = pie.querySelector(".desc");

            title.innerText = pieOrder.title;
            price.innerText = pieOrder.price;
            desc.innerText = pieOrder.desc;

            const img = pie.querySelector("img");
            img.setAttribute("src", `images/${pieOrder.id}.png`)
            img.setAttribute("alt", pieOrder.title)
        }
});