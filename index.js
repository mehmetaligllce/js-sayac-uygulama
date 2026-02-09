const minusbutton = document.querySelector("#minus");
const plusbutton = document.querySelector("#plus");
const valuearea = document.querySelector("#value");
const resetbutton = document.querySelector("#reset");

let count = 0;

minusbutton.addEventListener("click", () => {
    if (count <= 0) {
        alert("Sayaç 0'dan küçük olamaz!");
    }
    else count--;
    valuearea.textContent = count;
});

plusbutton.addEventListener("click", () => {
    count++;
    valuearea.textContent = count;
});

resetbutton.addEventListener("click", () => {
    count = 0;
    valuearea.textContent = count;
});