const images = [
  // Koshi Province
  { 
    district: "Bhojpur", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Bhojpur is globally renowned for its traditional metal craftsmanship, particularly the production of high-quality handmade Khukuris. Nestled in the eastern mid-hills, it features vibrant Rai cultural traditions, scenic hilltop pastures, and historic trading stops along ancient trade routes."
  },
  { 
    district: "Dhankuta", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Dhankuta serves as a major hill station and administrative hub in eastern Nepal. Known for its pleasant climate, extensive orange groves, and clean streets, it offers panoramic vistas of the Himalayan range alongside rich cultural landmarks like Hile and Bhedetar nearby."
  },
  { 
    district: "Ilam", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Ilam is the tea capital of Nepal, famed for its sweeping hills covered in manicured green tea gardens. It boasts rich biodiversity, misty landscapes, and popular eco-tourism spots like Kanyam, Mai Pokhari wetland, and Sandakphu trek access points."
  },
  { 
    district: "Jhapa", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Jhapa is the easternmost lowland Terai district of Nepal, known as a major agricultural and commercial center. It features fertile rice paddies, extensive tea processing facilities, vibrant border trade, and rich multi-ethnic cultural communities."
  },
  { 
    district: "Khotang", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Khotang is home to the sacred Halesi Mahadev Cave temple, often referred to as the 'Pashupatinath of the East'. Revered equally by Hindus, Buddhists, and Kirat followers, the district features rugged hill terrain, deep river valleys, and ancestral Kirat heritage."
  },
  { 
    district: "Morang", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Morang is an industrial and economic engine located in the fertile eastern Terai. Headquartered in Biratnagar—Nepal's second-largest metropolitan area—the district plays a pivotal role in manufacturing, cross-border commerce with India, and regional politics."
  },
  { 
    district: "Okhaldhunga", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Okhaldhunga is a hilly district steeped in literary heritage and history, commemorated in famous Nepali poetry. It offers views of Everest and Numbur peaks, historical forts like Okhaldhunga Gadhi, and traditional hill farm communities."
  },
  { 
    district: "Panchthar", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Bordering Sikkim, Panchthar is celebrated for Limbu culture, Yuma Samyo traditions, and large-scale cardamom production. Phidim, its district headquarters, sits in a picturesque valley surrounded by terraced slopes and high mountain passes."
  },
  { 
    district: "Sankhuwasabha", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Sankhuwasabha spans dramatic elevation changes from the deep Arun River Valley to the summit of Mt. Makalu (8,485m). The Makalu-Barun National Park shelters rare wildlife, pristine glaciers, and remote alpine trekking circuits."
  },
  { 
    district: "Solukhumbu", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Solukhumbu is world-famous as the home of Mt. Everest (Sagamatha). It encompasses Sherpa heartlands like Namche Bazaar, historic monasteries like Tengboche, Lukla Airport, and Sagarmatha National Park's alpine peaks."
  },
  { 
    district: "Sunsari", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Sunsari bridges the Chure hills and Terai plains, containing the bustling educational city of Dharan and commercial hub of Itahari. It hosts the Koshi Tappu Wildlife Reserve, famous for wild water buffaloes and migratory birdwatching."
  },
  { 
    district: "Taplejung", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Situated in Nepal's far northeast, Taplejung surrounds Mt. Kanchenjunga (8,586m), the world's third-highest peak. It attracts pilgrims to the sacred Pathibhara Devi Temple and trekkers exploring wilderness mountain trails."
  },
  { 
    district: "Terhathum", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Terhathum is acclaimed as the 'Rhododendron Capital of Nepal', particularly around the Tinjure-Milke-Jaljale ridge, where dozens of species bloom in spring. It features rich Limbu heritage, traditional Dhaka weaving, and rolling hills."
  },
  { 
    district: "Udayapur", 
    province: "Koshi", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Udayapur lies in the Inner Terai along the Triyuga River valley. It holds rich history in Chaudandi Gad fort, large cement manufacturing industries, and scenic forest reserves connecting the Terai to the Mahabharat range."
  },

  // Madhesh Province
  { 
    district: "Bara", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Bara is an agricultural and industrial center hosting major manufacturing plants along the Birgunj-Pathlaiya corridor. It is historically significant for the ancient Simraungadh archaeological ruins and the historic Gadhimai temple."
  },
  { 
    district: "Dhanusha", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Dhanusha is the cultural heart of Madhesh Province, centered around Janakpurdham. Renowned for the magnificent Janaki Temple, ancient sacred ponds, Mithila art traditions, and its deep connection to the Ramayana epic."
  },
  { 
    district: "Mahottari", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Mahottari is an agricultural district with extensive sugarcane, mango, and paddy fields. Headquartered in Jaleshwar, named after its ancient submerged Shiva temple, it displays rich Maithili cultural practices and traditional crafts."
  },
  { 
    district: "Parsa", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Parsa hosts Birgunj, the primary commercial gateway for Nepal's international trade with India. It also contains Parsa National Park, protecting wild elephants, Royal Bengal tigers, and dense Sal forest ecosystems."
  },
  { 
    district: "Rautahat", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Rautahat is a densely populated Terai district running along the Bagmati River. Its economy centers on sugarcane cultivation, freshwater fisheries, and traditional rural village markets."
  },
  { 
    district: "Saptari", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Saptari is known for rich agricultural soil, extensive fish farming ponds, and the revered Chhinnamasta Bhagwati Temple. Its town of Rajbiraj was one of Nepal's first systematically planned urban townships."
  },
  { 
    district: "Sarlahi", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Sarlahi is one of Nepal's leading producers of sugarcane and fresh farm produce. Located along the East-West Highway, it features rural farming traditions, bustling market towns like Malangwa, and dense forest belts."
  },
  { 
    district: "Siraha", 
    province: "Madhesh", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Siraha is rich in regional folklore, particularly associated with the legendary Folk hero King Salhes. It features the miraculous Salhes Fulbari garden, where orchids bloom annually during the New Year festival."
  },

  // Bagmati Province
  { 
    district: "Bhaktapur", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Bhaktapur is the smallest district in Nepal, celebrated as an open-air museum of Newari heritage. It features UNESCO-listed Bhaktapur Durbar Square, 55-Window Palace, Nyatapola Temple, traditional pottery squares, and famous JuJu Dhau (king curd)."
  },
  { 
    district: "Chitwan", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Chitwan is famous for Chitwan National Park, a UNESCO World Heritage site harboring one-horned rhinoceroses, Bengal tigers, and gharial crocodiles. It offers jungle safaris, Tharu cultural shows, and rapid commercial growth in Bharatpur."
  },
  { 
    district: "Dhading", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Dhading stretches from the Trishuli river valley up to the snowy peaks of Ganesh Himal. It is renowned for white-water rafting adventures, vegetable farming supplying the capital, and scenic highway travel routes."
  },
  { 
    district: "Dolakha", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Dolakha features the revered Dolakha Bhimsen Temple and the high-altitude pilgrimage and winter spot of Kalinchowk (3,842m). It offers views of Mt. Gaurishankar and acts as a gateway to Rolwaling valley treks."
  },
  { 
    district: "Kathmandu", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Kathmandu is the capital and cultural epicenter of Nepal. Surrounded by mountains, the historic valley holds several UNESCO World Heritage sites including Swayambhunath, Pashupatinath, Boudhanath, and Kathmandu Durbar Square."
  },
  { 
    district: "Kavrepalanchok", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Kavrepalanchok combines historical towns like Panauti with scenic hill stations like Dhulikhel and Nagarkot rim locations. It is known for Palanchok Bhagwati temple, Namobuddha monastery, and thriving organic farming."
  },
  { 
    district: "Lalitpur", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Lalitpur (Patan) is celebrated for its rich artistic traditions, metal crafts, and woodcarvings. Patan Durbar Square features stunning Newari architecture, ancient step-wells, Buddhist viharas, and the iconic Krishna Mandir."
  },
  { 
    district: "Makwanpur", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Makwanpur connects the capital to southern Nepal via major highway passes. Headquartered in Hetauda, it contains the historic Makwanpurgadhi fort—where King Prithvi Narayan Shah fought key battles—and lush Chure forests."
  },
  { 
    district: "Nuwakot", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Nuwakot played a pivotal role in Nepal's unification history. Its historic hill ridge features the Seven-Storey Palace (Saat Talle Durbar), Bhairabi Temple, and scenic terraced farmlands along the Trishuli River."
  },
  { 
    district: "Ramechhap", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Ramechhap's airport in Manthali serves as an essential flight transit hub for trekkers traveling to Lukla and Everest. The district features rugged hilly geography, Tamang and Majhi river communities, and Junbesi trail links."
  },
  { 
    district: "Rasuwa", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Rasuwa borders Tibet and encompasses Langtang National Park. Renowned for alpine trekking, Tamang heritage trails, cheese factories, and the high-altitude holy glacial lakes of Gosainkunda."
  },
  { 
    district: "Sindhuli", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Sindhuli holds legendary significance for the 1767 Battle of Sindhuli Gadhi, where Gorkhali forces defeated invading British East India Company troops. Today, it is famous for sweet junar (citrus) farming and the scenic B.P. Highway."
  },
  { 
    district: "Sindhupalchok", 
    province: "Bagmati", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Sindhupalchok is a premier adventure destination close to Kathmandu, offering white-water rafting on the Bhote Koshi, bungee jumping, Tatopani hot springs, and scenic treks through Helambu and Panch Pokhari."
  },

  // Gandaki Province
  { 
    district: "Baglung", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Baglung is known as the 'District of Suspension Bridges' due to its numerous deep river crossings. It features the Baglung Kalika temple, traditional slate roofing quarries, and rich hill cultural festivals."
  },
  { 
    district: "Gorkha", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Gorkha is the ancestral home of Nepal's Shah dynasty and origin of the legendary Gorkpali warriors. Perched atop a ridge, Gorkha Durbar overlooks snow-capped ranges, including Mt. Manaslu (8,163m)."
  },
  { 
    district: "Kaski", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Kaski is Nepal's premier tourism district, centered around Pokhara. It boasts Phewa Lake, Sarangkot sunrise views, Machhapuchhre (Fishtail) reflections, world-class paragliding, and Annapurna sanctuary trek routes."
  },
  { 
    district: "Lamjung", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Lamjung is the traditional starting point for the Annapurna Circuit. Headquartered in Besisahar, it features exemplary Gurung homestay villages like Ghalegaun and Kaulepani set against dramatic mountain backdrops."
  },
  { 
    district: "Manang", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Manang is a trans-Himalayan mountain valley sitting in the rain shadow north of the Annapurnas. Famous for stone-built Tibetan-style villages, Tilicho Lake (4,919m), Thorong La pass, and ancient Buddhist monasteries."
  },
  { 
    district: "Mustang", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Mustang features dry, canyon-like landscapes along the Kali Gandaki River. Divided into Lower Mustang (Muktinath shrine, Jomsom apples) and Upper Mustang (the ancient walled kingdom of Lo Manthang and sky caves)."
  },
  { 
    district: "Myagdi", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Myagdi is a mountain district containing the famous Ghorepani Poon Hill panorama trek. It hosts natural hot springs in Tatopani, deep gorge river valleys, and base camp routes to Mt. Dhaulagiri (8,167m)."
  },
  { 
    district: "Nawalpur", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Nawalpur lies along the northern bank of the Narayani River. It offers rich eco-tourism, buffer zone wildlife habitats near Chitwan National Park, and growing industrial hubs along the Mahendra Highway."
  },
  { 
    district: "Parbat", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Parbat is famous for tall, daring pedestrian and bungee suspension bridges spanning the Kali Gandaki gorge. It contains Gupteshwor Cave and serves as a key connecting route to Mustang and Myagdi."
  },
  { 
    district: "Syangja", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Syangja is pioneer in community-based rural tourism, hosting Nepal's first model homestay village in Sirubari. It features rolling green hills, commercial organic coffee production, and hydropower facilities on the Kaligandaki."
  },
  { 
    district: "Tanahun", 
    province: "Gandaki", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Tanahun hosts the hilltop village of Bandipur, celebrated for its preserved 18th-century Newari architecture and car-free brick bazaar. It is also the birthplace of sage Vyasa at the confluence in Damauli."
  },

  // Lumbini Province
  { 
    district: "Arghakhanchi", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Arghakhanchi features pine-covered ridges, historic hill forts like Argha and Khanchi, and the famous Supa Deurali temple nestled in a gorge, drawing pilgrims across Western Nepal."
  },
  { 
    district: "Banke", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Banke is anchored by Nepalgunj, a major cross-border commercial and aviation hub for mid-western Nepal. It includes Banke National Park, which serves as an important tiger conservation corridor."
  },
  { 
    district: "Bardia", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Bardia is home to Bardiya National Park—the largest pristine wilderness area in the Terai. It offers world-class tiger tracking, wild elephant spotting, river rafting on the Karnali, and authentic Tharu cultural villages."
  },
  { 
    district: "Dang", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Dang Valley is the largest inner Terai valley in Asia. It features rich Tharu cultural indigenous history, ancient Nath temples like Gorakhnath in Ciz, and expanding university and urban centers."
  },
  { 
    district: "Eastern Rukum", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Eastern Rukum is a mountainous district containing part of the Dhorpatan Hunting Reserve. Known for high alpine meadows, Magar cultural traditions, and remote trek routes through western hill ranges."
  },
  { 
    district: "Gulmi", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Gulmi is historically celebrated for Resunga Hill, a sacred forest peak holding ancient ashrams and pilgrimage trails. It is also famous as a pioneer in Nepali coffee farming and vibrant hill markets like Tamghas."
  },
  { 
    district: "Kapilvastu", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Kapilvastu contains the ancient archaeological ruins of Tilaurakot—the Shakya kingdom capital where Prince Siddhartha Gautama (Lord Buddha) spent the first 29 years of his life before embarking on enlightenment."
  },
  { 
    district: "Parasi", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Parasi (Nawalparasi West) spans agricultural plains along the Gandak river canal system. It holds deep religious heritage at Ramagrama Stupa, the only undisturbed original relic stupa of Lord Buddha."
  },
  { 
    district: "Palpa", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Palpa is renowned for Tansen, a charming hill town with cobblestone streets, Newari architecture, and traditional Palpali Dhaka fabric weaving. It features the riverfront palace of Rani Mahal on the Kaligandaki."
  },
  { 
    district: "Pyuthan", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Pyuthan is best known for Swargadwari, a major hilltop temple complex believed to have been founded by sages in antiquity. It attracts thousands of pilgrims for Vedic fire rituals (Yajna) and mountain views."
  },
  { 
    district: "Rolpa", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Rolpa is a rugged mountain district with significant modern political history. Its high hill ridges, traditional Kham Magar settlements, and Guerrilla Trek trails attract visitors interested in culture and history."
  },
  { 
    district: "Rupandehi", 
    province: "Lumbini", 
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop",
    description: "Rupandehi hosts Lumbini, the sacred UNESCO World Heritage site where Lord Buddha was born in 623 BC. It is an international center for peace, boasting global Buddhist monasteries, Maya Devi Temple, and Butwal city."
  },

  // Karnali Province
  { 
    district: "Dailekh", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Dailekh holds historic importance as a heartland of the ancient Khas Kingdom. It is famous for the eternal natural gas flames of Panchakoshi (Shirsthan, Navisthan) and medieval carved stone pillars (Devals)."
  },
  { 
    district: "Dolpa", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Dolpa is Nepal's largest district, famous for its deep turquoise alpine lake, Shey Phoksundo, and Shey Gompa in Shey Phoksundo National Park. It preserves ancient Bon and Tibetan Buddhist mountain traditions."
  },
  { 
    district: "Humla", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Humla is Nepal's northernmost high-altitude district along the Tibetan border. Headquartered in Simikot, it serves as the primary trekking route for pilgrims traveling to Mount Kailash and Lake Manasarovar."
  },
  { 
    district: "Jajarkot", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Jajarkot features historic hill palaces dating back to the Baise Rajya period. Set along the Bheri River valley, it is rich in medicinal herbs, rural farming traditions, and scenic mid-hill geography."
  },
  { 
    district: "Jumla", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Jumla lies in the high valley of the Tila River, celebrated for cultivating unique red rice (Jumli Marpha) at high altitude. It was the historical springland of the Khas language and holds the revered Chandannath Temple."
  },
  { 
    district: "Kalikot", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Kalikot features dramatic rocky terrain cut by the roaring Karnali River gorge. It holds key stops along the Karnali Highway and contains scenic high-altitude grasslands like Pachal Jharna—one of Nepal's highest waterfalls."
  },
  { 
    district: "Mugu", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Mugu is famous for housing Rara Lake, the largest freshwater lake in Nepal, known as the 'Glittering Gem of the West'. Surrounded by Rara National Park's blue pine and spruce forests, it offers tranquil natural beauty."
  },
  { 
    district: "Salyan", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Salyan is a hill district known for ginger farming, orange orchards, and the tranquil lake of Kupinde Daha. It has strong historical craft traditions, including traditional Salyani Khukuri smithing."
  },
  { 
    district: "Surkhet", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Surkhet valley serves as the provincial capital (Birendranagar) and main gateway to Karnali. It features the medieval stone ruins of Kakrebihar—a unique Buddhist monument in a Hindu-dominated region."
  },
  { 
    district: "Western Rukum", 
    province: "Karnali", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Western Rukum is known locally as the 'Land of 52 Lakes and 53 Hills' (52 Pokhari 53 Takuri). Headquartered at Musikot, it offers scenic hill ridgelines, Syarpu Lake, and agricultural terraces."
  },

  // Sudurpashchim Province
  { 
    district: "Achham", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Achham holds historical significance with the ruins of Mangalsen Durbar and ancient shrines. It is renowned for Ramaroshan, a scenic highland featuring 12 lakes and 18 lush alpine meadows."
  },
  { 
    district: "Baitadi", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Baitadi lies along the Mahakali border river opposite India. It is famous for prominent religious shrines, including the Tripura Sundari Temple and Ninglasaini Temple, attracting thousands during Navratri."
  },
  { 
    district: "Bajhang", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&auto=format&fit=crop",
    description: "Bajhang is dominated by the majestic peak of Mt. Saipal (7,031m). It features pristine mountain valleys, Khaptad National Park borders, medicinal Yarsagumba harvesting, and traditional Deuda culture."
  },
  { 
    district: "Bajura", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop",
    description: "Bajura hosts the revered high-altitude shrine of Badimalika Temple (4,200m). Set amidst vast green rolling plateau meadows, it is considered one of Far-West Nepal's most sacred pilgrimage sites."
  },
  { 
    district: "Dadeldhura", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    description: "Dadeldhura sits atop a scenic pine ridge in the Far-West hills. It holds historical fame for the historic Amargadhi Fort built by Commander Amar Singh Thapa, and the sacred Ugratara Temple."
  },
  { 
    district: "Darchula", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop",
    description: "Darchula sits in the far northwestern corner bordering Uttarakhand (India) and Tibet. It harbors the Api Nampa Conservation Area, protecting Mt. Api (7,132m), snow leopards, and Byansi indigenous heritage."
  },
  { 
    district: "Doti", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop",
    description: "Doti was the historic center of the powerful medieval Doti Kingdom. Headquartered at Silgadhi near the Seti River, it features Khaptad National Park access points and traditional Deuda music forms."
  },
  { 
    district: "Kailali", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Kailali is a key economic hub centered in Dhangadhi. It contains the Ramsar-listed Ghodaghodi Lake complex—a vital wetland sanctuary—along with rich Tharu cultural heritage and border trade."
  },
  { 
    district: "Kanchanpur", 
    province: "Sudurpashchim", 
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&auto=format&fit=crop",
    description: "Kanchanpur is home to Shuklaphanta National Park, containing vast open grasslands that support the world's largest herd of swamp deer (Barasingha), Bengal tigers, and the iconic Dodhara Chandani suspension bridge."
  }
];

