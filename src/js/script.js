let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
let nextId = clientes.length > 0 ? Math.max(...clientes.map(c => c.id)) + 1 : 1;

// Comprehensive database of cities by country
const cidadesPorPais = {
    "Afeganistão": ["Cabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Jalalabad"],
    "África do Sul": ["Joanesburgo", "Cidade do Cabo", "Durban", "Pretória", "Port Elizabeth"],
    "Albânia": ["Tirana", "Durrës", "Vlorë", "Elbasan", "Shkodër"],
    "Alemanha": ["Berlim", "Hamburgo", "Munique", "Colônia", "Frankfurt", "Stuttgart", "Düsseldorf", "Leipzig", "Dortmund", "Essen"],
    "Andorra": ["Andorra-a-Velha", "Escaldes-Engordany", "Encamp", "Sant Julià de Lòria", "La Massana"],
    "Angola": ["Luanda", "Huambo", "Lobito", "Benguela", "Namibe"],
    "Antígua e Barbuda": ["Saint John's", "All Saints", "Liberta", "Bolans", "Piggotts"],
    "Arábia Saudita": ["Riade", "Jeddah", "Meca", "Medina", "Dammam", "Taif", "Tabuk", "Buraydah", "Khamis Mushait", "Hofuf"],
    "Argélia": ["Argel", "Oran", "Constantine", "Annaba", "Blida"],
    "Argentina": ["Buenos Aires", "Córdoba", "Rosário", "Mendoza", "La Plata", "Tucumán", "Mar del Plata", "Salta", "Santa Fe", "San Juan"],
    "Armênia": ["Yerevan", "Gyumri", "Vanadzor", "Vagharshapat", "Hrazdan"],
    "Austrália": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle", "Canberra", "Sunshine Coast", "Wollongong"],
    "Áustria": ["Viena", "Graz", "Linz", "Salzburg", "Innsbruck"],
    "Azerbaijão": ["Baku", "Ganja", "Sumqayit", "Lankaran", "Mingachevir"],
    "Bahamas": ["Nassau", "Freeport", "West End", "Cooper's Town", "George Town"],
    "Bangladesh": ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Barisal"],
    "Barbados": ["Bridgetown", "Speightstown", "Oistins", "Bathsheba", "Holetown"],
    "Barein": ["Manama", "Al Muharraq", "Arad", "Isa Town", "Hamad Town"],
    "Bélgica": ["Bruxelas", "Antuérpia", "Gante", "Charleroi", "Liège"],
    "Belize": ["Belmopan", "Belize City", "San Ignacio", "Orange Walk", "Dangriga"],
    "Benin": ["Porto Novo", "Cotonou", "Djougou", "Abomey-Calavi", "Parakou"],
    "Bielorrússia": ["Minsk", "Gomel", "Mogilev", "Vitebsk", "Grodno"],
    "Bolívia": ["La Paz", "Santa Cruz de la Sierra", "Cochabamba", "Sucre", "Oruro"],
    "Bósnia e Herzegovina": ["Sarajevo", "Banja Luka", "Tuzla", "Zenica", "Mostar"],
    "Botsuana": ["Gaborone", "Francistown", "Molepolole", "Selebi-Phikwe", "Maun"],
    "Brasil": [
        "São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", 
        "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Porto Alegre",
        "Belém", "Goiânia", "Guarulhos", "Campinas", "São Luís",
        "Maceió", "Duque de Caxias", "Natal", "Teresina", "Campo Grande"
    ],
    "Brunei": ["Bandar Seri Begawan", "Kuala Belait", "Seria", "Tutong", "Bangar"],
    "Bulgária": ["Sofia", "Plovdiv", "Varna", "Burgas", "Ruse"],
    "Burkina Faso": ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Banfora", "Ouahigouya"],
    "Burundi": ["Gitega", "Bujumbura", "Muyinga", "Ruyigi", "Ngozi"],
    "Butão": ["Thimphu", "Phuntsholing", "Punakha", "Jakar", "Wangdue Phodrang"],
    "Cabo Verde": ["Praia", "Mindelo", "Santa Maria", "Cova Figueira", "Espargos"],
    "Camarões": ["Yaoundé", "Douala", "Garoua", "Maroua", "Bamenda"],
    "Camboja": ["Phnom Penh", "Siem Reap", "Sihanoukville", "Battambang", "Kampong Cham"],
    "Canadá": [
        "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", 
        "Ottawa", "Winnipeg", "Quebec City", "Hamilton", "Kitchener",
        "London", "Victoria", "Halifax", "Oshawa", "Windsor"
    ],
    "Catar": ["Doha", "Al Rayyan", "Umm Salal", "Al Wakrah", "Al Khor"],
    "Cazaquistão": ["Nur-Sultan", "Almaty", "Shymkent", "Aktobe", "Karaganda"],
    "Chade": ["N'Djamena", "Moundou", "Sarh", "Abéché", "Kelo"],
    "Chile": ["Santiago", "Valparaíso", "Concepción", "La Serena", "Antofagasta"],
    "China": [
        "Xangai", "Pequim", "Cantão", "Shenzhen", "Chongqing", 
        "Tianjin", "Wuhan", "Dongguan", "Hong Kong", "Foshan"
    ],
    "Chipre": ["Nicósia", "Limassol", "Larnaca", "Famagusta", "Paphos"],
    "Colômbia": ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena"],
    "Comores": ["Moroni", "Mutsamudu", "Fomboni", "Domoni", "Tsimbeo"],
    "Congo": ["Brazzaville", "Pointe-Noire", "Dolisie", "Kayes", "Owando"],
    "Coreia do Norte": ["Pyongyang", "Hamhung", "Chongjin", "Wonsan", "Rason"],
    "Coreia do Sul": ["Seul", "Busan", "Incheon", "Daegu", "Gwangju"],
    "Costa do Marfim": ["Abidjan", "Abobo", "Bouaké", "Daloa", "Yamoussoukro"],
    "Costa Rica": ["San José", "Alajuela", "Cartago", "Heredia", "Liberia"],
    "Croácia": ["Zagreb", "Split", "Rijeka", "Osijek", "Zadar"],
    "Cuba": ["Havana", "Santiago de Cuba", "Camagüey", "Holguín", "Guantánamo"],
    "Dinamarca": ["Copenhague", "Aarhus", "Odense", "Aalborg", "Esbjerg"],
    "Djibuti": ["Djibuti", "Ali Sabieh", "Tadjourah", "Obock", "Dikhil"],
    "Dominica": ["Roseau", "Portsmouth", "Marigot", "Berekua", "Colihaut"],
    "Egito": ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said"],
    "El Salvador": ["San Salvador", "Santa Ana", "San Miguel", "Sonsonate", "Ahuachapán"],
    "Emirados Árabes Unidos": ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman"],
    "Equador": ["Quito", "Guayaquil", "Cuenca", "Machala", "Santo Domingo"],
    "Eritreia": ["Asmara", "Keren", "Massawa", "Assab", "Mendefera"],
    "Eslováquia": ["Bratislava", "Košice", "Prešov", "Žilina", "Nitra"],
    "Eslovênia": ["Ljubljana", "Maribor", "Kranj", "Koper", "Celje"],
    "Espanha": [
        "Madri", "Barcelona", "Valência", "Sevilha", "Zaragoza", 
        "Málaga", "Murcia", "Palma de Mallorca", "Las Palmas", "Bilbao",
        "Córdoba", "Valladolid", "Vigo", "Gijón", "Hospitalet de Llobregat"
    ],
    "Estados Unidos": [
        "Nova York", "Los Angeles", "Chicago", "Houston", "Phoenix", 
        "Filadélfia", "San Antonio", "San Diego", "Dallas", "San Jose",
        "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte"
    ],
    "Estônia": ["Tallinn", "Tartu", "Narva", "Pärnu", "Kohtla-Järve"],
    "Eswatini": ["Mbabane", "Manzini", "Lobamba", "Dvokodvweni", "Siteki"],
    "Etiópia": ["Adis Abeba", "Dire Dawa", "Mekelle", "Bahir Dar", "Hawassa"],
    "Fiji": ["Suva", "Lautoka", "Nadi", "Labasa", "Ba"],
    "Filipinas": ["Quezon City", "Manila", "Caloocan", "Budapeste", "Davao City"],
    "Finlândia": ["Helsinque", "Espoo", "Tampere", "Vantaa", "Oulu"],
    "França": [
        "Paris", "Marselha", "Lyon", "Toulouse", "Nice", 
        "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille"
    ],
    "Gabão": ["Libreville", "Port-Gentil", "Franceville", "Oyem", "Moanda"],
    "Gâmbia": ["Banjul", "Lower River", "Central River", "Upper River", "Western"],
    "Gana": ["Acra", "Kumasi", "Tamale", "Takoradi", "Cape Coast"],
    "Geórgia": ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Gori"],
    "Granada": ["Saint George's", "Gouyave", "Grenville", "Victoria", "Hillsborough"],
    "Grécia": ["Atenas", "Salônica", "Patras", "Heracleia", "Larissa"],
    "Guatemala": ["Cidade da Guatemala", "Mixco", "Villa Nueva", "Petapa", "San Juan Sacatepéquez"],
    "Guiné": ["Conacri", "Nzérékoré", "Kindia", "Kankan", "Labé"],
    "Guiné Equatorial": ["Malabo", "Bata", "Ebebiyin", "Aconibe", "Anisoc"],
    "Guiné-Bissau": ["Bissau", "Bafatá", "Gabú", "Bissorã", "Farim"],
    "Guiana": ["Georgetown", "Linden", "New Amsterdam", "Anna Regina", "Bartica"],
    "Haiti": ["Porto Príncipe", "Santiago", "Porto de Paix", "Miragoâne", "Léogâne"],
    "Honduras": ["Tegucigalpa", "San Pedro Sula", "Choloma", "La Ceiba", "El Progreso"],
    "Hungria": ["Budapeste", "Debrecen", "Szeged", "Miskolc", "Pécs"],
    "Iêmen": ["Sanaa", "Aden", "Taiz", "Hodeida", "Ibb"],
    "Ilhas Marshall": ["Majuro", "Ebeye", "Jabor", "Wotje", "Mili"],
    "Índia": [
        "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", 
        "Chennai", "Kolkata", "Surat", "Pune", "Jaipur"
    ],
    "Indonésia": ["Jacarta", "Surabaya", "Medan", "Bandung", "Makassar"],
    "Irã": ["Teerã", "Mashhad", "Isfahan", "Karaj", "Tabriz"],
    "Iraque": ["Bagdá", "Basra", "Mosul", "Erbil", "Sulaymaniyah"],
    "Irlanda": ["Dublin", "Cork", "Limerick", "Galway", "Waterford"],
    "Islândia": ["Reykjavik", "Kópavogur", "Hafnarfjörður", "Akureyri", "Reykjanesbær"],
    "Israel": ["Tel Aviv", "Jerusalém", "Haifa", "Beer Sheva", "Netanya"],
    "Itália": [
        "Roma", "Milão", "Nápoles", "Turim", "Palermo", 
        "Gênova", "Bolonha", "Florença", "Bari", "Catânia"
    ],
    "Jamaica": ["Kingston", "Montego Bay", "Spanish Town", "Portmore", "May Pen"],
    "Japão": [
        "Tóquio", "Yokohama", "Osaka", "Nagoya", "Sapporo", 
        "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama"
    ],
    "Jordânia": ["Amã", "Zarqa", "Irbid", "Russeifa", "Aqaba"],
    "Kiribati": ["Tarawa", "Betio", "Bikenibeu", "Arorae", "Butaritari"],
    "Kosovo": ["Pristina", "Prizren", "Peja", "Gjakova", "Ferizaj"],
    "Kuwait": ["Cidade do Kuwait", "Hawalli", "Salmiya", "Jahra", "Ardiya"],
    "Laos": ["Vientiane", "Luang Prabang", "Savannakhet", "Pakse", "Thakhek"],
    "Lesoto": ["Maseru", "Mafeteng", "Leribe", "Maputsoe", "Mokhotlong"],
    "Letônia": ["Riga", "Daugavpils", "Liepāja", "Jelgava", "Jūrmala"],
    "Líbano": ["Beirute", "Trípoli", "Sidon", "Tyre", "Baabda"],
    "Libéria": ["Monróvia", "Gbarnga", "Kakata", "Bensonville", "Harper"],
    "Líbia": ["Trípoli", "Bengasi", "Misrata", "Al Bayda", "Sebha"],
    "Liechtenstein": ["Vaduz", "Schaan", "Balzers", "Triesen", "Eschen"],
    "Lituânia": ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys"],
    "Luxemburgo": ["Luxemburgo", "Esch-sur-Alzette", "Dudelange", "Schifflange", "Bettemburg"],
    "Macedônia do Norte": ["Skopje", "Bitola", "Kumanovo", "Prilep", "Tetovo"],
    "Madagascar": ["Antananarivo", "Toamasina", "Antsirabe", "Fianarantsoa", "Mahajanga"],
    "Malásia": ["Kuala Lumpur", "George Town", "Johor Bahru", "Kota Kinabalu", "Shah Alam"],
    "Malawi": ["Lilongwe", "Blantyre", "Mzuzu", "Zomba", "Karonga"],
    "Maldivas": ["Malé", "Addu City", "Fuvahmulah", "Hithadhoo", "Kulhudhuffushi"],
    "Mali": ["Bamako", "Ségou", "Mopti", "Koutiala", "Sikasso"],
    "Malta": ["Valletta", "Birkirkara", "Mosta", "Sliema", "Qormi"],
    "Marrocos": ["Rabat", "Casablanca", "Fez", "Tangier", "Marrakech"],
    "Maurício": ["Port Louis", "Beau Bassin", "Vacoas", "Curepipe", "Quatre Bornes"],
    "Mauritânia": ["Nouakchott", "Nouadhibou", "Néma", "Kiffa", "Rosso"],
    "México": [
        "Cidade do México", "Guadalajara", "Monterrey", "Puebla", "Tijuana", 
        "Ciudad Juárez", "León", "Zapopan", "Monterrey", "Nezahualcóyotl"
    ],
    "Micronésia": ["Palikir", "Weno", "Colonia", "Tofol", "Pohnpei"],
    "Moçambique": ["Maputo", "Matola", "Beira", "Nampula", "Chimoio"],
    "Moldávia": ["Chisinau", "Tiraspol", "Bălți", "Bender", "Rîbnița"],
    "Mônaco": ["Mônaco", "Monte Carlo", "Fontvieille", "Moneghetti", "Saint-Roman"],
    "Mongólia": ["Ulan Bator", "Erdenet", "Darkhan", "Choibalsan", "Mörön"],
    "Montenegro": ["Podgorica", "Nikšić", "Herceg Novi", "Pljevlja", "Budva"],
    "Myanmar": ["Yangon", "Mandalay", "Naypyidaw", "Mawlamyine", "Pathein"],
    "Namíbia": ["Windhoek", "Rundu", "Walvis Bay", "Oshakati", "Swakopmund"],
    "Nauru": ["Yaren", "Anabar", "Anetan", "Anibare", "Baiti"],
    "Nepal": ["Catmandu", "Pokhara", "Lalitpur", "Biratnagar", "Bharatpur"],
    "Nicarágua": ["Manágua", "León", "Masaya", "Chinandega", "Matagalpa"],
    "Níger": ["Niamey", "Zinder", "Maradi", "Agadez", "Tahoua"],
    "Nigéria": ["Lagos", "Kano", "Ibadan", "Abuja", "Port Harcourt"],
    "Noruega": ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen"],
    "Nova Zelândia": ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga"],
    "Omã": ["Mascat", "Salalah", "Bawshar", "Sohar", "Sur"],
    "Países Baixos": ["Amsterdã", "Rotterdam", "Haia", "Utrecht", "Eindhoven"],
    "Palau": ["Ngerulmud", "Koror", "Melekeok", "Ngarams", "Ngchesar"],
    "Palestina": ["Jerusalém Oriental", "Gaza", "Hebron", "Nablus", "Bethlehem"],
    "Panamá": ["Cidade do Panamá", "San Miguelito", "Juan Díaz", "David", "Arraiján"],
    "Papua-Nova Guiné": ["Port Moresby", "Lae", "Mount Hagen", "Popondetta", "Madang"],
    "Paquistão": ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan"],
    "Paraguai": ["Assunção", "Ciudad del Este", "San Lorenzo", "Capiatá", "Lambaré"],
    "Peru": ["Lima", "Arequipa", "Callao", "Trujillo", "Chiclayo"],
    "Polônia": ["Varsóvia", "Cracóvia", "Łódź", "Wrocław", "Poznań"],
    "Portugal": [
        "Lisboa", "Porto", "Braga", "Coimbra", "Faro", 
        "Aveiro", "Leiria", "Viseu", "Setúbal", "Viana do Castelo",
        "Bragança", "Évora", "Funchal", "Ponta Delgada", "Angra do Heroísmo"
    ],
    "Quênia": ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"],
    "Quirguistão": ["Bishkek", "Osh", "Jalal-Abad", "Karakol", "Tokmok"],
    "Reino Unido": [
        "Londres", "Birmingham", "Leeds", "Glasgow", "Sheffield", 
        "Bradford", "Liverpool", "Manchester", "Bristol", "Wakefield"
    ],
    "República Centro-Africana": ["Bangui", "Bimbo", "Berdjida", "Bozoum", "Kaga Bandoro"],
    "República Democrática do Congo": ["Kinshasa", "Lubumbashi", "Mbuji-Mayi", "Kananga", "Kisangani"],
    "República Dominicana": ["Santo Domingo", "Santiago", "Santo Domingo Oeste", "Santo Domingo Este", "San Pedro de Macorís"],
    "República Tcheca": ["Praga", "Brno", "Ostrava", "Plzeň", "Liberec"],
    "Romênia": ["Bucareste", "Cluj-Napoca", "Timișoara", "Iași", "Constanța"],
    "Ruanda": ["Kigali", "Butare", "Gitarama", "Ruhengeri", "Gisenyi"],
    "Rússia": [
        "Moscou", "São Petersburgo", "Novosibirsk", "Ekaterinburgo", "Kazan", 
        "Nizhny Novgorod", "Chelyabinsk", "Samara", "Omsk", "Rostov-on-Don"
    ],
    "Salomão": ["Honiara", "Gizo", "Auki", "Kirakira", "Tulagi"],
    "Salvador": ["San Salvador", "Santa Ana", "San Miguel", "Sonsonate", "Ahuachapán"],
    "Samoa": ["Apia", "Vaitele", "Faleula", "Siusega", "Safotulafono"],
    "San Marino": ["Cidade de San Marino", "Serravalle", "Borgo Maggiore", "Domagnano", "Faetano"],
    "Santa Lúcia": ["Castries", "Gros Islet", "Vieux Fort", "Micoud", "Soufrière"],
    "São Cristóvão e Névis": ["Basseterre", "Charlestown", "Dieppe Bay Town", "Newcastle", "Old Road Town"],
    "São Tomé e Príncipe": ["São Tomé", "Santo Antão", "Trindade", "Norte", "Lobata"],
    "São Vicente e Granadinas": ["Kingstown", "Chateaubelair", "Port Elizabeth", "Barrouallie", "Layou"],
    "Senegal": ["Dakar", "Touba", "Thiès", "Rufisque", "Mbour"],
    "Serra Leoa": ["Freetown", "Bo", "Kenema", "Koidu", "Makeni"],
    "Sérvia": ["Belgrado", "Novi Sad", "Niš", "Kragujevac", "Subotica"],
    "Singapura": ["Singapura"],
    "Síria": ["Damasco", "Aleppo", "Homs", "Latakia", "Deir ez-Zor"],
    "Somália": ["Mogadíscio", "Hargeisa", "Berbera", "Kismayo", "Bosaso"],
    "Sri Lanka": ["Colombo", "Kandy", "Galle", "Jaffna", "Matara"],
    "Sudão": ["Cartum", "Khartoum", "Omdurman", "Port Sudan", "Kassala"],
    "Sudão do Sul": ["Juba", "Wau", "Malakal", "Bor", "Rumbek"],
    "Suécia": ["Estocolmo", "Gotemburgo", "Malmö", "Uppsala", "Västerås"],
    "Suíça": ["Zurique", "Genebra", "Basileia", "Lausana", "Bern"],
    "Suriname": ["Paramaribo", "Lelydorp", "Brokopondo", "Nieuw Nickerie", "Moengo"],
    "Tailândia": ["Bangkok", "Nonthaburi", "Nakhon Ratchasima", "Chiang Mai", "Udon Thani"],
    "Taiwan": ["Taipei", "Kaohsiung", "Taichung", "Tainan", "Banqiao"],
    "Tajiquistão": ["Dushanbe", "Khujand", "Kulob", "Bokhtar", "Istaravshan"],
    "Tanzânia": ["Dodoma", "Dar es Salaam", "Mwanza", "Arusha", "Mbeya"],
    "Timor-Leste": ["Díli", "Maliana", "Suai", "Liquiçá", "Aileu"],
    "Togo": ["Lomé", "Sokodé", "Kara", "Atakpamé", "Kpalimé"],
    "Tonga": ["Nuku'alofa", "Neiafu", "Pangai", "Ohonua", "Vaini"],
    "Trinidad e Tobago": ["Port of Spain", "Chaguanas", "San Fernando", "Arima", "Point Fortin"],
    "Tunísia": ["Túnis", "Sfax", "Sousse", "Kairouan", "Bizerte"],
    "Turcomenistão": ["Ashgabat", "Türkmenabat", "Daşoguz", "Mary", "Balkanabat"],
    "Turquia": [
        "Istambul", "Ancara", "Izmir", "Bursa", "Adana", 
        "Gaziantep", "Konya", "Antalya", "Kayseri", "Mersin"
    ],
    "Tuvalu": ["Funafuti", "Vaitupu", "Nanumea", "Niulakita", "Nui"],
    "Ucrânia": [
        "Kiev", "Kharkiv", "Odessa", "Dnipro", "Donetsk", 
        "Zaporizhzhia", "Lviv", "Kryvyi Rih", "Mykolaiv", "Mariupol"
    ],
    "Uganda": ["Kampala", "Gulu", "Lira", "Mbarara", "Jinja"],
    "Uruguai": ["Montevidéu", "Salto", "Paysandú", "Las Piedras", "Rivera"],
    "Uzbequistão": ["Tashkent", "Samarkand", "Namangan", "Andijan", "Nukus"],
    "Vanuatu": ["Port Vila", "Luganville", "Norsup", "Sola", "Lamap"],
    "Vaticano": ["Vaticano"],
    "Venezuela": ["Caracas", "Maracaibo", "Valencia", "Barquisimeto", "Ciudad Guayana"],
    "Vietnã": ["Hanói", "Ho Chi Minh", "Hai Phong", "Da Nang", "Can Tho"],
    "Zâmbia": ["Lusaka", "Kitwe", "Ndola", "Kabwe", "Chingola"],
    "Zimbábue": ["Harare", "Bulawayo", "Chitungwiza", "Mutare", "Gweru"]
};

