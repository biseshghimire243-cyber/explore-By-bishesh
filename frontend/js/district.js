// ==========================================
// GET DISTRICT ID FROM URL
// ==========================================
const params = new URLSearchParams(window.location.search);
const districtId = params.get("id");

// ==========================================
// LOAD DISTRICT
// ==========================================
async function loadDistrict() {

    if (!districtId) return;

    try {

        const districtRes = await fetch(`/district/${districtId}`);
        const district = await districtRes.json();

        document.title = `${district.district_name} | Explore Nepal`;

        document.getElementById("districtName").textContent = district.district_name;
        document.getElementById("districtTagline").textContent = district.province;
        document.getElementById("districtDescription").textContent =
            district.description || "No description available.";

        document.getElementById("bestTime").textContent = "Best visited all year";
        document.getElementById("climate").textContent = "Nepal";
        document.getElementById("knownFor").textContent = district.province;

        const hero = document.getElementById("districtHero");

        hero.style.backgroundImage = `url('${district.image}')`;

        loadPlaces();

    } catch (err) {

        console.log(err);

    }

}

// ==========================================
// LOAD TOURIST PLACES
// ==========================================
async function loadPlaces() {

    try {

        const res = await fetch(`/places/${districtId}`);

        const places = await res.json();

        const container = document.getElementById("attractionsContainer");

        container.innerHTML = "";

        if (places.length === 0) {

            container.innerHTML = `
                <h2>No tourist places added yet.</h2>
            `;

            return;

        }

        places.forEach(place => {

            container.innerHTML += `

                <div class="attraction-card">

                    <img src="${place.image}" alt="${place.place_name}">

                    <div class="attraction-content">

                        <h4>${place.place_name}</h4>

                        <p>${place.description}</p>

                    </div>

                </div>

            `;

        });

    } catch (err) {

        console.log(err);

    }

}

// ==========================================
// MOBILE MENU
// ==========================================
const mobileMenuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuToggle) {

    mobileMenuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ==========================================
// START
// ==========================================
loadDistrict();