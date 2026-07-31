// ==========================================
// 1. EXTENDED DISTRICT DATA STORE
// ==========================================
const districtDetailsStore = {
    "kathmandu": {
        name: "Kathmandu",
        tagline: "The City of Temples",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
        description: "Kathmandu, the capital city of Nepal, is a vibrant metropolis surrounded by green hills and ancient heritage sites. It is home to seven UNESCO World Heritage sites including historic Durbar Squares, sacred Hindu temples, and magnificent Buddhist stupas.",
        bestTime: "September to November & March to May",
        climate: "Subtropical Highland (10°C - 29°C)",
        knownFor: "Culture, Heritage Sites, Temples",
        attractions: [
            {
                name: "Pashupatinath Temple",
                image: "https://images.unsplash.com/photo-1583253960686-ea684946f1ac?auto=format&fit=crop&w=600&q=80",
                description: "One of the most sacred Hindu temples dedicated to Lord Shiva, located on the banks of the Bagmati River."
            },
            {
                name: "Boudhanath Stupa",
                image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=600&q=80",
                description: "One of the largest spherical stupas in Nepal and a major hub for Tibetan Buddhism."
            },
            {
                name: "Kathmandu Durbar Square",
                image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
                description: "Ancient royal square filled with traditional Newari architecture, palaces, and courtyards."
            }
        ]
    },
    "kaski": {
        name: "Kaski (Pokhara)",
        tagline: "The Gateway to Annapurna",
        image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80",
        description: "Kaski district, centered around Pokhara city, is Nepal's premier tourism destination. Surrounded by the towering Annapurna range and dotted with serene lakes like Phewa and Begnas, it is the center for trekking, paragliding, and relaxation.",
        bestTime: "October to December & March to May",
        climate: "Subtropical to Temperate",
        knownFor: "Lakes, Mountain Views, Trekking, Paragliding",
        attractions: [
            {
                name: "Phewa Lake",
                image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=600&q=80",
                description: "Iconic freshwater lake offering colorful wooden boats and reflections of Machhapuchhre peak."
            },
            {
                name: "Sarangkot",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80",
                description: "Famous viewpoint for spectacular sunrise views over the Annapurna Himalayas."
            },
            {
                name: "World Peace Pagoda",
                image: "https://images.unsplash.com/photo-1623874226992-5633a6b83f0f?auto=format&fit=crop&w=600&q=80",
                description: "A white Buddhist stupa situated atop a ridge providing panoramic views of Pokhara."
            }
        ]
    }
};

// ==========================================
// 2. URL PARAMETER PARSER & PAGE LOADER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    // Reads query e.g. ?name=kathmandu or ?id=1
    const searchParam = (urlParams.get("name") || urlParams.get("query") || "kathmandu").toLowerCase();

    // Match district key in store
    const districtKey = Object.keys(districtDetailsStore).find(key => 
        searchParam.includes(key) || key.includes(searchParam)
    ) || "kathmandu";

    const district = districtDetailsStore[districtKey];

    if (district) {
        populatePageDetails(district);
    }
});

// ==========================================
// 3. POPULATE DOM DATA
// ==========================================
function populatePageDetails(data) {
    // Title
    document.getElementById("pageTitle").textContent = `${data.name} | Explore Nepal`;

    // Hero Section
    const heroEl = document.getElementById("districtHero");
    heroEl.style.backgroundImage = `url('${data.image}')`;
    document.getElementById("districtName").textContent = data.name;
    document.getElementById("districtTagline").textContent = data.tagline;

    // Overview & Highlights
    document.getElementById("districtDescription").textContent = data.description;
    document.getElementById("bestTime").textContent = data.bestTime;
    document.getElementById("climate").textContent = data.climate;
    document.getElementById("knownFor").textContent = data.knownFor;

    // Attractions Grid
    const attractionsContainer = document.getElementById("attractionsContainer");
    attractionsContainer.innerHTML = "";

    data.attractions.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("attraction-card");
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="attraction-content">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
        `;
        attractionsContainer.appendChild(card);
    });
}

// Mobile Navbar Toggle
const mobileMenuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}