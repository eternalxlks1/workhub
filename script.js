/* =========================
   PROXY DATA
========================= */
const proxies = [
  { name: "Ultraviolet", url: "https://ultraviolet.example.com/", show: true },
  { name: "Holy Unblocker", url: "https://holyunblocker.example.com/", show: true },
  { name: "Nodewood", url: "https://nodewood.example.com/", show: true },
  { name: "TitaniumNetwork", url: "https://titaniumnetwork.example.com/", show: true },
  { name: "Nebula", url: "https://nebula.example.com/", show: true },
  { name: "Abyss", url: "https://abyss.example.com/", show: true },
  { name: "Forward", url: "https://forward.example.com/", show: true },
  { name: "Divide", url: "https://divide.example.com/", show: true },
  { name: "Cipher", url: "https://cipher.example.com/", show: true }
];

/* =========================
   ELEMENTS
========================= */
const container = document.getElementById("proxyContainer");
const toggleButton = document.getElementById("toggleButton");

let proxiesVisible = false;

/* =========================
   BUILD PROXIES (WITH STAGGER)
========================= */
function createProxies() {
  container.innerHTML = "";

  proxies.forEach((proxy, index) => {
    if (!proxy.show) return;

    const a = document.createElement("a");
    a.href = proxy.url;
    a.target = "_blank";
    a.textContent = proxy.name;
    a.className = "proxy";

    a.style.animationDelay = `${index * 0.1}s`;

    container.appendChild(a);
  });
}

/* =========================
   TOGGLE FUNCTION
========================= */
function toggleProxies() {
  proxiesVisible = !proxiesVisible;

  if (proxiesVisible) {
    createProxies();
    container.classList.add("show");
    container.classList.remove("hide");
    toggleButton.textContent = "Hide Proxies";
  } else {
    container.classList.remove("show");
    container.classList.add("hide");
    toggleButton.textContent = "Show Proxies";
  }
}

/* =========================
   INIT
========================= */
toggleButton.addEventListener("click", toggleProxies);
