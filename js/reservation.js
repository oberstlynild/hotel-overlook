let reservation_form = document.getElementById("reservation-form");
function handleForm(event) { event.preventDefault(); }
reservation_form.addEventListener('submit', handleForm);

if (!sessionStorage.getItem('loggedin')) {
    document.getElementById('reserver-form').innerHTML = "<h2>Du skal logge ind for at kunne reservere!</h2>";
}

function validerReservation() {
    let user_id_value = 7;
    let hotel_id_value = document.getElementById('destination-hotel-select').value;
    let room_id_value = document.getElementById('room-type').value
    let room_is_flex;
    if (document.getElementById('normal-pris').checked) {
        room_is_flex = false;
    }
    if (document.getElementById('flex-pris').checked) {
        room_is_flex = true;
    }
    let num_persons_value = document.getElementById('room-num-persons').value;
    let checkin_value = document.getElementById('check-in-dato').value;
    let checkout_value = document.getElementById('check-out-dato').value;
    let firstname_value = document.getElementById('reservation-fornavn').value;
    let lastname_value = document.getElementById('reservation-efternavn').value;
    let email_value = document.getElementById('reservation-email').value;
    let password_value = document.getElementById('reservation-adgangskode').value;
    let password_repeat_value = document.getElementById('reservation-adgangskode-gentag').value;
    let phone_value = document.getElementById('reservation-telefon').value;
    let comment_value = document.getElementById('reservation-kommentar').value;

    /*VALIDERINGER HERFRA*/
    let price_class_validated;
    let checkin_validated;
    let checkout_validated;
    let firstname_validated;
    let lastname_validated;
    let email_validated;
    let password_validated;
    let phone_validated;
    let accept_validated;

    /*HVIS IKKE NORMAL ELLER FLEX ER VALGT*/
    if (!document.getElementById('normal-pris').checked && !document.getElementById('flex-pris').checked) {
        document.getElementById('room-pris-klasse-label').innerHTML = "Du mangler at vælge prisklasse!"
        document.getElementById('room-pris-klasse-label').style.color="red";
        document.getElementById('room-pris-klasse-label').style.fontWeight="bold";
        price_class_validated = 0;
    }else {
        document.getElementById('room-pris-klasse-label').innerHTML = "Prisklasse: <span class='reserver-obligatory'>*</span>"
        document.getElementById('room-pris-klasse-label').style.color="#444243";
        document.getElementById('room-pris-klasse-label').style.fontWeight="normal";
        price_class_validated = 1;
    }

    /*HVIS CHECK-IN DATO ER FØR I DAG??*/
    let checkin_timestamp = Math.round(new Date(checkin_value).getTime() / 1000);
    let today_timestamp = Math.round(new Date().getTime() / 1000);

    if (checkin_timestamp < today_timestamp || isNaN(checkin_timestamp) == true) {
        document.getElementById('check-in-dato-label').innerHTML = "Du kan ikke bestille til før idag!";
        document.getElementById('check-in-dato-label').style.color="red";
        document.getElementById('check-in-dato-label').style.fontWeight="bold";
        checkin_validated = 0;
    }else {
        document.getElementById('check-in-dato-label').innerHTML = "Check-in dato: <span class='reserver-obligatory'>*</span>";
        document.getElementById('check-in-dato-label').style.color="#444243";
        document.getElementById('check-in-dato-label').style.fontWeight="normal";
        checkin_validated = 1;
    }

    console.log(checkin_timestamp);
    console.log(today_timestamp);


    /*HVIS CHECK UD DATO ER FØR CHECK IN DATO??*/
    let checkout_timestamp = Math.round(new Date(checkout_value).getTime() / 1000);

    if (checkout_timestamp < checkin_timestamp || isNaN(checkout_timestamp) == true) {
        document.getElementById('check-out-dato-label').innerHTML = "Du kan ikke bestille til før check-in!"
        document.getElementById('check-out-dato-label').style.color="red";
        document.getElementById('check-out-dato-label').style.fontWeight="bold";
        checkout_validated = 0;
    }else {
        document.getElementById('check-out-dato-label').innerHTML = "Check-out dato: <span class='reserver-obligatory'>*</span>"
        document.getElementById('check-out-dato-label').style.color="#444243";
        document.getElementById('check-out-dato-label').style.fontWeight="normal";
        checkout_validated = 1;
    }

    /*HVIS FORNAVN IKKE KUN ER BOGSTAVER*/
    if (!/^[A-Za-zæøåÆØÅ]+$/.test(firstname_value)) {
        document.getElementById('reservation-fornavn-label').innerHTML = "Kun bogstaver i fornavn!"
        document.getElementById('reservation-fornavn-label').style.color="red";
        document.getElementById('reservation-fornavn-label').style.fontWeight="bold";
        firstname_validated = 0;
    } else {
        document.getElementById('reservation-fornavn-label').innerHTML = "Fornavn: <span class='reserver-obligatory'>*</span>"
        document.getElementById('reservation-fornavn-label').style.color="#444243";
        document.getElementById('reservation-fornavn-label').style.fontWeight="normal";
        firstname_validated = 1;
    }

    /*HVIS EFTERNAVN IKKE KUN ER BOGSTAVER*/
    if (!/^[A-Za-zæøåÆØÅ]+$/.test(lastname_value)) {
        document.getElementById('reservation-efternavn-label').innerHTML = "Kun bogstaver i efternavn!"
        document.getElementById('reservation-efternavn-label').style.color="red";
        document.getElementById('reservation-efternavn-label').style.fontWeight="bold";
        lastname_validated = 0;
    } else {
        document.getElementById('reservation-efternavn-label').innerHTML = "Efternavn: <span class='reserver-obligatory'>*</span>"
        document.getElementById('reservation-efternavn-label').style.color="#444243";
        document.getElementById('reservation-efternavn-label').style.fontWeight="normal";
        lastname_validated = 1;
    }

    /*HVIS EMAIL IKKE ER EN EMAIL FORMAT*/
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_value)) {
        document.getElementById('reservation-email-label').innerHTML = "Ikke korrekt email format!"
        document.getElementById('reservation-email-label').style.color="red";
        document.getElementById('reservation-email-label').style.fontWeight="bold";
        email_validated = 0;
    } else {
        document.getElementById('reservation-email-label').innerHTML = "Email: <span class='reserver-obligatory'>*</span>"
        document.getElementById('reservation-email-label').style.color="#444243";
        document.getElementById('reservation-email-label').style.fontWeight="normal";
        email_validated = 1;
    }

    /*HVIS ADGANGSKODER IKKE ER ENS*/
    if (password_value !== password_repeat_value && password_repeat_value !== password_value || password_value == "") {
        document.getElementById('reservation-adgangskode-label').innerHTML = "Adgangskoder ikke ens!"
        document.getElementById('reservation-adgangskode-label').style.color="red";
        document.getElementById('reservation-adgangskode-label').style.fontWeight="bold";
        document.getElementById('reservation-adgangskode-gentag-label').innerHTML = "Adgangskoder ikke ens!"
        document.getElementById('reservation-adgangskode-gentag-label').style.color="red";
        document.getElementById('reservation-adgangskode-gentag-label').style.fontWeight="bold";
        password_validated = 0;
    }else {
        document.getElementById('reservation-adgangskode-label').innerHTML = "Adgangskode: <span class='reserver-obligatory'>*</span>"
        document.getElementById('reservation-adgangskode-label').style.color="#444243";
        document.getElementById('reservation-adgangskode-label').style.fontWeight="normal";
        document.getElementById('reservation-adgangskode-gentag-label').innerHTML = "Gentag adgangskode: <span class='reserver-obligatory'>*</span>"
        document.getElementById('reservation-adgangskode-gentag-label').style.color="#444243";
        document.getElementById('reservation-adgangskode-gentag-label').style.fontWeight="normal";
        password_validated = 1;
    }

    /*HVIS TELEFON IKKE KUN ER NUMRE*/
    if (!/^[0-9]+$/.test(phone_value)) {
        document.getElementById('reservation-telefon-label').innerHTML = "Kun tal i telefonnummer!"
        document.getElementById('reservation-telefon-label').style.color="red";
        document.getElementById('reservation-telefon-label').style.fontWeight="bold";
        phone_validated = 0;
    } else {
        document.getElementById('reservation-telefon-label').innerHTML = "Telefon: <span class='reserver-obligatory'>*</span>"
        document.getElementById('reservation-telefon-label').style.color="#444243";
        document.getElementById('reservation-telefon-label').style.fontWeight="normal";
        phone_validated = 1;
    }

    /*FLUEBEN IKKE SAT*/
    if (!document.getElementById('reservation-accepter').checked) {
        document.getElementById('reservation-accepter-label').innerHTML = "Du skal acceptere betingelse!"
        document.getElementById('reservation-accepter-label').style.color="red";
        document.getElementById('reservation-accepter-label').style.fontWeight="bold";
        accept_validated = 0;
    } else {
        document.getElementById('reservation-accepter-label').innerHTML = "Jeg accepterer hermed Overlook betingelser (sæt flueben)."
        document.getElementById('reservation-accepter-label').style.color="#444243";
        document.getElementById('reservation-accepter-label').style.fontWeight="normal";
        accept_validated = 1;
    }

    if ((price_class_validated == 1) && (checkin_validated == 1) && (checkout_validated == 1) && (firstname_validated == 1) == (lastname_validated == 1) && (email_validated == 1) && (password_validated == 1) && (phone_validated == 1) && (accept_validated == 1)) {
        sendReservation(user_id_value, hotel_id_value, room_id_value, room_is_flex, num_persons_value, checkin_timestamp, checkout_timestamp, firstname_value, lastname_value, email_value, phone_value, comment_value);
    }
}