// Function to populate countries dropdown
function popularPaises() {
    const paisSelect = document.getElementById('pais');
    
    // Clear current options except the first one
    paisSelect.innerHTML = '<option value="">Selecione um país</option>';
    
    // Get sorted list of countries
    const paises = Object.keys(cidadesPorPais).sort();
    
    // Add countries to dropdown
    paises.forEach(pais => {
        const option = document.createElement('option');
        option.value = pais;
        option.textContent = pais;
        paisSelect.appendChild(option);
    });
}

// Function to populate cities based on selected country with search functionality
function atualizarCidades() {
    const paisSelect = document.getElementById('pais');
    const cidadeSelect = document.getElementById('cidade');
    const paisSelecionado = paisSelect.value;
    
    // Clear current options
    cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';
    
    if (paisSelecionado && cidadesPorPais[paisSelecionado]) {
        // Enable city select
        cidadeSelect.disabled = false;
        
        // Add cities for selected country
        cidadesPorPais[paisSelecionado].forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
    } else {
        // Disable city select if no country selected
        cidadeSelect.disabled = true;
        cidadeSelect.innerHTML = '<option value="">Selecione primeiro um país</option>';
    }
}

// Function to filter cities based on search input
function filtrarCidades() {
    const paisSelect = document.getElementById('pais');
    const cidadeSelect = document.getElementById('cidade');
    const cidadeSearch = document.getElementById('cidadeSearch');
    const paisSelecionado = paisSelect.value;
    const termoBusca = cidadeSearch.value.toLowerCase();
    
    // Clear current options
    cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>';
    
    if (paisSelecionado && cidadesPorPais[paisSelecionado]) {
        // Enable city select
        cidadeSelect.disabled = false;
        
        // Filter cities based on search term
        const cidadesFiltradas = cidadesPorPais[paisSelecionado].filter(cidade => 
            cidade.toLowerCase().includes(termoBusca)
        );
        
        // Add filtered cities
        cidadesFiltradas.forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade;
            option.textContent = cidade;
            cidadeSelect.appendChild(option);
        });
        
        // If no cities found
        if (cidadesFiltradas.length === 0) {
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'Nenhuma cidade encontrada';
            option.disabled = true;
            cidadeSelect.appendChild(option);
        }
    } else {
        // Disable city select if no country selected
        cidadeSelect.disabled = true;
        cidadeSelect.innerHTML = '<option value="">Selecione primeiro um país</option>';
    }
}

