const form = document.getElementById("incidentForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = document.getElementById("incidentDescription").value;
  const image = document.getElementById("incidentImage").files[0];

  if (description && image) {
    alert("Incident reported successfully!");
  } else {
    alert("Please fill in all fields.");
  }
});