function sendReservation(user_id_value, hotel_id_value, room_id_value, room_is_flex, num_persons_value, checkin_timestamp, checkout_timestamp, firstname_value, lastname_value, email_value, phone_value, comment_value) {
    
    let bearer_token = sessionStorage.getItem('bearer');
    
    let formData = new FormData()
    formData.append('user_id', user_id_value)
    formData.append('hotel_id', hotel_id_value)
    formData.append('room_id', room_id_value)
    formData.append('is_flex', room_is_flex)
    formData.append('num_persons', num_persons_value)
    formData.append('checkin', checkin_timestamp)
    formData.append('checkout', checkout_timestamp)
    formData.append('firstname', firstname_value)
    formData.append('lastname', lastname_value)
    formData.append('email', email_value)
    formData.append('phone', phone_value)
    formData.append('comment', comment_value)
    fetch('https://api.mediehuset.net/overlook/reservations', {
            method: "POST",
            headers: {
                'Authorization': "Bearer " + bearer_token
            },
            body: formData,
        })
        .then(response => response.json())
        .then(data => writeReservation(data))
}

function writeReservation(data) {
    console.log(data);
    document.getElementById('reserver-form').innerHTML = "<h2>Tak for din reservation!</h2>";
}

function annulerReservation() {
    location.reload();
}