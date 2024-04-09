let billetter = [];

function bestillBillett() {
    const kunde = {
        film: $('#film').val(),
        antall: $('#antall').val(),
        fornavn: $('#fornavn').val(),
        etternavn: $('#etternavn').val(),
        telefonnr: $('#telefonnr').val(),
        epost: $('#epost').val()
    };
    let telefonRegex = /^\d{8}$/;
    let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    $('#filmFeil, #antallFeil, #fornavnFeil, #etternavnFeil, #telefonFeil, #epostFeil').text('');

    if (kunde.film && kunde.antall && kunde.fornavn && kunde.etternavn && telefonRegex.test(kunde.telefonnr) && epostRegex.test(kunde.epost)) {
        let billett = {
            film: kunde.film,
            antall: kunde.antall,
            fornavn: kunde.fornavn,
            etternavn: kunde.etternavn,
            telefonnr: kunde.telefonnr,
            epost: kunde.epost
        };

        billetter.push(billett);

        $('#film, #antall, #fornavn, #etternavn, #telefonnr, #epost').val("");
    } else {
        if (!kunde.film) {
            $('#filmFeil').text('Please select a film.');
        }
        if (!kunde.antall) {
            $('#antallFeil').text('Please enter the number of tickets.');
        }
        if (!kunde.fornavn) {
            $('#fornavnFeil').text('Please enter your first name.');
        }
        if (!kunde.etternavn) {
            $('#etternavnFeil').text('Please enter your last name.');
        }
        if (!telefonRegex.test(kunde.telefonnr)) {
            $('#telefonFeil').text('Please enter a valid phone number.');
        }
        if (!epostRegex.test(kunde.epost)) {
            $('#epostFeil').text('Please enter a valid email address.');
        }
    }
    visAlleBilletter();
}

function visAlleBilletter() {
    let billettListe = "<table class='table table-striped'><thead><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th><th></th></tr></thead><tbody>";
    for (let i = 0; i < billetter.length; i++) {
        billettListe += "<tr><td>" + billetter[i].film +
            "</td><td>" + billetter[i].antall + "</td><td>" +
            billetter[i].fornavn + "</td><td>" +
            billetter[i].etternavn + "</td><td>" +
            billetter[i].telefonnr + "</td><td>" +
            billetter[i].epost +
            "</td><td><a class='btn btn-primary' href='endreBiletten.html?id"+billetter[i].id+"'>Endre</a></td><td>" +
            "<button class='btn btn-danger' onclick='slettEnKunde(" + i + ")'>Delete</button></td>+" +
            "</tr>";
    }
    billettListe += "</tbody></table>";
    $('#alleBilletter').html(billettListe);
}

function slettEnKunde(index) {
    billetter.splice(index, 1);
    visAlleBilletter();
}

function slettAlleBilletter() {
    billetter = [];
    visAlleBilletter();
}
