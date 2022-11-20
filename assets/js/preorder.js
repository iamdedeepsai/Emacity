let airem = 0;
let waterem = 0;
let cost = 0;

let selected = "AirEm";

function cls() {
    document.getElementById('popup').style.display = 'none'
}

function change() {
    let e = document.getElementById("ret");
    let text = e.options[e.selectedIndex].text;

    switch (text) {
        case "AirEm":
            selected = "AirEm";
            document.getElementById("image2").style.display = "none";
            document.getElementById("image1").style.display = "block";

            document.getElementById("model").innerText = "Model: AirEm";
            document.getElementById("cost").innerText = "Upfront cost: $99";
            document.getElementById("sub").innerText = "Subscription cost: $19/monthly";
            break;
        case "WaterEm":
            selected = "WaterEm";
            document.getElementById("image1").style.display = "none";
            document.getElementById("image2").style.display = "block";

            document.getElementById("model").innerText = "Model: WaterEm";
            document.getElementById("cost").innerText = "Upfront cost: $149";
            document.getElementById("sub").innerText = "Subscription cost: $29/monthly";
            break
    }
}

function addNo() {
    let num = parseInt(document.getElementById('quantity').value);
    console.log(num.type)

    if (num <= 0) {
        console.log(num <= 0);
        return;
    }

    switch (selected) {
        case "AirEm":
            airem += num;
            let a = document.getElementById("aem");
            a.style.display = "block";
            a.innerText = "AirEm × " + airem;
            cost += 99 * num;
            break;
        case "WaterEm":
            waterem += num;
            let b = document.getElementById("wem");
            b.style.display = "block";
            b.innerText = "WaterEm × " + waterem;
            cost += 149 * num;
            break;
    }

    document.getElementById('total').style.display = 'block';
    document.getElementById('total').innerText = "Total cost: $" + cost;
    document.getElementById('order').style.display = "block";
}

function ord() {
    alert("Order has been placed");
    cls();
    document.getElementById('aem').style.display = "none";
    document.getElementById('wem').style.display = "none";
    document.getElementById('total').style.display = "none";
    document.getElementById('order').style.display = "none";
    airem = 0;
    waterem = 0;
    cost = 0;
}