const gallery = document.getElementById("gallery");
const search = document.getElementById("search");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const title = document.getElementById("title");
const closeBtn = document.getElementById("close");

let currentData = [...images];

// Display Gallery Cards
function display(data) {
  currentData = data;

  if (data.length === 0) {
    gallery.innerHTML = `<p class="no-results" style="text-align:center;width:100%;grid-column:1/-1;padding:3rem 0;color:#94a3b8;">No districts found matching your search.</p>`;
    return;
  }

  gallery.innerHTML = data
    .map(
      (item, index) => `
      <div class="card" data-index="${index}">
        <img src="${item.image}" alt="${item.district} District" loading="lazy">
        <div class="card-info">
          <div class="card-text">
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

// Lightbox Handler
gallery.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;

  const index = card.dataset.index;
  const selectedItem = currentData[index];

  if (selectedItem) {
    lightboxImg.src = selectedItem.image;
    title.innerHTML = `
      <div class="lightbox-header">
        <h2>${selectedItem.district}</h2>
        <span class="badge">${selectedItem.province} Province</span>
      </div>
      <p class="lightbox-description">${selectedItem.description}</p>
    `;
    lightbox.style.display = "flex";
  }
});

// Search Event Handler
search.addEventListener("input", function () {
  const value = this.value.toLowerCase().trim();

  const result = images.filter(
    (item) =>
      item.district.toLowerCase().includes(value) ||
      item.province.toLowerCase().includes(value) ||
      item.description.toLowerCase().includes(value)
  );

  display(result);
});

// Close Lightbox Events
closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};

// Initial Load
display(images);


// ==========================================
// ANIMATED FACT COUNTERS
// ==========================================

const counters = document.querySelectorAll(".fact strong");

const startCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = Math.max(
        1,
        Math.ceil(target / 80)
    );

    const update = () => {

        current += increment;

        if (current >= target) {

            counter.textContent =
                target.toLocaleString();

            return;
        }

        counter.textContent =
            current.toLocaleString();

        requestAnimationFrame(update);
    };

    update();
};


const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounter(entry.target);

                    counterObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


// ==========================================
// SURPRISE ME DESTINATION
// ==========================================

const randomButton =
    document.getElementById(
        "randomDestinationBtn"
    );

const randomResult =
    document.getElementById(
        "randomResult"
    );


const destinations = [

    "🏔️ Everest — Solukhumbu",

    "🌊 Phewa Lake — Kaski",

    "🌿 Chitwan National Park — Chitwan",

    "🏛️ Kathmandu Durbar Square — Kathmandu",

    "🏞️ Rara Lake — Mugu",

    "🏔️ Mustang — Gandaki",

    "🌄 Ilam — Koshi",

    "🛕 Janakpur — Dhanusha",

    "🌊 Begnas Lake — Kaski",

    "🌲 Shivapuri — Kathmandu",

    "🏔️ Manang — Gandaki",

    "🌅 Bandipur — Tanahun",

    "🌿 Bardiya National Park — Bardiya",

    "🏛️ Bhaktapur — Bhaktapur",

    "🏔️ Langtang — Rasuwa"

];


if (randomButton) {

    randomButton.addEventListener(
        "click",
        () => {

            randomButton.disabled = true;

            randomResult.style.opacity = "0";

            setTimeout(() => {

                const random =
                    destinations[
                        Math.floor(
                            Math.random() *
                            destinations.length
                        )
                    ];

                randomResult.textContent =
                    random;

                randomResult.style.opacity = "1";

                randomButton.disabled = false;

            }, 400);

        }
    );

}