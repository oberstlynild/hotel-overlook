let last_breadcrump = document.getElementById('hoteller-last-breadcrump');
let overskrift_land = document.getElementById('overskrift-land');
let hotel_beskrivelse = document.getElementById('hoteller-description');
let hotel_byer = document.getElementById('hoteller-byer');
let hotel_vaerelser = document.getElementById('hoteller-vaerelser');
let grid_right = document.getElementById('page-grid-right');


let nav_danmark = document.getElementById('nav-danmark');
let nav_sverige = document.getElementById('nav-sverige');
let nav_norge = document.getElementById('nav-norge');
let nav_finland = document.getElementById('nav-finland');
let nav_island = document.getElementById('nav-island');
let nav_tyskland = document.getElementById('nav-tyskland');
let nav_polen = document.getElementById('nav-polen');

/*DANMARK*/
function fetchDanmark() {
    fetch('https://api.mediehuset.net/overlook/')
    .then(response => response.json())
    .then(data => writeDanmark(data))
}
function writeDanmark(data) {
    hotel_byer.innerHTML="";
    hotel_vaerelser.innerHTML="";
    last_breadcrump.innerHTML = "Hoteller og destinationer > Danmark";
    overskrift_land.innerHTML = "Danmark";

    nav_danmark.style.fontWeight="bold";
    nav_sverige.style.fontWeight="normal";
    nav_norge.style.fontWeight="normal";
    nav_finland.style.fontWeight="normal";
    nav_island.style.fontWeight="normal";
    nav_tyskland.style.fontWeight="normal";
    nav_polen.style.fontWeight="normal";

    grid_right.innerHTML="";

    let overskrift_right = document.createElement('h2');
    overskrift_right.innerHTML = "Billede fra Danmark";
    grid_right.appendChild(overskrift_right);

    let image_right = document.createElement('img');
    image_right.src = data.countries.items[0].image;
    grid_right.appendChild(image_right);

    hotel_beskrivelse.innerHTML = data.countries.items[0].description;

    for (i=0; i<data.countries.items[1].cities.count; i++) {

        let by_item = document.createElement('div');
        by_item.setAttribute('onclick', 'fetchBy(' + data.countries.items[0].cities.items[i].id + ')');
        by_item.setAttribute('class', 'hotel-by-item');

        let image = document.createElement('img');
        image.setAttribute('class', 'hotel-by-billede');
        image.src = data.countries.items[0].cities.items[i].image;
        by_item.appendChild(image);

        let bynavn = document.createElement('h2');
        bynavn.setAttribute('class', 'hotel-bynavn');
        bynavn.innerHTML = data.countries.items[0].cities.items[i].name;
        by_item.appendChild(bynavn);

        let by_beskrivelse = document.createElement('p');
        by_beskrivelse.setAttribute('class', 'hotel-by-beskrivelse');
        by_beskrivelse.innerHTML = data.countries.items[0].cities.items[i].description;
        by_item.appendChild(by_beskrivelse);

        hotel_byer.appendChild(by_item);
    }
}

/*SVERIGE*/
function fetchSverige() {
    fetch('https://api.mediehuset.net/overlook/')
    .then(response => response.json())
    .then(data => writeSverige(data))
}

function writeSverige(data) {
    hotel_byer.innerHTML="";
    hotel_vaerelser.innerHTML="";
    last_breadcrump.innerHTML = "Hoteller og destinationer > Sverige";
    overskrift_land.innerHTML = "Vores hoteller i Sverige";

    nav_danmark.style.fontWeight="normal";
    nav_sverige.style.fontWeight="bold";
    nav_norge.style.fontWeight="normal";
    nav_finland.style.fontWeight="normal";
    nav_island.style.fontWeight="normal";
    nav_tyskland.style.fontWeight="normal";
    nav_polen.style.fontWeight="normal";

    grid_right.innerHTML="";

    let overskrift_right = document.createElement('h2');
    overskrift_right.innerHTML = "Billede fra Sverige";
    grid_right.appendChild(overskrift_right);

    let image_right = document.createElement('img');
    image_right.src = data.countries.items[1].image;
    grid_right.appendChild(image_right);

    hotel_beskrivelse.innerHTML = data.countries.items[1].description;

    for (i=0; i<data.countries.items[1].cities.count; i++) {

        let by_item = document.createElement('div');
        by_item.setAttribute('onclick', 'fetchBy(' + data.countries.items[1].cities.items[i].id + ')');
        by_item.setAttribute('class', 'hotel-by-item');

        let image = document.createElement('img');
        image.setAttribute('class', 'hotel-by-billede');
        image.src = data.countries.items[1].cities.items[i].image;
        by_item.appendChild(image);

        let bynavn = document.createElement('h2');
        bynavn.setAttribute('class', 'hotel-bynavn');
        bynavn.innerHTML = data.countries.items[1].cities.items[i].name;
        by_item.appendChild(bynavn);

        let by_beskrivelse = document.createElement('p');
        by_beskrivelse.setAttribute('class', 'hotel-by-beskrivelse');
        by_beskrivelse.innerHTML = data.countries.items[1].cities.items[i].description;
        by_item.appendChild(by_beskrivelse);

        hotel_byer.appendChild(by_item);
    }
}

