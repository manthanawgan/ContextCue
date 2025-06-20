toggleSwitch = document.getElementById("mySwitch");
Status = document.getElementById("status");
toggleSwitch.addEventListener("change", function() {
    if (this.checked) {
        Status.textContent = "Switch is on";

    }   else {
        Status.textContent = "Switch is off";
    }
});




