// ==========================================
// DOM ELEMENTS
// ==========================================
const districtContainer = document.getElementById("districtContainer");
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const suggestionsBox = document.getElementById("suggestions");
const mobileMenuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Store districts from database
let districtsData = [];

// ==========================================
// LOAD DISTRICTS FROM DATABASE
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

        renderDistricts(districtsData);

    } catch (error) {
        console.log("Error loading districts:", error);
    }
}

// ==========================================
// RENDER DISTRICT CARDS
// ==========================================
function renderDistricts(items) {

    districtContainer.innerHTML = "";

    if (items.length === 0) {

        districtContainer.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;padding:40px;">
                <h2>No district found.</h2>
            </div>
        `;

        return;
    }

    items.forEach(district => {

        districtContainer.innerHTML += `
            <div class="district-card">

                <img src="${district.image}" alt="${district.name}">

                <div class="district-card-content">

                    <h3>${district.name}</h3>

                    <p><strong>${district.tagline}</strong></p>

                    <p>${district.description}</p>

                    <button onclick="openDistrict(${district.id})">
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

    const filtered = districtsData.filter(district =>
        district.name.toLowerCase().includes(query) ||
        district.province.toLowerCase().includes(query) ||
        district.description.toLowerCase().includes(query)
    );

    renderDistricts(filtered);

    suggestionsBox.innerHTML = "";

}

// Search Button
searchBtn.addEventListener("click", performSearch);

// Enter Key
searchBox.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        performSearch();

    }

});

// ==========================================
// LIVE SEARCH SUGGESTIONS
// ==========================================
searchBox.addEventListener("input", () => {

    const value = searchBox.value.trim().toLowerCase();

    suggestionsBox.innerHTML = "";

    if (value === "") return;

    const matches = districtsData.filter(district =>
        district.name.toLowerCase().includes(value)
    );

    matches.forEach(match => {

        const div = document.createElement("div");

        div.textContent = match.name;

        div.classList.add("suggestion-item");

        div.addEventListener("click", () => {

            searchBox.value = match.name;

            performSearch();

        });

        suggestionsBox.appendChild(div);

    });

});

// ==========================================
// CLOSE SUGGESTIONS
// ==========================================
document.addEventListener("click", (e) => {

    if (!searchBox.contains(e.target) && !suggestionsBox.contains(e.target)) {

        suggestionsBox.innerHTML = "";

    }

});

// ==========================================
// OPEN DISTRICT PAGE
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