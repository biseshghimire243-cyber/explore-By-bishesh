// ==========================================
// EXPLORE NEPAL - TRAVEL STORIES
// ==========================================

// ==========================================
// STORY DATA
// ==========================================

const stories = [

    {
        id: 1,
        title: "A Morning Above the Kathmandu Valley",
        district: "Kathmandu",
        category: "Culture",
        icon: "fa-landmark",
        date: "Kathmandu",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
        description:
            "Wake up surrounded by ancient temples, colorful courtyards and the timeless atmosphere of the Kathmandu Valley. From Pashupatinath to Boudhanath, every corner tells a story."
    },

    {
        id: 2,
        title: "Sunrise Over the Annapurna",
        district: "Kaski",
        category: "Adventure",
        icon: "fa-mountain",
        date: "Pokhara",
        image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1200&q=85",
        description:
            "Pokhara is where peaceful lakes meet spectacular Himalayan views. Watch the sunrise over the Annapurna range and enjoy the relaxed atmosphere beside Phewa Lake."
    },

    {
        id: 3,
        title: "Into the Kingdom of Mustang",
        district: "Mustang",
        category: "Adventure",
        icon: "fa-person-hiking",
        date: "Mustang",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
        description:
            "Travel through dramatic landscapes, rocky cliffs and traditional mountain villages. Mustang offers an unforgettable experience unlike anywhere else in Nepal."
    },

    {
        id: 4,
        title: "Walking Through the Everest Region",
        district: "Solukhumbu",
        category: "Adventure",
        icon: "fa-person-hiking",
        date: "Everest Region",
        image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?auto=format&fit=crop&w=1200&q=85",
        description:
            "Follow mountain trails through Sherpa villages and incredible Himalayan landscapes on the journey toward Mount Everest."
    },

    {
        id: 5,
        title: "Into the Wild Heart of Chitwan",
        district: "Chitwan",
        category: "Nature",
        icon: "fa-tree",
        date: "Chitwan",
        image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=85",
        description:
            "Explore forests, rivers and wildlife in Chitwan. A jungle safari can bring you close to rhinos, crocodiles, deer and many beautiful birds."
    },

    {
        id: 6,
        title: "A Peaceful Journey Through Lumbini",
        district: "Rupandehi",
        category: "Spiritual",
        icon: "fa-place-of-worship",
        date: "Lumbini",
        image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=85",
        description:
            "Walk through the peaceful gardens and monasteries of Lumbini, the birthplace of Siddhartha Gautama, known around the world as Buddha."
    },

    {
        id: 7,
        title: "Tea Gardens of Ilam",
        district: "Ilam",
        category: "Nature",
        icon: "fa-leaf",
        date: "Ilam",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=85",
        description:
            "Rolling green tea gardens, misty hills and quiet villages make Ilam one of Nepal's most relaxing destinations."
    },

    {
        id: 8,
        title: "Discovering the Spiritual Soul of Janakpur",
        district: "Dhanusha",
        category: "Culture",
        icon: "fa-place-of-worship",
        date: "Janakpur",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
        description:
            "Explore the colorful temples, historic traditions and vibrant streets of Janakpur, a city deeply connected with the Ramayana tradition."
    },

    {
        id: 9,
        title: "A Walk Through Old Bandipur",
        district: "Tanahun",
        category: "Culture",
        icon: "fa-building",
        date: "Bandipur",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=85",
        description:
            "Stone streets, traditional houses and beautiful mountain views make Bandipur feel like a journey into Nepal's past."
    },

    {
        id: 10,
        title: "The Blue Waters of Rara",
        district: "Mugu",
        category: "Nature",
        icon: "fa-water",
        date: "Rara Lake",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
        description:
            "Rara Lake is surrounded by peaceful forests and mountains. Its clear blue water creates one of the most beautiful natural scenes in Nepal."
    },

    {
        id: 11,
        title: "A Journey Through Bhaktapur",
        district: "Bhaktapur",
        category: "Culture",
        icon: "fa-landmark",
        date: "Bhaktapur",
        image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85",
        description:
            "Discover ancient squares, temples, pottery traditions and beautiful Newari architecture in the historic city of Bhaktapur."
    },

    {
        id: 12,
        title: "The Quiet Beauty of Manang",
        district: "Manang",
        category: "Adventure",
        icon: "fa-mountain",
        date: "Manang",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3?auto=format&fit=crop&w=1200&q=85",
        description:
            "High mountain villages, dramatic valleys and spectacular Himalayan scenery make Manang a memorable destination for adventurous travelers."
    }

];