// Function to create popup notification
function createPopup(message, type) {
    // Remove any existing popups
    const existingPopup = document.getElementById('popup-notification');
    if (existingPopup) {
        existingPopup.remove();
    }
    
    // Create popup element
    const popup = document.createElement('div');
    popup.id = 'popup-notification';
    popup.className = `popup-notification ${type}`;
    popup.innerHTML = `
        <div class="popup-content">
            <span class="popup-message">${message}</span>
            <button class="popup-close" onclick="closePopup()">&times;</button>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(popup);
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (document.getElementById('popup-notification')) {
            document.getElementById('popup-notification').remove();
        }
    }, 5000);
}

function closePopup() {
    const popup = document.getElementById('popup-notification');
    if (popup) {
        popup.remove();
    }
}

function validarCPF(cpf) {
    // Remove non-digit characters
    cpf = cpf.replace(/[^\d]/g, '');
    
    // Check if CPF has 11 digits
    if (cpf.length !== 11) {
        return false;
    }
    
    // Check for repeated digits (invalid CPFs like 111.111.111-11)
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }
    
    // Calculate first verification digit
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    let digit1 = (remainder === 10 || remainder === 11) ? 0 : remainder;
    
    // Check first verification digit
    if (digit1 !== parseInt(cpf.charAt(9))) {
        return false;
    }
    
    // Calculate second verification digit
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    let digit2 = (remainder === 10 || remainder === 11) ? 0 : remainder;
    
    // Check second verification digit
    if (digit2 !== parseInt(cpf.charAt(10))) {
        return false;
    }
    
    return true;
}

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function verificarClienteExistente(email, cpf) {
    // Remove non-digit characters from CPF for comparison
    const cpfDigits = cpf.replace(/[^\d]/g, '');
    
    return clientes.some(cliente => 
        (cliente.email === email) || 
        (cliente.cpf.replace(/[^\d]/g, '') === cpfDigits)
    );
}

function salvarClientes() {
    localStorage.setItem('clientes', JSON.stringify(clientes));
}

function atualizarEstatisticas() {
    const ativos = clientes.filter(cliente => cliente.status === 'ativo').length;
    const inativos = clientes.filter(cliente => cliente.status === 'inativo').length;
    const total = clientes.length;
    
    const statsDiv = document.getElementById('clientStats');
    statsDiv.innerHTML = `
        <p><strong>Total:</strong> ${total} clientes | 
        <strong>Ativos:</strong> ${ativos} | 
        <strong>Inativos:</strong> ${inativos}</p>
    `;
}

function atualizarListaClientes(lista = clientes) {
    const container = document.getElementById('clientesCadastrados');
    container.innerHTML = '';

    if (lista.length === 0) {
        container.innerHTML = '<p>Nenhum cliente encontrado.</p>';
        return;
    }

    lista.forEach(cliente => {
        const div = document.createElement('div');
        div.className = `client-item ${cliente.status}`;
        div.innerHTML = `
            <strong>${cliente.nome}</strong> (${cliente.status === 'ativo' ? '✅ Ativo' : '❌ Inativo'})<br>
            📧 ${cliente.email} | 📞 ${cliente.telefone || 'Não informado'}<br>
            🌍 ${cliente.pais} | 🏙️ ${cliente.cidade}<br>
            🆔 CPF: ${cliente.cpf}<br>
            <small>Cadastrado em: ${cliente.dataCadastro}</small>
            <button onclick="editarCliente(${cliente.id})" style="background: #ffc107; margin-top: 5px;">✏️ Editar</button>
            <button onclick="excluirCliente(${cliente.id})" style="background: #dc3545; margin-top: 5px;">🗑️ Excluir</button>
        `;
        container.appendChild(div);
    });
    
    atualizarEstatisticas();
}

function filtrarClientes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('filterStatus').value;
    
    let resultados = clientes;
    
    // Filter by search term
    if (searchTerm) {
        resultados = resultados.filter(cliente => 
            cliente.nome.toLowerCase().includes(searchTerm) ||
            cliente.email.toLowerCase().includes(searchTerm) ||
            cliente.cpf.includes(searchTerm)
        );
    }
    
    // Filter by status
    if (statusFilter !== 'todos') {
        resultados = resultados.filter(cliente => cliente.status === statusFilter);
    }
    
    atualizarListaClientes(resultados);
}

function limparFiltro() {
    document.getElementById('searchInput').value = '';
    document.getElementById('filterStatus').value = 'todos';
    atualizarListaClientes();
}

function editarCliente(id) {
    const cliente = clientes.find(c => c.id === id);
    if (cliente) {
        // Store the original ID for updating
        document.getElementById('clientId').value = cliente.id;
        document.getElementById('nome').value = cliente.nome;
        document.getElementById('email').value = cliente.email;
        document.getElementById('cpf').value = cliente.cpf;
        document.getElementById('telefone').value = cliente.telefone || '';
        
        // Set country and update cities
        document.getElementById('pais').value = cliente.pais;
        atualizarCidades();
        // Set city after a small delay to ensure the options are populated
        setTimeout(() => {
            document.getElementById('cidade').value = cliente.cidade;
        }, 100);
        
        document.getElementById('status').value = cliente.status;
        createPopup('⚠️ Modo edição - Atualize os dados e clique em "Cadastrar Cliente"', 'info');
    }
}

function atualizarCliente(id, dados) {
    const index = clientes.findIndex(c => c.id === id);
    if (index !== -1) {
        clientes[index] = { ...dados, id: id };
        salvarClientes();
        atualizarListaClientes();
        limparFormulario();
        createPopup('✅ Cliente atualizado com sucesso!', 'success');
    }
}

function excluirCliente(id) {
    // Create custom confirmation popup
    const popup = document.createElement('div');
    popup.id = 'confirm-popup';
    popup.className = 'confirm-popup';
    popup.innerHTML = `
        <div class="confirm-content">
            <h3>Confirmação</h3>
            <p>Tem certeza que deseja excluir este cliente?</p>
            <div class="confirm-buttons">
                <button onclick="confirmDelete(${id})" class="btn-confirm">Sim</button>
                <button onclick="cancelDelete()" class="btn-cancel">Não</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
}

