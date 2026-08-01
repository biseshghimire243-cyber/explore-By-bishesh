const images = [
  // Koshi Province
  { 
    district: "Bhojpur", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Famous for traditional Khukuri craftsmanship, rich Rai culture, and scenic mid-hill landscapes."
  },
  { 
    district: "Dhankuta", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "A major administrative hub in eastern Nepal known for its lush orange orchards and pleasant climate."
  },
  { 
    district: "Ilam", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Renowned worldwide for its rolling green tea gardens, rich biodiversity, and scenic viewpoints."
  },
  { 
    district: "Jhapa", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "The easternmost lowland district of Nepal, known for fertile agricultural land and tea processing."
  },
  { 
    district: "Khotang", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Home to the sacred Halesi Mahadev Temple, attracting pilgrims from around the region."
  },
  { 
    district: "Morang", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "An economic powerhouse hosting Biratnagar, vital industries, and diverse Terai communities."
  },
  { 
    district: "Okhaldhunga", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "A hilly district steeped in history and literary culture, offering breathtaking Himalayan vistas."
  },
  { 
    district: "Panchthar", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Bordering Sikkim, famous for Limbu heritage, cardamom farming, and high-altitude treks."
  },
  { 
    district: "Sankhuwasabha", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Home to Mt. Makalu and the Arun Valley, boasting remarkable ecological diversity."
  },
  { 
    district: "Solukhumbu", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Gateway to Mt. Everest, featuring Sherpa culture, ancient monasteries, and world-class trekking."
  },
  { 
    district: "Sunsari", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Hosts the Koshi Tappu Wildlife Reserve, Dharan, and prominent religious pilgrimage destinations."
  },
  { 
    district: "Taplejung", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Famous for Pathibhara Devi Temple and surrounding the majestic Kanchenjunga range."
  },
  { 
    district: "Terhathum", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Known as the capital of Rhododendrons in Nepal, particularly around Tinjure-Milke-Jaljale."
  },
  { 
    district: "Udayapur", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Features historical forts like Chaudandi Gad and connects eastern hills with the Terai plains."
  },

  // Madhesh Province
  { 
    district: "Bara", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Key industrial corridor near the Indian border, home to Gadhimai Temple and Sal forests."
  },
  { 
    district: "Dhanusha", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Cultural hub centered around Janakpur, the grand Janaki Temple, and Maithili heritage."
  },
  { 
    district: "Mahottari", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Fertile agricultural district known for sugarcane crops, Jaleshwarnath Temple, and local arts."
  },
  { 
    district: "Parsa", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Home to Birgunj, Nepal's main trade gateway, and Parsa National Park's wildlife."
  },
  { 
    district: "Rautahat", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Densely populated Terai district with extensive farming along the Bagmati River."
  },
  { 
    district: "Saptari", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Known for Chhinnamasta Temple, fish farming, and vibrant Maithili cultural traditions."
  },
  { 
    district: "Sarlahi", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Major producer of sugarcane and vegetables, situated along the Mahendra Highway."
  },
  { 
    district: "Siraha", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Famous for Salhes Garden and historical folklore unique to the Mithila region."
  },

  // Bagmati Province
  { 
    district: "Bhaktapur", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Ancient city renowned for UNESCO Durbar Square, Newari architecture, pottery, and JuJu Dhau."
  },
  { 
    district: "Chitwan", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Famous for Chitwan National Park, rhinos, tigers, jungle safaris, and Tharu culture."
  },
  { 
    district: "Dhading", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Stretches from Trishuli River rafting stops up to the high peaks of Ganesh Himal."
  },
  { 
    district: "Dolakha", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Home to Dolakha Bhimsen Temple, Kalinchowk shrine, and breathtaking mountain views."
  },
  { 
    district: "Kathmandu", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Capital of Nepal, an ancient valley packed with historic temples, stupas, and modern city life."
  },
  { 
    district: "Kavrepalanchok", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Features popular hill stations like Dhulikhel, Panauti heritage town, and Namobuddha."
  },
  { 
    district: "Lalitpur", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Patan Durbar Square, renowned handicraft traditions, metal arts, and rich cultural heritage."
  },
  { 
    district: "Makwanpur", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Headquartered in Hetauda, featuring the historic Makwanpurgadhi fort and highway links."
  },
  { 
    district: "Nuwakot", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Historic district known for the Seven-Storey Palace (Saat Talle Durbar) and avocado farms."
  },
  { 
    district: "Ramechhap", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Manthali airport serves as an aviation hub for flights heading into the Everest region."
  },
  { 
    district: "Rasuwa", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Bordering Tibet, featuring Langtang National Park, Tamang Heritage Trail, and Gosainkunda."
  },
  { 
    district: "Sindhuli", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Historic Sindhuli Gadhi fort site, where native forces repelled British troops in 1767."
  },
  { 
    district: "Sindhupalchok", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Popular adventure destination for white-water rafting, bungee jumping, and Helambu treks."
  },

  // Gandaki Province
  { 
    district: "Baglung", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Famous for long suspension bridges, Baglung Kalika temple, and traditional folk music."
  },
  { 
    district: "Gorkha", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Birthplace of unified Nepal, site of Gorkha Durbar, and home to Mount Manaslu."
  },
  { 
    district: "Kaski", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Tourism capital with Pokhara, Phewa Lake, Annapurna reflections, and outdoor sports."
  },
  { 
    district: "Lamjung", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Starting point for the famous Annapurna Circuit trek, featuring Gurung villages like Ghalegaun."
  },
  { 
    district: "Manang", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "High-altitude trans-Himalayan valley featuring Tilicho Lake and Thorong La pass."
  },
  { 
    district: "Mustang", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Rain-shadow Himalayan landscape, Muktinath pilgrimage site, apple orchards, and Lo Manthang."
  },
  { 
    district: "Myagdi", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Gateway to Dhaulagiri, Ghorepani Poon Hill viewpoints, and natural hot springs."
  },
  { 
    district: "Nawalpur", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Located along the Narayani riverbank, featuring eco-tourism resorts and Chitwan buffer zones."
  },
  { 
    district: "Parbat", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Known for tall suspension bridges, Gupteshwor cave, and river adventure routes."
  },
  { 
    district: "Syangja", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Famous for organic coffee farming, Sirubari model homestay village, and rolling hills."
  },
  { 
    district: "Tanahun", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Features Bandipur hilltop village with preserved 18th-century cultural architecture."
  },

  // Lumbini Province
  { 
    district: "Arghakhanchi", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Hilly landscape featuring Supa Deurali temple and scenic green pine forests."
  },
  { 
    district: "Banke", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Commercial center of mid-west Nepal anchored by Nepalgunj and Banke National Park."
  },
  { 
    district: "Bardia", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Home to Bardiya National Park, famous for wild Bengal tiger sightings and pristine wilderness."
  },
  { 
    district: "Dang", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Largest inner Terai valley in Asia, rich in Tharu heritage and ancient temples."
  },
  { 
    district: "Eastern Rukum", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Mountainous area home to Dhorpatan Hunting Reserve and rugged trekking trails."
  },
  { 
    district: "Gulmi", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Known for Resunga Hill, coffee production, and rich cultural traditions."
  },
  { 
    district: "Kapilvastu", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Ancient Shakya kingdom capital at Tilaurakot, where Lord Buddha spent his early life."
  },
  { 
    district: "Parasi", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Agricultural plain district featuring Ramagrama Stupa containing Buddha relics."
  },
  { 
    district: "Palpa", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Famous for Tansen hill station, Rani Mahal palace on the Kaligandaki, and Dhaka fabric."
  },
  { 
    district: "Pyuthan", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Hosts the historic Swargadwari Temple, a major religious pilgrimage destination."
  },
  { 
    district: "Rolpa", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Rugged hill district with deep historical significance and unique indigenous cultures."
  },
  { 
    district: "Rupandehi", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Home to Lumbini—the UNESCO World Heritage birthplace of Lord Buddha—and Butwal city."
  },

  // Karnali Province
  { 
    district: "Dailekh", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Historic site of eternal natural gas flames at Panchakoshi and ancient stone inscriptions."
  },
  { 
    district: "Dolpa", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Nepal's largest district, famous for Phoksundo Lake, Shey Gompa, and trans-Himalayan treks."
  },
  { 
    district: "Humla", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Remote northwestern border district serving as a overland route to Mt. Kailash."
  },
  { 
    district: "Jajarkot", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Hilly district with historical palaces, river valleys, and rich traditional culture."
  },
  { 
    district: "Jumla", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Famous for high-altitude organic red rice (Marpha), apple orchards, and Chandannath Temple."
  },
  { 
    district: "Kalikot", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Dramatically carved river gorges along the Karnali Highway, rich in Khas history."
  },
  { 
    district: "Mugu", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Home to Rara Lake, the largest freshwater lake in Nepal, surrounded by pine forests."
  },
  { 
    district: "Salyan", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Known for Kupinde Daha lake, ginger farming, and scenic hill landscapes."
  },
  { 
    district: "Surkhet", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Capital of Karnali Province located in Birendranagar valley, featuring Kakrebihar ruins."
  },
  { 
    district: "Western Rukum", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Known for Musikot Fort, 52 lakes and 53 hills (52 Pokhari 53 Takuri) regional lore."
  },

  // Sudurpashchim Province
  { 
    district: "Achham", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Home to Mangalsen Palace and Ramaroshan's plateau of 12 lakes and 18 glades."
  },
  { 
    district: "Baitadi", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Bordering India along the Mahakali River, famous for Tripura Sundari pilgrimage site."
  },
  { 
    district: "Bajhang", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "High mountain district dominated by Mt. Saipal, alpine meadows, and herbal medicine."
  },
  { 
    district: "Bajura", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Features Badimalika Temple, one of Far-West Nepal's most revered high-altitude shrines."
  },
  { 
    district: "Dadeldhura", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Historical hill station site of Amargadhi Fort built during Nepal's unification era."
  },
  { 
    district: "Darchula", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Bordering India and China, home to Api Nampa Conservation Area and Mt. Api."
  },
  { 
    district: "Doti", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Historic headquarters of the former Doti Kingdom, featuring Silgadhi and Seti River."
  },
  { 
    district: "Kailali", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Features Dhangadhi city, Ghodaghodi Lake wetlands, and vibrant Tharu culture."
  },
  { 
    district: "Kanchanpur", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Home to Shuklaphanta National Park, hosting Nepal's largest herd of swamp deer."
  }
];