// ==========================================
// DOM ELEMENTS
// ==========================================

const storiesContainer =
    document.getElementById("storiesContainer");

const storySearch =
    document.getElementById("storySearch");

const categoryButtons =
    document.querySelectorAll(".category-btn");


// ==========================================
// CURRENT FILTER
// ==========================================

let currentCategory = "All";
let currentSearch = "";


// ==========================================
// RENDER STORIES
// ==========================================

function renderStories(data) {

    if (!storiesContainer) return;

    storiesContainer.innerHTML = "";

    if (data.length === 0) {

        storiesContainer.innerHTML = `
            <div class="no-stories">

                <i class="fa-solid fa-map-location-dot"></i>

                <h3>No stories found</h3>

                <p>
                    Try searching another district or choose
                    another category.
                </p>

            </div>
        `;

        return;
    }


    data.forEach((story, index) => {

        const card = document.createElement("article");

        card.className = "story-card";

        card.style.animationDelay =
            `${index * 0.08}s`;


        card.innerHTML = `

            <div class="story-card-image">

                <img
                    src="${story.image}"
                    alt="${story.title}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'"
                >

                <span class="story-card-category">

                    <i class="fa-solid ${story.icon}"></i>

                    ${story.category}

                </span>

            </div>


            <div class="story-card-content">

                <div class="story-card-meta">

                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        ${story.district}
                    </span>

                    <span>
                        <i class="fa-solid fa-compass"></i>
                        ${story.date}
                    </span>

                </div>


                <h3>
                    ${story.title}
                </h3>


                <p>
                    ${story.description}
                </p>


                <a
                    href="district.html?name=${encodeURIComponent(
                        story.district.toLowerCase()
                    )}"
                    class="story-read-more"
                >

                    Explore District

                    <i class="fa-solid fa-arrow-right"></i>

                </a>

            </div>

        `;

        storiesContainer.appendChild(card);

    });

}


// ==========================================
// FILTER STORIES
// ==========================================

function filterStories() {

    const searchValue =
        currentSearch.toLowerCase().trim();


    const filtered =
        stories.filter(story => {

            const matchesCategory =
                currentCategory === "All" ||
                story.category === currentCategory;


            const matchesSearch =
                story.title.toLowerCase().includes(searchValue) ||
                story.district.toLowerCase().includes(searchValue) ||
                story.description.toLowerCase().includes(searchValue) ||
                story.category.toLowerCase().includes(searchValue);


            return matchesCategory && matchesSearch;

        });


    renderStories(filtered);

}


// ==========================================
// SEARCH
// ==========================================

if (storySearch) {

    storySearch.addEventListener("input", function () {

        currentSearch = this.value;

        filterStories();

    });

}


// ==========================================
// CATEGORY BUTTONS
// ==========================================

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        this.classList.add("active");


        currentCategory =
            this.dataset.category || "All";


        filterStories();

    });

});


// ==========================================
// MOBILE MENU
// ==========================================

const mobileMenu =
    document.getElementById("mobile-menu");

const navLinks =
    document.querySelector(".nav-links");


if (mobileMenu && navLinks) {

    mobileMenu.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


// ==========================================
// CLOSE MOBILE MENU AFTER CLICK
// ==========================================

if (navLinks) {

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}


// ==========================================
// FEATURED STORY
// ==========================================

function loadFeaturedStory() {

    const featured =
        stories[1];

    const featuredImage =
        document.getElementById("featuredImage");

    const featuredTitle =
        document.getElementById("featuredTitle");

    const featuredDescription =
        document.getElementById("featuredDescription");

    const featuredDistrict =
        document.getElementById("featuredDistrict");


    if (featuredImage) {

        featuredImage.src =
            featured.image;

        featuredImage.alt =
            featured.title;

    }


    if (featuredTitle) {

        featuredTitle.textContent =
            featured.title;

    }


    if (featuredDescription) {

        featuredDescription.textContent =
            featured.description;

    }


    if (featuredDistrict) {

        featuredDistrict.textContent =
            featured.district;

    }

}


// ==========================================
// INITIALIZE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    loadFeaturedStory();

    renderStories(stories);

});