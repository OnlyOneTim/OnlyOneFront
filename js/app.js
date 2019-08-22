$(function() {
    $("#carousel").carousel({
        interval: 2000
    });
});

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