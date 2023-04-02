var greetingLabel = document.getElementById("greeting");
var hoursLabel = document.getElementById("hours");
var minutesLabel = document.getElementById("minutes");
var amPmLabel = document.getElementById("am/pm");
var totalMinutes = 11 * 60; // Start at 12:00 a.m. (11 * 60 = 660 minutes)
setInterval(setTime, 1000);

function setTime() {
    ++totalMinutes;
    minutesLabel.innerHTML = pad(totalMinutes % 60);
    hoursLabel.innerHTML = pad(parseInt(totalMinutes / 60) % 12 + 1); // Add 1 to start at 12

    // Check if hours is greater than or equal to 12
    if (parseInt(hoursLabel.innerHTML) >= 12) {
        amPmLabel.innerHTML = "p.m.";
    } else {
        amPmLabel.innerHTML = "a.m.";
    }

    // Update greeting label
    if (parseInt(hoursLabel.innerHTML) <= 12) {
        greetingLabel.innerHTML = "Good Morning";
    } else if (parseInt(hoursLabel.innerHTML) >= 12 && parseInt(hoursLabel.innerHTML) < 6) {
        greetingLabel.innerHTML = "Good Afternoon";
    }

    // Check if total hours is greater than or equal to 12, and reset total minutes to 0
    if (parseInt(hoursLabel.innerHTML) >= 12 && totalMinutes % 1440 == 0) {
        totalMinutes = 0;
    }
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}

function saveData() {
    const data = document.getElementById("input-data").value;
    localStorage.setItem("savedData", data);

    const selectedImage = document.querySelector('.carousel-item.active img');
    // simpan URL gambar ke dalam variabel
    const imageUrl = selectedImage.src;
    // tampilkan URL gambar di halaman lain dengan menggunakan localStorage
    localStorage.setItem('selectedImage', imageUrl);

    window.location.href = "menu.html";
}

const savedData = localStorage.getItem("savedData");
if (savedData) {
    document.getElementById("saved-data").textContent = savedData;
} else {
    document.getElementById("saved-data").textContent = "Tidak ada data yang disimpan";
}

// dapatkan URL gambar dari localStorage
const selectedImage = localStorage.getItem('selectedImage');

// set URL gambar ke dalam elemen img di halaman ini
const selectedImageElement = document.getElementById('selected-image');
selectedImageElement.src = selectedImage;