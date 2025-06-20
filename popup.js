toggleSwitch = document.getElementById("mySwitch");
Status = document.getElementById("status");
toggleSwitch.addEventListener("change", function() {
    if (this.checked) {
        Status.textContent = "switch is on";

    }   else {
        Status.textContent = "switch is off";
    }
});




