<script>
  // Initialize EmailJS with your public key
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

  document.getElementById('safetyReportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const reportType = document.getElementById('reportType').value;
    const description = document.getElementById('description').value.trim();

    if (name && email && reportType && description) {
      const templateParams = {
        name: name,
        email: email,
        report_type: reportType,
        description: description
      };

      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
          alert('Thank you, ' + name + '! Your safety report has been submitted successfully.');
          document.getElementById('safetyReportForm').reset();
        }, function(error) {
          console.error('EmailJS error:', error);
          alert('Oops! Something went wrong. Please try again later.');
        });
    } else {
      alert('Please fill out all fields before submitting.');
    }
  });
</script>
