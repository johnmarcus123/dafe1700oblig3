$(function(){
    const id = window.location.search.substring(1);
    const url = "/hentBilett?" + id;
    $.get(url, function(kunde){
        $('#id').val(kunde.id);
        $('#film').val(kunde.film);
        $('#antall').val(kunde.antall);
        $('#fornavn').val(kunde.fornavn);
        $('#etternavn').val(kunde.etternavn);
        $('#telefonnr').val(kunde.telefonnr);
        $('#epost').val(kunde.epost);
    });
});

function endreBiletten() {
    const kunde = {
        id: $('#id').val(),
        film: $('#film').val(),
        antall: $('#antall').val(),
        fornavn: $('#fornavn').val(),
        etternavn: $('#etternavn').val(),
        telefonnr: $('#telefonnr').val(),
        epost: $('#epost').val()
    };

    $.ajax({
        url: "/oppdater",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(kunde),
        success: function() {
            window.location.href = 'index.html';
        },
        error: function(error) {
            console.error("Feil med å oppdatere", error);
            alert("En feil oppsto");
        }
    });
}