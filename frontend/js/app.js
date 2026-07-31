// ==========================================
// 1. SAMPLE DISTRICT DATA
// ==========================================
const districtsData = [
    {
        id: 1,
        name: "Kathmandu",
        tagline: "The City of Temples",
        description: "Capital city rich in ancient culture, durbar squares, and historical landmarks.",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Kaski (Pokhara)",
        tagline: "The Gateway to Annapurna",
        description: "Famous for serene lakes, breathtaking Himalayan views, and adventure sports.",
        image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Mustang",
        tagline: "The Last Forbidden Kingdom",
        description: "Known for dramatic desert landscapes, Tibetan culture, and Muktinath Temple.",
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Solukhumbu",
        tagline: "Home of Mount Everest",
        description: "The premier trekking region with iconic views of the world's highest peak.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Chitwan",
        tagline: "Heart of the Jungle",
        description: "Renowned for Chitwan National Park, one-horned rhinos, and Tharu culture.",
        image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Rupandehi (Lumbini)",
        tagline: "Birthplace of Lord Buddha",
        description: "A world-famous sacred pilgrimage site housing historic stupas and monasteries.",
        image: "https://images.unsplash.com/photo-1623874226992-5633a6b83f0f?auto=format&fit=crop&w=600&q=80"
    }
];

// ==========================================
// 2. DOM ELEMENTS
// ==========================================
const districtContainer = document.getElementById("districtContainer");
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const suggestionsBox = document.getElementById("suggestions");
const mobileMenuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// ==========================================
// 3. RENDER DISTRICT CARDS
// ==========================================
function renderDistricts(items) {
    districtContainer.innerHTML = "";

    if (items.length === 0) {
        districtContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #666;">
                <p>No districts found matching your search.</p>
            </div>
        `;
        return;
    }

    items.forEach(district => {
        const card = document.createElement("div");
        card.classList.add("district-card");

        card.innerHTML = `
            <img src="${district.image}" alt="${district.name}" loading="lazy">
            <div class="district-card-content">
                <h3>${district.name}</h3>
                <p><strong>${district.tagline}</strong></p>
                <p>${district.description}</p>
            </div>
        `;

        districtContainer.appendChild(card);
    });
}

// Initial display of all districts
renderDistricts(districtsData);

// ==========================================
// 4. SEARCH FUNCTIONALITY
// ==========================================
function performSearch() {
    const query = searchBox.value.trim().toLowerCase();
    
    const filteredDistricts = districtsData.filter(district => 
        district.name.toLowerCase().includes(query) ||
        district.description.toLowerCase().includes(query) ||
        district.tagline.toLowerCase().includes(query)
    );

    renderDistricts(filteredDistricts);
    suggestionsBox.innerHTML = ""; // Clear suggestions after search
}

// Trigger search on button click
searchBtn.addEventListener("click", performSearch);

// Trigger search when pressing "Enter" in input box
searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        performSearch();
    }
});

// ==========================================
// 5. AUTOCOMPLETE SUGGESTIONS
// ==========================================
searchBox.addEventListener("input", () => {
    const inputVal = searchBox.value.trim().toLowerCase();
    suggestionsBox.innerHTML = "";

    if (!inputVal) return;

    const matches = districtsData.filter(district => 
        district.name.toLowerCase().includes(inputVal)
    );

    matches.forEach(match => {
        const suggestionDiv = document.createElement("div");
        suggestionDiv.textContent = match.name;

        // When a suggestion is clicked
        suggestionDiv.addEventListener("click", () => {
            searchBox.value = match.name;
            performSearch();
        });

        suggestionsBox.appendChild(suggestionDiv);
    });
});

// Close suggestion box when clicking outside
document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.innerHTML = "";
    }
});

// ==========================================
// 6. MOBILE NAVBAR TOGGLE
// ==========================================
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}