const images = [
  // Province 1 (Koshi Province) - 14 Districts
  { district: "Bhojpur", province: "Koshi", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop" },
  { district: "Dhankuta", province: "Koshi", image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop" },
  { district: "Ilam", province: "Koshi", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
  { district: "Jhapa", province: "Koshi", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" },
  { district: "Khotang", province: "Koshi", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },
  { district: "Morang", province: "Koshi", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop" },
  { district: "Okhaldhunga", province: "Koshi", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop" },
  { district: "Panchthar", province: "Koshi", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop" },
  { district: "Sankhuwasabha", province: "Koshi", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },
  { district: "Solukhumbu", province: "Koshi", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop" },
  { district: "Sunsari", province: "Koshi", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" },
  { district: "Taplejung", province: "Koshi", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop" },
  { district: "Terhathum", province: "Koshi", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
  { district: "Udayapur", province: "Koshi", image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop" },

  // Province 2 (Madhesh Province) - 8 Districts
  { district: "Bara", province: "Madhesh", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop" },
  { district: "Dhanusha", province: "Madhesh", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" },
  { district: "Mahottari", province: "Madhesh", image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop" },
  { district: "Parsa", province: "Madhesh", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
  { district: "Rautahat", province: "Madhesh", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop" },
  { district: "Saptari", province: "Madhesh", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop" },
  { district: "Sarlahi", province: "Madhesh", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" },
  { district: "Siraha", province: "Madhesh", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },

  // Bagmati Province - 13 Districts
  { district: "Bhaktapur", province: "Bagmati", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop" },
  { district: "Chitwan", province: "Bagmati", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" },
  { district: "Dhading", province: "Bagmati", image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop" },
  { district: "Dolakha", province: "Bagmati", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop" },
  { district: "Kathmandu", province: "Bagmati", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop" },
  { district: "Kavrepalanchok", province: "Bagmati", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
  { district: "Lalitpur", province: "Bagmati", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop" },
  { district: "Makwanpur", province: "Bagmati", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop" },
  { district: "Nuwakot", province: "Bagmati", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },
  { district: "Ramechhap", province: "Bagmati", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop" },
  { district: "Rasuwa", province: "Bagmati", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },
  { district: "Sindhuli", province: "Bagmati", image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop" },
  { district: "Sindhupalchok", province: "Bagmati", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop" },

  // Gandaki Province - 11 Districts
  { district: "Baglung", province: "Gandaki", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
  { district: "Gorkha", province: "Gandaki", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop" },
  { district: "Kaski", province: "Gandaki", image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop" },
  { district: "Lamjung", province: "Gandaki", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },
  { district: "Manang", province: "Gandaki", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },
  { district: "Mustang", province: "Gandaki", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },
  { district: "Myagdi", province: "Gandaki", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop" },
  { district: "Nawalpur", province: "Gandaki", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" },
  { district: "Parbat", province: "Gandaki", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
  { district: "Syangja", province: "Gandaki", image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop" },
  { district: "Tanahun", province: "Gandaki", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop" },

  // Lumbini Province - 12 Districts
  { district: "Arghakhanchi", province: "Lumbini", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
  { district: "Banke", province: "Lumbini", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" },
  { district: "Bardia", province: "Lumbini", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" },
  { district: "Dang", province: "Lumbini", image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop" },
  { district: "Eastern Rukum", province: "Lumbini", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop" },
  { district: "Gulmi", province: "Lumbini", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop" },
  { district: "Kapilvastu", province: "Lumbini", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop" },
  { district: "Parasi", province: "Lumbini", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" },
  { district: "Palpa", province: "Lumbini", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
  { district: "Pyuthan", province: "Lumbini", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },
  { district: "Rolpa", province: "Lumbini", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop" },
  { district: "Rupandehi", province: "Lumbini", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop" },

  // Karnali Province - 10 Districts
  { district: "Dailekh", province: "Karnali", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop" },
  { district: "Dolpa", province: "Karnali", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },
  { district: "Humla", province: "Karnali", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop" },
  { district: "Jajarkot", province: "Karnali", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
  { district: "Jumla", province: "Karnali", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop" },
  { district: "Kalikot", province: "Karnali", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },
  { district: "Mugu", province: "Karnali", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop" },
  { district: "Salyan", province: "Karnali", image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop" },
  { district: "Surkhet", province: "Karnali", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" },
  { district: "Western Rukum", province: "Karnali", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop" },

  // Sudurpashchim Province - 9 Districts
  { district: "Achham", province: "Sudurpashchim", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
  { district: "Baitadi", province: "Sudurpashchim", image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop" },
  { district: "Bajhang", province: "Sudurpashchim", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop" },
  { district: "Bajura", province: "Sudurpashchim", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop" },
  { district: "Darchula", province: "Sudurpashchim", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop" },
  { district: "Dadeldhura", province: "Sudurpashchim", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop" },
  { district: "Doti", province: "Sudurpashchim", image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop" },
  { district: "Kailali", province: "Sudurpashchim", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" },
  { district: "Kanchanpur", province: "Sudurpashchim", image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop" }
];

const gallery = document.getElementById("gallery");
const search = document.getElementById("search");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const title = document.getElementById("title");
const closeBtn = document.getElementById("close");

// Store current data state so lightbox indices match correctly
let currentData = [...images];

// Efficient render function using map/join
function display(data) {
  currentData = data;
  
  if (data.length === 0) {
    gallery.innerHTML = `<p class="no-results">No districts found matching your search.</p>`;
    return;
  }

  gallery.innerHTML = data
    .map(
      (item, index) => `
      <div class="card" data-index="${index}">
        <img src="${item.image}" alt="${item.district} District" loading="lazy">
        <div class="card-info">
          <h3>${item.district}</h3>
          <span class="badge">${item.province}</span>
        </div>
      </div>
    `
    )
    .join("");
}

// Global click delegation for dynamically created cards
gallery.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  const index = card.dataset.index;
  const selectedItem = currentData[index];

  if (selectedItem) {
    lightboxImg.src = selectedItem.image;
    title.innerText = `${selectedItem.district} (${selectedItem.province} Province)`;
    lightbox.style.display = "flex";
  }
});

// Real-time search filter (filters by district name or province)
search.addEventListener("input", function () {
  const value = this.value.toLowerCase().trim();
  const result = images.filter(
    (i) =>
      i.district.toLowerCase().includes(value) ||
      i.province.toLowerCase().includes(value)
  );
  display(result);
});

// Lightbox close handler
closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

// Close lightbox on clicking outside content area
lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};

// Initial render
display(images);



// Show nothing when the page loads
gallery.innerHTML = "";

function searchDistrict() {

    const value = search.value.trim().toLowerCase();

    gallery.innerHTML = "";

    if (value === "") {
        return;
    }

    const result = images.filter(item =>
        item.district.toLowerCase().includes(value)
    );

    if (result.length === 0) {

        gallery.innerHTML = `
            <h2 style="text-align:center;width:100%;margin-top:40px;">
                No image found
            </h2>
        `;

        return;
    }

    result.forEach(item => {

        gallery.innerHTML += `
            <div class="card">

                <img src="${item.image}" alt="${item.district}">

                <h3>${item.district}</h3>

            </div>
        `;

    });

}

search.addEventListener("keyup", searchDistrict);