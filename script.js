const modeToggle = document.getElementById("modeToggle");
const body = document.body;

// Cek apakah sebelumnya sudah pakai mode gelap
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    modeToggle.textContent = "☀️ Mode Terang";
}

// Fungsi untuk mengganti mode
modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        modeToggle.textContent = "☀️ Mode Terang";
    } else {
        localStorage.setItem("darkMode", "disabled");
        modeToggle.textContent = "🌙 Mode Gelap";
    }
});

/* Responsif untuk layar kecil */
@media (max-width: 768px) {
    header h1 {
        font-size: 30px;
    }

    header p {
        font-size: 16px;
    }

    .projects {
        flex-direction: column;
        align-items: center;
    }

    .project {
        width: 90%;
    }

    section {
        padding: 30px 10px;
    }
}