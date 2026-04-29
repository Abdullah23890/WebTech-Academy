function sendWhatsApp() {
    const name    = document.getElementById('cName').value.trim();
    const phone   = document.getElementById('cPhone').value.trim();
    const course  = document.getElementById('cCourse').value;
    const msg     = document.getElementById('cMsg').value.trim();

    if (!name || !phone || !msg) {
      alert('Please fill in your Name, Phone, and Message before sending.');
      return;
    }

    const text = `*Web Tech Academy – Inquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Course:* ${course || 'Not specified'}\n*Message:* ${msg}`;
    const url  = `https://wa.me/923333983684?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });