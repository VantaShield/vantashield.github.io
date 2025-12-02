async function loadStats() {
    try {
        const res = await fetch("stats.json");
        const data = await res.json();

        const guildEl = document.getElementById("guildCount");
        const userEl = document.getElementById("userCount");
        const launchEl = document.getElementById("launchDate");

        if (guildEl) guildEl.innerText = data.servers ?? 0;
        if (userEl) userEl.innerText = data.users ?? 0;
        if (launchEl) launchEl.innerText = data.launchDate ?? "--";
    } catch (err) {
        console.log("Stats unavailable:", err);
    }
}

loadStats();

