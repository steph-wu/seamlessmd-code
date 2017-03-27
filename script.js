var patientData = document.getElementById('patientData');
var patientConditions = document.getElementById('patientConditions');

patientData.innerHTML =
  "Name of patient: " + patient.name[0].given + " " + patient.name[0].family + "<br />" +
  "Organization name: " + patient.managingOrganization.display + "<br />" +
  "Gender: " + patient.gender + "<br />" +
  "Number of conditions they have: " + patient.conditions.length + "<br />" +
  "List of all conditions:";

patient.conditions.forEach(function(condition) {
  patientConditions.innerHTML += "<li>" + condition + "</li>";
});
