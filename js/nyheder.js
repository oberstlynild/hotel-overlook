
let aktuel_nyhed = document.getElementById('nyheder-aktuel-nyhed');

function readDataID(data_id) {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    data_id = urlParams.get('id');
    fetchNyhederDetajler(data_id);
}

function fetchNyhederDetajler(data_id) {
    fetch('https://api.mediehuset.net/overlook/news/' + data_id)
        .then(response => response.json())
        .then(data => writeNyhederDetajler(data))
}

function writeNyhederDetajler(data) {
    let title = document.createElement('h2');
    title.innerHTML = data.item.title;

    let unix_timestamp = data.item.datetime;
    var date = new Date(unix_timestamp * 1000);
    minutes = '' + date.getMinutes();
    hours = '' + date.getHours();
    month = '' + (date.getMonth() + 1);
    day = '' + date.getDate();
    year = date.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    if (hours == "0") {
        hours = "00";
    }
    if (minutes == "0") {
        minutes = "00"
    }
    date = day + "/" + month + " " + hours + ':' + minutes;

    let tidspunkt = document.createElement('p');
    tidspunkt.setAttribute('class', 'aktuel-nyhed-tid');
    tidspunkt.innerHTML = date;

    let image = document.createElement('img');
    image.src = data.item.image;

    let content = document.createElement('p');
    content.setAttribute('class', 'aktuel-nyhed-content')
    content.innerHTML = data.item.content;

    aktuel_nyhed.appendChild(title);
    aktuel_nyhed.appendChild(tidspunkt);
    aktuel_nyhed.appendChild(image);
    aktuel_nyhed.appendChild(content);

}

function fetchNyheder() {
    fetch('https://api.mediehuset.net/overlook/news')
        .then(response => response.json())
        .then(data => writeNyheder(data))
}

function writeNyheder(data) {
    let nyhederGrid = document.getElementById('nyheder-grid');
    for (i = 0; i < 3; i++) {

        let nyhedsItem = document.createElement('a');
        nyhedsItem.setAttribute('class', 'nyheder-grid-item');
        nyhedsItem.href = "nyheder.html?id=" + data.items[i].id;

        let image = document.createElement('img');
        image.src = data.items[i].image;

        let overskrift = document.createElement('h3');
        overskrift.innerHTML = data.items[i].title;

        let teaser = document.createElement('p');
        teaser.innerHTML = data.items[i].teaser;

        nyhedsItem.appendChild(image);
        nyhedsItem.appendChild(overskrift);
        nyhedsItem.appendChild(teaser);
        nyhederGrid.appendChild(nyhedsItem);
    }
}

function fetchRooms() {
    fetch('https://api.mediehuset.net/overlook/rooms/by_hotel/1')
    .then(response => response.json())
    .then(data => writeRooms(data))
}

function writeRooms(data) {
    let vaerelseGrid = document.getElementById('vaerelser-grid');
    for (i = 0; i < 3; i++) {

        let vaerelseItem = document.createElement('a');
        vaerelseItem.setAttribute('class', 'nyheder-grid-item');
        vaerelseItem.href = "vaerelser.html?id=" + data.items[i].id;

        let image = document.createElement('img');
        image.src = data.items[i].images[0].image;

        let overskrift = document.createElement('h3');
        overskrift.innerHTML = data.items[i].room_title;

        let teaser = document.createElement('p');
        teaser.innerHTML = data.items[i].description;

        vaerelseItem.appendChild(image);
        vaerelseItem.appendChild(overskrift);
        vaerelseItem.appendChild(teaser);
        vaerelseGrid.appendChild(vaerelseItem);
    }
}