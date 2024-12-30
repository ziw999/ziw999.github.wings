
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
 
  let name = document.getElementById('tel').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
 
  // Здесь будет код для отправки данных на сервер

  function sendData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('result').innerHTML = data;
    });
}
 
  alert('Сообщение отправлено!');
  this.reset();
});





