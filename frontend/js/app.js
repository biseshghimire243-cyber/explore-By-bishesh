// ==========================================
// DOM ELEMENTS
// ==========================================
const districtContainer = document.getElementById("districtContainer");
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const suggestionsBox = document.getElementById("suggestions");
const mobileMenuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// ==========================================
// DISTRICT DATA
// ==========================================
let districtsData = [];

// ==========================================
// LOAD DISTRICTS
// ==========================================
async function loadDistricts() {

    try {

        const response = await fetch("/districts");
        const result = await response.json();

        districtsData = result.data.map(district => ({
            id: district.id,
            name: district.district_name,
            province: district.province,
            description: district.description || "Explore the beautiful tourist destinations of this district.",
            image: district.image || "images/default.jpg",
            tagline: district.province
        }));

        districtContainer.innerHTML = "";

    } catch (error) {

        console.error(error);

    }

}

// ==========================================
// DISPLAY DISTRICTS
// ==========================================
function renderDistricts(data) {

    districtContainer.innerHTML = "";

    if (data.length === 0) {

        districtContainer.innerHTML = `
            <div class="no-result">
                <h2>No District Found</h2>
                <p>Please try another district.</p>
            </div>
        `;

        return;

    }

    data.forEach(district => {

        districtContainer.innerHTML += `

            <div class="district-card">

                <img src="${district.image}" alt="${district.name}">

                <div class="district-card-content">

                    <h3>${district.name}</h3>

                    <p><strong>${district.province}</strong></p>

                    <p>${district.description}</p>

                    <button class="explore-btn" onclick="openDistrict(${district.id})">
                        Explore
                    </button>

                </div>

            </div>

        `;

    });

}

// ==========================================
// SEARCH
// ==========================================
function performSearch() {

    const query = searchBox.value.trim().toLowerCase();

    suggestionsBox.innerHTML = "";

    if (query === "") {

        districtContainer.innerHTML = "";
        return;

    }

    const exactMatch = districtsData.find(d =>
        d.name.toLowerCase() === query
    );

    if (exactMatch) {

        openDistrict(exactMatch.id);
        return;

    }

    const filtered = districtsData.filter(d =>
        d.name.toLowerCase().includes(query) ||
        d.province.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query)
    );

    renderDistricts(filtered);

}

// ==========================================
// SEARCH BUTTON
// ==========================================
searchBtn.addEventListener("click", performSearch);

// ==========================================
// ENTER KEY
// ==========================================
searchBox.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        performSearch();

    }

});

// ==========================================
// LIVE SUGGESTIONS
// ==========================================
searchBox.addEventListener("input", () => {

    const value = searchBox.value.trim().toLowerCase();

    suggestionsBox.innerHTML = "";
    districtContainer.innerHTML = "";

    if (value === "") return;

    const matches = districtsData.filter(district =>
        district.name.toLowerCase().includes(value)
    );

    if (matches.length === 0) {

        suggestionsBox.innerHTML = `
            <div class="suggestion-item">
                No District Found
            </div>
        `;

        return;

    }

    matches.forEach(match => {

        const div = document.createElement("div");

        div.className = "suggestion-item";

        div.innerHTML = `
            <i class="fa-solid fa-location-dot"></i>
            <span>${match.name}</span>
        `;

        div.addEventListener("click", () => {

            openDistrict(match.id);

        });

        suggestionsBox.appendChild(div);

    });

});

// ==========================================
// CLOSE SUGGESTIONS
// ==========================================
document.addEventListener("click", (e) => {

    if (
        !searchBox.contains(e.target) &&
        !suggestionsBox.contains(e.target)
    ) {

        suggestionsBox.innerHTML = "";

    }

});

// ==========================================
// OPEN DISTRICT
// ==========================================
function openDistrict(id) {

    window.location.href = `district.html?id=${id}`;

}

// ==========================================
// MOBILE MENU
// ==========================================
if (mobileMenuToggle) {

    mobileMenuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ==========================================
// START
// ==========================================
loadDistricts();