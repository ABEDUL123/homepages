function sendMail() {
  // Ambil nilai dari form
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Regex untuk validasi email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validasi email
  if (!emailRegex.test(params.email)) {
    alert("Format email tidak valid!"); // Tampilkan pesan kesalahan
    return; // Hentikan eksekusi fungsi jika email tidak valid
  }

  // Kirim email jika valid
  emailjs
    .send("service_81aqzr8", "template_pggug05", params)
    .then((res) => {
      console.log(res);
      alert("Your Message Sent Successfully!");
    })
    .catch((err) => console.log(err));
}
