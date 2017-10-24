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

function addTableRow() { //trying data-salary
  $('table').append('<tr data-salary="' + $('#salary').val() + 'class="empRow"><td>' + $('#fName').val() + '</td><td>' +
  $('#lName').val() + '</td><td>'  + $('#iDNum').val() + '</td><td>' +
  $('#jobTitle').val() + '</td><td class="salaryData">$ ' + $('#salary').val() +
  '<td><input type="checkbox" id="myBox">'+ '</td></tr>');
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
  //store sum of all checkboxes checked salary values
  var subtractSal = parseInt($('input:checkbox:checked').parent().parent().data('salary'));
  //divide the above by 12 for monthly salaries
  var subMonthSal = Math.round(subtractSal / 12);
  total -= subMonthSal;
  $('#monthAvg').text(' $' + total);
  $('input:checkbox:checked').parent().parent().remove();


}
