let billetter = [];

function bestillBillett() {
    const film = $('film').val();
    const antall = $('antall').val();
    const fornavn = $('fornavn').val();
    const etternavn = $('etternavn').val();
    const telefonnr = $('telefonnr').val();
    const epost = $('epost').val();

    let telefonRegex = /^\d{8}$/;
    let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    $('filmFeil').textContent = '';
    $('antallFeil').textContent = '';
    $('fornavnFeil').textContent = '';
    $('etternavnFeil').textContent = '';
    $('telefonFeil').textContent = '';
    $('epostFeil').textContent = '';

    if (film && antall && fornavn && etternavn && telefonRegex.test(telefonnr) && epostRegex.test(epost)) {
        let billett = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };

        billetter.push(billett);

        visAlleBilletter();

        document.getElementById('film').value = "";
        document.getElementById('antall').value = "";
        document.getElementById('fornavn').value = "";
        document.getElementById('etternavn').value = "";
        document.getElementById('telefonnr').value = "";
        document.getElementById('epost').value = "";
    } else {
        if (!film) {
            document.getElementById('filmFeil').textContent = 'Please select a film.';
        }
        if (!antall) {
            document.getElementById('antallFeil').textContent = 'Please enter the number of tickets.';
        }
        if (!fornavn) {
            document.getElementById('fornavnFeil').textContent = 'Please enter your first name.';
        }
        if (!etternavn) {
            document.getElementById('etternavnFeil').textContent = 'Please enter your last name.';
        }
        if (!telefonRegex.test(telefonnr)) {
            document.getElementById('telefonFeil').textContent = 'Please enter a valid phone number.';
        }
        if (!epostRegex.test(epost)) {
            document.getElementById('epostFeil').textContent = 'Please enter a valid email address.';
        }
    }
}

function visAlleBilletter() {
    let billettListe = "<h2>Alle billetter</h2><table><thead><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th></tr></thead><tbody>";
    for (let billett of billetter) {
        billettListe += "<tr><td>" + billett.film + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td><td>" + billett.etternavn + "</td><td>" + billett.telefonnr + "</td><td>" + billett.epost + "</td></tr>";
    }
    billettListe += "</tbody></table>";
    document.getElementById('alleBilletter').innerHTML = billettListe;
}

function slettAlleBilletter() {
    $.get( "/slettAlle", function( data ) {
        visAlleBilletter();
    }
}