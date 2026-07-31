// ==========================================
// 1. TOURIST PLACES DATA STORE
// ==========================================
const touristPlacesStore = {
    "phewa-lake": {
        name: "Phewa Lake (Phewa Tal)",
        district: "Kaski (Pokhara)",
        category: "Natural & Recreational",
        image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=80",
        description: "Phewa Lake is the second-largest lake in Nepal and a prominent landmark of Pokhara. Famous for reflecting Mount Machhapuchhre in its mirror-like waters, visitors can enjoy boat rides, visit the Tal Barahi Temple situated on an island, or relax along the lakeside cafes.",
        highlights: [
            "Boating with scenic views of the Annapurna mountain range",
            "Visit Tal Barahi Temple located on an island in the lake",
            "Stunning sunrise and sunset reflections over the water",
            "Lively Lakeside promenade filled with vibrant dining options"
        ],
        openingHours: "Open 24 Hours (Boating: 6:00 AM - 6:00 PM)",
        entryFee: "Free entry (Boating costs NPR 500 - 1500)",
        recommendedDuration: "2 - 3 Hours",
        howToReach: "Located directly adjacent to Pokhara Lakeside; accessible by taxi, bicycle, or walking.",
        nearby: [
            {
                name: "World Peace Pagoda",
                image: "https://images.unsplash.com/photo-1623874226992-5633a6b83f0f?auto=format&fit=crop&w=600&q=80",
                desc: "Panoramic hilltop viewpoint overlooking Phewa Lake."
            },
            {
                name: "Sarangkot Viewpoint",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80",
                desc: "Famous sunrise spot and paragliding take-off zone."
            }
        ]
    },
    "pashupatinath": {
        name: "Pashupatinath Temple",
        district: "Kathmandu",
        category: "Religious & Cultural Heritage",
        image: "https://images.unsplash.com/photo-1583253960686-ea684946f1ac?auto=format&fit=crop&w=1200&q=80",
        description: "Pashupatinath is one of the most sacred Hindu temples dedicated to Lord Shiva, situated on the banks of the holy Bagmati River. Spanning a vast UNESCO World Heritage complex, it attracts pilgrims and sadhus from across the globe.",
        highlights: [
            "Pagoda-style sacred Hindu architecture with gold pinnacles",
            "Evening Bagmati Ganga Aarti ceremony at sunset",
            "Vast forest grounds with ancient stupas and shrines",
            "Observation of traditional rituals along the ghats"
        ],
        openingHours: "4:00 AM - 12:00 PM & 5:00 PM - 9:00 PM",
        entryFee: "NPR 1,000 for SAARC/Foreigners (Free for Nepalese)",
        recommendedDuration: "1.5 - 2 Hours",
        howToReach: "5 km east of city center; easily reachable by taxi or local public bus from Ratna Park.",
        nearby: [
            {
                name: "Boudhanath Stupa",
                image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=600&q=80",
                desc: "A massive Buddhist stupa located just 2.5 km away."
            },
            {
                name: "Kathmandu Durbar Square",
                image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
                desc: "Historic palace square in central Kathmandu."
            }
        ]
    }
};

// ==========================================
// 2. URL PARAMETER & PAGE LOADER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const placeParam = (urlParams.get("name") || urlParams.get("id") || "phewa-lake").toLowerCase();

    // Match place key
    const matchedKey = Object.keys(touristPlacesStore).find(key => 
        placeParam.includes(key) || key.includes(placeParam)
    ) || "phewa-lake";

    const placeData = touristPlacesStore[matchedKey];

    if (placeData) {
        renderPlaceDetails(placeData);
    }
});

// ==========================================
// 3. RENDER PLACE DETAILS
// ==========================================
function renderPlaceDetails(data) {
    // Title
    document.getElementById("pageTitle").textContent = `${data.name} | Explore Nepal`;

    // Hero Section
    const heroEl = document.getElementById("placeHero");
    heroEl.style.backgroundImage = `url('${data.image}')`;
    document.getElementById("placeName").textContent = data.name;
    document.getElementById("placeDistrict").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.district}`;
    document.getElementById("placeCategory").innerHTML = `<i class="fa-solid fa-tags"></i> ${data.category}`;

    // Description & Highlights
    document.getElementById("placeDescription").textContent = data.description;
    
    const highlightsList = document.getElementById("highlightsList");
    highlightsList.innerHTML = "";
    data.highlights.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${item}`;
        highlightsList.appendChild(li);
    });

    // Sidebar Data
    document.getElementById("openingHours").textContent = data.openingHours;
    document.getElementById("entryFee").textContent = data.entryFee;
    document.getElementById("recommendedDuration").textContent = data.recommendedDuration;
    document.getElementById("howToReach").textContent = data.howToReach;

    // Nearby Grid
    const nearbyContainer = document.getElementById("nearbyContainer");
    nearbyContainer.innerHTML = "";
    data.nearby.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("nearby-card");
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="nearby-content">
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
            </div>
        `;
        nearbyContainer.appendChild(card);
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