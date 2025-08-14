const form = document.getElementById('inquiryForm');
const msg = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      msg.classList.remove('hidden');
      form.reset();
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  })
  .catch(() => alert('Oops! Could not send your inquiry.'));
});
