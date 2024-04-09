$(function(){
    const id = window.location.search.substring(1);
    const url = "/hentEnBilett?" + id;
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

function endreBiletten(){
    const kunde = {
        film: $('#film').val(),
        antall: $('#antall').val(),
        fornavn: $('#fornavn').val(),
        etternavn: $('#etternavn').val(),
        telefonnr: $('#telefonnr').val(),
        epost: $('#epost').val()
    }
    $.post("/oppdaterBilett", kunde, function(){
        window.location.href = 'index.html';
    });
}