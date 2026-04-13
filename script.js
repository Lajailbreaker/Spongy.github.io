// [ BRAIN: JERRY_LOGIC_V1 ]

// Detect the Switch OS Version
const userAgent = navigator.userAgent;
document.getElementById('ua').innerText = "SYSTEM_ID: " + userAgent;

// Check for Joy-Cons
window.addEventListener("gamepadconnected", () => {
    const status = document.getElementById('controller');
    status.innerText = "CONTROLLER_LINK: ESTABLISHED";
    status.style.color = "#33ff33";
});

// The Crash Function
function executeCrash() {
    console.log("INITIATING_OVERFLOW...");
    let leak = "SPONGY_STRENGTH";
    while(true) {
        leak += leak; 
    }
}
<script src="script.js"></script>