const gallery = document.getElementById("gallery");
const search = document.getElementById("search");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const title = document.getElementById("title");
const closeBtn = document.getElementById("close");

// Keep track of current search results for index-matching
let currentData = [...images];

// Render Gallery Grid Cards
function display(data) {
  currentData = data;

  if (data.length === 0) {
    gallery.innerHTML = `<p class="no-results" style="text-align:center;width:100%;grid-column:1/-1;margin-top:40px;">No districts found matching your search.</p>`;
    return;
  }

  gallery.innerHTML = data
    .map(
      (item, index) => `
      <div class="card" data-index="${index}">
        <img src="${item.image}" alt="${item.district} District" loading="lazy">
        <div class="card-info">
          <div>
            <h3>${item.district}</h3>
            <p class="card-desc">${item.description}</p>
          </div>
          <span class="badge">${item.province}</span>
        </div>
      </div>
    `
    )
    .join("");
}

// Lightbox Modal Trigger
gallery.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  const index = card.dataset.index;
  const selectedItem = currentData[index];

  if (selectedItem) {
    lightboxImg.src = selectedItem.image;
    title.innerHTML = `
      ${selectedItem.district} (${selectedItem.province} Province)
      <p style="font-size: 0.95rem; font-weight: normal; margin-top: 8px; color: #94a3b8;">${selectedItem.description}</p>
    `;
    lightbox.style.display = "flex";
  }
});

// Single Real-Time Search Event Listener
search.addEventListener("input", function () {
  const value = this.value.toLowerCase().trim();

  // Search by district name, province name, or keywords in the description
  const result = images.filter(
    (item) =>
      item.district.toLowerCase().includes(value) ||
      item.province.toLowerCase().includes(value) ||
      item.description.toLowerCase().includes(value)
  );

  display(result);
});

// Lightbox Controls
closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};

// Initial Render
display(images);