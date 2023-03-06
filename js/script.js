const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const pxValueSelectBox = document.querySelector("#sizeDatas");

c.fillStyle = "hotpink";

let pxValue = 2;

pxValueSelectBox.addEventListener("change", (event) => {
    pxValue = event.target.value;
})


isDrawing = false;

function draw(x, y) {
    if (isDrawing) {
        c.beginPath();
        c.arc(x, y, pxValue, 0, Math.PI * 2);
        c.closePath();
        c.fill();
    }
}

canvas.addEventListener("mousemove", (event) =>
    draw(event.offsetX, event.offsetY)
);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
    .querySelector("a")
    .addEventListener(
        "click",
        (event) => (event.target.href = canvas.toDataURL())
    );
