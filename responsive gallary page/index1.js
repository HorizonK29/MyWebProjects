var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function like(n, id) {
    counter[n] += 1;
    render(n, id);
}

function dislike(n, id) {
    counter[n] -= 1;
    render(n, id);
}

function render(n, id) {
    switch (id) {
        case "1":
            let first_image = document.getElementById("count1");
            first_image.innerText = counter[n];
            break;
        case "2":
            let second_image = document.getElementById("count2");
            second_image.innerText = counter[n];
            break;
        case "3":
            let third_image = document.getElementById("count3");
            third_image.innerText = counter[n];
            break;
        case "4":
            let fourth_image = document.getElementById("count4");
            fourth_image.innerText = counter[n];
            break;
        case "5":
            let fifth_image = document.getElementById("count5");
            fifth_image.innerText = counter[n];
            break;
        case "6":
            let sixth_image = document.getElementById("count6");
            sixth_image.innerText = counter[n];
            break;
        case "7":
            let seventh_image = document.getElementById("count7");
            seventh_image.innerText = counter[n];
            break;
        case "8":
            let eighth_image = document.getElementById("count8");
            eighth_image.innerText = counter[n];
            break;
        case "9":
            let nineth_image = document.getElementById("count9");
            nineth_image.innerText = counter[n];
            break;
        case "10":
            let tenth_image = document.getElementById("count10");
            tenth_image.innerText = counter[n];
            break;
    }
}