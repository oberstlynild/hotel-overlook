let vaerelse_inner_wrapper = document.getElementById('vaerelser-inner-wrapper');
let vaerelse_last_breadcrump = document.getElementById('vaerelse-last-breadcrump');

function fetchRoom(request) {
    fetch('https://api.mediehuset.net/overlook/rooms/' + request)
    .then(response => response.json())
    .then(data => writeRoom(data))
}

function writeRoom(data) {
    vaerelse_inner_wrapper.innerHTML="";
    vaerelse_last_breadcrump.innerHTML = "Se vores udvalg af værelser > " + data.item.title;

    let room_title = document.createElement('h2');
    room_title.innerHTML = data.item.title;
    vaerelse_inner_wrapper.appendChild(room_title);

    let room_images = document.createElement('div');
    room_images.setAttribute('class', 'room-images');
    for (i=0; i<data.item.images.length; i++) {
        let room_image = document.createElement('img');
        room_image.src = data.item.images[i].image;
        room_image.alt = data.item.images[i].title;
        room_images.appendChild(room_image);
    }
    vaerelse_inner_wrapper.appendChild(room_images);

    let room_beskrivelse = document.createElement("p");
    room_beskrivelse.innerHTML = data.item.description;
    vaerelse_inner_wrapper.appendChild(room_beskrivelse);

    let room_size = document.createElement('p');
    room_size.innerHTML = '<i class="far fa-object-group"></i> ' + data.item.area;
    vaerelse_inner_wrapper.appendChild(room_size);

    let room_num_persons = document.createElement('p');
    room_num_persons.innerHTML = '<i class="fas fa-users"></i> Plads til ' + data.item.num_persons + " personer.";
    vaerelse_inner_wrapper.appendChild(room_num_persons);

    let room_bed_type = document.createElement('p');
    room_bed_type.innerHTML = '<i class="fas fa-bed"></i> Sengetyper: <span id="sengetype">Apperently ingen seng.. Tag et liggeunderlag med</span>';
    vaerelse_inner_wrapper.appendChild(room_bed_type);

    let room_udstyr_overskrift = document.createElement('h2');
    room_udstyr_overskrift.innerHTML = "Værelset er udstyret med";
    vaerelse_inner_wrapper.appendChild(room_udstyr_overskrift);

    let room_udstyr_wrapper = document.createElement('div');
    room_udstyr_wrapper.setAttribute('class', 'room-udstyr-wrapper');
    
    for (i=0; i<data.item.facilities.length; i++) {
        if (data.item.facilities[i].category == "Senge") {
            document.getElementById('sengetype').innerHTML = data.item.facilities[i].title;
        }else {
            let room_udstyr_item = document.createElement('p');
            room_udstyr_item.innerHTML = '<i class="fas fa-check"></i> ' + data.item.facilities[i].title;
            room_udstyr_wrapper.appendChild(room_udstyr_item);
        }
    }
    vaerelse_inner_wrapper.appendChild(room_udstyr_wrapper);

    let room_pris_overskrift = document.createElement('h2');
    room_pris_overskrift.innerHTML = "Priser:";
    vaerelse_inner_wrapper.appendChild(room_pris_overskrift);

    let room_pris_normal = document.createElement('p');
    room_pris_normal.innerHTML = "NORMAL Pris - inkl. morgenmad - Kan ikke ændres eller afbestilles";

    let room_pris_normal_span = document.createElement('span');
    room_pris_normal_span.setAttribute('class','vaerelse-normal-pris-span');
    room_pris_normal_span.innerHTML = data.item.day_price_normal + " DKK/nat";
    room_pris_normal.appendChild(room_pris_normal_span);
    vaerelse_inner_wrapper.appendChild(room_pris_normal);

    let room_pris_flex = document.createElement('p');
    room_pris_flex.innerHTML = "FLEX Pris - inkl. morgenmad - Kan ikke ændres eller afbestilles";

    let room_pris_flex_span = document.createElement('span');
    room_pris_flex_span.setAttribute('class','vaerelse-flex-pris-span');
    room_pris_flex_span.innerHTML = data.item.day_price_flex + " DKK/nat";
    room_pris_flex.appendChild(room_pris_flex_span);
    vaerelse_inner_wrapper.appendChild(room_pris_flex);
}