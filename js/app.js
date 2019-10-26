$(function() {
    $("#carousel").carousel({
        interval: 2000
    });
});

Email.send({
    Host : "ex2.mail.ovh.net",
    Username : "nfilskov@mxm.eu",
    Password : "password",
    To : 'nfilskov@mxm.eu',
    From : "niels.f@hotmail.fr",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

function sendMail() {

	var subject = document.getElementById("subject").value;
	var pseudo = document.getElementById("pseudo").value;
	var mail = document.getElementById("mail").value;
	var choice = document.getElementById("choice");
	var optionChoice = choice.options[choice.selectedIndex].text;

    var link = "mailto:niels.f@hotmail.fr"
             + "?cc=nfilskov@mxm.eu"
             + "&subject=" + escape(subject)
             + "&body=" + escape(optionChoice) + " " escape(document.getElementById('message').value)
    ;

    window.location.href = link;
}


// TRANSLATION PART
// $.getJSON( "core/translation.json", function( data ) {
//     var items = [];
//     $.each( data, function( key, val ) {
//       items.push( "<li id='" + key + "'>" + val + "</li>" );
//     });
   
//     $( "<ul/>", {
//       "class": "my-new-list",
//       html: items.join( "" )
//     }).appendTo( "body" );
// });

