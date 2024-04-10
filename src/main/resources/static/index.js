$(function(){
    hentAlleBilletter();
});

function bestillBillett() {
    const film = $('#film').val();
    const antall = $('#antall').val();
    const fornavn = $('#fornavn').val();
    const etternavn = $('#etternavn').val();
    const telefonnr = $('#telefonnr').val();
    const epost = $('#epost').val();

    const epostRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const telefonnrRegex = /^[0-9]{8}$/;
    const navnRegex = /^[a-zA-ZæøåÆØÅ .\-]+$/;

    let isValid = true;

    // Clear previous messages
    $('.validation-msg').text('');

    if (!film) {
        $('#filmFeil').text("Vennligst velg en film.");
        isValid = false;
    }
    if (!antall || antall < 1) {
        $('#antallFeil').text("Antall må være større enn 0.");
        isValid = false;
    }
    if (!navnRegex.test(fornavn)) {
        $('#fornavnFeil').text("Vennligst oppgi et gyldig fornavn.");
        isValid = false;
    }
    if (!navnRegex.test(etternavn)) {
        $('#etternavnFeil').text("Vennligst oppgi et gyldig etternavn.");
        isValid = false;
    }
    if (!telefonnrRegex.test(telefonnr)) {
        $('#telefonFeil').text("Vennligst oppgi et gyldig telefonnummer med 8 sifre.");
        isValid = false;
    }
    if (!epostRegex.test(epost)) {
        $('#epostFeil').text("Vennligst oppgi en gyldig epost-adresse.");
        isValid = false;
    }

    if (isValid) {
        const kunde = { film, antall, fornavn, etternavn, telefonnr, epost };
        const url = "/lagre";
        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(kunde),
            success: function() {
                window.location.href = 'index.html';
            }
        });
        hentAlleBilletter();
    }
}



function visAlleBilletter(billetter) {
        let ut = "<table class='table table-striped'>" +
            "<tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th><th></th></tr>";
        for (let i=0; i < billetter.length; i++) {
            ut += "<tr><td>" + billetter[i].film +
                "</td><td>" + billetter[i].antall + "</td><td>" +
                billetter[i].fornavn + "</td><td>" +
                billetter[i].etternavn + "</td><td>" +
                billetter[i].telefonnr + "</td><td>" + billetter[i].epost + "</td><td>" +
                "<a class='btn btn-primary' href='endreBiletten.html?id=" + billetter[i].id + "'>Endre</a></td>" +
                "<td><button class='btn btn-danger' onclick='slettEnKunde(" + billetter[i].id + ")'>Delete</button></td>" +
                "</tr>";
        }
        $('#alleBilletter').html(ut);
    }
function hentAlleBilletter(){
    $.get("/hentAlle", function(billetter){
        visAlleBilletter(billetter);
    });
}


function slettEnKunde(id) {
    const url = "/slettBilett?id=" + id;
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function() {
            alert('Billetten ble slettet');
            window.location.href = 'index.html'; // Reload the page or update the UI as needed
        },
        error: function(error) {
            alert("Det oppsto en feil");
        }
    });
}

function slettAlle() {
    const url = "/slettAlle";
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function (){
            alert('Alle billeter ble slettet');
            window.location.href = 'index.html';
        },
        error: function (error) {
        alert("Det oppsto en feil")
        }
    })
}
function sorterDB() {
    const url = "/sorter";
    $.ajax({
        url: url,
        type: 'GET',
        success: function(sortedBilletter) {
            visAlleBilletter(sortedBilletter);
        },
        error: function(error) {
            alert("Det skjedde en feil, prøv igjen");
        }
    });
}