function confirmDelete(id) {
    // Remove confirmation popup
    document.getElementById('confirm-popup').remove();
    
    // Delete client
    clientes = clientes.filter(cliente => cliente.id !== id);
    salvarClientes();
    createPopup('🗑️ Cliente excluído!', 'success');
    atualizarListaClientes();
}

function cancelDelete() {
    // Remove confirmation popup
    document.getElementById('confirm-popup').remove();
}

function limparFormulario() {
    document.getElementById('clientForm').reset();
    document.getElementById('clientId').value = '';
    // Reset city select
    const cidadeSelect = document.getElementById('cidade');
    cidadeSelect.innerHTML = '<option value="">Selecione primeiro um país</option>';
    cidadeSelect.disabled = true;
    // Clear city search
    document.getElementById('cidadeSearch').value = '';
    // Clear any existing popup
    const popup = document.getElementById('popup-notification');
    if (popup) {
        popup.remove();
    }
}

// Add input masks
document.getElementById('cpf').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{1,3}).*/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{1,3}).*/, '$1.$2');
    }
    
    e.target.value = value;
});

document.getElementById('telefone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 6) {
        value = value.replace(/(\d{2})(\d{5})(\d{1,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d{1,5}).*/, '($1) $2');
    } else {
        value = value.replace(/(\d{1,2}).*/, '($1');
    }
    
    e.target.value = value;
});