function fetchNorge() {
    fetch('https://api.mediehuset.net/overlook/')
    .then(response => response.json())
    .then(data => writeNorge(data))
}

function writeNorge(data) {
    hotel_byer.innerHTML="";
    hotel_vaerelser.innerHTML="";
    last_breadcrump.innerHTML = "Hoteller og destinationer > Norge";
    overskrift_land.innerHTML = "Vores hoteller i Norge";

    nav_danmark.style.fontWeight="normal";
    nav_sverige.style.fontWeight="normal";
    nav_norge.style.fontWeight="bold";
    nav_finland.style.fontWeight="normal";
    nav_island.style.fontWeight="normal";
    nav_tyskland.style.fontWeight="normal";
    nav_polen.style.fontWeight="normal";

    grid_right.innerHTML="";

    let overskrift_right = document.createElement('h2');
    overskrift_right.innerHTML = "Billede fra Norge";
    grid_right.appendChild(overskrift_right);

    let image_right = document.createElement('img');
    image_right.src = data.countries.items[3].image;
    grid_right.appendChild(image_right);

    hotel_beskrivelse.innerHTML = data.countries.items[2].description;

    for (i=0; i<data.countries.items[3].cities.count; i++) {

        let by_item = document.createElement('div');
        by_item.setAttribute('onclick', 'fetchBy(' + data.countries.items[3].cities.items[i].id + ')');
        by_item.setAttribute('class', 'hotel-by-item');

        let image = document.createElement('img');
        image.setAttribute('class', 'hotel-by-billede');
        image.src = data.countries.items[3].cities.items[i].image;
        by_item.appendChild(image);

        let bynavn = document.createElement('h2');
        bynavn.setAttribute('class', 'hotel-bynavn');
        bynavn.innerHTML = data.countries.items[3].cities.items[i].name;
        by_item.appendChild(bynavn);

        let by_beskrivelse = document.createElement('p');
        by_beskrivelse.setAttribute('class', 'hotel-by-beskrivelse');
        by_beskrivelse.innerHTML = data.countries.items[3].cities.items[i].description;
        by_item.appendChild(by_beskrivelse);

        hotel_byer.appendChild(by_item);
    }
}

function fetchFinland() {
    fetch('https://api.mediehuset.net/overlook/')
    .then(response => response.json())
    .then(data => writeFinland(data))
}

function writeFinland(data) {
    hotel_byer.innerHTML="";
    hotel_vaerelser.innerHTML="";
    last_breadcrump.innerHTML = "Hoteller og destinationer > Finland";
    overskrift_land.innerHTML = "Vores hoteller i Finland";

    nav_danmark.style.fontWeight="normal";
    nav_sverige.style.fontWeight="normal";
    nav_norge.style.fontWeight="normal";
    nav_finland.style.fontWeight="bold";
    nav_island.style.fontWeight="normal";
    nav_tyskland.style.fontWeight="normal";
    nav_polen.style.fontWeight="normal";

    grid_right.innerHTML="";

    let overskrift_right = document.createElement('h2');
    overskrift_right.innerHTML = "Billede fra Finland";
    grid_right.appendChild(overskrift_right);

    let image_right = document.createElement('img');
    image_right.src = data.countries.items[2].image;
    grid_right.appendChild(image_right);

    hotel_beskrivelse.innerHTML = data.countries.items[2].description;

    for (i=0; i<data.countries.items[2].cities.count; i++) {

        let by_item = document.createElement('div');
        by_item.setAttribute('onclick', 'fetchBy(' + data.countries.items[2].cities.items[i].id + ')');
        by_item.setAttribute('class', 'hotel-by-item');

        let image = document.createElement('img');
        image.setAttribute('class', 'hotel-by-billede');
        image.src = data.countries.items[2].cities.items[i].image;
        by_item.appendChild(image);

        let bynavn = document.createElement('h2');
        bynavn.setAttribute('class', 'hotel-bynavn');
        bynavn.innerHTML = data.countries.items[2].cities.items[i].name;
        by_item.appendChild(bynavn);

        let by_beskrivelse = document.createElement('p');
        by_beskrivelse.setAttribute('class', 'hotel-by-beskrivelse');
        by_beskrivelse.innerHTML = data.countries.items[2].cities.items[i].description;
        by_item.appendChild(by_beskrivelse);

        hotel_byer.appendChild(by_item);
    }
}

