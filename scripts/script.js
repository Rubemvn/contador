let input = document.getElementById("value");

let maisUm = () => {
    let value = parseInt(input.textContent);
    input.innerText = value + 1;
    console.log(value)
}
let menosUm = () => {
    let value = parseInt(input.textContent);
    input.innerText = value - 1;
    console.log(value)
}