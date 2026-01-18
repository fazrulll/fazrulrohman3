function hitung() {
  let skor = 0;

  let q1 = document.querySelector('input[name="q1"]:checked');
  let q2 = document.querySelector('input[name="q2"]:checked');
  let q3 = document.querySelector('input[name="q3"]:checked');
  let q4 = document.querySelector('input[name="q4"]:checked');
  let q5 = document.querySelector('input[name="q5"]:checked');

  if (!q1 || !q2 || !q3 || !q4 || !q5) {
    alert("Jawab semua soal dulu bro!");
    return;
  }

  skor += parseInt(q1.value);
  skor += parseInt(q2.value);
  skor += parseInt(q3.value);
  skor += parseInt(q4.value);
  skor += parseInt(q5.value);

  if (skor >= 60) {
    document.getElementById("hasil").innerHTML =
      "Skor kamu: " + skor + "<br><b>LULUS</b>";
  } else {
    document.getElementById("hasil").innerHTML =
      "Skor kamu: " + skor + "<br><b>TIDAK LULUS</b>";
  }
}

function ulang() {
  document.getElementById("Quiz").reset();
  document.getElementById("hasil").innerHTML = "";
}
