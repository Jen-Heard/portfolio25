function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const sideMenuCheckbox = document.getElementById('side-menu');
    const nav = document.querySelector('.nav');
    const hambLabel = document.querySelector('.hamb');

    document.addEventListener('click', function(event) {
      if (!nav.contains(event.target) && !sideMenuCheckbox.contains(event.target) && !hambLabel.contains(event.target)) {
        sideMenuCheckbox.checked = false;
      }
    });
  
    hambLabel.addEventListener('click', function(event) {
      if (sideMenuCheckbox.checked) {
        sideMenuCheckbox.checked = false;
      }
    });
  });
      
  function showMore() {
    var hiddenArticles = document.querySelectorAll('#portfolio .hidden1');
    hiddenArticles.forEach(function(article) {
      article.classList.remove('hidden1');
    });
    document.getElementById('see-more').style.display = 'none'; 
  }
  
  //   document.getElementById('contact-form').addEventListener('submit', function(event) {
  //     event.preventDefault();
  
  //     const name = document.getElementById('name').value;
  //     const email = document.getElementById('email').value;
  //     const services = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value);
  //     const message = document.getElementById('message').value;
  
  //     const mailtoLink = `mailto:jenlheard@icloud.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AServices: ${services.join(', ')}%0D%0AMessage: ${message}`;
      
  //     window.location.href = mailtoLink;
  // });

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const services = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value);
    const message = document.getElementById('message').value;
 
    const templateParams = {
       name: name,
       email: email,
       services: services.join(', '),
       message: message
    };
 
    emailjs.send('service_y4rwqtp', 'template_w8xgmyi', templateParams)
       .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
       }, function(error) {
          console.log('FAILED...', error);
       });
 });