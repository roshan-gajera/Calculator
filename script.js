let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("#input");

console.log(buttons);

Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = e.target.value;

        if (value == "=") {
            string = eval(string);
            input.value = string;
            setTimeout(() => {
                string = "";
                input.value = string;
            }, 2000);
        }
        else if(value == "C"){
            string = "";
            input.value = string;
        }
        else if(value == "AC"){
            string = "";
            input.value = string;
        }
        else if (value == "BS") {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            string += value;
            input.value = string;
            console.log(string);
        }
    });
})