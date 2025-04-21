const orgs = [
  {
    title: "Ministerio de Salud",
    desc: "Encargado de aplicar primeros auxilios, pociones de sospechosa procedencia y rituales de sanación que involucran jugo de arándano.",
    miembros: ["Dra. Arándanos", "Eddy"],
  },
  {
    title: "Ministerio de Justicia",
    desc: "Fue creado como un meme, pero Chelu lo toma *demasiado en serio*. Tiene autoridad moral... y pistolas mágicas.",
    miembros: ["Chelu"],
  },
  {
    title: "Ministerio del Más Allá",
    desc: "Aquí están todos los miembros que hacen parte del grupo pero que rara vez se presentta ante VengaJustiLolisAlv Z, usualmente se les conoce como fantasmones.",
    miembros: ["Skal"],
  },
  {
    title: "Casa del Tesoro",
    desc: "Gestión económica del grupo, liderada por Ralexa. El 80% del presupuesto se va en figuras coleccionables y merch de anime.",
    miembros: ["Ralexa"],
  },
];

const factions = [
  {
    title: "La Gran Okasan",
    desc: "Facción ruso-nipona que mezcla vodka con cultura kawaii. Conocidos por su devoción maternal y su furia soviética.",
    simbolo: "Una matrioska con ojos de anime.",
  },
  {
    title: "La Triada del Buda Cool",
    desc: "Antes conocida como la mafia china. Son expertos en comercio ilegal de ramen, bichos místicos y NFT falsos.",
    simbolo: "Un dragón montando una scooter.",
  },
  {
    title: "Los Discípulos de Pablito",
    desc: "Inspirados en los cárteles colombianos, mezclan magia oscura con cumbia y tráfico de Oniriums de dudosa pureza.",
    simbolo: "Una llama con lentes de sol.",
  },
  {
    title: "La Recaudación de Impuestos del Big Onii-chan (LRIBO)",
    desc: "Organismo temido por todos. Se aparecen cuando menos lo esperas y siempre tienen tu número de cuenta.",
    simbolo: "Un maletín con tentáculos.",
  },
];

let orgIndex = 0;
let factionIndex = 0;

function openModal(name) {
  document.getElementById(`modal-${name}`).classList.remove("hidden");
}

function closeModal(name) {
  document.getElementById(`modal-${name}`).classList.add("hidden");
}

function renderOrg() {
  const org = orgs[orgIndex];
  document.getElementById("org-slider").innerHTML = `
      <h3 class="text-2xl font-bold text-pink-300">${org.title}</h3>
      <p>${org.desc}</p>
      <p class="text-sm italic text-gray-400">Miembros: ${org.miembros.join(
        ", "
      )}</p>
    `;
}

function renderFaction() {
  const f = factions[factionIndex];
  document.getElementById("faction-slider").innerHTML = `
      <h3 class="text-2xl font-bold text-blue-300">${f.title}</h3>
      <p>${f.desc}</p>
      <p class="text-sm italic text-gray-400">Símbolo: ${f.simbolo}</p>
    `;
}

function nextOrg() {
  orgIndex = (orgIndex + 1) % orgs.length;
  renderOrg();
}

function prevOrg() {
  orgIndex = (orgIndex - 1 + orgs.length) % orgs.length;
  renderOrg();
}

function nextFaction() {
  factionIndex = (factionIndex + 1) % factions.length;
  renderFaction();
}

function prevFaction() {
  factionIndex = (factionIndex - 1 + factions.length) % factions.length;
  renderFaction();
}

// Inicializar sliders al cargar
window.onload = () => {
  renderOrg();
  renderFaction();
};
