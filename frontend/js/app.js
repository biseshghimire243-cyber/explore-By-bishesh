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

        districtContainer.innerHTML = "";

    } catch (error) {

        console.error("Error loading districts:", error);

    }
}

// ==========================================
// DISPLAY DISTRICT CARDS
// ==========================================
function renderDistricts(districts) {

    districtContainer.innerHTML = "";

    if (districts.length === 0) {

        districtContainer.innerHTML = `
            <div class="no-result">
                <h2>No District Found</h2>
                <p>Please search another district.</p>
            </div>
        `;

        return;

    }

    districts.forEach(district => {

        districtContainer.innerHTML += `
            <div class="district-card">

                <img src="${district.image}" alt="${district.name}">

                <div class="district-card-content">

                    <h3>${district.name}</h3>

                    <p><strong>${district.tagline}</strong></p>

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
// SEARCH FUNCTION
// ==========================================
function performSearch() {

    const query = searchBox.value.trim().toLowerCase();

    if (query === "") {

        districtContainer.innerHTML = "";
        suggestionsBox.innerHTML = "";
        return;

    }

    const filtered = districtsData.filter(district =>

        district.name.toLowerCase().includes(query) ||

        district.province.toLowerCase().includes(query) ||

        district.description.toLowerCase().includes(query)

    );

    renderDistricts(filtered);

    suggestionsBox.innerHTML = "";

}

// ==========================================
// SEARCH BUTTON
// ==========================================
searchBtn.addEventListener("click", performSearch);

// ==========================================
// ENTER KEY SEARCH
// ==========================================
searchBox.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        performSearch();

    }

});

// ==========================================
// LIVE SEARCH SUGGESTIONS
// ==========================================
searchBox.addEventListener("input", function () {

    const value = searchBox.value.trim().toLowerCase();

    suggestionsBox.innerHTML = "";

    if (value === "") {

        districtContainer.innerHTML = "";
        return;

    }

    const matches = districtsData.filter(district =>
        district.name.toLowerCase().includes(value)
    );

    matches.forEach(match => {

        const item = document.createElement("div");

        item.className = "suggestion-item";

        item.textContent = match.name;

        item.addEventListener("click", () => {

            searchBox.value = match.name;

            suggestionsBox.innerHTML = "";

            performSearch();

        });

        suggestionsBox.appendChild(item);

    });

});

// ==========================================
// CLOSE SUGGESTIONS
// ==========================================
document.addEventListener("click", function (e) {

    if (
        !searchBox.contains(e.target) &&
        !suggestionsBox.contains(e.target)
    ) {

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
// INITIALIZE
// ==========================================
loadDistricts();