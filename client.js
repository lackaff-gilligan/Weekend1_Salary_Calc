$(document).ready(onReady);

function onReady() {
$('#submitBtn').on('click', submitClicked);

}

var total = 0;
function submitClicked() {
  console.log('in buttonClicked');
  $('.displayInfo').append("<p>" + $('#fName').val() + "</p>");


  $('table').append('<tr><td>' + $('#fName').val() + '</td><td>' +
  $('#lName').val() + '</td><td>'  + $('#iDNum').val() + '</td><td>' +
  $('#jobTitle').val() + '</td><td>' + $('#salary').val() + '</td></tr>');

}