function fetchIsland() {
    fetch('https://api.mediehuset.net/overlook/')
    .then(response => response.json())
    .then(data => writeIsland(data))
}

function writeIsland(data) {
    console.log(data);
    hotel_byer.innerHTML="";
    hotel_vaerelser.innerHTML="";
    last_breadcrump.innerHTML = "Hoteller og destinationer > Island";
    overskrift_land.innerHTML = "Vores hoteller i Island";

    nav_danmark.style.fontWeight="normal";
    nav_sverige.style.fontWeight="normal";
    nav_norge.style.fontWeight="normal";
    nav_finland.style.fontWeight="normal";
    nav_island.style.fontWeight="bold";
    nav_tyskland.style.fontWeight="normal";
    nav_polen.style.fontWeight="normal";

    grid_right.innerHTML="";

    let overskrift_right = document.createElement('h2');
    overskrift_right.innerHTML = "Billede fra Island";
    grid_right.appendChild(overskrift_right);

    let image_right = document.createElement('img');
    image_right.src = data.countries.items[6].image;
    grid_right.appendChild(image_right);

    hotel_beskrivelse.innerHTML = data.countries.items[6].description;

    for (i=0; i<data.countries.items[6].cities.count; i++) {

        let by_item = document.createElement('div');
        by_item.setAttribute('onclick', 'fetchBy(' + data.countries.items[6].cities.items[i].id + ')');
        by_item.setAttribute('class', 'hotel-by-item');

        let image = document.createElement('img');
        image.setAttribute('class', 'hotel-by-billede');
        image.src = data.countries.items[6].cities.items[i].image;
        by_item.appendChild(image);

        let bynavn = document.createElement('h2');
        bynavn.setAttribute('class', 'hotel-bynavn');
        bynavn.innerHTML = data.countries.items[6].cities.items[i].name;
        by_item.appendChild(bynavn);

        let by_beskrivelse = document.createElement('p');
        by_beskrivelse.setAttribute('class', 'hotel-by-beskrivelse');
        by_beskrivelse.innerHTML = data.countries.items[6].cities.items[i].description;
        by_item.appendChild(by_beskrivelse);

        hotel_byer.appendChild(by_item);
    }
}

function fetchTyskland() {
    fetch('https://api.mediehuset.net/overlook/')
    .then(response => response.json())
    .then(data => writeTyskland(data))
}

function writeTyskland(data) {
    console.log(data);
    hotel_byer.innerHTML="";
    hotel_vaerelser.innerHTML="";
    last_breadcrump.innerHTML = "Hoteller og destinationer > Tyskland";
    overskrift_land.innerHTML = "Vores hoteller i Tyskland";

    nav_danmark.style.fontWeight="normal";
    nav_sverige.style.fontWeight="normal";
    nav_norge.style.fontWeight="normal";
    nav_finland.style.fontWeight="normal";
    nav_island.style.fontWeight="normal";
    nav_tyskland.style.fontWeight="bold";
    nav_polen.style.fontWeight="normal";

    grid_right.innerHTML="";

    let overskrift_right = document.createElement('h2');
    overskrift_right.innerHTML = "Billede fra Tyskland";
    grid_right.appendChild(overskrift_right);

    let image_right = document.createElement('img');
    image_right.src = data.countries.items[4].image;
    grid_right.appendChild(image_right);

    hotel_beskrivelse.innerHTML = data.countries.items[4].description;

    for (i=0; i<data.countries.items[4].cities.count; i++) {

        let by_item = document.createElement('div');
        by_item.setAttribute('onclick', 'fetchBy(' + data.countries.items[4].cities.items[i].id + ')');
        by_item.setAttribute('class', 'hotel-by-item');

        let image = document.createElement('img');
        image.setAttribute('class', 'hotel-by-billede');
        image.src = data.countries.items[4].cities.items[i].image;
        by_item.appendChild(image);

        let bynavn = document.createElement('h2');
        bynavn.setAttribute('class', 'hotel-bynavn');
        bynavn.innerHTML = data.countries.items[4].cities.items[i].name;
        by_item.appendChild(bynavn);

        let by_beskrivelse = document.createElement('p');
        by_beskrivelse.setAttribute('class', 'hotel-by-beskrivelse');
        by_beskrivelse.innerHTML = data.countries.items[4].cities.items[i].description;
        by_item.appendChild(by_beskrivelse);

        hotel_byer.appendChild(by_item);
    }
}

