$(document).ready(onReady);

function onReady() {
$('#submitBtn').on('click', submitClicked);

}

var total = 0;
function submitClicked() {
  console.log('in buttonClicked');
  $('.displayInfo').append("<p>" + $('#fName').val() + "</p>");
  $('.displayInfo').append("<p>" + $('#lName').val() + "</p>");

  $('table').append('<tr><td>' + $('#fName').val() + '</td></tr>');

  console.log($('.inputF').val());
}
