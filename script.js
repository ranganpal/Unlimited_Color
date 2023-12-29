let intervalRef = null;

function randomColor() {
    const hexStr = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hexStr[parseInt(Math.random() * 16)];
    }

    return color;
}

function startChangingColor() {
    console.log("start");

    if (!intervalRef) {
        intervalRef = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000);
    }
}

function stopChangingColor() {
    console.log("stop");
    clearInterval(intervalRef);
    intervalRef = null;
}

document.getElementById("start").
    addEventListener('click', startChangingColor);

document.getElementById("stop").
    addEventListener('click', stopChangingColor);