function fetchPolen() {
    fetch('https://api.mediehuset.net/overlook/')
    .then(response => response.json())
    .then(data => writePolen(data))
}

function writePolen(data) {
    console.log(data);
    hotel_byer.innerHTML="";
    hotel_vaerelser.innerHTML="";
    last_breadcrump.innerHTML = "Hoteller og destinationer > Polen";
    overskrift_land.innerHTML = "Vores hoteller i Polen";

    nav_danmark.style.fontWeight="normal";
    nav_sverige.style.fontWeight="normal";
    nav_norge.style.fontWeight="normal";
    nav_finland.style.fontWeight="normal";
    nav_island.style.fontWeight="normal";
    nav_tyskland.style.fontWeight="normal";
    nav_polen.style.fontWeight="bold";

    grid_right.innerHTML="";

    let overskrift_right = document.createElement('h2');
    overskrift_right.innerHTML = "Billede fra Polen";
    grid_right.appendChild(overskrift_right);

    let image_right = document.createElement('img');
    image_right.src = data.countries.items[5].image;
    grid_right.appendChild(image_right);

    hotel_beskrivelse.innerHTML = data.countries.items[5].description;

    for (i=0; i<data.countries.items[5].cities.count; i++) {

        let by_item = document.createElement('div');
        by_item.setAttribute('onclick', 'fetchBy(' + data.countries.items[5].cities.items[i].id + ')');
        by_item.setAttribute('class', 'hotel-by-item');

        let image = document.createElement('img');
        image.setAttribute('class', 'hotel-by-billede');
        image.src = data.countries.items[5].cities.items[i].image;
        by_item.appendChild(image);

        let bynavn = document.createElement('h2');
        bynavn.setAttribute('class', 'hotel-bynavn');
        bynavn.innerHTML = data.countries.items[5].cities.items[i].name;
        by_item.appendChild(bynavn);

        let by_beskrivelse = document.createElement('p');
        by_beskrivelse.setAttribute('class', 'hotel-by-beskrivelse');
        by_beskrivelse.innerHTML = data.countries.items[5].cities.items[i].description;
        by_item.appendChild(by_beskrivelse);

        hotel_byer.appendChild(by_item);
    }
}

function fetchBy(request) {
    fetch('https://api.mediehuset.net/overlook/cities/' + request)
    .then(response => response.json())
    .then(data => writeBy(data))
}

function writeBy(data) {
    hotel_byer.innerHTML="";
    hotel_vaerelser.innerHTML="";
    last_breadcrump.innerHTML = "Hoteller og destinationer > " + data.item.country_name + " > " + data.item.name;
    overskrift_land.innerHTML = "Vores hoteller i " + data.item.name;
    hotel_beskrivelse.innerHTML = data.item.description;

    for (i=0; i<data.item.hotels.count; i++) {
        let hotel_item = document.createElement('div');
        hotel_item.setAttribute('onclick', 'fetchHotel(' + data.item.hotels.items[i].id + ')')
        hotel_item.setAttribute('class', 'by-hotel-item');

        let image = document.createElement('img');
        image.setAttribute('class', 'hotel-by-billede');
        image.src = data.item.hotels.items[i].image;
        hotel_item.appendChild(image);

        let hotel_navn = document.createElement('h2');
        hotel_navn.setAttribute('class', 'hotel-navn');
        hotel_navn.innerHTML = data.item.hotels.items[i].title;
        hotel_item.appendChild(hotel_navn);

        hotel_byer.appendChild(hotel_item);
    }
}

