// document.body.innerHTML = "";

// let nr = []
// for (i = 0; i<5; i++){
// nr.push([Math.floor(Math.random()*100)],[Math.floor(Math.random()*100)],
// [Math.floor(Math.random()*100)],[Math.floor(Math.random()*100)],[Math.floor(Math.random()*100)])
// }

// let table = document.querySelector('#table');

// for (let subArr of nr) {
// let tr = document.createElement('tr');

// for (let elem of subArr) {
// let td = document.createElement('td');
// td.textContent = elem;
// tr.appendChild(td);
// }

// table.appendChild(tr);
// }


function RandTable(strok, stolb) {
let arr = [];
let s = 0;
for (i = 0; i < strok * stolb; i++) {
arr.push(Math.floor(Math.random() * 100))
}
var t = "<table>"
for (var i = 0; i < stolb; i++) {
t += "<tr>";
for (var j = 0; j < strok; j++) {
if (arr[s] < 50) {
t += "<td>" + arr[s] + "</td>";
} else {
t += `<td style="
background-color: red;
">` + arr[s] + "</td>";
}

s++
}

t += "</tr>";
}
return t + "</table>";
}
document.write(RandTable(6, 5));
