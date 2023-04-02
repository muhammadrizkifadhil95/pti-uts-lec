// // Inisialisasi progress bar
// var totalProgress = 100;
// var elem = document.getElementById("myBar");
// elem.style.width = totalProgress + "%";

// // Function untuk mengurangi progress bar
// function decreaseProgress() {
//     if (totalProgress <= 0) {
//         clearInterval(progressInterval);
//         return;
//     }
//     totalProgress -= 5;
//     elem.style.width = totalProgress + "%";


// }
// const progressBars = document.querySelectorAll('.progress-bar');
//         const intervals = [];
//         const totalProgress = [100, 100, 100, 100];

//         // set progress bar width
//         progressBars.forEach((bar, index) => {
//             bar.style.width = totalProgress[index] + '%';
//         });

//         // function to decrease progress bar
//         function decreaseProgress(index) {
//             if (totalProgress[index] <= 0) {
//                 clearInterval(intervals[index]);
//                 return;
//             }
//             totalProgress[index] -= 10;
//             progressBars[index].style.width = totalProgress[index] + "%";
//         }

//         // set interval to decrease progress bar
//         intervals.push(setInterval(() => decreaseProgress(0), 3000));
//         intervals.push(setInterval(() => decreaseProgress(1), 3000));
//         intervals.push(setInterval(() => decreaseProgress(2), 3000));
//         intervals.push(setInterval(() => decreaseProgress(3), 3000));

//         function addProgress(index) {
//             if (totalProgress[index] <= 0) {
//                 clearInterval(intervals[index]);
//             }
//             totalProgress[index] += 10;
//             progressBars[index].style.width = totalProgress[index] + "%";
//         }


const progressBars = document.querySelectorAll('.progress-bar');
const intervals = [];
const totalProgress = [100, 100, 100, 100];
let level = 0;
const levelLabel = document.getElementById("levelLabel");
// set progress bar width
progressBars.forEach((bar, index) => {
    bar.style.width = totalProgress[index] + '%';
});

// function to decrease progress bar
function decreaseProgress(index) {
    if (totalProgress[index] <= 0) {
        clearInterval(intervals[index]);
        return;
    }

    totalProgress[index] -= 10;
    progressBars[index].style.width = totalProgress[index] + "%";


}

// set interval to decrease progress bar
intervals.push(setInterval(() => decreaseProgress(0), 6000));
intervals.push(setInterval(() => decreaseProgress(1), 6000));
intervals.push(setInterval(() => decreaseProgress(2), 6000));
intervals.push(setInterval(() => decreaseProgress(3), 6000));

function addProgress(index) {
    if (totalProgress[index] <= 0) {
        clearInterval(intervals[index]);
    }
    totalProgress[index] += 10;
    progressBars[index].style.width = totalProgress[index] + "%";
}

function mainProgress(index) {
    level++;
    levelLabel.innerHTML = `Level ${level}`;
    if (totalProgress[index] <= 0) {
        clearInterval(intervals[index]);
    }
    totalProgress[index] += 10;
    progressBars[index].style.width = totalProgress[index] + "%";
}