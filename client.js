$(document).ready(onReady);

function onReady() {
$('#submitBtn').on('click', buttonClicked);

}

var total = 0;
function buttonClicked() {
  console.log('in buttonClicked');
  //$('.displayInfo').append(.inputF)
  console.log($('.inputF').val());
}
