(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.sí-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.sí-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.sí-button')?.removeEventListener("click", handlesí);
                document.querySelector('.no-button')?.removeEventListener("click", handleno);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "seguro?",
    "EN SERIO HENRY???",
    "ok entiendo..",
    "mi amor, dale",
    "piénsalo bien, sí?",
    "ok te doy media hora para que recapacites",
    "NO PASARON NI 5 MINUTOS, ESTALLO",
    "y si le preguntas a chatgpt? seguro te hace reflexionar!!!!!!!",
    "dime q sí, dime q sí",
    "ok ya capté, entiendo perfectamente",
    "ERA BROMA, ámame",
    "yo te amo sabes" 
];

let messageIndex = 0;

function handlenoClick() {
    const noButton = document.querySelector('.no-button');
    const síButton = document.querySelector('.sí-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(síButton).fontSize);
    síButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handlesíClick() {
    window.location.href = "paidlimon.carrd.co";
}
