let extraPerDay = 0;
let tollTag = document.getElementById("tollTag").checked;
if (tollTag == true) {
 extraPerDay += 3.95;
}
let gps = document.getElementById("gps").checked;
if (gps == true) {
 extraPerDay += 4.95;
}
let roadside = document.getElementById("roadside").checked;
if (roadside == true) {
 extraPerDay += 2.95;
}