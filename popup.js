document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#mySwitch").addEventListener("change", function() {
        if (this.checked) {
            console.log("Switch is on");
        } else {
            console.log("Switch is off");
        }
    });
});