function fetchHotel(request) {
    fetch('https://api.mediehuset.net/overlook/hotels/' + request)
    .then(response => response.json())
    .then(data => writeHotel(data))
}

function writeHotel(data) {
    console.log(data);
    hotel_byer.innerHTML= "";
    hotel_vaerelser.innerHTML="";
    last_breadcrump.innerHTML += " > " + data.item.title;
    overskrift_land.innerHTML = data.item.title + " " + data.item.city_name;
    hotel_beskrivelse.innerHTML = data.item.teaser;

    let vaerelser_overskrift = document.createElement('h2');
    vaerelser_overskrift.innerHTML = "Vores værelser";
    hotel_vaerelser.appendChild(vaerelser_overskrift);

    grid_right.innerHTML="";

    let grid_right_overskrift = document.createElement('h2');
    grid_right_overskrift.innerHTML = "Hotel Information";
    grid_right.appendChild(grid_right_overskrift);

    let hotel_adresse = document.createElement('p');
    hotel_adresse.innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + data.item.address;
    grid_right.appendChild(hotel_adresse);

    let hotel_mail = document.createElement('p');
    hotel_mail.innerHTML = '<i class="far fa-envelope"></i> ' + data.item.phone;
    grid_right.appendChild(hotel_mail);

    let hotel_faciliteter_overskrift = document.createElement('h2');
    hotel_faciliteter_overskrift.innerHTML ="Faciliteter";
    grid_right.appendChild(hotel_faciliteter_overskrift);

    for (i=0; i<data.item.facilities.length; i++){
        let facilitet = document.createElement('p');
        facilitet.innerHTML = data.item.facilities[i].title;
        grid_right.appendChild(facilitet);
    }

    for (i=0; i<data.item.rooms.count; i++) {
        fetchRoom(data.item.rooms.items[i].id);
    }
}

function fetchRoom(request) {
    fetch('https://api.mediehuset.net/overlook/rooms/' + request)
    .then(response => response.json())
    .then(data => writeRoom(data))
}

function writeRoom(data) {
    let room_item = document.createElement('div');
    room_item.setAttribute('class', 'room-item');
    room_item.setAttribute('onclick', 'fetchRoomDetails(' + data.item.id + ')');

    let room_item_left = document.createElement('div');
    room_item_left.setAttribute('class', 'room-item-left');

    let room_item_right = document.createElement('div');
    room_item_right.setAttribute('class', 'room-item-right');

    let room_image = document.createElement('img');
    room_image.src = data.item.images[0].image;
    room_item_left.appendChild(room_image);

    let room_title = document.createElement('h3');
    room_title.setAttribute('class', 'room-title');
    room_title.innerHTML = data.item.title;
    room_item_right.appendChild(room_title);

    let room_size = document.createElement('p');
    room_size.setAttribute('class', 'room-size');
    room_size.innerHTML = data.item.area + "m2. Plads til " + data.item.num_persons + " personer."
    room_item_right.appendChild(room_size);

    let room_description = document.createElement('p');
    room_description.setAttribute('class', 'room-description');
    room_description.innerHTML = data.item.description;
    room_item_right.appendChild(room_description);

    let room_price = document.createElement('h4');
    room_price.setAttribute('class', 'room-price');
    room_price.innerHTML = "Fra " + data.item.day_price_normal + " DKK";
    room_item_right.appendChild(room_price);


    room_item.appendChild(room_item_left);
    room_item.appendChild(room_item_right);
    hotel_vaerelser.appendChild(room_item);
}

function fetchRoomDetails(request) {
    fetch('https://api.mediehuset.net/overlook/rooms/' + request)
    .then(response => response.json())
    .then(data => writeRoomDetails(data))
}

