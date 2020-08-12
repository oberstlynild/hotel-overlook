function drawName() {
    let name = sessionStorage.getItem('username');
    document.getElementById('logged-in-as').innerHTML = name;
    document.getElementById('logged-in-as').style.fontWeight = "bold";
}

function fetchReservations() {
    let user_id = sessionStorage.getItem('user_id');
    let bearer_token = sessionStorage.getItem('bearer');

    fetch('https://api.mediehuset.net/overlook/reservations/list_by_user/' + user_id, {
            method: "GET",
            headers: {
                'Authorization': "Bearer " + bearer_token
            },
        })
        .then(response => response.json())
        .then(data => drawReservations(data))
}

function drawReservations(data) {
    let reservations_wrapper = document.getElementById('profil-reservationer');
    for (i=0; i<data.count; i++){
        let reservation_item = document.createElement('div');
        reservation_item.setAttribute('class', 'profil-reservation-item');

        /*venstre*/
        let profil_reservation_left = document.createElement('div');
        profil_reservation_left.setAttribute('class','profil-reservation-left')

        let left_header = document.createElement('p');
        left_header.setAttribute('class', 'reservation-header');
        left_header.innerHTML = "Hotel og værelsestype";
        profil_reservation_left.appendChild(left_header);

        let left_hotel = document.createElement('p');
        left_hotel.innerHTML = data.items[i].hotel_title;
        profil_reservation_left.appendChild(left_hotel);
        
        let left_room = document.createElement('p');
        left_room.innerHTML = data.items[i].room_title;
        profil_reservation_left.appendChild(left_room);

        reservation_item.appendChild(profil_reservation_left);

        /*midten venstre*/
        let profil_reservation_middle_left = document.createElement('div');
        profil_reservation_middle_left.setAttribute('class','profil-reservation-middle-left')

        let middle_left_header = document.createElement('p');
        middle_left_header.setAttribute('class', 'reservation-header');
        middle_left_header.innerHTML = "Dato";
        profil_reservation_middle_left.appendChild(middle_left_header);

        let middle_left_checkin = document.createElement('p');
        let checkin_date = data.items[i].checkin_date.substring(0,10); //kun datoen
        middle_left_checkin.innerHTML = checkin_date;
        profil_reservation_middle_left.appendChild(middle_left_checkin);

        let middle_left_checkout = document.createElement('p');
        let checkout_date = data.items[i].checkout_date.substring(0,10); //kun datoen
        middle_left_checkout.innerHTML = checkout_date;
        profil_reservation_middle_left.appendChild(middle_left_checkout);

        reservation_item.appendChild(profil_reservation_middle_left);

        /*midten højre*/
        let profil_reservation_middle_right = document.createElement('div');
        profil_reservation_middle_right.setAttribute('class', 'profil-reservation-middle-right');

        let middle_right_header = document.createElement('p');
        middle_right_header.setAttribute('class', 'reservation-header');
        middle_right_header.innerHTML = "Personer";
        profil_reservation_middle_right.appendChild(middle_right_header);

        let middle_right_persons = document.createElement('p');
        middle_right_persons.innerHTML = data.items[i].num_persons;
        profil_reservation_middle_right.appendChild(middle_right_persons);

        reservation_item.appendChild(profil_reservation_middle_right);

        /*højre*/
        let profil_reservation_right = document.createElement('div');
        profil_reservation_right.setAttribute('class', 'profil-reservation-right');

        let right_header = document.createElement('p');
        right_header.setAttribute('class', 'reservation-header');
        right_header.innerHTML = "Handling";
        profil_reservation_right.appendChild(right_header);

        let right_delete = document.createElement('p');
        right_delete.setAttribute('onclick', 'deleteReservation(' + data.items[i].id + ')');
        right_delete.setAttribute('class', 'reservation-delete');
        right_delete.innerHTML = "Afbestil";
        profil_reservation_right.appendChild(right_delete);

        reservation_item.appendChild(profil_reservation_right);

        /*Append til HTML*/
        reservations_wrapper.appendChild(reservation_item);
    }

    if (!data.count) {
        let no_data = document.createElement('h2');
        no_data.innerHTML = "Du har ingen reservationer";

        reservations_wrapper.appendChild(no_data);
    }

}

function deleteReservation(id) {
    let bearer_token = sessionStorage.getItem('bearer');

    fetch('https://api.mediehuset.net/overlook/reservations/' + id, {
            method: "DELETE",
            headers: {
                'Authorization': "Bearer " + bearer_token
            },
        })
        .then(response => response.json())
        .then(data => reservationDeleted(data))
}

function reservationDeleted() {
    setTimeout(location.reload(), 100);
}