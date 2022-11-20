function change() {
    let e = document.getElementById("ret");
    let text = e.options[e.selectedIndex].text;

    switch (text) {
        case "AirEm":
            document.getElementById("image2").style.display = "none";
            document.getElementById("image1").style.display = "block";

            document.getElementById("model").innerText = "Model: AirEm";
            document.getElementById("cost").innerText = "Upfront cost: $99";
            document.getElementById("sub").innerText = "Subscription cost: $19/monthly";
            break;
        case "WaterEm":
            document.getElementById("image1").style.display = "none";
            document.getElementById("image2").style.display = "block";

            document.getElementById("model").innerText = "Model: WaterEm";
            document.getElementById("cost").innerText = "Upfront cost: $149";
            document.getElementById("sub").innerText = "Subscription cost: $29/monthly";
            break
    }
}