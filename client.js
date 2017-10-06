$(document).ready(onReady);

function onReady() {
$('#submitBtn').on('click', buttonClicked);

}

var total = 0;
function buttonClicked() {
  console.log('in buttonClicked');
  $('.displayInfo').append("<p>" + $('#fName').val() + "</p>");
  $('.displayInfo').append("<p>" + $('#lName').val() + "</p>");
  
  console.log($('.inputF').val());
}
