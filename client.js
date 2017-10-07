$(document).ready(onReady);

function onReady() {
  $('#submitBtn').on('click', submitClicked);
  $('#remove').on('click', removeEmployee);
}

//monthly costs tracker
var total = 0;

function submitClicked() {
  console.log('in submitClicked');
  addTableRow();
  calculateTotal();
  resetFields();
}

function addTableRow() {
  $('table').append('<tr class="empRow"><td>' + $('#fName').val() + '</td><td>' +
  $('#lName').val() + '</td><td>'  + $('#iDNum').val() + '</td><td>' +
  $('#jobTitle').val() + '</td><td>$ ' + $('#salary').val() + '</td></tr>');
}

function calculateTotal() {
  var empSalary = parseInt($('#salary').val());
  var empMonthCost = Math.round(empSalary / 12);
  total += empMonthCost;
  $('#monthAvg').text(' $' + total);
}

function resetFields() {
  $('.inputs').val('');
}

function removeEmployee() {
$('.empRow:last').remove();

}
