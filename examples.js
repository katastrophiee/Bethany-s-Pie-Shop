// == compares while excluding type and converts it, 1+1 = "2" returns true
// === copares while NOT excluding the type and will NOT convert, 1+1 = "2" returns false

//Scripts go at bottom incase one doesnt load or breaks ect so it doesnt halt our page loading

//External js means browser caching for commonly used files to speed up performance

function test()
{
    console.log("hi!!");
}

{
let firstname = "kaytlen";
        let lastname = "bir";
        let twitter = "who tf uses twitter";

        let person = {
            firstname : "loojkinhi",
            lastname : "feji",
            twitter : "sgfoi"
        };

        person.firstname
}

{
    let array = [ 1, 2, 3, 4, "lol"];
    console.log(array); //can have multiple types in an array, indexed at 0
    let lol = array[0];
}

{
    let count = 0;
        let max = 10;
        
        while(count < max){
            console.log(count);
            count = count + 1;
        }
}

{
    let count = 0;
        let max = 10;
        
        for (let i = 0; i < 10; i++)
        {
            console.log(count)
        }

        var numbers = [1, 2, 3];

        for (let i = 0; i < numbers.length; i++)
        {
            console.log(numbers[i]);
        }
}

{
    var days = ["Mon", "Tue", "Wed"]

    days.forEach(function(day, index)
    {
        console.log("day: ${day}, index: ${index}");
    });
}

{
    document.getElementsByClassName("banner");
        document.querySelector(".card");
        document.querySelectorAll(".card");
        document.querySelector("a[href='https://lol']");
}

{
    let links = document.querySelectorAll(".tag");
    links.forEach(function(link) {
        link.setAttribute("target", "_blank");
    });
}

{
    var card = document.querySelector(".card");

    card.classList.add("dark");  
}

{

}