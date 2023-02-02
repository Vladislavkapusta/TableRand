

let arr = [];







function foo() { alert('hello!'); };

function RandTable() {
    let s = 0;
var t = "<table>"
for (var i = 0; i < 5; i++) {
t += "<tr>";
for (var j = 0; j < 6; j++) {
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
function foo() { 
    document.body.innerHTML = '';
    arr.push(Math.floor(Math.random() * 100))
    document.write(`<button id="clickMe" onclick="foo()">Добавить число</button>`); 
    document.write(RandTable()); 
};
