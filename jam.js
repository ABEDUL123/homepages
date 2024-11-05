function updateDateAndTime() {
  const waktu = new Date();

  // Format waktu dan tanggal dalam bahasa Indonesia
  const waktuSekarang = waktu.toLocaleTimeString("id-ID");
  const tanggalSekarang = waktu.toLocaleDateString("id-ID");

  // Menampilkan waktu dan tanggal di elemen dengan ID #date-and-time
  document.querySelector("#date-and-time").innerHTML =
    tanggalSekarang + " " + waktuSekarang;
}

// Memanggil fungsi updateDateAndTime setiap 1000 ms (1 detik)
setInterval(updateDateAndTime, 1000);
