var isPadavibhagaEdited=[];
$( document ).ready(function() {
    console.log( "ready!" );
    $("table td:contains('Word Type')").next().text(function() {
        return $(this).text().split(",")[0];
    })
});
$("button[data-target='#padavibhagamodal']").click(function() {
    isPadavibhagaEdited=[];
});