function writeRoomDetails(data){
    hotel_vaerelser.innerHTML="";

    let vaerelser_overskrift = document.createElement('h2');
    vaerelser_overskrift.innerHTML = "Vores værelser";
    hotel_vaerelser.appendChild(vaerelser_overskrift);

    let room_image = document.createElement('img');
    room_image.src = data.item.images[0].image;
    hotel_vaerelser.appendChild(room_image);

    let room_name = document.createElement('h2');
    room_name.innerHTML = data.item.title;
    hotel_vaerelser.appendChild(room_name);

    let room_size = document.createElement('p');
    room_size.innerHTML = data.item.area + ". Plads til " + data.item.num_persons + " personer.";
    hotel_vaerelser.appendChild(room_size);

    let room_description = document.createElement('p');
    room_description.innerHTML = data.item.description;
    hotel_vaerelser.appendChild(room_description);

    let room_udstyr_overskrift = document.createElement('h2');
    room_udstyr_overskrift.innerHTML = "Værelset er udstyret med:";
    hotel_vaerelser.appendChild(room_udstyr_overskrift);

    let room_udstyr_wrapper = document.createElement('div');
    room_udstyr_wrapper.setAttribute('class', 'room-udstyr-wrapper');
    
    for (i=0; i<data.item.facilities.length; i++) {
        let room_udstyr_item = document.createElement('p');
        room_udstyr_item.innerHTML = '<i class="fas fa-check"></i> ' + data.item.facilities[i].title;
        room_udstyr_wrapper.appendChild(room_udstyr_item);
    }
    hotel_vaerelser.appendChild(room_udstyr_wrapper);

    let room_pris_wrapper = document.createElement('div');
    room_pris_wrapper.setAttribute('class', 'room-pris-wrapper');

    let room_normal_pris = document.createElement('div');
    room_normal_pris.setAttribute('class', 'room-normal-pris room-wrapper-pris');

    let room_normal_pris_overskrift = document.createElement('h4');
    room_normal_pris_overskrift.innerHTML = "NORMAL pris - inkl. morgenmad";
    room_normal_pris.appendChild(room_normal_pris_overskrift);

    let room_normal_pris_underskrift = document.createElement('p');
    room_normal_pris_underskrift.innerHTML = "Kan ikke ændres eller afbestilles";
    room_normal_pris.appendChild(room_normal_pris_underskrift);

    let room_normal_pris_pris = document.createElement('h3');

    let room_normal_pris_span = document.createElement('span');
    room_normal_pris_span.setAttribute('class', 'card-pris');
    room_normal_pris_span.innerHTML = data.item.day_price_normal;
    room_normal_pris_pris.appendChild(room_normal_pris_span);

    let room_normal_pris_valuta = document.createElement('span');
    room_normal_pris_valuta.setAttribute('class', 'card-valuta');
    room_normal_pris_valuta.innerHTML =" DKK/nat";
    room_normal_pris_pris.appendChild(room_normal_pris_valuta);

    let room_normal_pris_knap = document.createElement('button');
    room_normal_pris_knap.setAttribute('onclick', 'location.href="reservation.html";')
    room_normal_pris_knap.innerHTML = "BOOK";
    room_normal_pris_pris.appendChild(room_normal_pris_knap);

    room_normal_pris.appendChild(room_normal_pris_pris);

    let room_flex_pris = document.createElement('div');
    room_flex_pris.setAttribute('class', 'room-flex-pris room-wrapper-pris');

    let room_flex_pris_overskrift = document.createElement('h4');
    room_flex_pris_overskrift.innerHTML = "FLEX pris - inkl. morgenmad";
    room_flex_pris.appendChild(room_flex_pris_overskrift);

    let room_flex_pris_underskrift = document.createElement('p');
    room_flex_pris_underskrift.innerHTML = "Kan ikke ændres eller afbestilles";
    room_flex_pris.appendChild(room_flex_pris_underskrift);

    let room_flex_pris_pris = document.createElement('h3');

    let room_flex_pris_span = document.createElement('span');
    room_flex_pris_span.setAttribute('class', 'card-pris');
    room_flex_pris_span.innerHTML = data.item.day_price_flex;
    room_flex_pris_pris.appendChild(room_flex_pris_span);

    let room_flex_pris_valuta = document.createElement('span');
    room_flex_pris_valuta.setAttribute('class', 'card-valuta');
    room_flex_pris_valuta.innerHTML =" DKK/nat";
    room_flex_pris_pris.appendChild(room_flex_pris_valuta);

    let room_flex_pris_knap = document.createElement('button');
    room_flex_pris_knap.innerHTML = "BOOK";
    room_flex_pris_pris.appendChild(room_flex_pris_knap);

    room_flex_pris.appendChild(room_flex_pris_pris);

    room_pris_wrapper.appendChild(room_normal_pris);
    room_pris_wrapper.appendChild(room_flex_pris);

    hotel_vaerelser.appendChild(room_pris_wrapper);
}