// Add event listener for country selection
document.getElementById('pais').addEventListener('change', function() {
    atualizarCidades();
    // Clear city search when country changes
    document.getElementById('cidadeSearch').value = '';
});

// Add event listener for city search
document.getElementById('cidadeSearch').addEventListener('input', filtrarCidades);

// Handle form submission for both create and update
document.getElementById('clientForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('clientId').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const pais = document.getElementById('pais').value;
    const cidade = document.getElementById('cidade').value;
    const status = document.getElementById('status').value;

    if (!nome) {
        createPopup('❌ Por favor, preencha o nome!', 'error');
        return;
    }

    if (!pais) {
        createPopup('❌ Por favor, selecione um país!', 'error');
        return;
    }

    if (!cidade) {
        createPopup('❌ Por favor, selecione uma cidade!', 'error');
        return;
    }

    if (!validarEmail(email)) {
        createPopup('❌ E-mail inválido!', 'error');
        return;
    }

    if (!validarCPF(cpf)) {
        createPopup('❌ CPF inválido!', 'error');
        return;
    }

    // Check for duplicates only when creating new client
    if (!id && verificarClienteExistente(email, cpf)) {
        createPopup('❌ Cliente já cadastrado!', 'error');
        return;
    }

    const cliente = {
        nome: nome,
        email: email,
        cpf: cpf,
        telefone: telefone,
        pais: pais,
        cidade: cidade,
        status: status,
        dataCadastro: new Date().toLocaleDateString()
    };

    if (id) {
        // Update existing client
        atualizarCliente(parseInt(id), cliente);
    } else {
        // Create new client
        cliente.id = nextId++;
        clientes.push(cliente);
        salvarClientes();
        createPopup('✅ Cliente cadastrado com sucesso!', 'success');
        limparFormulario();
    }
    
    atualizarListaClientes();
});

// Export functions
function exportarCSV() {
    if (clientes.length === 0) {
        createPopup('❌ Nenhum cliente para exportar!', 'error');
        return;
    }
    
    let csv = 'ID,Nome,E-mail,CPF,Telefone,País,Cidade,Status,DataCadastro\n';
    clientes.forEach(cliente => {
        csv += `"${cliente.id}","${cliente.nome}","${cliente.email}","${cliente.cpf}","${cliente.telefone || ''}","${cliente.pais}","${cliente.cidade}","${cliente.status}","${cliente.dataCadastro}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'clientes.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    createPopup('✅ Lista de clientes exportada com sucesso!', 'success');
}

function exportarJSON() {
    if (clientes.length === 0) {
        createPopup('❌ Nenhum cliente para exportar!', 'error');
        return;
    }
    
    const data = {
        metadata: {
            totalClientes: clientes.length,
            dataExportacao: new Date().toISOString(),
            versao: '2.3.0'
        },
        clientes: clientes
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'clientes.json');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    createPopup('✅ Lista de clientes exportada com sucesso!', 'success');
}

// Initialize the client list and statistics
atualizarListaClientes();
atualizarEstatisticas();

// Populate countries dropdown when page loads
popularPaises();
