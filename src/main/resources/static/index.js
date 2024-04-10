$(function(){
    hentAlleBilletter();
});

function bestillBillett() {
    const kunde = {
        film: $('#film').val(),
        antall: $('#antall').val(),
        fornavn: $('#fornavn').val(),
        etternavn: $('#etternavn').val(),
        telefonnr: $('#telefonnr').val(),
        epost: $('#epost').val()
    };
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
            alert('Ticket deleted successfully');
            window.location.href = 'index.html'; // Reload the page or update the UI as needed
        },
        error: function(error) {
            console.error("Error deleting ticket:", error);
            alert("An error occurred while deleting the ticket.");
        }
    });
}

function slettAlle() {
    const url = "/slettAlle";
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function (){
            alert('All tickets deletedd successfully');
            window.location.href = 'index.html';
        },
        error: function (error) {
        console.error('Error deleting all tickets:',error);
        alert("An error occured when deleting all tickets")
        }
    })
}
